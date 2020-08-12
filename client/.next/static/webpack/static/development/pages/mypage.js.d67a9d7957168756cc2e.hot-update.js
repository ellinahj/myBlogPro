webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./pages/mypage/index.js":
/*!*******************************!*\
  !*** ./pages/mypage/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mypage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_common_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/common/Layout */ "./src/components/common/Layout.js");
/* harmony import */ var _src_containers_mypage_TopInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/containers/mypage/TopInfo */ "./src/containers/mypage/TopInfo.js");
/* harmony import */ var _src_containers_mypage_EditBasicInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/containers/mypage/EditBasicInfo */ "./src/containers/mypage/EditBasicInfo.js");
/* harmony import */ var _src_containers_mypage_EditPw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/containers/mypage/EditPw */ "./src/containers/mypage/EditPw.js");
/* harmony import */ var _src_containers_mypage_EditMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/containers/mypage/EditMenu */ "./src/containers/mypage/EditMenu.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/pages/mypage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Mypage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showEdit = _useState[0],
      setShowEdit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showEditPw = _useState2[0],
      setShowEditPw = _useState2[1];

  var clickEdit = function clickEdit(e) {
    setShowEdit(!showEdit);
  };

  var clickEditPw = function clickEditPw(e) {
    setShowEditPw(!showEditPw);
  };

  return __jsx(_src_components_common_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_containers_mypage_TopInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditBasicInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clickEdit: clickEdit,
    showEdit: showEdit,
    setShowEdit: setShowEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditPw__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showEditPw: showEditPw,
    clickEditPw: clickEditPw,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=mypage.js.d67a9d7957168756cc2e.hot-update.js.map