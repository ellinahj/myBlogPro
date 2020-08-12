webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./src/containers/mypage/EditBasicInfo.js":
/*!************************************************!*\
  !*** ./src/containers/mypage/EditBasicInfo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_mypage_ThemeChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mypage/ThemeChange */ "./src/components/mypage/ThemeChange.js");
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _components_common_PhotoUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/PhotoUpload */ "./src/components/common/PhotoUpload.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/EditBasicInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function InfoContainer(props) {
  var setShowEdit = props.setShowEdit,
      showEdit = props.showEdit,
      clickEdit = props.clickEdit;
  var userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.userInfo;
  });
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.userColor;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      changeImgFile = _useState[0],
      setChangeImgFile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      prevImg = _useState2[0],
      setPrevImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      checkTimeout = _useState3[0],
      setCheckTimeout = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      nickname = _useState4[0],
      setNickname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      mainTitle = _useState5[0],
      setMainTitle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      nicknameAvailable = _useState6[0],
      setNicknameAvailable = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      radioIndex = _useState7[0],
      setRadioIndex = _useState7[1];

  console.log(userInfo.user_font);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var checked = function checked(index) {
    setRadioIndex(index);
  };

  var handlePhotoChange = function handlePhotoChange(file, prevImg) {
    setChangeImgFile(file);
    setPrevImg(prevImg);
  };

  var handleTitleChange = function handleTitleChange(value) {
    setMainTitle(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    userInfo && setNickname(userInfo.nickname);
  }, [userInfo]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    userInfo && setMainTitle(userInfo.main_title);
  }, [userInfo]);

  var handleNicknameChange = function handleNicknameChange(value) {
    // if (value.length > 0) {
    console.log(value, 'value');
    setNickname(value);
    setNicknameAvailable(null);
    checkTimeout && clearTimeout(checkTimeout);

    if (!!value) {
      var timer = setTimeout(function () {
        var getToken = localStorage.getItem('mydiary_token');

        if (getToken) {
          var data = {
            nickname: value
          };
          Object(_api_user__WEBPACK_IMPORTED_MODULE_7__["findNickname"])(data).then(function (res) {
            console.log(res, 'resrer');

            if (res.status === 200) {
              if (res.data.message === 'available') {
                setNicknameAvailable(true);
              } else if (res.data.message === 'dupilicated') {
                setNicknameAvailable(false);
              }
            }
          });
        }
      }, 1000);
      setCheckTimeout(timer);
    }
  };

  var handleSubmit = function handleSubmit() {
    var formData = new FormData();
    changeImgFile && changeImgFile.forEach(function (item, index) {
      return formData.append("file", item);
    });
    var font = radioIndex;

    if (radioIndex === 0) {
      font = "'Gothic A1', sans-serif";
    } else if (radioIndex === 1) {
      font = "'Nanum Myeongjo', serif";
    }

    console.log(font, 'setF');
    var data = {
      nickname: nickname,
      main_title: mainTitle,
      user_color: userColor,
      user_font: font
    };
    formData.append('data', JSON.stringify(data));
    var token = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    var config = {
      access_token: token
    };
    Object(_api_user__WEBPACK_IMPORTED_MODULE_7__["updateInfo"])(config, formData).then(function (res) {
      if (res.status === 200 && res.data) {
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_8__["setUserInfo"])(res.data));
        clickEdit('changed');
        setShowEdit(false);
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_8__["setFont"])(res.data.user_font));
        alert('변경되었습니다.');
      }
    });
  };

  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(TopCon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_components_common_PhotoUpload__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clickEdit: clickEdit,
    imgFormData: handlePhotoChange,
    prevImg: setPrevImg,
    showEdit: showEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "\uB2C9\uB124\uC784"), __jsx(InputCol, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(InputRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, showEdit && userInfo ? __jsx(Input, {
    name: "nickname",
    value: nickname,
    onChange: function onChange(e) {
      return handleNicknameChange(e.target.value);
    },
    maxLength: "10",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }) : userInfo && userInfo.nickname, showEdit && __jsx(CountRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx(CountNickname, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, nickname && nickname.length <= MAX_NICKNAME ? nickname.length : 0), __jsx(Slush, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 23
    }
  }, "/"), __jsx(Maxcount, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, MAX_NICKNAME))), showEdit && !!nickname && nicknameAvailable === true && __jsx(Match, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 74
    }
  }, "\uC0AC\uC6A9\uAC00\uB2A5"), showEdit && userInfo.nickname !== nickname && nicknameAvailable === false && __jsx(Mismatch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, "\uC774\uBBF8\uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4."))), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "\uB300\uD45C\uBB38\uAD6C"), __jsx(InputRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, showEdit && userInfo ? __jsx(Input, {
    name: "main_title",
    value: mainTitle,
    onChange: function onChange(e) {
      return handleTitleChange(e.target.value);
    },
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }) : userInfo && userInfo.main_title)), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_components_mypage_ThemeChange__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  })), __jsx(MarginFontRow, {
    usercolor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "\uD3F0\uD2B8\uBCC0\uACBD"), showEdit && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Gothic, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "radio_container center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, "\uD3F0\uD2B81", __jsx("input", {
    type: "radio",
    onChange: function onChange(e) {
      return checked(0);
    },
    defaultValue: userInfo.user_font === "'Gothic A1', sans-serif",
    checked: radioIndex === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkmark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }))), __jsx(NanumMyeongjo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "radio_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, "\uD3F0\uD2B82", __jsx("input", {
    type: "radio",
    onChange: function onChange(e) {
      return checked(1);
    },
    defaultValue: userInfo.user_font === "'Nanum Myeongjo', serif",
    checked: userInfo.user_font === "'Nanum Myeongjo', serif" || radioIndex === 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkmark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 23
    }
  }))))), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, showEdit && __jsx(SubmitBtn, {
    disabled: userInfo.nickname !== nickname && nicknameAvailable !== true,
    available: userInfo.nickname === nickname || nicknameAvailable === true,
    onClick: handleSubmit,
    usercolor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, "\uBCC0\uACBD"))))));
}
var Con = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_common_Container__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "EditBasicInfo__Con",
  componentId: "ag8tan-0"
})(["display:flex;justify-content:center;"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Column",
  componentId: "ag8tan-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Row",
  componentId: "ag8tan-2"
})(["display:flex;width:100%;"]);
var MarginRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Row).withConfig({
  displayName: "EditBasicInfo__MarginRow",
  componentId: "ag8tan-3"
})(["margin-bottom:30px;align-items:center;@media screen and (max-width:780px){display:block;margin-bottom:40px;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Title",
  componentId: "ag8tan-4"
})(["", ";width:120px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["BasicTitle"]);
var TopCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__TopCon",
  componentId: "ag8tan-5"
})(["width:100%;background:#fafafa;padding:20px 30px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "EditBasicInfo__Input",
  componentId: "ag8tan-6"
})(["width:120px;height:20px;"]);
var SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "EditBasicInfo__SubmitBtn",
  componentId: "ag8tan-7"
})(["", ";margin:30px auto 0;padding:5px 10px;font-size:", ";cursor:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["BasicButton"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].mFont, function (props) {
  return props.available === true ? 'pointer' : 'not-allowed';
});
var Match = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Match",
  componentId: "ag8tan-8"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].greenFont, _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
var Mismatch = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Mismatch",
  componentId: "ag8tan-9"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].redFont, _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
var InputCol = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__InputCol",
  componentId: "ag8tan-10"
})(["display:flex;flex-direction:column;"]);
var InputRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__InputRow",
  componentId: "ag8tan-11"
})(["display:flex;align-items:center;@media screen and (max-width:780px){margin-top:15px;}"]);
var CountRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__CountRow",
  componentId: "ag8tan-12"
})(["display:flex;"]);
var CountNickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__CountNickname",
  componentId: "ag8tan-13"
})(["color:#aaa;margin-left:10px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
var Slush = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Slush",
  componentId: "ag8tan-14"
})(["color:#aaa;margin:0 2px 0;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
var Maxcount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "EditBasicInfo__Maxcount",
  componentId: "ag8tan-15"
})(["color:#aaa;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
var MarginFontRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Row).withConfig({
  displayName: "EditBasicInfo__MarginFontRow",
  componentId: "ag8tan-16"
})(["margin-bottom:20px;align-items:center;@media screen and (max-width:780px){display:block;}.end{margin-left:auto;}.center{display:flex;align-items:center;}.react-datepicker__input-container input{height:30px;font-size:15px;line-height:30px;padding-left:5px;background:", ";outline:none;border:0;border-radius:5px;::placeholder{color:#000;}}.radio_container{display:block;position:relative;padding-left:30px;margin-right:30px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.radio_container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.checkmark{position:absolute;top:0px;left:0;height:18px;width:18px;background:#ddd;border-radius:50%;}.radio_container:hover input ~ .checkmark{background-color:", ";}.radio_container input:checked ~ .checkmark{background-color:", ";}.checkmark:after{content:'';position:absolute;display:none;}.radio_container input:checked ~ .checkmark:after{display:block;}.radio_container .checkmark:after{top:6px;left:6px;width:6px;height:6px;border-radius:50%;background:", ";}"], function (props) {
  return props.usercolor;
}, function (props) {
  return props.usercolor || '#aaa';
}, function (props) {
  return props.usercolor || '#aaa';
}, function (props) {
  return props.usercolor || '#fff';
});
var NanumMyeongjo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__NanumMyeongjo",
  componentId: "ag8tan-17"
})(["font-family:'Nanum Myeongjo',serif;margin-right:15px;@media screen and (max-width:780px){margin-top:15px;}"]);
var Gothic = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EditBasicInfo__Gothic",
  componentId: "ag8tan-18"
})(["font-family:'Gothic A1',sans-serif;margin-right:15px;display:flex;align-items:center;@media screen and (max-width:780px){margin-top:15px;}"]);
var MAX_NICKNAME = 10;

/***/ })

})
//# sourceMappingURL=mypage.js.8e33782104375d0567b9.hot-update.js.map