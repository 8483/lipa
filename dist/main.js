/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/browser-split/index.js":
/*!*********************************************!*\
  !*** ./node_modules/browser-split/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Cross-Browser Split 1.1.1\n * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>\n * Available under the MIT License\n * ECMAScript compliant, uniform cross-browser split method\n */\n\n/**\n * Splits a string into an array of strings using a regex or string separator. Matches of the\n * separator are not included in the result array. However, if `separator` is a regex that contains\n * capturing groups, backreferences are spliced into the result each time `separator` is matched.\n * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably\n * cross-browser.\n * @param {String} str String to split.\n * @param {RegExp|String} separator Regex or string to use for separating the string.\n * @param {Number} [limit] Maximum number of items to include in the result array.\n * @returns {Array} Array of substrings.\n * @example\n *\n * // Basic use\n * split('a b c d', ' ');\n * // -> ['a', 'b', 'c', 'd']\n *\n * // With limit\n * split('a b c d', ' ', 2);\n * // -> ['a', 'b']\n *\n * // Backreferences in result array\n * split('..word1 word2..', /([a-z]+)(\\d+)/i);\n * // -> ['..', 'word', '1', ' ', 'word', '2', '..']\n */\nmodule.exports = (function split(undef) {\n\n  var nativeSplit = String.prototype.split,\n    compliantExecNpcg = /()??/.exec(\"\")[1] === undef,\n    // NPCG: nonparticipating capturing group\n    self;\n\n  self = function(str, separator, limit) {\n    // If `separator` is not a regex, use `nativeSplit`\n    if (Object.prototype.toString.call(separator) !== \"[object RegExp]\") {\n      return nativeSplit.call(str, separator, limit);\n    }\n    var output = [],\n      flags = (separator.ignoreCase ? \"i\" : \"\") + (separator.multiline ? \"m\" : \"\") + (separator.extended ? \"x\" : \"\") + // Proposed for ES6\n      (separator.sticky ? \"y\" : \"\"),\n      // Firefox 3+\n      lastLastIndex = 0,\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      separator = new RegExp(separator.source, flags + \"g\"),\n      separator2, match, lastIndex, lastLength;\n    str += \"\"; // Type-convert\n    if (!compliantExecNpcg) {\n      // Doesn't need flags gy, but they don't hurt\n      separator2 = new RegExp(\"^\" + separator.source + \"$(?!\\\\s)\", flags);\n    }\n    /* Values for `limit`, per the spec:\n     * If undefined: 4294967295 // Math.pow(2, 32) - 1\n     * If 0, Infinity, or NaN: 0\n     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;\n     * If negative number: 4294967296 - Math.floor(Math.abs(limit))\n     * If other: Type-convert, then use the above rules\n     */\n    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1\n    limit >>> 0; // ToUint32(limit)\n    while (match = separator.exec(str)) {\n      // `separator.lastIndex` is not reliable cross-browser\n      lastIndex = match.index + match[0].length;\n      if (lastIndex > lastLastIndex) {\n        output.push(str.slice(lastLastIndex, match.index));\n        // Fix browsers whose `exec` methods don't consistently return `undefined` for\n        // nonparticipating capturing groups\n        if (!compliantExecNpcg && match.length > 1) {\n          match[0].replace(separator2, function() {\n            for (var i = 1; i < arguments.length - 2; i++) {\n              if (arguments[i] === undef) {\n                match[i] = undef;\n              }\n            }\n          });\n        }\n        if (match.length > 1 && match.index < str.length) {\n          Array.prototype.push.apply(output, match.slice(1));\n        }\n        lastLength = match[0].length;\n        lastLastIndex = lastIndex;\n        if (output.length >= limit) {\n          break;\n        }\n      }\n      if (separator.lastIndex === match.index) {\n        separator.lastIndex++; // Avoid an infinite loop\n      }\n    }\n    if (lastLastIndex === str.length) {\n      if (lastLength || !separator.test(\"\")) {\n        output.push(\"\");\n      }\n    } else {\n      output.push(str.slice(lastLastIndex));\n    }\n    return output.length > limit ? output.slice(0, limit) : output;\n  };\n\n  return self;\n})();\n\n\n//# sourceURL=webpack:///./node_modules/browser-split/index.js?");

/***/ }),

/***/ "./node_modules/ev-store/index.js":
/*!****************************************!*\
  !*** ./node_modules/ev-store/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar OneVersionConstraint = __webpack_require__(/*! individual/one-version */ \"./node_modules/individual/one-version.js\");\n\nvar MY_VERSION = '7';\nOneVersionConstraint('ev-store', MY_VERSION);\n\nvar hashKey = '__EV_STORE_KEY@' + MY_VERSION;\n\nmodule.exports = EvStore;\n\nfunction EvStore(elem) {\n    var hash = elem[hashKey];\n\n    if (!hash) {\n        hash = elem[hashKey] = {};\n    }\n\n    return hash;\n}\n\n\n//# sourceURL=webpack:///./node_modules/ev-store/index.js?");

/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :\n    typeof window !== 'undefined' ? window : {}\nvar minDoc = __webpack_require__(/*! min-document */ 0);\n\nvar doccy;\n\nif (typeof document !== 'undefined') {\n    doccy = document;\n} else {\n    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];\n\n    if (!doccy) {\n        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;\n    }\n}\n\nmodule.exports = doccy;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/global/document.js?");

/***/ }),

/***/ "./node_modules/individual/index.js":
/*!******************************************!*\
  !*** ./node_modules/individual/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/*global window, global*/\n\nvar root = typeof window !== 'undefined' ?\n    window : typeof global !== 'undefined' ?\n    global : {};\n\nmodule.exports = Individual;\n\nfunction Individual(key, value) {\n    if (key in root) {\n        return root[key];\n    }\n\n    root[key] = value;\n\n    return value;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/individual/index.js?");

/***/ }),

/***/ "./node_modules/individual/one-version.js":
/*!************************************************!*\
  !*** ./node_modules/individual/one-version.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Individual = __webpack_require__(/*! ./index.js */ \"./node_modules/individual/index.js\");\n\nmodule.exports = OneVersion;\n\nfunction OneVersion(moduleName, version, defaultValue) {\n    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;\n    var enforceKey = key + '_ENFORCE_SINGLETON';\n\n    var versionValue = Individual(enforceKey, version);\n\n    if (versionValue !== version) {\n        throw new Error('Can only have one copy of ' +\n            moduleName + '.\\n' +\n            'You already have version ' + versionValue +\n            ' installed.\\n' +\n            'This means you cannot install version ' + version);\n    }\n\n    return Individual(key, defaultValue);\n}\n\n\n//# sourceURL=webpack:///./node_modules/individual/one-version.js?");

/***/ }),

/***/ "./node_modules/is-object/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-object/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isObject(x) {\n\treturn typeof x === \"object\" && x !== null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-object/index.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/create-element.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/create-element.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createElement = __webpack_require__(/*! ./vdom/create-element.js */ \"./node_modules/virtual-dom/vdom/create-element.js\")\n\nmodule.exports = createElement\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/create-element.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/diff.js":
/*!******************************************!*\
  !*** ./node_modules/virtual-dom/diff.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var diff = __webpack_require__(/*! ./vtree/diff.js */ \"./node_modules/virtual-dom/vtree/diff.js\")\n\nmodule.exports = diff\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/diff.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/h.js":
/*!***************************************!*\
  !*** ./node_modules/virtual-dom/h.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var h = __webpack_require__(/*! ./virtual-hyperscript/index.js */ \"./node_modules/virtual-dom/virtual-hyperscript/index.js\")\n\nmodule.exports = h\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/h.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/patch.js":
/*!*******************************************!*\
  !*** ./node_modules/virtual-dom/patch.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var patch = __webpack_require__(/*! ./vdom/patch.js */ \"./node_modules/virtual-dom/vdom/patch.js\")\n\nmodule.exports = patch\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/patch.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/apply-properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/apply-properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! is-object */ \"./node_modules/is-object/index.js\")\nvar isHook = __webpack_require__(/*! ../vnode/is-vhook.js */ \"./node_modules/virtual-dom/vnode/is-vhook.js\")\n\nmodule.exports = applyProperties\n\nfunction applyProperties(node, props, previous) {\n    for (var propName in props) {\n        var propValue = props[propName]\n\n        if (propValue === undefined) {\n            removeProperty(node, propName, propValue, previous);\n        } else if (isHook(propValue)) {\n            removeProperty(node, propName, propValue, previous)\n            if (propValue.hook) {\n                propValue.hook(node,\n                    propName,\n                    previous ? previous[propName] : undefined)\n            }\n        } else {\n            if (isObject(propValue)) {\n                patchObject(node, props, previous, propName, propValue);\n            } else {\n                node[propName] = propValue\n            }\n        }\n    }\n}\n\nfunction removeProperty(node, propName, propValue, previous) {\n    if (previous) {\n        var previousValue = previous[propName]\n\n        if (!isHook(previousValue)) {\n            if (propName === \"attributes\") {\n                for (var attrName in previousValue) {\n                    node.removeAttribute(attrName)\n                }\n            } else if (propName === \"style\") {\n                for (var i in previousValue) {\n                    node.style[i] = \"\"\n                }\n            } else if (typeof previousValue === \"string\") {\n                node[propName] = \"\"\n            } else {\n                node[propName] = null\n            }\n        } else if (previousValue.unhook) {\n            previousValue.unhook(node, propName, propValue)\n        }\n    }\n}\n\nfunction patchObject(node, props, previous, propName, propValue) {\n    var previousValue = previous ? previous[propName] : undefined\n\n    // Set attributes\n    if (propName === \"attributes\") {\n        for (var attrName in propValue) {\n            var attrValue = propValue[attrName]\n\n            if (attrValue === undefined) {\n                node.removeAttribute(attrName)\n            } else {\n                node.setAttribute(attrName, attrValue)\n            }\n        }\n\n        return\n    }\n\n    if(previousValue && isObject(previousValue) &&\n        getPrototype(previousValue) !== getPrototype(propValue)) {\n        node[propName] = propValue\n        return\n    }\n\n    if (!isObject(node[propName])) {\n        node[propName] = {}\n    }\n\n    var replacer = propName === \"style\" ? \"\" : undefined\n\n    for (var k in propValue) {\n        var value = propValue[k]\n        node[propName][k] = (value === undefined) ? replacer : value\n    }\n}\n\nfunction getPrototype(value) {\n    if (Object.getPrototypeOf) {\n        return Object.getPrototypeOf(value)\n    } else if (value.__proto__) {\n        return value.__proto__\n    } else if (value.constructor) {\n        return value.constructor.prototype\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/apply-properties.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/create-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/create-element.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! global/document */ \"./node_modules/global/document.js\")\n\nvar applyProperties = __webpack_require__(/*! ./apply-properties */ \"./node_modules/virtual-dom/vdom/apply-properties.js\")\n\nvar isVNode = __webpack_require__(/*! ../vnode/is-vnode.js */ \"./node_modules/virtual-dom/vnode/is-vnode.js\")\nvar isVText = __webpack_require__(/*! ../vnode/is-vtext.js */ \"./node_modules/virtual-dom/vnode/is-vtext.js\")\nvar isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\nvar handleThunk = __webpack_require__(/*! ../vnode/handle-thunk.js */ \"./node_modules/virtual-dom/vnode/handle-thunk.js\")\n\nmodule.exports = createElement\n\nfunction createElement(vnode, opts) {\n    var doc = opts ? opts.document || document : document\n    var warn = opts ? opts.warn : null\n\n    vnode = handleThunk(vnode).a\n\n    if (isWidget(vnode)) {\n        return vnode.init()\n    } else if (isVText(vnode)) {\n        return doc.createTextNode(vnode.text)\n    } else if (!isVNode(vnode)) {\n        if (warn) {\n            warn(\"Item is not a valid virtual dom node\", vnode)\n        }\n        return null\n    }\n\n    var node = (vnode.namespace === null) ?\n        doc.createElement(vnode.tagName) :\n        doc.createElementNS(vnode.namespace, vnode.tagName)\n\n    var props = vnode.properties\n    applyProperties(node, props)\n\n    var children = vnode.children\n\n    for (var i = 0; i < children.length; i++) {\n        var childNode = createElement(children[i], opts)\n        if (childNode) {\n            node.appendChild(childNode)\n        }\n    }\n\n    return node\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/create-element.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/dom-index.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/dom-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.\n// We don't want to read all of the DOM nodes in the tree so we use\n// the in-order tree indexing to eliminate recursion down certain branches.\n// We only recurse into a DOM node if we know that it contains a child of\n// interest.\n\nvar noChild = {}\n\nmodule.exports = domIndex\n\nfunction domIndex(rootNode, tree, indices, nodes) {\n    if (!indices || indices.length === 0) {\n        return {}\n    } else {\n        indices.sort(ascending)\n        return recurse(rootNode, tree, indices, nodes, 0)\n    }\n}\n\nfunction recurse(rootNode, tree, indices, nodes, rootIndex) {\n    nodes = nodes || {}\n\n\n    if (rootNode) {\n        if (indexInRange(indices, rootIndex, rootIndex)) {\n            nodes[rootIndex] = rootNode\n        }\n\n        var vChildren = tree.children\n\n        if (vChildren) {\n\n            var childNodes = rootNode.childNodes\n\n            for (var i = 0; i < tree.children.length; i++) {\n                rootIndex += 1\n\n                var vChild = vChildren[i] || noChild\n                var nextIndex = rootIndex + (vChild.count || 0)\n\n                // skip recursion down the tree if there are no nodes down here\n                if (indexInRange(indices, rootIndex, nextIndex)) {\n                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)\n                }\n\n                rootIndex = nextIndex\n            }\n        }\n    }\n\n    return nodes\n}\n\n// Binary search for an index in the interval [left, right]\nfunction indexInRange(indices, left, right) {\n    if (indices.length === 0) {\n        return false\n    }\n\n    var minIndex = 0\n    var maxIndex = indices.length - 1\n    var currentIndex\n    var currentItem\n\n    while (minIndex <= maxIndex) {\n        currentIndex = ((maxIndex + minIndex) / 2) >> 0\n        currentItem = indices[currentIndex]\n\n        if (minIndex === maxIndex) {\n            return currentItem >= left && currentItem <= right\n        } else if (currentItem < left) {\n            minIndex = currentIndex + 1\n        } else  if (currentItem > right) {\n            maxIndex = currentIndex - 1\n        } else {\n            return true\n        }\n    }\n\n    return false;\n}\n\nfunction ascending(a, b) {\n    return a > b ? 1 : -1\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/dom-index.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/patch-op.js":
/*!***************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/patch-op.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var applyProperties = __webpack_require__(/*! ./apply-properties */ \"./node_modules/virtual-dom/vdom/apply-properties.js\")\n\nvar isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\nvar VPatch = __webpack_require__(/*! ../vnode/vpatch.js */ \"./node_modules/virtual-dom/vnode/vpatch.js\")\n\nvar updateWidget = __webpack_require__(/*! ./update-widget */ \"./node_modules/virtual-dom/vdom/update-widget.js\")\n\nmodule.exports = applyPatch\n\nfunction applyPatch(vpatch, domNode, renderOptions) {\n    var type = vpatch.type\n    var vNode = vpatch.vNode\n    var patch = vpatch.patch\n\n    switch (type) {\n        case VPatch.REMOVE:\n            return removeNode(domNode, vNode)\n        case VPatch.INSERT:\n            return insertNode(domNode, patch, renderOptions)\n        case VPatch.VTEXT:\n            return stringPatch(domNode, vNode, patch, renderOptions)\n        case VPatch.WIDGET:\n            return widgetPatch(domNode, vNode, patch, renderOptions)\n        case VPatch.VNODE:\n            return vNodePatch(domNode, vNode, patch, renderOptions)\n        case VPatch.ORDER:\n            reorderChildren(domNode, patch)\n            return domNode\n        case VPatch.PROPS:\n            applyProperties(domNode, patch, vNode.properties)\n            return domNode\n        case VPatch.THUNK:\n            return replaceRoot(domNode,\n                renderOptions.patch(domNode, patch, renderOptions))\n        default:\n            return domNode\n    }\n}\n\nfunction removeNode(domNode, vNode) {\n    var parentNode = domNode.parentNode\n\n    if (parentNode) {\n        parentNode.removeChild(domNode)\n    }\n\n    destroyWidget(domNode, vNode);\n\n    return null\n}\n\nfunction insertNode(parentNode, vNode, renderOptions) {\n    var newNode = renderOptions.render(vNode, renderOptions)\n\n    if (parentNode) {\n        parentNode.appendChild(newNode)\n    }\n\n    return parentNode\n}\n\nfunction stringPatch(domNode, leftVNode, vText, renderOptions) {\n    var newNode\n\n    if (domNode.nodeType === 3) {\n        domNode.replaceData(0, domNode.length, vText.text)\n        newNode = domNode\n    } else {\n        var parentNode = domNode.parentNode\n        newNode = renderOptions.render(vText, renderOptions)\n\n        if (parentNode && newNode !== domNode) {\n            parentNode.replaceChild(newNode, domNode)\n        }\n    }\n\n    return newNode\n}\n\nfunction widgetPatch(domNode, leftVNode, widget, renderOptions) {\n    var updating = updateWidget(leftVNode, widget)\n    var newNode\n\n    if (updating) {\n        newNode = widget.update(leftVNode, domNode) || domNode\n    } else {\n        newNode = renderOptions.render(widget, renderOptions)\n    }\n\n    var parentNode = domNode.parentNode\n\n    if (parentNode && newNode !== domNode) {\n        parentNode.replaceChild(newNode, domNode)\n    }\n\n    if (!updating) {\n        destroyWidget(domNode, leftVNode)\n    }\n\n    return newNode\n}\n\nfunction vNodePatch(domNode, leftVNode, vNode, renderOptions) {\n    var parentNode = domNode.parentNode\n    var newNode = renderOptions.render(vNode, renderOptions)\n\n    if (parentNode && newNode !== domNode) {\n        parentNode.replaceChild(newNode, domNode)\n    }\n\n    return newNode\n}\n\nfunction destroyWidget(domNode, w) {\n    if (typeof w.destroy === \"function\" && isWidget(w)) {\n        w.destroy(domNode)\n    }\n}\n\nfunction reorderChildren(domNode, moves) {\n    var childNodes = domNode.childNodes\n    var keyMap = {}\n    var node\n    var remove\n    var insert\n\n    for (var i = 0; i < moves.removes.length; i++) {\n        remove = moves.removes[i]\n        node = childNodes[remove.from]\n        if (remove.key) {\n            keyMap[remove.key] = node\n        }\n        domNode.removeChild(node)\n    }\n\n    var length = childNodes.length\n    for (var j = 0; j < moves.inserts.length; j++) {\n        insert = moves.inserts[j]\n        node = keyMap[insert.key]\n        // this is the weirdest bug i've ever seen in webkit\n        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])\n    }\n}\n\nfunction replaceRoot(oldRoot, newRoot) {\n    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {\n        oldRoot.parentNode.replaceChild(newRoot, oldRoot)\n    }\n\n    return newRoot;\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/patch-op.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/patch.js":
/*!************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/patch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! global/document */ \"./node_modules/global/document.js\")\nvar isArray = __webpack_require__(/*! x-is-array */ \"./node_modules/x-is-array/index.js\")\n\nvar render = __webpack_require__(/*! ./create-element */ \"./node_modules/virtual-dom/vdom/create-element.js\")\nvar domIndex = __webpack_require__(/*! ./dom-index */ \"./node_modules/virtual-dom/vdom/dom-index.js\")\nvar patchOp = __webpack_require__(/*! ./patch-op */ \"./node_modules/virtual-dom/vdom/patch-op.js\")\nmodule.exports = patch\n\nfunction patch(rootNode, patches, renderOptions) {\n    renderOptions = renderOptions || {}\n    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch\n        ? renderOptions.patch\n        : patchRecursive\n    renderOptions.render = renderOptions.render || render\n\n    return renderOptions.patch(rootNode, patches, renderOptions)\n}\n\nfunction patchRecursive(rootNode, patches, renderOptions) {\n    var indices = patchIndices(patches)\n\n    if (indices.length === 0) {\n        return rootNode\n    }\n\n    var index = domIndex(rootNode, patches.a, indices)\n    var ownerDocument = rootNode.ownerDocument\n\n    if (!renderOptions.document && ownerDocument !== document) {\n        renderOptions.document = ownerDocument\n    }\n\n    for (var i = 0; i < indices.length; i++) {\n        var nodeIndex = indices[i]\n        rootNode = applyPatch(rootNode,\n            index[nodeIndex],\n            patches[nodeIndex],\n            renderOptions)\n    }\n\n    return rootNode\n}\n\nfunction applyPatch(rootNode, domNode, patchList, renderOptions) {\n    if (!domNode) {\n        return rootNode\n    }\n\n    var newNode\n\n    if (isArray(patchList)) {\n        for (var i = 0; i < patchList.length; i++) {\n            newNode = patchOp(patchList[i], domNode, renderOptions)\n\n            if (domNode === rootNode) {\n                rootNode = newNode\n            }\n        }\n    } else {\n        newNode = patchOp(patchList, domNode, renderOptions)\n\n        if (domNode === rootNode) {\n            rootNode = newNode\n        }\n    }\n\n    return rootNode\n}\n\nfunction patchIndices(patches) {\n    var indices = []\n\n    for (var key in patches) {\n        if (key !== \"a\") {\n            indices.push(Number(key))\n        }\n    }\n\n    return indices\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/patch.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vdom/update-widget.js":
/*!********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/update-widget.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\n\nmodule.exports = updateWidget\n\nfunction updateWidget(a, b) {\n    if (isWidget(a) && isWidget(b)) {\n        if (\"name\" in a && \"name\" in b) {\n            return a.id === b.id\n        } else {\n            return a.init === b.init\n        }\n    }\n\n    return false\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vdom/update-widget.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js":
/*!***********************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar EvStore = __webpack_require__(/*! ev-store */ \"./node_modules/ev-store/index.js\");\n\nmodule.exports = EvHook;\n\nfunction EvHook(value) {\n    if (!(this instanceof EvHook)) {\n        return new EvHook(value);\n    }\n\n    this.value = value;\n}\n\nEvHook.prototype.hook = function (node, propertyName) {\n    var es = EvStore(node);\n    var propName = propertyName.substr(3);\n\n    es[propName] = this.value;\n};\n\nEvHook.prototype.unhook = function(node, propertyName) {\n    var es = EvStore(node);\n    var propName = propertyName.substr(3);\n\n    es[propName] = undefined;\n};\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = SoftSetHook;\n\nfunction SoftSetHook(value) {\n    if (!(this instanceof SoftSetHook)) {\n        return new SoftSetHook(value);\n    }\n\n    this.value = value;\n}\n\nSoftSetHook.prototype.hook = function (node, propertyName) {\n    if (node[propertyName] !== this.value) {\n        node[propertyName] = this.value;\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArray = __webpack_require__(/*! x-is-array */ \"./node_modules/x-is-array/index.js\");\n\nvar VNode = __webpack_require__(/*! ../vnode/vnode.js */ \"./node_modules/virtual-dom/vnode/vnode.js\");\nvar VText = __webpack_require__(/*! ../vnode/vtext.js */ \"./node_modules/virtual-dom/vnode/vtext.js\");\nvar isVNode = __webpack_require__(/*! ../vnode/is-vnode */ \"./node_modules/virtual-dom/vnode/is-vnode.js\");\nvar isVText = __webpack_require__(/*! ../vnode/is-vtext */ \"./node_modules/virtual-dom/vnode/is-vtext.js\");\nvar isWidget = __webpack_require__(/*! ../vnode/is-widget */ \"./node_modules/virtual-dom/vnode/is-widget.js\");\nvar isHook = __webpack_require__(/*! ../vnode/is-vhook */ \"./node_modules/virtual-dom/vnode/is-vhook.js\");\nvar isVThunk = __webpack_require__(/*! ../vnode/is-thunk */ \"./node_modules/virtual-dom/vnode/is-thunk.js\");\n\nvar parseTag = __webpack_require__(/*! ./parse-tag.js */ \"./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js\");\nvar softSetHook = __webpack_require__(/*! ./hooks/soft-set-hook.js */ \"./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js\");\nvar evHook = __webpack_require__(/*! ./hooks/ev-hook.js */ \"./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js\");\n\nmodule.exports = h;\n\nfunction h(tagName, properties, children) {\n    var childNodes = [];\n    var tag, props, key, namespace;\n\n    if (!children && isChildren(properties)) {\n        children = properties;\n        props = {};\n    }\n\n    props = props || properties || {};\n    tag = parseTag(tagName, props);\n\n    // support keys\n    if (props.hasOwnProperty('key')) {\n        key = props.key;\n        props.key = undefined;\n    }\n\n    // support namespace\n    if (props.hasOwnProperty('namespace')) {\n        namespace = props.namespace;\n        props.namespace = undefined;\n    }\n\n    // fix cursor bug\n    if (tag === 'INPUT' &&\n        !namespace &&\n        props.hasOwnProperty('value') &&\n        props.value !== undefined &&\n        !isHook(props.value)\n    ) {\n        props.value = softSetHook(props.value);\n    }\n\n    transformProperties(props);\n\n    if (children !== undefined && children !== null) {\n        addChild(children, childNodes, tag, props);\n    }\n\n\n    return new VNode(tag, props, childNodes, key, namespace);\n}\n\nfunction addChild(c, childNodes, tag, props) {\n    if (typeof c === 'string') {\n        childNodes.push(new VText(c));\n    } else if (typeof c === 'number') {\n        childNodes.push(new VText(String(c)));\n    } else if (isChild(c)) {\n        childNodes.push(c);\n    } else if (isArray(c)) {\n        for (var i = 0; i < c.length; i++) {\n            addChild(c[i], childNodes, tag, props);\n        }\n    } else if (c === null || c === undefined) {\n        return;\n    } else {\n        throw UnexpectedVirtualElement({\n            foreignObject: c,\n            parentVnode: {\n                tagName: tag,\n                properties: props\n            }\n        });\n    }\n}\n\nfunction transformProperties(props) {\n    for (var propName in props) {\n        if (props.hasOwnProperty(propName)) {\n            var value = props[propName];\n\n            if (isHook(value)) {\n                continue;\n            }\n\n            if (propName.substr(0, 3) === 'ev-') {\n                // add ev-foo support\n                props[propName] = evHook(value);\n            }\n        }\n    }\n}\n\nfunction isChild(x) {\n    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);\n}\n\nfunction isChildren(x) {\n    return typeof x === 'string' || isArray(x) || isChild(x);\n}\n\nfunction UnexpectedVirtualElement(data) {\n    var err = new Error();\n\n    err.type = 'virtual-hyperscript.unexpected.virtual-element';\n    err.message = 'Unexpected virtual child passed to h().\\n' +\n        'Expected a VNode / Vthunk / VWidget / string but:\\n' +\n        'got:\\n' +\n        errorString(data.foreignObject) +\n        '.\\n' +\n        'The parent vnode is:\\n' +\n        errorString(data.parentVnode)\n        '\\n' +\n        'Suggested fix: change your `h(..., [ ... ])` callsite.';\n    err.foreignObject = data.foreignObject;\n    err.parentVnode = data.parentVnode;\n\n    return err;\n}\n\nfunction errorString(obj) {\n    try {\n        return JSON.stringify(obj, null, '    ');\n    } catch (e) {\n        return String(obj);\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/virtual-hyperscript/index.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar split = __webpack_require__(/*! browser-split */ \"./node_modules/browser-split/index.js\");\n\nvar classIdSplit = /([\\.#]?[a-zA-Z0-9\\u007F-\\uFFFF_:-]+)/;\nvar notClassId = /^\\.|#/;\n\nmodule.exports = parseTag;\n\nfunction parseTag(tag, props) {\n    if (!tag) {\n        return 'DIV';\n    }\n\n    var noId = !(props.hasOwnProperty('id'));\n\n    var tagParts = split(tag, classIdSplit);\n    var tagName = null;\n\n    if (notClassId.test(tagParts[1])) {\n        tagName = 'DIV';\n    }\n\n    var classes, part, type, i;\n\n    for (i = 0; i < tagParts.length; i++) {\n        part = tagParts[i];\n\n        if (!part) {\n            continue;\n        }\n\n        type = part.charAt(0);\n\n        if (!tagName) {\n            tagName = part;\n        } else if (type === '.') {\n            classes = classes || [];\n            classes.push(part.substring(1, part.length));\n        } else if (type === '#' && noId) {\n            props.id = part.substring(1, part.length);\n        }\n    }\n\n    if (classes) {\n        if (props.className) {\n            classes.push(props.className);\n        }\n\n        props.className = classes.join(' ');\n    }\n\n    return props.namespace ? tagName : tagName.toUpperCase();\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/handle-thunk.js":
/*!********************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/handle-thunk.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isVNode = __webpack_require__(/*! ./is-vnode */ \"./node_modules/virtual-dom/vnode/is-vnode.js\")\nvar isVText = __webpack_require__(/*! ./is-vtext */ \"./node_modules/virtual-dom/vnode/is-vtext.js\")\nvar isWidget = __webpack_require__(/*! ./is-widget */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\nvar isThunk = __webpack_require__(/*! ./is-thunk */ \"./node_modules/virtual-dom/vnode/is-thunk.js\")\n\nmodule.exports = handleThunk\n\nfunction handleThunk(a, b) {\n    var renderedA = a\n    var renderedB = b\n\n    if (isThunk(b)) {\n        renderedB = renderThunk(b, a)\n    }\n\n    if (isThunk(a)) {\n        renderedA = renderThunk(a, null)\n    }\n\n    return {\n        a: renderedA,\n        b: renderedB\n    }\n}\n\nfunction renderThunk(thunk, previous) {\n    var renderedThunk = thunk.vnode\n\n    if (!renderedThunk) {\n        renderedThunk = thunk.vnode = thunk.render(previous)\n    }\n\n    if (!(isVNode(renderedThunk) ||\n            isVText(renderedThunk) ||\n            isWidget(renderedThunk))) {\n        throw new Error(\"thunk did not return a valid node\");\n    }\n\n    return renderedThunk\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/handle-thunk.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-thunk.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-thunk.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = isThunk\r\n\r\nfunction isThunk(t) {\r\n    return t && t.type === \"Thunk\"\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/is-thunk.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vhook.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vhook.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = isHook\n\nfunction isHook(hook) {\n    return hook &&\n      (typeof hook.hook === \"function\" && !hook.hasOwnProperty(\"hook\") ||\n       typeof hook.unhook === \"function\" && !hook.hasOwnProperty(\"unhook\"))\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/is-vhook.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vnode.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vnode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var version = __webpack_require__(/*! ./version */ \"./node_modules/virtual-dom/vnode/version.js\")\n\nmodule.exports = isVirtualNode\n\nfunction isVirtualNode(x) {\n    return x && x.type === \"VirtualNode\" && x.version === version\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/is-vnode.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vtext.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vtext.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var version = __webpack_require__(/*! ./version */ \"./node_modules/virtual-dom/vnode/version.js\")\n\nmodule.exports = isVirtualText\n\nfunction isVirtualText(x) {\n    return x && x.type === \"VirtualText\" && x.version === version\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/is-vtext.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-widget.js":
/*!*****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-widget.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = isWidget\n\nfunction isWidget(w) {\n    return w && w.type === \"Widget\"\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/is-widget.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/version.js":
/*!***************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/version.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"2\"\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/version.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vnode.js":
/*!*************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vnode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var version = __webpack_require__(/*! ./version */ \"./node_modules/virtual-dom/vnode/version.js\")\nvar isVNode = __webpack_require__(/*! ./is-vnode */ \"./node_modules/virtual-dom/vnode/is-vnode.js\")\nvar isWidget = __webpack_require__(/*! ./is-widget */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\nvar isThunk = __webpack_require__(/*! ./is-thunk */ \"./node_modules/virtual-dom/vnode/is-thunk.js\")\nvar isVHook = __webpack_require__(/*! ./is-vhook */ \"./node_modules/virtual-dom/vnode/is-vhook.js\")\n\nmodule.exports = VirtualNode\n\nvar noProperties = {}\nvar noChildren = []\n\nfunction VirtualNode(tagName, properties, children, key, namespace) {\n    this.tagName = tagName\n    this.properties = properties || noProperties\n    this.children = children || noChildren\n    this.key = key != null ? String(key) : undefined\n    this.namespace = (typeof namespace === \"string\") ? namespace : null\n\n    var count = (children && children.length) || 0\n    var descendants = 0\n    var hasWidgets = false\n    var hasThunks = false\n    var descendantHooks = false\n    var hooks\n\n    for (var propName in properties) {\n        if (properties.hasOwnProperty(propName)) {\n            var property = properties[propName]\n            if (isVHook(property) && property.unhook) {\n                if (!hooks) {\n                    hooks = {}\n                }\n\n                hooks[propName] = property\n            }\n        }\n    }\n\n    for (var i = 0; i < count; i++) {\n        var child = children[i]\n        if (isVNode(child)) {\n            descendants += child.count || 0\n\n            if (!hasWidgets && child.hasWidgets) {\n                hasWidgets = true\n            }\n\n            if (!hasThunks && child.hasThunks) {\n                hasThunks = true\n            }\n\n            if (!descendantHooks && (child.hooks || child.descendantHooks)) {\n                descendantHooks = true\n            }\n        } else if (!hasWidgets && isWidget(child)) {\n            if (typeof child.destroy === \"function\") {\n                hasWidgets = true\n            }\n        } else if (!hasThunks && isThunk(child)) {\n            hasThunks = true;\n        }\n    }\n\n    this.count = count + descendants\n    this.hasWidgets = hasWidgets\n    this.hasThunks = hasThunks\n    this.hooks = hooks\n    this.descendantHooks = descendantHooks\n}\n\nVirtualNode.prototype.version = version\nVirtualNode.prototype.type = \"VirtualNode\"\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/vnode.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vpatch.js":
/*!**************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vpatch.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var version = __webpack_require__(/*! ./version */ \"./node_modules/virtual-dom/vnode/version.js\")\n\nVirtualPatch.NONE = 0\nVirtualPatch.VTEXT = 1\nVirtualPatch.VNODE = 2\nVirtualPatch.WIDGET = 3\nVirtualPatch.PROPS = 4\nVirtualPatch.ORDER = 5\nVirtualPatch.INSERT = 6\nVirtualPatch.REMOVE = 7\nVirtualPatch.THUNK = 8\n\nmodule.exports = VirtualPatch\n\nfunction VirtualPatch(type, vNode, patch) {\n    this.type = Number(type)\n    this.vNode = vNode\n    this.patch = patch\n}\n\nVirtualPatch.prototype.version = version\nVirtualPatch.prototype.type = \"VirtualPatch\"\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/vpatch.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vtext.js":
/*!*************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vtext.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var version = __webpack_require__(/*! ./version */ \"./node_modules/virtual-dom/vnode/version.js\")\n\nmodule.exports = VirtualText\n\nfunction VirtualText(text) {\n    this.text = String(text)\n}\n\nVirtualText.prototype.version = version\nVirtualText.prototype.type = \"VirtualText\"\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vnode/vtext.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vtree/diff-props.js":
/*!******************************************************!*\
  !*** ./node_modules/virtual-dom/vtree/diff-props.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! is-object */ \"./node_modules/is-object/index.js\")\nvar isHook = __webpack_require__(/*! ../vnode/is-vhook */ \"./node_modules/virtual-dom/vnode/is-vhook.js\")\n\nmodule.exports = diffProps\n\nfunction diffProps(a, b) {\n    var diff\n\n    for (var aKey in a) {\n        if (!(aKey in b)) {\n            diff = diff || {}\n            diff[aKey] = undefined\n        }\n\n        var aValue = a[aKey]\n        var bValue = b[aKey]\n\n        if (aValue === bValue) {\n            continue\n        } else if (isObject(aValue) && isObject(bValue)) {\n            if (getPrototype(bValue) !== getPrototype(aValue)) {\n                diff = diff || {}\n                diff[aKey] = bValue\n            } else if (isHook(bValue)) {\n                 diff = diff || {}\n                 diff[aKey] = bValue\n            } else {\n                var objectDiff = diffProps(aValue, bValue)\n                if (objectDiff) {\n                    diff = diff || {}\n                    diff[aKey] = objectDiff\n                }\n            }\n        } else {\n            diff = diff || {}\n            diff[aKey] = bValue\n        }\n    }\n\n    for (var bKey in b) {\n        if (!(bKey in a)) {\n            diff = diff || {}\n            diff[bKey] = b[bKey]\n        }\n    }\n\n    return diff\n}\n\nfunction getPrototype(value) {\n  if (Object.getPrototypeOf) {\n    return Object.getPrototypeOf(value)\n  } else if (value.__proto__) {\n    return value.__proto__\n  } else if (value.constructor) {\n    return value.constructor.prototype\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vtree/diff-props.js?");

/***/ }),

/***/ "./node_modules/virtual-dom/vtree/diff.js":
/*!************************************************!*\
  !*** ./node_modules/virtual-dom/vtree/diff.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! x-is-array */ \"./node_modules/x-is-array/index.js\")\n\nvar VPatch = __webpack_require__(/*! ../vnode/vpatch */ \"./node_modules/virtual-dom/vnode/vpatch.js\")\nvar isVNode = __webpack_require__(/*! ../vnode/is-vnode */ \"./node_modules/virtual-dom/vnode/is-vnode.js\")\nvar isVText = __webpack_require__(/*! ../vnode/is-vtext */ \"./node_modules/virtual-dom/vnode/is-vtext.js\")\nvar isWidget = __webpack_require__(/*! ../vnode/is-widget */ \"./node_modules/virtual-dom/vnode/is-widget.js\")\nvar isThunk = __webpack_require__(/*! ../vnode/is-thunk */ \"./node_modules/virtual-dom/vnode/is-thunk.js\")\nvar handleThunk = __webpack_require__(/*! ../vnode/handle-thunk */ \"./node_modules/virtual-dom/vnode/handle-thunk.js\")\n\nvar diffProps = __webpack_require__(/*! ./diff-props */ \"./node_modules/virtual-dom/vtree/diff-props.js\")\n\nmodule.exports = diff\n\nfunction diff(a, b) {\n    var patch = { a: a }\n    walk(a, b, patch, 0)\n    return patch\n}\n\nfunction walk(a, b, patch, index) {\n    if (a === b) {\n        return\n    }\n\n    var apply = patch[index]\n    var applyClear = false\n\n    if (isThunk(a) || isThunk(b)) {\n        thunks(a, b, patch, index)\n    } else if (b == null) {\n\n        // If a is a widget we will add a remove patch for it\n        // Otherwise any child widgets/hooks must be destroyed.\n        // This prevents adding two remove patches for a widget.\n        if (!isWidget(a)) {\n            clearState(a, patch, index)\n            apply = patch[index]\n        }\n\n        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))\n    } else if (isVNode(b)) {\n        if (isVNode(a)) {\n            if (a.tagName === b.tagName &&\n                a.namespace === b.namespace &&\n                a.key === b.key) {\n                var propsPatch = diffProps(a.properties, b.properties)\n                if (propsPatch) {\n                    apply = appendPatch(apply,\n                        new VPatch(VPatch.PROPS, a, propsPatch))\n                }\n                apply = diffChildren(a, b, patch, apply, index)\n            } else {\n                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))\n                applyClear = true\n            }\n        } else {\n            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))\n            applyClear = true\n        }\n    } else if (isVText(b)) {\n        if (!isVText(a)) {\n            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))\n            applyClear = true\n        } else if (a.text !== b.text) {\n            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))\n        }\n    } else if (isWidget(b)) {\n        if (!isWidget(a)) {\n            applyClear = true\n        }\n\n        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))\n    }\n\n    if (apply) {\n        patch[index] = apply\n    }\n\n    if (applyClear) {\n        clearState(a, patch, index)\n    }\n}\n\nfunction diffChildren(a, b, patch, apply, index) {\n    var aChildren = a.children\n    var orderedSet = reorder(aChildren, b.children)\n    var bChildren = orderedSet.children\n\n    var aLen = aChildren.length\n    var bLen = bChildren.length\n    var len = aLen > bLen ? aLen : bLen\n\n    for (var i = 0; i < len; i++) {\n        var leftNode = aChildren[i]\n        var rightNode = bChildren[i]\n        index += 1\n\n        if (!leftNode) {\n            if (rightNode) {\n                // Excess nodes in b need to be added\n                apply = appendPatch(apply,\n                    new VPatch(VPatch.INSERT, null, rightNode))\n            }\n        } else {\n            walk(leftNode, rightNode, patch, index)\n        }\n\n        if (isVNode(leftNode) && leftNode.count) {\n            index += leftNode.count\n        }\n    }\n\n    if (orderedSet.moves) {\n        // Reorder nodes last\n        apply = appendPatch(apply, new VPatch(\n            VPatch.ORDER,\n            a,\n            orderedSet.moves\n        ))\n    }\n\n    return apply\n}\n\nfunction clearState(vNode, patch, index) {\n    // TODO: Make this a single walk, not two\n    unhook(vNode, patch, index)\n    destroyWidgets(vNode, patch, index)\n}\n\n// Patch records for all destroyed widgets must be added because we need\n// a DOM node reference for the destroy function\nfunction destroyWidgets(vNode, patch, index) {\n    if (isWidget(vNode)) {\n        if (typeof vNode.destroy === \"function\") {\n            patch[index] = appendPatch(\n                patch[index],\n                new VPatch(VPatch.REMOVE, vNode, null)\n            )\n        }\n    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {\n        var children = vNode.children\n        var len = children.length\n        for (var i = 0; i < len; i++) {\n            var child = children[i]\n            index += 1\n\n            destroyWidgets(child, patch, index)\n\n            if (isVNode(child) && child.count) {\n                index += child.count\n            }\n        }\n    } else if (isThunk(vNode)) {\n        thunks(vNode, null, patch, index)\n    }\n}\n\n// Create a sub-patch for thunks\nfunction thunks(a, b, patch, index) {\n    var nodes = handleThunk(a, b)\n    var thunkPatch = diff(nodes.a, nodes.b)\n    if (hasPatches(thunkPatch)) {\n        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)\n    }\n}\n\nfunction hasPatches(patch) {\n    for (var index in patch) {\n        if (index !== \"a\") {\n            return true\n        }\n    }\n\n    return false\n}\n\n// Execute hooks when two nodes are identical\nfunction unhook(vNode, patch, index) {\n    if (isVNode(vNode)) {\n        if (vNode.hooks) {\n            patch[index] = appendPatch(\n                patch[index],\n                new VPatch(\n                    VPatch.PROPS,\n                    vNode,\n                    undefinedKeys(vNode.hooks)\n                )\n            )\n        }\n\n        if (vNode.descendantHooks || vNode.hasThunks) {\n            var children = vNode.children\n            var len = children.length\n            for (var i = 0; i < len; i++) {\n                var child = children[i]\n                index += 1\n\n                unhook(child, patch, index)\n\n                if (isVNode(child) && child.count) {\n                    index += child.count\n                }\n            }\n        }\n    } else if (isThunk(vNode)) {\n        thunks(vNode, null, patch, index)\n    }\n}\n\nfunction undefinedKeys(obj) {\n    var result = {}\n\n    for (var key in obj) {\n        result[key] = undefined\n    }\n\n    return result\n}\n\n// List diff, naive left to right reordering\nfunction reorder(aChildren, bChildren) {\n    // O(M) time, O(M) memory\n    var bChildIndex = keyIndex(bChildren)\n    var bKeys = bChildIndex.keys\n    var bFree = bChildIndex.free\n\n    if (bFree.length === bChildren.length) {\n        return {\n            children: bChildren,\n            moves: null\n        }\n    }\n\n    // O(N) time, O(N) memory\n    var aChildIndex = keyIndex(aChildren)\n    var aKeys = aChildIndex.keys\n    var aFree = aChildIndex.free\n\n    if (aFree.length === aChildren.length) {\n        return {\n            children: bChildren,\n            moves: null\n        }\n    }\n\n    // O(MAX(N, M)) memory\n    var newChildren = []\n\n    var freeIndex = 0\n    var freeCount = bFree.length\n    var deletedItems = 0\n\n    // Iterate through a and match a node in b\n    // O(N) time,\n    for (var i = 0 ; i < aChildren.length; i++) {\n        var aItem = aChildren[i]\n        var itemIndex\n\n        if (aItem.key) {\n            if (bKeys.hasOwnProperty(aItem.key)) {\n                // Match up the old keys\n                itemIndex = bKeys[aItem.key]\n                newChildren.push(bChildren[itemIndex])\n\n            } else {\n                // Remove old keyed items\n                itemIndex = i - deletedItems++\n                newChildren.push(null)\n            }\n        } else {\n            // Match the item in a with the next free item in b\n            if (freeIndex < freeCount) {\n                itemIndex = bFree[freeIndex++]\n                newChildren.push(bChildren[itemIndex])\n            } else {\n                // There are no free items in b to match with\n                // the free items in a, so the extra free nodes\n                // are deleted.\n                itemIndex = i - deletedItems++\n                newChildren.push(null)\n            }\n        }\n    }\n\n    var lastFreeIndex = freeIndex >= bFree.length ?\n        bChildren.length :\n        bFree[freeIndex]\n\n    // Iterate through b and append any new keys\n    // O(M) time\n    for (var j = 0; j < bChildren.length; j++) {\n        var newItem = bChildren[j]\n\n        if (newItem.key) {\n            if (!aKeys.hasOwnProperty(newItem.key)) {\n                // Add any new keyed items\n                // We are adding new items to the end and then sorting them\n                // in place. In future we should insert new items in place.\n                newChildren.push(newItem)\n            }\n        } else if (j >= lastFreeIndex) {\n            // Add any leftover non-keyed items\n            newChildren.push(newItem)\n        }\n    }\n\n    var simulate = newChildren.slice()\n    var simulateIndex = 0\n    var removes = []\n    var inserts = []\n    var simulateItem\n\n    for (var k = 0; k < bChildren.length;) {\n        var wantedItem = bChildren[k]\n        simulateItem = simulate[simulateIndex]\n\n        // remove items\n        while (simulateItem === null && simulate.length) {\n            removes.push(remove(simulate, simulateIndex, null))\n            simulateItem = simulate[simulateIndex]\n        }\n\n        if (!simulateItem || simulateItem.key !== wantedItem.key) {\n            // if we need a key in this position...\n            if (wantedItem.key) {\n                if (simulateItem && simulateItem.key) {\n                    // if an insert doesn't put this key in place, it needs to move\n                    if (bKeys[simulateItem.key] !== k + 1) {\n                        removes.push(remove(simulate, simulateIndex, simulateItem.key))\n                        simulateItem = simulate[simulateIndex]\n                        // if the remove didn't put the wanted item in place, we need to insert it\n                        if (!simulateItem || simulateItem.key !== wantedItem.key) {\n                            inserts.push({key: wantedItem.key, to: k})\n                        }\n                        // items are matching, so skip ahead\n                        else {\n                            simulateIndex++\n                        }\n                    }\n                    else {\n                        inserts.push({key: wantedItem.key, to: k})\n                    }\n                }\n                else {\n                    inserts.push({key: wantedItem.key, to: k})\n                }\n                k++\n            }\n            // a key in simulate has no matching wanted key, remove it\n            else if (simulateItem && simulateItem.key) {\n                removes.push(remove(simulate, simulateIndex, simulateItem.key))\n            }\n        }\n        else {\n            simulateIndex++\n            k++\n        }\n    }\n\n    // remove all the remaining nodes from simulate\n    while(simulateIndex < simulate.length) {\n        simulateItem = simulate[simulateIndex]\n        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))\n    }\n\n    // If the only moves we have are deletes then we can just\n    // let the delete patch remove these items.\n    if (removes.length === deletedItems && !inserts.length) {\n        return {\n            children: newChildren,\n            moves: null\n        }\n    }\n\n    return {\n        children: newChildren,\n        moves: {\n            removes: removes,\n            inserts: inserts\n        }\n    }\n}\n\nfunction remove(arr, index, key) {\n    arr.splice(index, 1)\n\n    return {\n        from: index,\n        key: key\n    }\n}\n\nfunction keyIndex(children) {\n    var keys = {}\n    var free = []\n    var length = children.length\n\n    for (var i = 0; i < length; i++) {\n        var child = children[i]\n\n        if (child.key) {\n            keys[child.key] = i\n        } else {\n            free.push(i)\n        }\n    }\n\n    return {\n        keys: keys,     // A hash of key name to index\n        free: free      // An array of unkeyed item indices\n    }\n}\n\nfunction appendPatch(apply, patch) {\n    if (apply) {\n        if (isArray(apply)) {\n            apply.push(patch)\n        } else {\n            apply = [apply, patch]\n        }\n\n        return apply\n    } else {\n        return patch\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/virtual-dom/vtree/diff.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/x-is-array/index.js":
/*!******************************************!*\
  !*** ./node_modules/x-is-array/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var nativeIsArray = Array.isArray\nvar toString = Object.prototype.toString\n\nmodule.exports = nativeIsArray || isArray\n\nfunction isArray(obj) {\n    return toString.call(obj) === \"[object Array]\"\n}\n\n\n//# sourceURL=webpack:///./node_modules/x-is-array/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* \r\nTODO: \r\n\r\nPOPSTATE and PUSHSTATE refactor???\r\nSplit code into modules i.e. page one and page two, to be combined with webpack.\r\n\r\n*/\r\n\r\nconst h = __webpack_require__(/*! virtual-dom/h */ \"./node_modules/virtual-dom/h.js\");\r\nconst diff = __webpack_require__(/*! virtual-dom/diff */ \"./node_modules/virtual-dom/diff.js\");\r\nconst patch = __webpack_require__(/*! virtual-dom/patch */ \"./node_modules/virtual-dom/patch.js\");\r\nconst createElement = __webpack_require__(/*! virtual-dom/create-element */ \"./node_modules/virtual-dom/create-element.js\");\r\n\r\n\r\n// ======================== PAGES ========================\r\n\r\nconst PAGES = {\r\n    HOME: '/',\r\n    OTHER: '/other'\r\n};\r\n\r\n// ======================== MODEL ========================\r\n\r\nconst initModel = {\r\n    page: PAGES.HOME,\r\n    initialData: \"Initial data...\",\r\n    input: \"\",\r\n    items: [\r\n        { id: 1, task: \"Get milk.\" },\r\n        { id: 2, task: \"Get eggs.\" },\r\n        { id: 3, task: \"Get chocolate.\" },\r\n        { id: 4, task: \"Get bread.\" },\r\n    ],\r\n    contentOne: null,\r\n    contentTwo: null,\r\n};\r\n\r\n// Initialize the view.\r\nlet init = {\r\n    model: initModel,\r\n    command: getInitialData()\r\n}\r\n\r\n// ======================== HTTP COMMANDS ========================\r\n\r\nfunction getInitialData(model) {\r\n    return {\r\n        request: { url: `https://swapi.co/api/people/1/` },\r\n        // If the request succeeds, dispatch a message with these parameters.\r\n        successMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_INITIAL_DATA_SUCCESS,\r\n                payload: response,\r\n            }\r\n        },\r\n        // If the request fails, dispatch a message with these parameters.\r\n        errorMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_INITIAL_DATA_ERROR,\r\n                payload: response,\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction getDataOne(model) {\r\n    return {\r\n        request: { url: `https://jsonplaceholder.typicode.com/posts/1` },\r\n        // If the request succeeds, dispatch a message with these parameters.\r\n        successMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_DATA_ONE_SUCCESS,\r\n                payload: response,\r\n            }\r\n        },\r\n        // If the request fails, dispatch a message with these parameters.\r\n        errorMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_DATA_ONE_ERROR,\r\n                payload: response,\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction getDataTwo(model) {\r\n    return {\r\n        request: { url: `https://jsonplaceholder.typicode.com/posts/2` },\r\n        successMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_DATA_TWO_SUCCESS,\r\n                payload: response,\r\n            }\r\n        },\r\n        errorMsg: (response) => {\r\n            return {\r\n                type: MSGS.GET_DATA_TWO_ERROR,\r\n                payload: response,\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// ======================== MESSAGES ========================\r\n\r\nconst MSGS = {\r\n    LOCATION_CHANGE: 'LOCATION_CHANGE',\r\n    INPUT: 'INPUT',\r\n    SAVE: 'SAVE',\r\n    DELETE: 'DELETE',\r\n    GET_INITIAL_DATA_SUCCESS: 'GET_INITIAL_DATA_SUCCESS',\r\n    GET_INITIAL_DATA_ERROR: 'GET_INITIAL_DATA_ERROR',\r\n    GET_DATA_ONE: 'GET_DATA_ONE',\r\n    GET_DATA_ONE_SUCCESS: 'GET_DATA_ONE_SUCCESS',\r\n    GET_DATA_ONE_ERROR: 'GET_DATA_ONE_ERROR',\r\n    GET_DATA_TWO: 'GET_DATA_TWO',\r\n    GET_DATA_TWO_SUCCESS: 'GET_DATA_TWO_SUCCESS',\r\n    GET_DATA_TWO_ERROR: 'GET_DATA_TWO_ERROR',\r\n};\r\n\r\n// Returns a location change message, to be dispatched\r\nfunction locationChangeMsg(path) {\r\n    console.log(\"locationChangeMsg\", path)\r\n    return {\r\n        type: MSGS.LOCATION_CHANGE,\r\n        path\r\n    }\r\n}\r\n// ======================== UPDATE ========================\r\n\r\nfunction update(msg, model) {\r\n    switch (msg.type) {\r\n\r\n        case MSGS.LOCATION_CHANGE: {\r\n            console.log(\"UPDATE MSG: \", msg)\r\n            // const page = pathToPage(msg.path)\r\n            let newModel = model;\r\n            newModel.page = msg.path;\r\n            history.pushState(\"\", \"\", msg.path);\r\n            return newModel;\r\n        }\r\n\r\n        case MSGS.INPUT: {\r\n            let newModel = model;\r\n            newModel.input = msg.payload;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.SAVE: {\r\n            let newModel = model;\r\n            // Simulate Id incrementing.\r\n            let id = newModel.items.length > 0 ? lastId = newModel.items[newModel.items.length - 1].id + 1 : 1;\r\n            newModel.items.push({ id: id, task: newModel.input });\r\n            newModel.input = \"\";\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.DELETE: {\r\n            let newModel = model;\r\n            newModel.items = newModel.items.filter(item => item.id != msg.payload);\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_INITIAL_DATA_SUCCESS: {\r\n            let newModel = model;\r\n            newModel.initialData = JSON.stringify(msg.payload);\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_INITIAL_DATA_ERROR: {\r\n            let newModel = model;\r\n            newModel.initialData = msg.payload;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_ONE: {\r\n            // Model to be sent in app.\r\n            let newModel = model;\r\n            newModel.contentOne = \"Loading...\"\r\n\r\n            // Command, executed in the app.\r\n            let command = getDataOne();\r\n            // Send to app. Must be an array.\r\n            return [newModel, command]\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_ONE_SUCCESS: {\r\n            let newModel = model;\r\n            newModel.contentOne = msg.payload.body;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_ONE_ERROR: {\r\n            let newModel = model;\r\n            newModel.contentOne = msg.payload;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_TWO: {\r\n            // Model to be sent in app.\r\n            let newModel = model;\r\n            newModel.contentTwo = \"Loading...\"\r\n\r\n            // Command, executed in the app.\r\n            let command = getDataTwo();\r\n            // Send to app. Must be an array.\r\n            return [newModel, command]\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_TWO_SUCCESS: {\r\n            let newModel = model;\r\n            newModel.contentTwo = msg.payload.body;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n        case MSGS.GET_DATA_TWO_ERROR: {\r\n            let newModel = model;\r\n            newModel.contentTwo = msg.payload;\r\n            return newModel;\r\n            break;\r\n        }\r\n\r\n    }\r\n}\r\n\r\n// ======================== VIEW ========================\r\n\r\nfunction headerComponent(dispatch, model) {\r\n    return h('div', [\r\n        h('button', {\r\n            onclick: () => {\r\n                console.log(\"button clicked\")\r\n                // dispatch({\r\n                //     type: MSGS.LOCATION_CHANGE,\r\n                //     path: \"other\"\r\n                // })\r\n                dispatch(locationChangeMsg(\"/\"))\r\n            }\r\n        }, \"HOME PAGE\"),\r\n        h('button', {\r\n            onclick: () => {\r\n                console.log(\"button clicked\")\r\n                // dispatch({\r\n                //     type: MSGS.LOCATION_CHANGE,\r\n                //     path: \"other\"\r\n                // })\r\n                dispatch(locationChangeMsg(\"/other\"))\r\n            }\r\n        }, \"OTHER PAGE\"),\r\n        h('br'),\r\n        h('br'),\r\n    ]);\r\n}\r\n\r\nfunction homeView(dispatch, model) {\r\n\r\n    function table() {\r\n        var rows = []\r\n        for (var i = 0; i < model.items.length; i++) {\r\n            var item = model.items[i]\r\n            rows.push(\r\n                h('tr', {\r\n                    attributes: { 'data-id': item.id },\r\n                    onclick: (e) => {\r\n                        dispatch({\r\n                            type: MSGS.DELETE,\r\n                            payload: e.target.parentNode.attributes[\"data-id\"].value\r\n                        })\r\n                    }\r\n                }, [\r\n                        h('td', [item.task]),\r\n                    ])\r\n            )\r\n        }\r\n        return h('table', [\r\n            h('tbody', rows)\r\n        ])\r\n    }\r\n\r\n    function input() {\r\n        return h('input', {\r\n            value: model.input,\r\n            onkeyup: (e) => {\r\n                if (e.key == \"Enter\") {\r\n                    dispatch({\r\n                        type: MSGS.SAVE\r\n                    })\r\n                } else {\r\n                    dispatch({\r\n                        type: MSGS.INPUT,\r\n                        payload: e.target.value\r\n                    })\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    return h('div', [\r\n        headerComponent(dispatch, model),\r\n        h('div', [model.initialData]),\r\n        h('br'),\r\n        h('button', {\r\n            onclick: () => {\r\n                dispatch({\r\n                    type: MSGS.GET_DATA_ONE\r\n                })\r\n            }\r\n        },\r\n            \"Get data one\"\r\n        ),\r\n        h('div', [model.contentOne]),\r\n        h('br'),\r\n        input(),\r\n        h('span', [model.input]),\r\n        table()\r\n    ]);\r\n}\r\n\r\nfunction otherView(dispatch, model) {\r\n    return h('div', [\r\n        headerComponent(dispatch, model),\r\n        h('button', {\r\n            onclick: () => {\r\n                dispatch({\r\n                    type: MSGS.GET_DATA_TWO\r\n                })\r\n            }\r\n        },\r\n            \"Get data two\"\r\n        ),\r\n        h('div', [model.contentTwo])\r\n    ]);\r\n}\r\n\r\nfunction view(dispatch, model) {\r\n    console.log(\"view()\")\r\n    console.log(\"model.page:\", model.page)\r\n    switch (model.page) {\r\n        case PAGES.HOME: {\r\n            console.log(\"PAGES.HOME\")\r\n            return homeView(dispatch, model);\r\n        }\r\n        case PAGES.OTHER: {\r\n            console.log(\"PAGES.OTHER\")\r\n            return otherView(dispatch, model);\r\n        }\r\n    }\r\n}\r\n\r\n// ======================== APP ========================\r\n\r\nfunction app(init, update, view, node) {\r\n    // This is the initialization of the app i.e. only fires once\r\n    console.log(init)\r\n    // Get the current browser's URL pathname\r\n    const { pathname } = window.location;\r\n    console.log(pathname)\r\n    // Store the message with the pathname, to be dispatched\r\n    const initMsg = locationChangeMsg(pathname);\r\n    // The model is set to the initModel\r\n    let model = update(initMsg, init.model);\r\n    // The command is the initial data from an HTTP request.\r\n    // If there is a command, execute the HTTP request.\r\n    // // Update view at future time with the response.\r\n    let command = init.command;\r\n    if (command) httpEffects(dispatch, command);\r\n    // The new view is rendered based on the initial model.\r\n    let currentView = view(dispatch, model);\r\n    console.log(currentView)\r\n    // The new view is created and appended to the DOM.\r\n    let rootNode = createElement(currentView);\r\n    console.log(rootNode)\r\n    node.appendChild(rootNode);\r\n\r\n    // Dispatch sends a message with a type and payload to the update function, which updates the model, and the view renders the model\r\n    function dispatch(msg) {\r\n        // Update \"catches\" it, updates the current model, and returns it.\r\n        // returns either a model or an array with model and command\r\n        const updates = update(msg, model);\r\n        // Array check boolean\r\n        const isArray = updates.constructor === Array;\r\n        // Get the model from the array. If not array, it's just the model.\r\n        model = isArray ? updates[0] : updates;\r\n        // Get the command form the array\r\n        const command = isArray ? updates[1] : null;\r\n        // Pass the dispatch function and command object for HTTP execution.\r\n        // Update view at future time with the response.\r\n        httpEffects(dispatch, command);\r\n        // Return the new view either from normal types, or HTTP ones\r\n        // The new view is rendered based on the returned new model.\r\n        const updatedView = view(dispatch, model);\r\n        // The DOM updates are defined.\r\n        const patches = diff(currentView, updatedView);\r\n        // The DOM updates are applied.\r\n        rootNode = patch(rootNode, patches);\r\n        // The new view becomes the old view in for future dispatches.\r\n        currentView = updatedView;\r\n    }\r\n\r\n    // BACK BUTTON i.e. load the view stored in the back button.\r\n    window.addEventListener('popstate', () => {\r\n        console.log(\"POPSTATE\")\r\n        const { pathname } = window.location;\r\n        const msg = locationChangeMsg(pathname);\r\n        dispatch(msg);\r\n    })\r\n}\r\n\r\n// This returns data at a future time. The app renders something else until then.\r\nfunction httpEffects(dispatch, command) {\r\n    if (command === null) {\r\n        return;\r\n    }\r\n    // Get the request object from the command.\r\n    let request = command.request;\r\n    // Fetch, and dispatch a success or fail message.\r\n    fetch(request.url, request.headers, request.body)\r\n        .then(res => res.json())\r\n        .then(result => {\r\n            // Dispatch the returned message defined in the command.\r\n            dispatch(command.successMsg(result));\r\n        })\r\n        .catch(error => {\r\n            // Dispatch the returned message defined in the command.\r\n            dispatch(command.errorMsg(error));\r\n        });\r\n}\r\n\r\n// App initializing.\r\nconst rootNode = document.getElementById('app');\r\napp(init, update, view, rootNode);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///min-document_(ignored)?");

/***/ })

/******/ });