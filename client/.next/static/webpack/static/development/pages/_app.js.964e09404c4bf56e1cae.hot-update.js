webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store */ "./src/store/index.js");
/* harmony import */ var _src_utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils/theme */ "./src/utils/theme.js");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n  html{\n        width:100%;\n        height:100%;\n  };\n  body{\n        margin:0;\n        padding:0;\n        width:100%;\n        height:100%;\n        position: relative;\n        font-family: ", ";\n        font-size:", ";\n        background:#fcfcfc;\n  };\n  #__next{  \n            max-width:767px;\n            min-height:100%;\n            box-sizing:border-box;\n            margin: 0 auto;\n            border-left: 1px solid #dedede;\n            border-right: 1px solid #dedede;\n            background: #fff;\n  };\n  a {\n      text-decoration:none; \n      outline:none;        \n  };\n  ul{\n      list-style:none;\n  };\n  button{\n    font-family: ", ";\n    :hover {\n    opacity: 1;\n    }\n  }\n  ::-webkit-input-placeholder {\n    font-family: ", ";\n    font-size:", ";\n}\ninput{\n  font-family: ", ";\n  font-size:", ";\n}\ntextarea{\n  font-family: ", ";\n  font-size:", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.currentValue;
}, function (props) {
  return props.theme.lFont;
}, function (props) {
  return props.currentValue;
}, function (props) {
  return props.currentValue;
}, function (props) {
  return props.theme.lFont;
}, function (props) {
  return props.currentValue;
}, _src_utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].mlFont, function (props) {
  return props.currentValue;
}, function (props) {
  return props.theme.lFont;
});
function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#7c7cec'),
      currentColor = _useState[0],
      setCurrentColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("'Gothic A1', sans-serif"),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function handleSubscribe() {
      var newColor = _src_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().common.userColor;

      if (newColor !== currentColor) {
        setCurrentColor(newColor);
      }
    }

    var subscribeStore = _src_store__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(handleSubscribe);
    return function () {
      return subscribeStore();
    };
  }, [currentColor]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function handleChange() {
      var newValue = _src_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().common.selectFont;

      if (newValue !== currentValue) {
        setCurrentValue(newValue);
      }
    }

    var unsubscribe = _src_store__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(handleChange);
    return function () {
      return unsubscribe();
    };
  }, [currentValue]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _src_store__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(GlobalStyle, {
    theme: _src_utils_theme__WEBPACK_IMPORTED_MODULE_6__,
    userTheme: currentColor,
    currentValue: currentValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _src_utils_theme__WEBPACK_IMPORTED_MODULE_6__,
    userColor: currentColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=_app.js.964e09404c4bf56e1cae.hot-update.js.map