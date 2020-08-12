webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./src/reducers/base/index.js":
/*!************************************!*\
  !*** ./src/reducers/base/index.js ***!
  \************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/base/actionTypes */ "./src/actions/base/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  number: 0,
  userColor: '#7c7cec',
  isLoggedIn: undefined,
  userInfo: undefined,
  category: undefined,
  loading: false,
  showToolTip: true,
  clickMenu: {
    cateId: undefined
  },
  selectFont: "'Noto Sans KR',sans-serifo"
};

var commonReducer = function commonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["INCREMENT"]) {
    return _objectSpread({}, state, {
      number: state.number + 1
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_THEME_COLOR"]) {
    return _objectSpread({}, state, {
      userColor: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_LOGIN"]) {
    return _objectSpread({}, state, {
      isLoggedIn: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_USER_INFO"]) {
    return _objectSpread({}, state, {
      userInfo: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CATE"]) {
    return _objectSpread({}, state, {
      category: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING"]) {
    return _objectSpread({}, state, {
      loading: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_TOOLTIP"]) {
    return _objectSpread({}, state, {
      showToolTip: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CLICKMENU"]) {
    return _objectSpread({}, state, {
      clickMenu: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_FONT"]) {
    return _objectSpread({}, state, {
      selectFont: action.payload
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (commonReducer);

/***/ })

})
//# sourceMappingURL=mypage.js.f4f95c9ed01b606421d4.hot-update.js.map