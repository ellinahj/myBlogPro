webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/utils/apiSend.js":
/*!******************************!*\
  !*** ./src/utils/apiSend.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/base */ "./src/actions/base/index.js");




var localURL = 'http://127.0.0.1:3000';
var proURL = '';
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "".concat(localURL, "/api"),
  timeout: 5000
});
instance.interceptors.request.use(function (config) {
  // store.dispatch(setLoading(true));
  return config;
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // http status가 200인 경우
  // 응답 바로 직전에 대해 작성
  // .then()
  return response;
}, function (error) {
  /*
      http status가 200이 아닌 경우
      응답 에러 처리
      .catch()
  */
  if (error.response) {
    if (error.response.status === 401) {
      if (!(error.response.data.message === 'Mismatched pwd')) {
        alert('아이디나 비밀번호를 확인해주세요.');
      }
    } else if (error.response.status === 400) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setLogin"])(false));
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setUserInfo"])(undefined));
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setThemeColor"])('#7c7cec'));
    } else if (error.response.status === 404) {
      alert('누락된 요청');
    } else if (error.response.status >= 500) {
      alert('서버 에러가 발생했습니다.관리자에게 문의해주세요.');
    }
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=login.js.0e70aeeec2a46bd70f0a.hot-update.js.map