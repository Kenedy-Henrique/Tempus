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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertAbout(contentDiv){\n    let aboutDiv = document.createElement('div');\n    let aboutText = document.createElement('p');\n\n    aboutDiv.classList.add('aboutDiv');\n    aboutDiv.style.position = 'relative';\n    aboutDiv.style.top = '4.5vw';\n    aboutDiv.style.backgroundColor = 'white';\n    aboutDiv.style.width = '80vw';\n    aboutDiv.style.left = '50%';\n    aboutDiv.style.transform = 'translateX(-50%)';\n\n    aboutText.style.fontFamily = 'Playfair Display';\n    aboutText.style.position = 'relative';\n    aboutText.style.top = '4vw';\n    aboutText.style.fontSize = '1.5vw';\n    aboutText.style.color = 'rgba(0, 0, 0, .7)';\n    aboutText.style.textAlign = 'center';\n    aboutText.innerHTML = 'Find us at:<br><br>Adress: XXXXXXXX<br><br>Phone: XXXXX-XXXXX<br><br>';\n\n    aboutDiv.appendChild(aboutText);\n    contentDiv.appendChild(aboutDiv);\n\n    return aboutDiv;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertAbout);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/animationLineMechanics.js":
/*!***************************************!*\
  !*** ./src/animationLineMechanics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction animationLineMechanics(pastState, presentState){\n    let animationLine = document.querySelector('.animationLine');\n    let introPostion = '7.65vw';\n    let menuPostion = '19.3vw';\n    let aboutPostion = '31.3vw';\n\n    if(pastState === 'introDiv'){\n        if(presentState === 'menuDiv'){\n            animationLine.animate([\n                { left: introPostion},\n                { left: menuPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        } else if(presentState === 'aboutDiv'){\n            animationLine.animate([\n                { left: introPostion},\n                { left: aboutPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        }\n    } else if(pastState === 'menuDiv'){\n        if(presentState === 'introDiv'){\n            animationLine.animate([\n                { left: menuPostion},\n                { left: introPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        } else if(presentState === 'aboutDiv'){\n            animationLine.animate([\n                { left: menuPostion},\n                { left: aboutPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        }\n    } else if(pastState === 'aboutDiv'){\n        if(presentState === 'menuDiv'){\n            animationLine.animate([\n                { left: aboutPostion},\n                { left: menuPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        } else if(presentState === 'introDiv'){\n            animationLine.animate([\n                { left: aboutPostion},\n                { left: introPostion}\n              ], {\n                duration: 200,\n                fill: \"forwards\"\n            })\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationLineMechanics);\n\n//# sourceURL=webpack:///./src/animationLineMechanics.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertHeader(contentDiv){\n    let header = document.createElement('header');\n    header.style.width = '80vw';\n    header.style.position = 'relative';\n    header.style.top = '1vw';\n    header.style.left = '50%';\n    header.style.transform = 'translateX(-50%)';\n    header.style.display = 'flex';\n    header.style.alignItems = 'center';\n    header.style.justifyContent = 'center';\n    header.style.backgroundColor = 'white';\n    header.style.boxShadow = '0px 0px 3px 1px rgba(0, 0, 0, .2)';\n    contentDiv.appendChild(header);\n\n    let logoImage = document.createElement('img');\n    logoImage.src = '../src/assets/tempus-wine-editado.png';\n    logoImage.style.width = '8vw';\n    logoImage.style.height = '8vw';\n    header.appendChild(logoImage);\n\n    let mainPElement = document.createElement('p');\n    mainPElement.innerHTML = 'Your best choice from';\n    mainPElement.style.display = 'flex';\n    mainPElement.style.fontFamily = 'Playfair Display';\n    mainPElement.style.fontSize = '2.4vw';\n    mainPElement.style.color = 'rgb(207, 154, 41)';\n    header.appendChild(mainPElement);\n\n    let now = document.createElement('div');\n    now.innerHTML = 'now';\n    now.style.paddingLeft = '5px';\n    now.style.paddingRight = '5px';\n    now.style.fontFamily = 'Playfair Display';\n    now.style.fontSize = '2.4vw';\n    now.style.color = 'rgb(125, 35, 60)';\n    mainPElement.appendChild(now);\n\n    let on = document.createElement('p');\n    on.innerHTML = 'on';\n    mainPElement.appendChild(on);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertHeader);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro */ \"./src/intro.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _animationLineMechanics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animationLineMechanics */ \"./src/animationLineMechanics.js\");\n\n\n\n\n\n\n\nlet contentDiv = document.querySelector('.content');\n\nObject(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentDiv);\nObject(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(contentDiv);\n\nlet currentContent = Object(_intro__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contentDiv);\n\nlet pastState;\nlet presentState;\n\nlet introBtn = document.querySelector('.introBtn');\nlet menuBtn = document.querySelector('.menuBtn');\nlet aboutBtn = document.querySelector('.aboutBtn');\n\nintroBtn.addEventListener('click', () => {\n    pastState = currentContent.className;\n    contentDiv.removeChild(currentContent);\n    currentContent = Object(_intro__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contentDiv);\n    presentState = currentContent.className;\n    Object(_animationLineMechanics__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pastState, presentState);\n});\n\nmenuBtn.addEventListener('click', () => {\n    pastState = currentContent.className;\n    contentDiv.removeChild(currentContent);\n    currentContent = Object(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv);\n    presentState = currentContent.className;\n    Object(_animationLineMechanics__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pastState, presentState);\n});\n\naboutBtn.addEventListener('click', () => {\n    pastState = currentContent.className;\n    contentDiv.removeChild(currentContent);\n    currentContent = Object(_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(contentDiv);\n    presentState = currentContent.className;\n    Object(_animationLineMechanics__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pastState, presentState);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/intro.js":
/*!**********************!*\
  !*** ./src/intro.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertIntro(contentDiv){\n    let introDiv = document.createElement('div');\n    let wineBottlesImage = document.createElement('img');\n    let text = document.createElement('p');\n\n    introDiv.classList.add('introDiv');\n    introDiv.style.position = 'relative';\n    introDiv.style.top = '4.5vw';\n    introDiv.style.backgroundColor = 'white';\n    introDiv.style.width = '80vw';\n    introDiv.style.left = '50%';\n    introDiv.style.transform = 'translateX(-50%)';\n\n    wineBottlesImage.src = '../src/assets/wine-bottles_burned.png';\n    wineBottlesImage.style.height = '50vw';\n    wineBottlesImage.style.width = 'auto';\n\n    text.style.fontFamily = 'Playfair Display';\n    text.style.fontSize = '2vw';\n    text.style.padding = '2vw';\n    text.style.position = 'absolute';\n    text.style.top = '10vw';\n    text.style.left = '30vw';\n    text.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';\n    text.style.color = 'rgba(0, 0, 0, .7)';\n    text.innerHTML = 'The best place if you are looking for the best of the best wine.<br><br>With more than 10 years serving our clients with the best product, we are sure to serve you as well.<br><br>Join that story with us.';\n\n\n    introDiv.appendChild(wineBottlesImage);\n    introDiv.appendChild(text);\n    contentDiv.appendChild(introDiv);\n\n    return introDiv;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertIntro);\n\n//# sourceURL=webpack:///./src/intro.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertMenu(contentDiv){\n    let menu = document.createElement('div');\n    menu.classList.add('menuDiv');\n\n    menu.style.position = 'relative';\n    menu.style.display = 'flex';\n    menu.style.flexWrap = 'wrap';\n    menu.style.justifyContent = 'center';\n    menu.style.gap = '4vw';\n    menu.style.top = '4.5vw';\n    menu.style.backgroundColor = 'white';\n    menu.style.width = '80vw';\n    menu.style.left = '50%';\n    menu.style.transform = 'translateX(-50%)';\n\n    let products = [\n        {\n            name: `Cabernet Sauvignon 2015`,\n            price: `$928.85`,\n            imageLocation: `../src/assets/0.png`},\n        {\n            name: `La Tâche Grand Cru 2000`,\n            price: `$8399.50`,\n            imageLocation: `../src/assets/1.png`\n        },\n        {\n            name: `Case Basse Sangiovese Toscana 2006`,\n            price: `$800`,\n            imageLocation: `../src/assets/2.png`\n        },\n        {\n            name: `Sauternes 2001`,\n            price: `$1091`,\n            imageLocation: `../src/assets/3.png`\n        },\n        {\n            name: `Very Old Single Harvest Port 1968`,\n            price: `$312.78`,\n            imageLocation: `../src/assets/4.png`\n        },\n        {\n            name: `Grands-Échezeaux Grand Cru 2011`,\n            price: `$3850`,\n            imageLocation: `../src/assets/5.png`\n        },\n        {\n            name: `Red 2014`,\n            price: `$431.03`,\n            imageLocation: `../src/assets/6.png`\n        },\n        {\n            name: `Toscana 2005`,\n            price: `$1455.65`,\n            imageLocation: `../src/assets/7.png`\n        },\n        {\n            name: `Pêra-Manca Tinto 2005`,\n            price: `$599.10`,\n            imageLocation: `../src/assets/8.png`\n        },\n        {\n            name: `Pomerol 2005`,\n            price: `$6001`,\n            imageLocation: `../src/assets/9.png`\n        },\n    ];\n\n    for(let i=0; i<=9; i++){\n        let product = document.createElement('div');\n        let wineImage = document.createElement('img');\n        let namePTag = document.createElement('p');\n        let pricePTag = document.createElement('p');\n        let shoppingCartButton = document.createElement('button');\n\n        product.style.width = '15vw';\n        product.style.height = '15vw';\n        product.style.position = 'relative';\n        product.style.top = '3vw';\n        product.style.borderRadius = '10px';\n        product.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n        product.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';\n        product.addEventListener(\"mouseover\", () => {\n            /*product.style.backgroundColor = `rgba(125, 35, 60, 0.349)`;*/\n            product.style.transform = 'scale(1.1)';\n            /*product.style.backgroundColor = 'rgba(207, 154, 41, 0.349)';*/\n        });\n        product.addEventListener(\"mouseout\", () => {\n            /*product.style.backgroundColor = 'rgba(207, 154, 41, 0.349)';*/\n            product.style.transform = 'scale(1.0)';\n            /*product.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';*/\n        });\n\n        wineImage.src = products[i].imageLocation;\n        wineImage.style.position = 'relative';\n        wineImage.style.left = '1vw';\n        wineImage.style.top = '2vw';\n        wineImage.style.height = '11vw';\n        wineImage.style.width = 'auto';\n\n        shoppingCartButton.style.backgroundImage = 'url(../src/assets/shopping-cart-svgrepo-com.svg)';\n        shoppingCartButton.style.position = 'relative';\n        shoppingCartButton.style.left = '2vw';\n        shoppingCartButton.style.border = 'none';\n        shoppingCartButton.style.borderRadius = '20%';\n        shoppingCartButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';\n        shoppingCartButton.style.width = '2vw';\n        shoppingCartButton.style.height = '2vw';\n\n        namePTag.innerHTML = products[i].name;\n        namePTag.style.position = 'absolute';\n        namePTag.style.top = '3vw';\n        namePTag.style.left = '5.5vw';\n        namePTag.style.fontFamily = 'Playfair Display';\n        namePTag.style.fontSize = '1.5vw';\n        namePTag.style.color = 'rgba(0, 0, 0, .7)';\n\n        pricePTag.innerHTML = products[i].price;\n        pricePTag.style.position = 'absolute';\n        pricePTag.style.top = '10.4vw';\n        pricePTag.style.left = '8vw';\n        pricePTag.style.fontFamily = 'Quicksand';\n        pricePTag.style.fontSize = '1.5vw';\n\n        product.appendChild(wineImage);\n        product.appendChild(shoppingCartButton);\n        product.appendChild(namePTag);\n        product.appendChild(pricePTag);\n        products[i] = product;\n        menu.appendChild(products[i]);\n    }\n\n    contentDiv.appendChild(menu);\n\n    return menu;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertMenu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertNavBar(contentDiv) {\n    let navBar = document.createElement('div');\n    let intro = document.createElement('button');\n    let menu = document.createElement('button');\n    let about = document.createElement('button');\n    let line = document.createElement('div');\n    let animationLine = document.createElement('div');\n\n    navBar.style.display = 'flex';\n    navBar.style.flexDirection = 'row';\n    navBar.style.flexWrap = 'wrap';\n    navBar.style.gap = '3vw';\n    navBar.style.justifyContent = 'center';\n    navBar.style.position = 'relative';\n    navBar.style.top = '4.5vw';\n    navBar.style.backgroundColor = 'white';\n    navBar.style.width = '80vw';\n    navBar.style.left = '50%';\n    navBar.style.transform = 'translateX(-50%)';\n    navBar.style.zIndex = '1';\n    navBar.style.boxShadow = '0px 0px 3px 1px rgba(0, 0, 0, .2)';\n\n    intro.classList.add('introBtn');\n    intro.innerHTML = 'Intro';\n    intro.style.fontFamily = 'Playfair Display';\n    intro.style.fontSize = '3vw';\n    intro.style.border = 'none';\n    intro.style.backgroundColor = 'white';\n    intro.style.color = 'rgb(207, 154, 41)';\n    intro.addEventListener(\"mouseover\", () => intro.style.color = 'rgb(125, 35, 60)');\n    intro.addEventListener(\"mouseout\", () => intro.style.color = 'rgb(207, 154, 41)');\n    intro.style.position = 'relative';\n    intro.style.top = '1.5vw';\n\n    menu.classList.add('menuBtn');\n    menu.innerHTML = 'Menu';\n    menu.style.fontFamily = 'Playfair Display';\n    menu.style.fontSize = '3vw';\n    menu.style.border = 'none';\n    menu.style.backgroundColor = 'white';\n    menu.style.color = 'rgb(207, 154, 41)';\n    menu.addEventListener(\"mouseover\", () => menu.style.color = 'rgb(125, 35, 60)');\n    menu.addEventListener(\"mouseout\", () => menu.style.color = 'rgb(207, 154, 41)');\n    menu.style.position = 'relative';\n    menu.style.top = '1.5vw';\n\n    about.classList.add('aboutBtn');\n    about.innerHTML = 'About';\n    about.style.fontFamily = 'Playfair Display';\n    about.style.fontSize = '3vw';\n    about.style.border = 'none';\n    about.style.backgroundColor = 'white';\n    about.style.color = 'rgb(207, 154, 41)';\n    about.addEventListener(\"mouseover\", () => about.style.color = 'rgb(125, 35, 60)');\n    about.addEventListener(\"mouseout\", () => about.style.color = 'rgb(207, 154, 41)');\n    about.style.position = 'relative';\n    about.style.top = '1.5vw';\n\n    line.style.width = '50vw';\n    line.style.height = '0.2vw';\n    line.style.backgroundColor = 'white';\n\n    animationLine.style.width = '10vw';\n    animationLine.style.height = '1.5px';\n    animationLine.style.backgroundColor = 'rgb(125, 35, 60)';\n    animationLine.classList.add('animationLine');\n    animationLine.style.position = 'relative';\n    animationLine.style.bottom = '1.5vw';\n    animationLine.style.left = '7.65vw';\n    \n    line.appendChild(animationLine);\n    navBar.appendChild(intro);\n    navBar.appendChild(menu);\n    navBar.appendChild(about);\n    navBar.appendChild(line);\n    contentDiv.appendChild(navBar);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertNavBar);\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ });