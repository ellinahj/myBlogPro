webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./src/containers/mypage/EditMenu.js":
/*!*******************************************!*\
  !*** ./src/containers/mypage/EditMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var _api_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/blog */ "./src/api/blog.js");
/* harmony import */ var _api_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/category */ "./src/api/category.js");
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/ImgBtn */ "./src/components/common/ImgBtn.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");

var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/EditMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function ChangeMenu(props) {
  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.common.category;
  });
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.common.userColor;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      edit = _useState[0],
      setEdit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    0: {},
    1: {},
    2: {}
  }),
      cateValue = _useState2[0],
      setCateValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      cateInputCount = _useState3[0],
      setCateInputCount = _useState3[1];

  var countCate = category ? category.length : 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      var config = {
        access_token: getToken
      };
      Object(_api_blog__WEBPACK_IMPORTED_MODULE_5__["getCate"])(config).then(function (res) {
        if (res.status === 200 && res.data) {
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setCategory"])(res.data.data));
          var result = {};
          res.data.data ? res.data.data.forEach(function (item, idx) {
            result[idx] = {
              title: item.title,
              id: item.id
            };
          }) : [];
          setCateValue(result);
          setCateInputCount(0);
        }
      });
    }
  }, []);

  var handleEditMenu = function handleEditMenu() {
    setEdit(!edit);
  };

  var handleInput = function handleInput(index, value) {
    setCateValue(_objectSpread({}, cateValue, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, index, _objectSpread({}, cateValue[index], {
      title: value
    }))));
  };

  var increaseCateValue = function increaseCateValue() {
    if (countCate + cateInputCount < max_category_count) setCateInputCount(cateInputCount + 1);
  };

  var deleteMenu = function deleteMenu() {
    if (window.confirm('메뉴에 저장된 글도 함께 삭제됩니다. 정말 삭제하시겠습니까?')) {
      return true;
    } else {
      return false;
    }
  };

  var handleDelete = function handleDelete(idx) {
    var _tempCateValue$idx;

    var tempCateValue = _objectSpread({}, cateValue);

    if (((_tempCateValue$idx = tempCateValue[idx]) === null || _tempCateValue$idx === void 0 ? void 0 : _tempCateValue$idx.id) !== undefined) {
      var hasIdLength = Object.values(tempCateValue).filter(function (value) {
        return !!(value === null || value === void 0 ? void 0 : value.id);
      }).length;

      if (hasIdLength <= 1) {
        alert('메뉴는 최소 1개 이여야 합니다.');
        return;
      }

      var confirmDelete = deleteMenu();

      if (!confirmDelete) {
        return;
      }

      var getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        var config = {
          access_token: getToken
        };
        var cateId = tempCateValue[idx].id;
        console.log(cateId, 'cateId');
        var data = {
          id: cateId
        };
        Object(_api_category__WEBPACK_IMPORTED_MODULE_6__["deleteCate"])(config, data).then(function (res) {
          if (res.status === 200 && res.data) {
            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setCategory"])(res.data.data));
            var result = {};
            res.data.data ? res.data.data.forEach(function (item, idx) {
              result[idx] = {
                title: item.title,
                id: item.id
              };
            }) : [];
            setCateValue(result);
            setCateInputCount(0);
          }
        });
      }
    } else {
      console.log('??');
    }

    Object.keys(cateValue).forEach(function (key) {
      if (Number(key) === idx) {
        tempCateValue[key] = undefined; // console.log('in1');
      } else if (Number(key) > idx) {
        tempCateValue[Number(key) - 1] = cateValue[key];
        tempCateValue[key] = undefined; // console.log('in2');
      }

      setCateValue(tempCateValue);
      setCateInputCount(cateInputCount - 1); // console.log('in3');
    });
  };

  var handleMenuUpdate = function handleMenuUpdate() {
    // const hasIdObj = Object.values(cateValue).filter(value => !!value?.id);
    var hasIdArr = Object.values(cateValue).filter(function (obj) {
      return obj.title === '';
    });

    if (hasIdArr.length > 0) {
      alert('메뉴이름을 입력해주세요.');
    } else {
      // console.log(cateValue, 'arr');
      var data = cateValue; // console.log(data, 'data');

      var getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        var config = {
          access_token: getToken
        };
        Object(_api_category__WEBPACK_IMPORTED_MODULE_6__["updateCate"])(config, data).then(function (res) {
          if (res.status === 200 && res.data) {
            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setCategory"])(res.data.data));
            console.log(res.data.data, ' 변경 후');
            var result = {};
            res.data.data ? res.data.data.forEach(function (item, idx) {
              result[idx] = {
                title: item.title,
                id: item.id
              };
            }) : [];
            setCateValue(result);
            setEdit(false);
            setCateInputCount(0);
            alert('변경되었습니다.');
            console.log('변경====');
          }
        });
      }
    }
  };

  var showDeleteBtn = Object.values(cateValue).filter(function (value) {
    return !!(value === null || value === void 0 ? void 0 : value.id);
  }).length > 1;
  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, __jsx(CenterRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx(StyledColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(TitleRow, {
    edit: edit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, "\uBA54\uB274", __jsx(TitleInfo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "(\uCD5C\uB300 3\uAC1C, 15\uAE00\uC790 \uC774\uD558 \uAD8C\uC7A5) ")), __jsx(EditTitle, {
    onClick: handleEditMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, "\uBA54\uB274\uBCC0\uACBD")), category && category.length > 0 && category.map(function (item, index) {
    return edit ? __jsx(MenuRow, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }, __jsx(NumberFont, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 19
      }
    }, index + 1, "."), __jsx(Input, {
      defaultValue: item.title,
      name: category.length - 1,
      onChange: function onChange(e) {
        return handleInput(index, e.target.value);
      },
      autoComplete: "off",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 19
      }
    })) : __jsx(MenuRow, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }
    }, __jsx(NumberFont, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }, index + 1, "."), __jsx(MenuFont, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 19
      }
    }, item.title), showDeleteBtn && __jsx(CloseBtn, {
      key: index + 3,
      src: '/images/close.svg',
      width: 15,
      height: 15,
      bg: "#ddd",
      radius: "50%",
      padding: 2,
      onClick: function onClick() {
        return handleDelete(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }
    }));
  }), edit && __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, cateInputCount > 0 && Array(cateInputCount).fill('').map(function (i, idx) {
    var index = idx + category.length;
    return __jsx(CenterLeftRow, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 23
      }
    }, __jsx(NumberFont, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, index + 1, "."), __jsx(Input, {
      name: index,
      value: cateValue[index] ? cateValue[index].title : '',
      onChange: function onChange(e) {
        return handleInput(e);
      },
      autoComplete: "off",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }), __jsx(CloseBtn, {
      src: '/images/close.svg',
      width: 15,
      height: 15,
      bg: "#ddd",
      radius: "50%",
      padding: 2,
      onClick: function onClick() {
        return handleDelete(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    }));
  })), edit && countCate + cateInputCount < max_category_count && __jsx(MenuRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(AddRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, __jsx(AddMenuBtn, {
    onClick: increaseCateValue,
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, "\uBA54\uB274\uCD94\uAC00"))), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, edit && __jsx(SubmitBtn, {
    onClick: handleMenuUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  }, "\uBCC0\uACBD")))));
}
var Con = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_common_Container__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "EditMenu__Con",
  componentId: "yedjf2-0"
})(["display:flex;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMenu__Row",
  componentId: "yedjf2-1"
})(["display:flex;width:100%;"]);
var MenuRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__MenuRow",
  componentId: "yedjf2-2"
})(["width:", ";height:", ";margin-bottom:10px;display:flex;align-items:center;"], function (props) {
  return props.width ? "".concat(props.width, "px") : '';
}, function (props) {
  return props.height ? "".concat(props.height, "px") : '';
});
var AddRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMenu__AddRow",
  componentId: "yedjf2-3"
})(["display:flex;align-items:center;"]);
var CenterRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMenu__CenterRow",
  componentId: "yedjf2-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;"]);
var CenterLeftRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMenu__CenterLeftRow",
  componentId: "yedjf2-5"
})(["display:flex;align-items:center;margin-bottom:10px;"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMenu__Column",
  componentId: "yedjf2-6"
})(["display:flex;flex-direction:column;"]);
var StyledColumn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Column).withConfig({
  displayName: "EditMenu__StyledColumn",
  componentId: "yedjf2-7"
})(["width:100%;background:#fafafa;box-sizing:border-box;padding:30px;"]);
var TitleRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuRow).withConfig({
  displayName: "EditMenu__TitleRow",
  componentId: "yedjf2-8"
})(["margin-bottom:30px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__Title",
  componentId: "yedjf2-9"
})(["", ";margin-right:20px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["BasicTitle"], function (props) {
  return props.theme.mlFont;
});
var TitleInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__TitleInfo",
  componentId: "yedjf2-10"
})(["color:#888;"]);
var MenuFont = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__MenuFont",
  componentId: "yedjf2-11"
})(["color:", ";"], function (props) {
  return props.userColor;
});
var NumberFont = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__NumberFont",
  componentId: "yedjf2-12"
})(["width:33px;"]);
var EditTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "EditMenu__EditTitle",
  componentId: "yedjf2-13"
})(["", ""], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["BlueEditBtn"]);
var AddMenuBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "EditMenu__AddMenuBtn",
  componentId: "yedjf2-14"
})(["color:", ";border:1px solid ", ";border-radius:5px;width:75px;height:33px;cursor:pointer;font-weight:bold;margin:20px 20px 0 33px;"], function (props) {
  return props.userColor;
}, function (props) {
  return props.userColor;
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "EditMenu__Input",
  componentId: "yedjf2-15"
})(["width:210px;height:20px;"]);
var CloseBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "EditMenu__CloseBtn",
  componentId: "yedjf2-16"
})(["margin-left:10px;"]);
var max_category_count = 3;
var SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "EditMenu__SubmitBtn",
  componentId: "yedjf2-17"
})(["", ";margin:30px auto 0;padding:5px 10px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_9__["BasicButton"], function (props) {
  return props.theme.mFont;
});

/***/ })

})
//# sourceMappingURL=mypage.js.e61cfa4970e65ae8ed0f.hot-update.js.map