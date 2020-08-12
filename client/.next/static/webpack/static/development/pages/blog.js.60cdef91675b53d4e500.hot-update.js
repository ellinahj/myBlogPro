webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/api/blog.js":
/*!*************************!*\
  !*** ./src/api/blog.js ***!
  \*************************/
/*! exports provided: getCate, setBlog, getBlog, getSearchedBlog, deleteBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCate", function() { return getCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlog", function() { return setBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchedBlog", function() { return getSearchedBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony import */ var _utils_apiSend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiSend */ "./src/utils/apiSend.js");


var getCate = function getCate(config) {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/category",
    method: 'get',
    headers: config
  });
};

var setBlog = function setBlog(config, data) {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/blog/write/",
    method: 'post',
    headers: config,
    data: data
  });
};

var getBlog = function getBlog(config, id) {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/blog/read/".concat(id),
    method: 'get',
    headers: config
  });
};

var getSearchedBlog = function getSearchedBlog(config, cateId, value) {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/blog/read/search/".concat(cateId, "/").concat(value),
    method: 'get',
    headers: config
  });
};

var deleteBlog = function deleteBlog(config, data) {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/blog/delete/",
    method: 'post',
    headers: config,
    data: data
  });
};



/***/ })

})
//# sourceMappingURL=blog.js.60cdef91675b53d4e500.hot-update.js.map