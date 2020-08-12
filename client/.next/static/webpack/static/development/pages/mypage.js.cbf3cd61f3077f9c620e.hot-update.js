webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./src/containers/mypage/TopInfo.js":
/*!******************************************!*\
  !*** ./src/containers/mypage/TopInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/TopInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TopInfo(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.userInfo;
  });

  var logout = function logout() {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setLogin"])(false));
    localStorage.removeItem('mydiary_token');
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setUserInfo"])(null));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setThemeColor"])('#7c7cec'));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setFont"])("'Noto Sans KR', sans-serifo"));
  };

  return __jsx(MyInfoWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(Profile, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Img, {
    src: userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png',
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(NickName, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, userInfo && userInfo.nickname))), __jsx(LogoutContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(Logout, {
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))));
}
var MyInfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "TopInfo__MyInfoWrap",
  componentId: "sc-13rvb4i-0"
})(["width:100%;padding:45px 40px 45px;box-sizing:border-box;background-color:#fafafa;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:space-between;border-bottom:1px solid #dedede;"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TopInfo__Column",
  componentId: "sc-13rvb4i-1"
})(["display:flex;flex-direction:column;"]);
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TopInfo__Profile",
  componentId: "sc-13rvb4i-2"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "TopInfo__Img",
  componentId: "sc-13rvb4i-3"
})(["width:", ";height:", ";border-radius:", "px;margin-right:15px;border:1px solid #ddd;"], function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width / 2 || 15;
});
var NickName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TopInfo__NickName",
  componentId: "sc-13rvb4i-4"
})(["font-size:18px;font-weight:bold;margin-top:20px;"]);
var LogoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TopInfo__LogoutContainer",
  componentId: "sc-13rvb4i-5"
})(["display:flex;align-items:center;"]);
var Logout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TopInfo__Logout",
  componentId: "sc-13rvb4i-6"
})(["color:#aaa;cursor:pointer;"]);

/***/ })

})
//# sourceMappingURL=mypage.js.cbf3cd61f3077f9c620e.hot-update.js.map