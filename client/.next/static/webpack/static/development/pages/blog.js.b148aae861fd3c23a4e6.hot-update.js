webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/components/blog/Menu.js":
/*!*************************************!*\
  !*** ./src/components/blog/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuCo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/blog/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MenuCo(props) {
  var _this = this;

  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.common.category;
  });
  var clickMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.common.clickMenu;
  });
  var userColor = props.userColor,
      luminantColor = props.luminantColor,
      isSticky = props.isSticky,
      menuIndex = props.menuIndex,
      handleMenuClick = props.handleMenuClick;
  return __jsx(MenuWrap, {
    luminantColor: luminantColor,
    isSticky: isSticky,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, category && category.length > 0 && category.map(function (item, index) {
    return __jsx(Menu, {
      onClick: function onClick(e) {
        return handleMenuClick(index, item.id);
      },
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, item.title, __jsx(MenuBorder, {
      userColor: userColor,
      active: clickMenu && clickMenu.index === index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }));
  }));
}
var MenuWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__MenuWrap",
  componentId: "bozyzx-0"
})(["width:100%;white-space:nowrap;overflow:auto;::-webkit-scrollbar{display:none;}max-width:765px;height:60px;background-color:#fff;position:relative;border-top:1px solid #ddd;border-bottom:1px solid #ddd;display:flex;align-items:center;justify-content:space-around;", " &:nth-child(", "){:last-child::after{}}"], function (props) {
  return props.isSticky && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["position:fixed;top:60px;z-index:100;"]);
}, function (props) {
  return props.index;
});
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu",
  componentId: "bozyzx-1"
})(["position:relative;:hover{cursor:pointer;}"]);
var MenuBorder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__MenuBorder",
  componentId: "bozyzx-2"
})(["", ""], function (_ref) {
  var active = _ref.active;
  return active && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:100%;height:6px;position:absolute;background-color:", ";bottom:0.5px;opacity:0.3;"], function (props) {
    return props.userColor;
  });
});

/***/ })

})
//# sourceMappingURL=blog.js.b148aae861fd3c23a4e6.hot-update.js.map