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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertHeader(contentDiv){\n    let header = document.createElement('header');\n    header.style.display = 'flex';\n    header.style.alignItems = 'center';\n    header.style.justifyContent = 'center';\n    contentDiv.appendChild(header);\n\n    let logoImage = document.createElement('img');\n    logoImage.src = '../src/assets/tempus-wine-editado.png';\n    logoImage.style.width = '8vw';\n    logoImage.style.height = '8vw';\n    header.appendChild(logoImage);\n\n    let mainPElement = document.createElement('p');\n    mainPElement.innerHTML = 'Your best choice from';\n    mainPElement.style.display = 'flex';\n    mainPElement.style.fontFamily = 'Playfair Display';\n    mainPElement.style.fontSize = '2.4vw';\n    mainPElement.style.color = 'rgb(207, 154, 41)';\n    header.appendChild(mainPElement);\n\n    let now = document.createElement('div');\n    now.innerHTML = 'now';\n    now.style.paddingLeft = '5px';\n    now.style.paddingRight = '5px';\n\tnow.style.fontFamily = 'Playfair Display';\n\tnow.style.fontSize = '2.4vw';\n    now.style.color = 'rgb(125, 35, 60)';\n    mainPElement.appendChild(now);\n\n    let on = document.createElement('p');\n    on.innerHTML = 'on';\n    mainPElement.appendChild(on);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertHeader);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\nlet contentDiv = document.querySelector('.content');\n\nObject(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentDiv);\nObject(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(contentDiv);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction navBar(contentDiv) {\n    let introDiv = document.createElement('div');\n    let intro = document.createElement('button');\n    let menu = document.createElement('button');\n    let about = document.createElement('button');\n\n    introDiv.style.display = 'flex';\n    introDiv.style.gap = '3vw';\n    introDiv.style.justifyContent = 'center';\n\n    intro.innerHTML = 'Intro';\n    intro.style.fontFamily = 'Quicksand';\n    intro.style.fontSize = '3vw';\n    intro.style.border = 'none';\n    intro.style.backgroundColor = 'white';\n    intro.style.color = 'rgb(207, 154, 41)';\n    intro.addEventListener(\"mouseover\", () => intro.style.color = 'rgb(125, 35, 60)');\n    intro.addEventListener(\"mouseout\", () => intro.style.color = 'rgb(207, 154, 41)');\n\n    menu.innerHTML = 'Menu';\n    menu.style.fontFamily = 'Quicksand';\n    menu.style.fontSize = '3vw';\n    menu.style.border = 'none';\n    menu.style.backgroundColor = 'white';\n    menu.style.color = 'rgb(207, 154, 41)';\n    menu.addEventListener(\"mouseover\", () => menu.style.color = 'rgb(125, 35, 60)');\n    menu.addEventListener(\"mouseout\", () => menu.style.color = 'rgb(207, 154, 41)');\n\n    about.innerHTML = 'About';\n    about.style.fontFamily = 'Quicksand';\n    about.style.fontSize = '3vw';\n    about.style.border = 'none';\n    about.style.backgroundColor = 'white';\n    about.style.color = 'rgb(207, 154, 41)';\n    about.addEventListener(\"mouseover\", () => about.style.color = 'rgb(125, 35, 60)');\n    about.addEventListener(\"mouseout\", () => about.style.color = 'rgb(207, 154, 41)');\n    \n    introDiv.appendChild(intro);\n    introDiv.appendChild(menu);\n    introDiv.appendChild(about);\n    contentDiv.appendChild(introDiv);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navBar);\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ });