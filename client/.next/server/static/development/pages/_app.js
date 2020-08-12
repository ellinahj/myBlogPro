module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-crop/dist/ReactCrop.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/store */ "./src/store/index.js");
/* harmony import */ var _src_utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/theme */ "./src/utils/theme.js");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`

  html{
        width:100%;
        height:100%;
  };
  body{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
        position: relative;
        font-family: ${props => props.currentValue};
        font-size:${_src_utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont};
        background:#fcfcfc;
  };
  #__next{  
            max-width:767px;
            min-height:100%;
            box-sizing:border-box;
            margin: 0 auto;
            border-left: 1px solid #dedede;
            border-right: 1px solid #dedede;
            background: #fff;
  };
  a {
      text-decoration:none; 
      outline:none;        
  };
  ul{
      list-style:none;
  };
  button{
    //font-family: ${props => props.currentValue};
    font-size:${_src_utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].sFont};
    :hover {
    opacity: 1;
    }
  }
  ::-webkit-input-placeholder {
    font-family: ${props => props.currentValue};
    font-size:${_src_utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont};
}
input{
  font-family: ${props => props.currentValue};
  font-size:${_src_utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont};
}
textarea{
  font-family: ${props => props.currentValue};
  font-size:${_src_utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont};
}
`;
function MyApp({
  Component,
  pageProps
}) {
  const {
    0: currentColor,
    1: setCurrentColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('#7c7cec');
  const {
    0: currentValue,
    1: setCurrentValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`'Gothic A1', sans-serif`);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleSubscribe() {
      const newColor = _src_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().common.userColor;

      if (newColor !== currentColor) {
        setCurrentColor(newColor);
      }
    }

    const subscribeStore = _src_store__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(handleSubscribe);
    return () => subscribeStore();
  }, [currentColor]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleChange() {
      const newValue = _src_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().common.selectFont;

      if (newValue !== currentValue) {
        setCurrentValue(newValue);
      }
    }

    const unsubscribe = _src_store__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(handleChange);
    return () => unsubscribe();
  }, [currentValue]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _src_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(GlobalStyle, {
    theme: _src_utils_theme__WEBPACK_IMPORTED_MODULE_4__,
    userTheme: currentColor,
    currentValue: currentValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _src_utils_theme__WEBPACK_IMPORTED_MODULE_4__,
    userColor: currentColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ "./src/actions/base/actionTypes.js":
/*!*****************************************!*\
  !*** ./src/actions/base/actionTypes.js ***!
  \*****************************************/
/*! exports provided: INCREMENT, SET_THEME_COLOR, SET_LOGIN, SET_USER_INFO, SET_CATE, SET_LOADING, SET_TOOLTIP, SET_CLICKMENU, SET_FONT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME_COLOR", function() { return SET_THEME_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGIN", function() { return SET_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_INFO", function() { return SET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CATE", function() { return SET_CATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOOLTIP", function() { return SET_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLICKMENU", function() { return SET_CLICKMENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FONT", function() { return SET_FONT; });
const INCREMENT = 'INCREMENT';
const SET_THEME_COLOR = 'SET_THEME_COLOR';
const SET_LOGIN = 'SET_LOGIN';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_CATE = 'SET_CATE';
const SET_LOADING = 'SET_LOADING';
const SET_TOOLTIP = 'SET_TOOTIP';
const SET_CLICKMENU = 'SET_CLICKMENU';
const SET_FONT = 'SET_FONT';

/***/ }),

/***/ "./src/reducers/base/index.js":
/*!************************************!*\
  !*** ./src/reducers/base/index.js ***!
  \************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/base/actionTypes */ "./src/actions/base/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  number: 0,
  userColor: '#7c7cec',
  isLoggedIn: undefined,
  userInfo: undefined,
  category: undefined,
  loading: false,
  showToolTip: true,
  clickMenu: {
    cateId: undefined
  },
  selectFont: "'Noto Sans KR', sans-serifo"
};

const commonReducer = (state = initialState, action) => {
  if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]) {
    return _objectSpread({}, state, {
      number: state.number + 1
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_THEME_COLOR"]) {
    return _objectSpread({}, state, {
      userColor: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOGIN"]) {
    return _objectSpread({}, state, {
      isLoggedIn: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_USER_INFO"]) {
    return _objectSpread({}, state, {
      userInfo: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CATE"]) {
    return _objectSpread({}, state, {
      category: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]) {
    return _objectSpread({}, state, {
      loading: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_TOOLTIP"]) {
    return _objectSpread({}, state, {
      showToolTip: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CLICKMENU"]) {
    return _objectSpread({}, state, {
      clickMenu: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_FONT"]) {
    return _objectSpread({}, state, {
      selectFont: action.payload
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (commonReducer);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/base */ "./src/reducers/base/index.js");



const composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])({
  realtime: true,
  port: 3003
});
const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  common: _reducers_base__WEBPACK_IMPORTED_MODULE_2__["default"]
});
const initialState = {
  common: _reducers_base__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, composeEnhancers());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/*! exports provided: theme, BasicButton, BlueEditBtn, BasicTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicButton", function() { return BasicButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueEditBtn", function() { return BlueEditBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTitle", function() { return BasicTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  white: '#ffffff',
  black: '#000000',
  ssFont: '13px',
  sFont: '15px',
  mFont: '17px',
  mlFont: '19px',
  lFont: '20px',
  xlFont: '23px',
  greenFont: '#2fae00',
  redFont: '#b30000'
};
const BasicButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;"]);
const BlueEditBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:", ";font-weight:bold;cursor:pointer;color:#69b7ff;"], theme.mlFont);
const BasicTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;font-size:", ";color:#111;"], theme.mlFont);


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map