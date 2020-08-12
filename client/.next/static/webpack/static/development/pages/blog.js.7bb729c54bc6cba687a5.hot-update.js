webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/components/common/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/common/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/common/Header.js");
/* harmony import */ var _BottomMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BottomMenu */ "./src/components/common/BottomMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isScrollDown = _useState[0],
      setScollDown = _useState[1];

  var prevScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  var handle = function handle() {
    var currentScroll = window.pageYOffset;

    if (currentScroll === 0 || currentScroll < prevScroll.current) {
      setScollDown(true);
    } else {
      setScollDown(false);
    }

    prevScroll.current = currentScroll;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handle);
    return function () {
      window.removeEventListener('scroll', handle);
    };
  }, []);
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.common.loading;
  });
  return __jsx(LayoutWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(Main, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, children)), __jsx(_BottomMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isScrollDown: isScrollDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
}
var LayoutWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__LayoutWrap",
  componentId: "sc-1m1dv9h-0"
})(["width:100%;height:100%;padding-top:60px;position:relative;max-width:765px;margin:0 auto;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Container",
  componentId: "sc-1m1dv9h-1"
})(["padding-bottom:30px;"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Main",
  componentId: "sc-1m1dv9h-2"
})(["position:relative;"]);
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Loading",
  componentId: "sc-1m1dv9h-3"
})(["position:absolute;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:9999;"]);

/***/ })

})
//# sourceMappingURL=blog.js.7bb729c54bc6cba687a5.hot-update.js.map