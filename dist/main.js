!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){e.exports=function(e){return e&&"Widget"===e.type}},function(e,t){e.exports="2"},function(e,t,n){var r=n(1);e.exports=function(e){return e&&"VirtualNode"===e.type&&e.version===r}},function(e,t){e.exports=function(e){return e&&"Thunk"===e.type}},function(e,t){e.exports=function(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&"VirtualText"===e.type&&e.version===r}},function(e,t){var n=Array.isArray,r=Object.prototype.toString;e.exports=n||function(e){return"[object Array]"===r.call(e)}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(1);function o(e,t,n){this.type=Number(e),this.vNode=t,this.patch=n}o.NONE=0,o.VTEXT=1,o.VNODE=2,o.WIDGET=3,o.PROPS=4,o.ORDER=5,o.INSERT=6,o.REMOVE=7,o.THUNK=8,e.exports=o,o.prototype.version=r,o.prototype.type="VirtualPatch"},function(e,t,n){var r=n(2),o=n(5),i=n(0),u=n(3);function a(e,t){var n=e.vnode;if(n||(n=e.vnode=e.render(t)),!(r(n)||o(n)||i(n)))throw new Error("thunk did not return a valid node");return n}e.exports=function(e,t){var n=e,r=t;u(t)&&(r=a(t,e));u(e)&&(n=a(e,null));return{a:n,b:r}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&null!==e}},function(e,t,n){(function(t){var r,o=void 0!==t?t:"undefined"!=typeof window?window:{},i=n(31);"undefined"!=typeof document?r=document:(r=o["__GLOBAL_DOCUMENT_CACHE@4"])||(r=o["__GLOBAL_DOCUMENT_CACHE@4"]=i),e.exports=r}).call(this,n(7))},function(e,t,n){var r=n(11),o=n(13),i=n(2),u=n(5),a=n(0),s=n(9);e.exports=function e(t,n){var c=n&&n.document||r;var l=n?n.warn:null;t=s(t).a;if(a(t))return t.init();if(u(t))return c.createTextNode(t.text);if(!i(t))return l&&l("Item is not a valid virtual dom node",t),null;var p=null===t.namespace?c.createElement(t.tagName):c.createElementNS(t.namespace,t.tagName);var f=t.properties;o(p,f);var d=t.children;for(var h=0;h<d.length;h++){var v=e(d[h],n);v&&p.appendChild(v)}return p}},function(e,t,n){var r=n(10),o=n(4);function i(e,t,n,r){if(r){var i=r[t];if(o(i))i.unhook&&i.unhook(e,t,n);else if("attributes"===t)for(var u in i)e.removeAttribute(u);else if("style"===t)for(var a in i)e.style[a]="";else e[t]="string"==typeof i?"":null}}function u(e,t,n,o,i){var u=n?n[o]:void 0;if("attributes"!==o)if(u&&r(u)&&a(u)!==a(i))e[o]=i;else{r(e[o])||(e[o]={});var s="style"===o?"":void 0;for(var c in i){var l=i[c];e[o][c]=void 0===l?s:l}}else for(var p in i){var f=i[p];void 0===f?e.removeAttribute(p):e.setAttribute(p,f)}}function a(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function(e,t,n){for(var a in t){var s=t[a];void 0===s?i(e,a,s,n):o(s)?(i(e,a,s,n),s.hook&&s.hook(e,a,n?n[a]:void 0)):r(s)?u(e,t,n,a,s):e[a]=s}}},function(e,t,n){const r=n(15),o=n(26),i=n(29),u=n(35),a={HOME:"/",OTHER:"/other"};let s={model:{page:a.HOME,initialData:"Initial data...",input:"",items:[{id:1,task:"Get milk."},{id:2,task:"Get eggs."},{id:3,task:"Get chocolate."},{id:4,task:"Get bread."}],contentOne:null,contentTwo:null},command:{request:{url:"https://swapi.co/api/people/1/"},successMsg:e=>({type:c.GET_INITIAL_DATA_SUCCESS,payload:e}),errorMsg:e=>({type:c.GET_INITIAL_DATA_ERROR,payload:e})}};const c={LOCATION_CHANGE:"LOCATION_CHANGE",INPUT:"INPUT",SAVE:"SAVE",DELETE:"DELETE",GET_INITIAL_DATA_SUCCESS:"GET_INITIAL_DATA_SUCCESS",GET_INITIAL_DATA_ERROR:"GET_INITIAL_DATA_ERROR",GET_DATA_ONE:"GET_DATA_ONE",GET_DATA_ONE_SUCCESS:"GET_DATA_ONE_SUCCESS",GET_DATA_ONE_ERROR:"GET_DATA_ONE_ERROR",GET_DATA_TWO:"GET_DATA_TWO",GET_DATA_TWO_SUCCESS:"GET_DATA_TWO_SUCCESS",GET_DATA_TWO_ERROR:"GET_DATA_TWO_ERROR"};function l(e){return console.log("locationChangeMsg",e),{type:c.LOCATION_CHANGE,path:e}}function p(e,t){return r("div",[r("button",{onclick:()=>{console.log("button clicked"),e(l("/"))}},"HOME PAGE"),r("button",{onclick:()=>{console.log("button clicked"),e(l("/other"))}},"OTHER PAGE"),r("br"),r("br")])}function f(e,t){if(null===t)return;let n=t.request;fetch(n.url,n.headers,n.body).then(e=>e.json()).then(n=>{e(t.successMsg(n))}).catch(n=>{e(t.errorMsg(n))})}!function(e,t,n,r){console.log(e);const{pathname:a}=window.location;console.log(a);const s=l(a);let c=t(s,e.model),p=e.command;p&&f(v,p);let d=n(v,c);console.log(d);let h=u(d);function v(e){const r=t(e,c),u=r.constructor===Array;c=u?r[0]:r,f(v,u?r[1]:null);const a=n(v,c),s=o(d,a);h=i(h,s),d=a}console.log(h),r.appendChild(h),window.addEventListener("popstate",()=>{console.log("POPSTATE");const{pathname:e}=window.location;v(l(e))})}(s,function(e,t){switch(e.type){case c.LOCATION_CHANGE:{console.log("UPDATE MSG: ",e);let n=t;return n.page=e.path,history.pushState("","",e.path),n}case c.INPUT:{let n=t;return n.input=e.payload,n}case c.SAVE:{let e=t,n=e.items.length>0?lastId=e.items[e.items.length-1].id+1:1;return e.items.push({id:n,task:e.input}),e.input="",e}case c.DELETE:{let n=t;return n.items=n.items.filter(t=>t.id!=e.payload),n}case c.GET_INITIAL_DATA_SUCCESS:{let n=t;return n.initialData=JSON.stringify(e.payload),n}case c.GET_INITIAL_DATA_ERROR:{let n=t;return n.initialData=e.payload,n}case c.GET_DATA_ONE:{let e=t;return e.contentOne="Loading...",[e,{request:{url:"https://jsonplaceholder.typicode.com/posts/1"},successMsg:e=>({type:c.GET_DATA_ONE_SUCCESS,payload:e}),errorMsg:e=>({type:c.GET_DATA_ONE_ERROR,payload:e})}]}case c.GET_DATA_ONE_SUCCESS:{let n=t;return n.contentOne=e.payload.body,n}case c.GET_DATA_ONE_ERROR:{let n=t;return n.contentOne=e.payload,n}case c.GET_DATA_TWO:{let e=t;return e.contentTwo="Loading...",[e,{request:{url:"https://jsonplaceholder.typicode.com/posts/2"},successMsg:e=>({type:c.GET_DATA_TWO_SUCCESS,payload:e}),errorMsg:e=>({type:c.GET_DATA_TWO_ERROR,payload:e})}]}case c.GET_DATA_TWO_SUCCESS:{let n=t;return n.contentTwo=e.payload.body,n}case c.GET_DATA_TWO_ERROR:{let n=t;return n.contentTwo=e.payload,n}}},function(e,t){switch(console.log("view()"),console.log("model.page:",t.page),t.page){case a.HOME:return console.log("PAGES.HOME"),function(e,t){return r("div",[p(e),r("div",[t.initialData]),r("br"),r("button",{onclick:()=>{e({type:c.GET_DATA_ONE})}},"Get data one"),r("div",[t.contentOne]),r("br"),r("input",{value:t.input,onkeyup:t=>{"Enter"==t.key?e({type:c.SAVE}):e({type:c.INPUT,payload:t.target.value})}}),r("span",[t.input]),function(){for(var n=[],o=0;o<t.items.length;o++){var i=t.items[o];n.push(r("tr",{attributes:{"data-id":i.id},onclick:t=>{e({type:c.DELETE,payload:t.target.parentNode.attributes["data-id"].value})}},[r("td",[i.task])]))}return r("table",[r("tbody",n)])}()])}(e,t);case a.OTHER:return console.log("PAGES.OTHER"),function(e,t){return r("div",[p(e),r("button",{onclick:()=>{e({type:c.GET_DATA_TWO})}},"Get data two"),r("div",[t.contentTwo])])}(e,t)}},document.getElementById("app"))},function(e,t,n){var r=n(16);e.exports=r},function(e,t,n){"use strict";var r=n(6),o=n(17),i=n(18),u=n(2),a=n(5),s=n(0),c=n(4),l=n(3),p=n(19),f=n(21),d=n(22);function h(e){return u(e)||a(e)||s(e)||l(e)}function v(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}e.exports=function(e,t,n){var u,a,s,l,y=[];!n&&(E=t,"string"==typeof E||r(E)||h(E))&&(n=t,a={});var E;u=p(e,a=a||t||{}),a.hasOwnProperty("key")&&(s=a.key,a.key=void 0);a.hasOwnProperty("namespace")&&(l=a.namespace,a.namespace=void 0);"INPUT"!==u||l||!a.hasOwnProperty("value")||void 0===a.value||c(a.value)||(a.value=f(a.value));(function(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];if(c(n))continue;"ev-"===t.substr(0,3)&&(e[t]=d(n))}})(a),null!=n&&function e(t,n,o,u){if("string"==typeof t)n.push(new i(t));else if("number"==typeof t)n.push(new i(String(t)));else if(h(t))n.push(t);else{if(!r(t)){if(null==t)return;throw s={foreignObject:t,parentVnode:{tagName:o,properties:u}},(c=new Error).type="virtual-hyperscript.unexpected.virtual-element",c.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+v(s.foreignObject)+".\nThe parent vnode is:\n"+v(s.parentVnode),c.foreignObject=s.foreignObject,c.parentVnode=s.parentVnode,c}for(var a=0;a<t.length;a++)e(t[a],n,o,u)}var s,c}(n,y,u,a);return new o(u,a,y,s,l)}},function(e,t,n){var r=n(1),o=n(2),i=n(0),u=n(3),a=n(4);e.exports=l;var s={},c=[];function l(e,t,n,r,l){this.tagName=e,this.properties=t||s,this.children=n||c,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof l?l:null;var p,f=n&&n.length||0,d=0,h=!1,v=!1,y=!1;for(var E in t)if(t.hasOwnProperty(E)){var T=t[E];a(T)&&T.unhook&&(p||(p={}),p[E]=T)}for(var _=0;_<f;_++){var g=n[_];o(g)?(d+=g.count||0,!h&&g.hasWidgets&&(h=!0),!v&&g.hasThunks&&(v=!0),y||!g.hooks&&!g.descendantHooks||(y=!0)):!h&&i(g)?"function"==typeof g.destroy&&(h=!0):!v&&u(g)&&(v=!0)}this.count=f+d,this.hasWidgets=h,this.hasThunks=v,this.hooks=p,this.descendantHooks=y}l.prototype.version=r,l.prototype.type="VirtualNode"},function(e,t,n){var r=n(1);function o(e){this.text=String(e)}e.exports=o,o.prototype.version=r,o.prototype.type="VirtualText"},function(e,t,n){"use strict";var r=n(20),o=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,i=/^\.|#/;e.exports=function(e,t){if(!e)return"DIV";var n,u,a,s,c=!t.hasOwnProperty("id"),l=r(e,o),p=null;i.test(l[1])&&(p="DIV");for(s=0;s<l.length;s++)(u=l[s])&&(a=u.charAt(0),p?"."===a?(n=n||[]).push(u.substring(1,u.length)):"#"===a&&c&&(t.id=u.substring(1,u.length)):p=u);n&&(t.className&&n.push(t.className),t.className=n.join(" "));return t.namespace?p:p.toUpperCase()}},function(e,t){var n,r,o;
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
e.exports=(r=String.prototype.split,o=/()??/.exec("")[1]===n,function(e,t,i){if("[object RegExp]"!==Object.prototype.toString.call(t))return r.call(e,t,i);var u,a,s,c,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),f=0;for(t=new RegExp(t.source,p+"g"),e+="",o||(u=new RegExp("^"+t.source+"$(?!\\s)",p)),i=i===n?-1>>>0:i>>>0;(a=t.exec(e))&&!((s=a.index+a[0].length)>f&&(l.push(e.slice(f,a.index)),!o&&a.length>1&&a[0].replace(u,function(){for(var e=1;e<arguments.length-2;e++)arguments[e]===n&&(a[e]=n)}),a.length>1&&a.index<e.length&&Array.prototype.push.apply(l,a.slice(1)),c=a[0].length,f=s,l.length>=i));)t.lastIndex===a.index&&t.lastIndex++;return f===e.length?!c&&t.test("")||l.push(""):l.push(e.slice(f)),l.length>i?l.slice(0,i):l})},function(e,t,n){"use strict";function r(e){if(!(this instanceof r))return new r(e);this.value=e}e.exports=r,r.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},function(e,t,n){"use strict";var r=n(23);function o(e){if(!(this instanceof o))return new o(e);this.value=e}e.exports=o,o.prototype.hook=function(e,t){r(e)[t.substr(3)]=this.value},o.prototype.unhook=function(e,t){r(e)[t.substr(3)]=void 0}},function(e,t,n){"use strict";n(24)("ev-store","7");var r="__EV_STORE_KEY@7";e.exports=function(e){var t=e[r];t||(t=e[r]={});return t}},function(e,t,n){"use strict";var r=n(25);e.exports=function(e,t,n){var o="__INDIVIDUAL_ONE_VERSION_"+e,i=r(o+"_ENFORCE_SINGLETON",t);if(i!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+i+" installed.\nThis means you cannot install version "+t);return r(o,n)}},function(e,t,n){"use strict";(function(t){var n="undefined"!=typeof window?window:void 0!==t?t:{};e.exports=function(e,t){if(e in n)return n[e];return n[e]=t,t}}).call(this,n(7))},function(e,t,n){var r=n(27);e.exports=r},function(e,t,n){var r=n(6),o=n(8),i=n(2),u=n(5),a=n(0),s=n(3),c=n(9),l=n(28);function p(e,t){var n={a:e};return f(e,t,n,0),n}function f(e,t,n,r){if(e!==t){var c=n[r],p=!1;if(s(e)||s(t))h(e,t,n,r);else if(null==t)a(e)||(d(e,n,r),c=n[r]),c=E(c,new o(o.REMOVE,e,t));else if(i(t))if(i(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var T=l(e.properties,t.properties);T&&(c=E(c,new o(o.PROPS,e,T))),c=function(e,t,n,r,u){for(var a=e.children,s=function(e,t){var n=y(t),r=n.keys,o=n.free;if(o.length===t.length)return{children:t,moves:null};var i=y(e),u=i.keys;if(i.free.length===e.length)return{children:t,moves:null};for(var a=[],s=0,c=o.length,l=0,p=0;p<e.length;p++){var f,d=e[p];d.key?r.hasOwnProperty(d.key)?(f=r[d.key],a.push(t[f])):(f=p-l++,a.push(null)):s<c?(f=o[s++],a.push(t[f])):(f=p-l++,a.push(null))}for(var h=s>=o.length?t.length:o[s],E=0;E<t.length;E++){var T=t[E];T.key?u.hasOwnProperty(T.key)||a.push(T):E>=h&&a.push(T)}for(var _,g=a.slice(),O=0,A=[],m=[],N=0;N<t.length;){var k=t[N];for(_=g[O];null===_&&g.length;)A.push(v(g,O,null)),_=g[O];_&&_.key===k.key?(O++,N++):k.key?(_&&_.key&&r[_.key]!==N+1?(A.push(v(g,O,_.key)),(_=g[O])&&_.key===k.key?O++:m.push({key:k.key,to:N})):m.push({key:k.key,to:N}),N++):_&&_.key&&A.push(v(g,O,_.key))}for(;O<g.length;)_=g[O],A.push(v(g,O,_&&_.key));if(A.length===l&&!m.length)return{children:a,moves:null};return{children:a,moves:{removes:A,inserts:m}}}(a,t.children),c=s.children,l=a.length,p=c.length,d=l>p?l:p,h=0;h<d;h++){var T=a[h],_=c[h];u+=1,T?f(T,_,n,u):_&&(r=E(r,new o(o.INSERT,null,_))),i(T)&&T.count&&(u+=T.count)}s.moves&&(r=E(r,new o(o.ORDER,e,s.moves)));return r}(e,t,n,c,r)}else c=E(c,new o(o.VNODE,e,t)),p=!0;else c=E(c,new o(o.VNODE,e,t)),p=!0;else u(t)?u(e)?e.text!==t.text&&(c=E(c,new o(o.VTEXT,e,t))):(c=E(c,new o(o.VTEXT,e,t)),p=!0):a(t)&&(a(e)||(p=!0),c=E(c,new o(o.WIDGET,e,t)));c&&(n[r]=c),p&&d(e,n,r)}}function d(e,t,n){!function e(t,n,r){if(i(t)){if(t.hooks&&(n[r]=E(n[r],new o(o.PROPS,t,function(e){var t={};for(var n in e)t[n]=void 0;return t}(t.hooks)))),t.descendantHooks||t.hasThunks)for(var u=t.children,a=u.length,c=0;c<a;c++){var l=u[c];e(l,n,r+=1),i(l)&&l.count&&(r+=l.count)}}else s(t)&&h(t,null,n,r)}(e,t,n),function e(t,n,r){if(a(t))"function"==typeof t.destroy&&(n[r]=E(n[r],new o(o.REMOVE,t,null)));else if(i(t)&&(t.hasWidgets||t.hasThunks))for(var u=t.children,c=u.length,l=0;l<c;l++){var p=u[l];e(p,n,r+=1),i(p)&&p.count&&(r+=p.count)}else s(t)&&h(t,null,n,r)}(e,t,n)}function h(e,t,n,r){var i=c(e,t),u=p(i.a,i.b);(function(e){for(var t in e)if("a"!==t)return!0;return!1})(u)&&(n[r]=new o(o.THUNK,null,u))}function v(e,t,n){return e.splice(t,1),{from:t,key:n}}function y(e){for(var t={},n=[],r=e.length,o=0;o<r;o++){var i=e[o];i.key?t[i.key]=o:n.push(o)}return{keys:t,free:n}}function E(e,t){return e?(r(e)?e.push(t):e=[e,t],e):t}e.exports=p},function(e,t,n){var r=n(10),o=n(4);function i(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function e(t,n){var u;for(var a in t){a in n||((u=u||{})[a]=void 0);var s=t[a],c=n[a];if(s!==c)if(r(s)&&r(c))if(i(c)!==i(s))(u=u||{})[a]=c;else if(o(c))(u=u||{})[a]=c;else{var l=e(s,c);l&&((u=u||{})[a]=l)}else(u=u||{})[a]=c}for(var p in n)p in t||((u=u||{})[p]=n[p]);return u}},function(e,t,n){var r=n(30);e.exports=r},function(e,t,n){var r=n(11),o=n(6),i=n(12),u=n(32),a=n(33);function s(e,t,n){var o=function(e){var t=[];for(var n in e)"a"!==n&&t.push(Number(n));return t}(t);if(0===o.length)return e;var i=u(e,t.a,o),a=e.ownerDocument;n.document||a===r||(n.document=a);for(var s=0;s<o.length;s++){var l=o[s];e=c(e,i[l],t[l],n)}return e}function c(e,t,n,r){if(!t)return e;var i;if(o(n))for(var u=0;u<n.length;u++)i=a(n[u],t,r),t===e&&(e=i);else i=a(n,t,r),t===e&&(e=i);return e}e.exports=function e(t,n,r){r=r||{};r.patch=r.patch&&r.patch!==e?r.patch:s;r.render=r.render||i;return r.patch(t,n,r)}},function(e,t){},function(e,t){var n={};function r(e,t,n){if(0===e.length)return!1;for(var r,o,i=0,u=e.length-1;i<=u;){if(o=e[r=(u+i)/2>>0],i===u)return o>=t&&o<=n;if(o<t)i=r+1;else{if(!(o>n))return!0;u=r-1}}return!1}function o(e,t){return e>t?1:-1}e.exports=function(e,t,i,u){return i&&0!==i.length?(i.sort(o),function e(t,o,i,u,a){u=u||{};if(t){r(i,a,a)&&(u[a]=t);var s=o.children;if(s)for(var c=t.childNodes,l=0;l<o.children.length;l++){a+=1;var p=s[l]||n,f=a+(p.count||0);r(i,a,f)&&e(c[l],p,i,u,a),a=f}}return u}(e,t,i,u,0)):{}}},function(e,t,n){var r=n(13),o=n(0),i=n(8),u=n(34);function a(e,t){"function"==typeof t.destroy&&o(t)&&t.destroy(e)}e.exports=function(e,t,n){var o=e.type,s=e.vNode,c=e.patch;switch(o){case i.REMOVE:return function(e,t){var n=e.parentNode;n&&n.removeChild(e);return a(e,t),null}(t,s);case i.INSERT:return function(e,t,n){var r=n.render(t,n);e&&e.appendChild(r);return e}(t,c,n);case i.VTEXT:return function(e,t,n,r){var o;if(3===e.nodeType)e.replaceData(0,e.length,n.text),o=e;else{var i=e.parentNode;o=r.render(n,r),i&&o!==e&&i.replaceChild(o,e)}return o}(t,0,c,n);case i.WIDGET:return function(e,t,n,r){var o,i=u(t,n);o=i?n.update(t,e)||e:r.render(n,r);var s=e.parentNode;s&&o!==e&&s.replaceChild(o,e);i||a(e,t);return o}(t,s,c,n);case i.VNODE:return function(e,t,n,r){var o=e.parentNode,i=r.render(n,r);o&&i!==e&&o.replaceChild(i,e);return i}(t,0,c,n);case i.ORDER:return function(e,t){for(var n,r,o,i=e.childNodes,u={},a=0;a<t.removes.length;a++)r=t.removes[a],n=i[r.from],r.key&&(u[r.key]=n),e.removeChild(n);for(var s=i.length,c=0;c<t.inserts.length;c++)o=t.inserts[c],n=u[o.key],e.insertBefore(n,o.to>=s++?null:i[o.to])}(t,c),t;case i.PROPS:return r(t,c,s.properties),t;case i.THUNK:return function(e,t){e&&t&&e!==t&&e.parentNode&&e.parentNode.replaceChild(t,e);return t}(t,n.patch(t,c,n));default:return t}}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(r(e)&&r(t))return"name"in e&&"name"in t?e.id===t.id:e.init===t.init;return!1}},function(e,t,n){var r=n(12);e.exports=r}]);