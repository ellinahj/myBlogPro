webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
  return state.common.userColor;
});
var theme = {
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
var BasicButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;"]);
var BlueEditBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:", ";color:", ";font-weight:bold;cursor:pointer;"], theme.mlFont, userColor && userColorr);
var BasicTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;font-size:", ";color:#111;"], theme.mlFont);


/***/ })

})
//# sourceMappingURL=_app.js.13f121e164eca5aaaf05.hot-update.js.map