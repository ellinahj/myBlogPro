webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/containers/blog/ListContainer.js":
/*!**********************************************!*\
  !*** ./src/containers/blog/ListContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_blog_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/blog/List */ "./src/components/blog/List.js");
/* harmony import */ var _components_blog_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/blog/Menu */ "./src/components/blog/Menu.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var _api_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/blog */ "./src/api/blog.js");
/* harmony import */ var _components_blog_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/blog/Search */ "./src/components/blog/Search.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/blog/ListContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function ListContainer() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  var luminantColor = userColor && Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["colorLuminance"])(userColor, 0.5);
  var userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.userInfo;
  });
  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.category;
  });
  var clickMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.common.clickMenu;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      menuIndex = _useState[0],
      setMenuIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSticky = _useState2[0],
      setSticky = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loadMore = _useState3[0],
      setLoadMore = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selectedCateId = _useState4[0],
      setSelectedCateId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      blogData = _useState5[0],
      setBlogData = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      sendToListValue = _useState6[0],
      setSendToListValue = _useState6[1];

  var handleScroll = function handleScroll() {
    if (window.pageYOffset >= 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      var config = {
        access_token: getToken
      };
      Object(_api_blog__WEBPACK_IMPORTED_MODULE_7__["getCate"])(config).then(function (res) {
        if (res.status === 200 && res.data) {
          if (category && category.length > 0) {
            setSelectedCateId(category[0].id); // if (category[0].id !== clickMenu) {
            //   console.log(clickMenu, 'cliclclclclclclcllc');
            //   dispatch(setClickMenu(clickMenu));
            // } else {
            //   setSelectedCateId(category[0].id);
            // }

            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setClickMenu"])({
              cateId: category[0].id,
              index: 0
            }));
          }

          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setCate"])(res.data.data));
        }
      });
    }
  }, []);
  console.log(clickMenu, 'clickMenu');

  var handleMenuClick = function handleMenuClick(index, cateId) {
    // 메뉴 컴포넌트 변경 클릭
    setMenuIndex(index);
    setSelectedCateId(cateId);
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setClickMenu"])({
      index: index,
      cateId: cateId
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    var config = {
      access_token: storedToken
    };

    if (category && category.length > 0) {
      console.log('hi', clickMenu.cateId);
      Object(_api_blog__WEBPACK_IMPORTED_MODULE_7__["getBlog"])(config, clickMenu && clickMenu.cateId).then(function (res) {
        if (res.status === 200) {
          setBlogData(res.data.data);
        }
      });
    }
  }, [category]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    var config = {
      access_token: storedToken
    };
    var cateId = selectedCateId;
    Object(_api_blog__WEBPACK_IMPORTED_MODULE_7__["getBlog"])(config, cateId).then(function (res) {
      if (res.status === 200) {
        setBlogData(res.data.data);
      }
    });
  }, [menuIndex]); // useEffect(() => {
  //   const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
  //   const config = {
  //     access_token: storedToken
  //   };
  //   getBlog(config, clickMenu).then(res => {
  //     if (res.status === 200) {
  //       setBlogData(res.data.data);
  //     }
  //   });
  // }, [clickMenu]);

  var getSearch = function getSearch(value) {
    if (blogData && blogData.length !== 0 && value !== '') {
      var storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      var config = {
        access_token: storedToken
      };

      if (category && category.length > 0) {
        var cateId = category[0].id;
        Object(_api_blog__WEBPACK_IMPORTED_MODULE_7__["getSearchedBlog"])(config, cateId, value).then(function (res) {
          if (res.status === 200) {
            setBlogData(res.data.data);
            setSendToListValue(value);
          }
        });
      }
    }
  };

  var deleteItem = function deleteItem(id, imageName) {
    console.log(id, imageName, 'im');
    var getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      var config = {
        access_token: getToken
      };
      var data = {
        id: id,
        image_url: imageName
      };
      Object(_api_blog__WEBPACK_IMPORTED_MODULE_7__["deleteBlog"])(config, data).then(function (res) {
        if (res.status === 200 && res.data) {
          console.log(res, 'res dele');
        }
      });
    }
  };

  return __jsx(ListCon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx(_components_blog_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleMenuClick: handleMenuClick,
    luminantColor: luminantColor,
    isSticky: isSticky,
    menuIndex: menuIndex,
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }), blogData && blogData.length !== 0 && __jsx(_components_blog_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    getSearch: getSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }), __jsx(_components_blog_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blogData: blogData,
    luminantColor: luminantColor,
    userInfo: userInfo,
    userColor: userColor,
    sendToListValue: sendToListValue,
    deleteItem: deleteItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }));
}
var ListCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ListContainer__ListCon",
  componentId: "sc-3stqnk-0"
})(["width:100%;height:100%;position:relative;"]);

/***/ })

})
//# sourceMappingURL=blog.js.c6ea68e32af6a4831790.hot-update.js.map