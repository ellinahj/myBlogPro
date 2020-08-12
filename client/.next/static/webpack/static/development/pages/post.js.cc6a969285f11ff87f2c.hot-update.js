webpackHotUpdate("static/development/pages/post.js",{

/***/ "./src/containers/blog/PostContainer.js":
/*!**********************************************!*\
  !*** ./src/containers/blog/PostContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/ko */ "./node_modules/date-fns/esm/locale/ko/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _components_blog_ThreePhotoUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/blog/ThreePhotoUpload */ "./src/components/blog/ThreePhotoUpload.js");
/* harmony import */ var _src_api_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/api/blog */ "./src/api/blog.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/blog/PostContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])('ko', date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_4__["default"]);








function addContainer(props) {
  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      radioIndex = _useState2[0],
      setRadioIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      imgFile = _useState3[0],
      setImgFile = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cate: 0,
    title: '',
    location: '',
    comment: ''
  }),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      test = _useState5[0],
      setTest = _useState5[1];

  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  var clickMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.clickMenu;
  });
  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.category;
  });

  var handleData = function handleData(e) {
    console.log(e, 'e');
    setValue(_objectSpread({}, value, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }; // const handleDateChange = date => {
  //   setStartDate(date);
  // };


  var checked = function checked(id, index) {
    setRadioIndex(index);
    setValue(_objectSpread({}, value, {
      cate: id
    }));
  };

  console.log(clickMenu, 'clickMenu');

  var _imgFormData = function imgFormData(file) {
    setImgFile(file);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      var config = {
        access_token: getToken
      };
      Object(_src_api_blog__WEBPACK_IMPORTED_MODULE_8__["getCate"])(config).then(function (res) {
        if (res.status === 200 && res.data) {
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_11__["setCategory"])(res.data.data));
          console.log(res.data.data, 'rerere');
        }
      });
    }
  }, []);

  var submit = function submit() {
    if (value.title.length > 0 && value.comment.length > 0) {
      var existFileItems = imgFile.filter(function (item) {
        return item !== null;
      });
      var formData = new FormData();
      existFileItems && existFileItems.forEach(function (item) {
        return formData.append("file", item);
      });
      var data = value;
      var numDate = Date.parse(startDate);
      data.date = numDate;
      data.cate = category && category[radioIndex].id;
      formData.append('data', JSON.stringify(data));
      console.log(formData, 'formdata');
      console.log(startDate, 'start');
      var getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        var config = {
          access_token: getToken
        };
        Object(_src_api_blog__WEBPACK_IMPORTED_MODULE_8__["setBlog"])(config, formData).then(function (res) {
          console.log(res, 'res');

          if (res.status === 200) {
            alert('등록되었습니다.');
            next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/blog');
            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_11__["setClickMenu"])({
              cateId: category[radioIndex].id,
              index: radioIndex
            }));
          }
        });
      }
    } else {
      alert('제목과 내용은 필수항목입니다.');
    }
  };

  return __jsx(Contaniner, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(Subject, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "\uBD84\uB958"), category && category.length > 0 && category.map(function (item, index) {
    return __jsx(CateWrap, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "radio_container",
      key: index,
      userColor: userColor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, item.title, __jsx("input", {
      type: "radio",
      onChange: function onChange(e) {
        return checked(item.id, index);
      },
      checked: radioIndex === index,
      autoComplete: "off",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "checkmark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    })));
  })), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(Subject, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "\uC81C\uBAA9"), __jsx(Input, {
    type: "text",
    name: "title",
    value: value.title,
    onChange: handleData,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(Subject, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "\uC7A5\uC18C"), __jsx(Input, {
    type: "text",
    name: "location",
    value: value.location,
    width: 150,
    onChange: handleData,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  })), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(Subject, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, "\uB0B4\uC6A9"), __jsx(CountRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(CountComment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, value.comment && value.comment.length <= MAX_COMMENT ? value.comment.length : 0), __jsx(Slush, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "/"), __jsx(Maxcount, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, MAX_COMMENT))), __jsx(Textarea, {
    type: "text",
    maxLength: "200",
    name: "comment",
    value: value.comment,
    onChange: handleData,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  })), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx(Subject, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "\uC0AC\uC9C4\uCCA8\uBD80"), __jsx(_components_blog_ThreePhotoUpload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imgFormData: function imgFormData(e) {
      return _imgFormData(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })), __jsx(RowRight, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(SubmitBtn, {
    onClick: function onClick(e) {
      return submit(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "\uC800\uC7A5"))));
}
var Contaniner = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_components_common_Container__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "PostContainer__Contaniner",
  componentId: "u8kmlp-0"
})(["display:flex;flex-direction:column;"]);
var CateWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__CateWrap",
  componentId: "u8kmlp-1"
})(["@media (max-width:768px){margin-top:15px;}"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__Row",
  componentId: "u8kmlp-2"
})(["display:flex;justify-content:flex-start;padding:20px 15px;box-sizing:border-box;align-items:center;@media (max-width:768px){display:block;}.end{margin-left:auto;}.react-datepicker__input-container input{height:30px;font-size:15px;line-height:30px;padding-left:5px;background:#eee;outline:none;border:0;border-radius:5px;::placeholder{color:#000;}}.radio_container{display:block;position:relative;padding-left:30px;margin-right:30px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.radio_container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.checkmark{position:absolute;top:0px;left:0;height:21px;width:21px;background:", ";border-radius:50%;}.radio_container:hover input ~ .checkmark{background-color:", ";}.radio_container input:checked ~ .checkmark{background-color:", ";}.checkmark:after{content:'';position:absolute;display:none;}.radio_container input:checked ~ .checkmark:after{display:block;}.radio_container .checkmark:after{top:7px;left:7px;width:6px;height:6px;border-radius:50%;background:", ";}"], function (props) {
  return props.userColor || '#aaa';
}, function (props) {
  return props.userColor || '#aaa';
}, function (props) {
  return props.userColor || '#aaa';
}, function (props) {
  return props.userColor || '#fff';
});
var Col = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__Col",
  componentId: "u8kmlp-3"
})(["display:inline-flex;svg:hover{fill:", ";cursor:pointer;}"], function (props) {
  return props.userColor;
});
var Subject = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__Subject",
  componentId: "u8kmlp-4"
})(["margin-right:20px;white-space:pre;", ""], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["BasicTitle"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "PostContainer__Input",
  componentId: "u8kmlp-5"
})(["height:30px;border:none;background:#eee;border-radius:5px;width:", "px;flex:", ";@media screen and (max-width:768px){width:100%;margin-top:20px;}"], function (props) {
  return props.width;
}, function (props) {
  return !props.width && 1;
});
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].textarea.withConfig({
  displayName: "PostContainer__Textarea",
  componentId: "u8kmlp-6"
})(["flex:1;min-height:200px;@media screen and (max-width:768px){width:100%;margin-top:20px;}"]);
var SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostContainer__SubmitBtn",
  componentId: "u8kmlp-7"
})(["padding:5px 10px;cursor:pointer;font-size:16px;"]);
var RowRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Row).withConfig({
  displayName: "PostContainer__RowRight",
  componentId: "u8kmlp-8"
})(["justify-content:center;"]);
var CountRow = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__CountRow",
  componentId: "u8kmlp-9"
})(["display:flex;margin:10px 20px 0 0;"]);
var CountComment = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__CountComment",
  componentId: "u8kmlp-10"
})(["color:#aaa;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["theme"].sFont);
var Slush = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostContainer__Slush",
  componentId: "u8kmlp-11"
})(["color:#aaa;margin:0 2px 0;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["theme"].sFont);
var Maxcount = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "PostContainer__Maxcount",
  componentId: "u8kmlp-12"
})(["color:#aaa;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["theme"].sFont);
var MAX_COMMENT = 200;

/***/ })

})
//# sourceMappingURL=post.js.cc6a969285f11ff87f2c.hot-update.js.map