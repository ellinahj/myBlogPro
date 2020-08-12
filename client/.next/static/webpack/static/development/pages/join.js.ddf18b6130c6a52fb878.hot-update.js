webpackHotUpdate("static/development/pages/join.js",{

/***/ "./src/containers/join/index.js":
/*!**************************************!*\
  !*** ./src/containers/join/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JoinContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth */ "./src/api/auth.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/join/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function JoinContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      pwd = _useState2[0],
      setPwd = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      pwdCheck = _useState3[0],
      setPwdCheck = _useState3[1]; // const [idState, setIdState] = useState('');
  // const [pwdState, setPwdState] = useState('');
  // const [pwdCheckState, setPwdCheckState] = useState('');


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      allState = _useState4[0],
      setAllState = _useState4[1];

  var enterKey = function enterKey() {
    if (window.event.keyCode === 13) {
      userJoin();
    }
  };

  var idConfirm = function idConfirm(value) {
    setId(value); // if (value !== '' && !idRegex.test(value)) {
    //   console.log('?');
    //   setIdState(false);
    //   return;
    // }
    // setIdState(true);
  };

  var pwdConfirm = function pwdConfirm(value) {
    setPwd(value); // if (value !== '' && !pwdRegex.test(value)) {
    //   setPwdState(false);
    //   return;
    // }
    // //
    // if (value !== '' && pwdCheckState && value !== pwdCheck) {
    //   setPwdCheckState(false);
    //   return;
    // } else if (value !== '' && pwdCheckState && value === pwdCheck) {
    //   setPwdCheckState(true);
    // }
    // setPwdState(true);
  };

  var pwdCheckConfirm = function pwdCheckConfirm(value) {
    setPwdCheck(value); // if (value !== '' && pwd !== value) {
    //   setPwdCheckState(false);
    //   return;
    // }
    // setPwdCheckState(true);
  }; // useEffect(() => {
  //   if (idState && pwdState && pwdCheckState) {
  //     setAllState(true);
  //   } else {
  //     setAllState(false);
  //   }
  // }, [idState, pwdState, pwdCheckState]);


  var userJoin = function userJoin() {
    var data = {
      user_id: id,
      password: pwd
    };
    console.log(data, 'data');
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_5__["join"])(data).then(function (res) {
      console.log(res, 'login res login');

      if (res.status === 200) {
        alert(' 회원가입이 완료되었습니다.');
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      }
    });
  };

  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(InputWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785"), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514 *"), __jsx("input", {
    name: "id",
    value: id,
    onChange: function onChange(e) {
      return idConfirm(e.target.value);
    },
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), id.length > 0 && !idRegCheck(id) && __jsx(WarningWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(Warning, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "\uC601\uBB38,\uC22B\uC790\uC870\uD569 6~13\uC790\uB9AC\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638 *"), __jsx("input", {
    name: "pwd",
    value: pwd,
    onChange: function onChange(e) {
      return pwdConfirm(e.target.value);
    },
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), pwd.length > 0 && !pwRegCheck(pwd) && __jsx(WarningWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(Warning, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "\uC601\uBB38,\uC22B\uC790,\uD2B9\uC218\uBB38\uC790 \uC870\uD569 6~13\uC790\uB9AC\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778 *"), __jsx("input", {
    name: "pwdCheck",
    onKeyUp: enterKey,
    value: pwdCheck,
    onChange: function onChange(e) {
      return pwdCheckConfirm(e.target.value);
    },
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), pwdCheck.length > 0 && pwdCheck !== pwd && __jsx(WarningWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(Warning, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(JoinBtn, {
    userColor: userColor,
    disabled: !idRegCheck(id) || !pwRegCheck(pwd) || pwdCheck !== pwd,
    onClick: userJoin,
    onKeyUp: enterKey,
    allOk: idRegCheck(id) && pwRegCheck(pwd) && pwdCheck === pwd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785")));
}
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__Container",
  componentId: "sc-1lzr6p9-0"
})(["display:flex;width:100%;height:100%;align-items:center;justify-content:center;"]);
var InputWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__InputWrap",
  componentId: "sc-1lzr6p9-1"
})(["width:300px;height:auto;margin-top:100px;display:flex;flex-direction:column;input{width:100%;height:40px;box-sizing:border-box;margin-bottom:5px;padding-left:10px;font-size:17px;}"]);
var JoinBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "join__JoinBtn",
  componentId: "sc-1lzr6p9-2"
})(["width:100%;height:45px;box-sizing:border-box;font-size:15px;background:", ";text-align:center;line-height:45px;margin-top:20px;margin-bottom:20px;color:#fff;border:none;font-family:'Nanum Myeongjo',serif;"], function (props) {
  return props.allOk ? "".concat(function (props) {
    return props.userColor;
  }) : '#7c7cec';
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__Title",
  componentId: "sc-1lzr6p9-3"
})(["text-align:center;color:#333;font-size:24px;margin-bottom:30px;"]);
var WarningWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__WarningWrap",
  componentId: "sc-1lzr6p9-4"
})(["display:flex;align-items:center;margin-bottom:20px;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__SubTitle",
  componentId: "sc-1lzr6p9-5"
})(["font-size:", ";margin-bottom:10px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont);
var Warning = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__Warning",
  componentId: "sc-1lzr6p9-6"
})(["color:", ";font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].redFont, _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].sFont);
var PwdCon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__PwdCon",
  componentId: "sc-1lzr6p9-7"
})(["margin-bottom:15px;font-size:13px;cursor:pointer;"]);
var JoinCon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__JoinCon",
  componentId: "sc-1lzr6p9-8"
})(["margin-bottom:15px;font-size:13px;cursor:pointer;"]);
var BottomWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "join__BottomWrap",
  componentId: "sc-1lzr6p9-9"
})(["display:flex;justify-content:space-between;"]);
var idRegex = /^[A-Za-z0-9+]{6,13}$/;

function idRegCheck(value) {
  return idRegex.test(value);
}

var pwdRegex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

function pwRegCheck(value) {
  return pwdRegex.test(value);
}

/***/ })

})
//# sourceMappingURL=join.js.ddf18b6130c6a52fb878.hot-update.js.map