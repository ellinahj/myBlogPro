webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth */ "./src/api/auth.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/common/ImgBtn */ "./src/components/common/ImgBtn.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Header() {
  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  var userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.userInfo;
  });
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.isLoggedIn;
  });
  var tooltip = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.showToolTip;
  });
  var luminantColor = userColor && Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["colorLuminance"])(userColor, 0.5);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Router.asPath !== '/join') {
      var showTool = JSON.parse(localStorage.getItem('showTool'));

      if (showTool === false) {
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setToolTip"])(false));
      }

      var storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      var config = {
        access_token: storedToken
      };
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_5__["loginCheck"])(config).then(function (res) {
        if (res.status === 200 && res.data) {
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setThemeColor"])(res.data.user_color));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setUserInfo"])(res.data));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setFont"])(res.data.user_font));
          dispatch(setLoding(false));
          dispatch(setLogin(true));
        }
      });
    }
  }, []);

  var handleToolTip = function handleToolTip() {
    localStorage.setItem('showTool', JSON.stringify(false));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setToolTip"])(false));
  };

  return __jsx(HeadWrap, {
    userColor: userColor,
    luminantColor: luminantColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(Logo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "MyBlog_")), __jsx(ProfileContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, userInfo && (userInfo.profile_url ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/mypage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(Img, {
    src: userInfo.profile_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })) : __jsx(StyledTitle, {
    hoverColor: userInfo,
    onClick: function onClick() {
      return Router.push('/mypage');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "\uB098\uC758 \uC0C9\uAE54\uC5D0 \uB9DE\uB294, \uB098\uC758 \uB85C\uADF8.")), !userInfo && __jsx(StyledTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, "\uB098\uC758 \uC0C9\uAE54\uC5D0 \uB9DE\uB294, \uB098\uC758 \uB85C\uADF8."), isLoggedIn && tooltip && __jsx(ToolTipWrap, {
    profileUrl: userInfo && userInfo.profile_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "triangle test_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx(ToolTip, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "\uB098\uC758 \uC815\uBCF4\uB97C ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 22
    }
  }), "\uC785\uB825\uD574\uBCF4\uC138\uC694!"), __jsx(CloseBtn, {
    src: '/images/minClose.svg',
    width: 12,
    height: 12,
    onClick: handleToolTip,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }))));
}
var HeadWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__HeadWrap",
  componentId: "dzw6po-0"
})(["width:100%;max-width:765px;height:60px;position:fixed;top:0;margin:0 auto;display:flex;align-items:center;background-image:linear-gradient(90deg,", ",", ");z-index:101;justify-content:space-between;"], function (props) {
  return props.userColor;
}, function (props) {
  return props.luminantColor;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Logo",
  componentId: "dzw6po-1"
})(["font-weight:bold;font-size:25px;margin-left:20px;color:#fff;cursor:pointer;"]);
var ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__ProfileContainer",
  componentId: "dzw6po-2"
})(["margin-right:20px;position:relative;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__StyledLink",
  componentId: "dzw6po-3"
})(["cursor:pointer;"]);
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Header__StyledTitle",
  componentId: "dzw6po-4"
})(["color:#fff;font-size:17px;:hover{color:", ";cursor:", ";}"], function (props) {
  return props.hoverColor && '#f7f7f7';
}, function (props) {
  return props.hoverColor ? 'pointer' : '';
});
var ToolTipWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__ToolTipWrap",
  componentId: "dzw6po-5"
})(["position:absolute;top:", ";right:", ";width:95px;height:50px;background:#fefefe;z-index:9;display:flex;align-items:center;justify-content:center;border-radius:3px;border:1px solid #eee;animation:motion 0.8s linear infinite alternate;margin-top:0;@keyframes motion{0%{margin-top:0px;}100%{margin-top:7px;}}.triangle{top:-19px;right:12px;position:absolute;display:inline-block;width:0;height:0;border-style:solid;border-width:10px 5px;border-radius:3px;}.triangle.test_1{border-color:transparent transparent #fefefe transparent;}"], function (props) {
  return props.profileUrl ? '45px' : '30px';
}, function (props) {
  return props.profileUrl ? '12px' : '0px';
});
var ToolTip = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__ToolTip",
  componentId: "dzw6po-6"
})(["color:#000;font-size:", ";line-height:18px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_8__["theme"].ssFont);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Header__Img",
  componentId: "dzw6po-7"
})(["cursor:pointer;width:", ";height:", ";border-radius:", "px;margin-right:15px;"], function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width / 2 || 15;
});
var CloseBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Header__CloseBtn",
  componentId: "dzw6po-8"
})(["position:absolute;top:6px;right:6px;&:hover{background:#ddd;}"]);

/***/ })

})
//# sourceMappingURL=login.js.90aa382bb5960da1db78.hot-update.js.map