webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/components/blog/List.js":
/*!*************************************!*\
  !*** ./src/components/blog/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/blog/List.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function List(props) {
  var _this = this;

  var luminantColor = props.luminantColor,
      blogData = props.blogData,
      sendToListValue = props.sendToListValue,
      deleteItem = props.deleteItem;
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  var clickMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.clickMenu;
  });
  console.log(clickMenu, 'clickMenuList====');
  return __jsx(ListArea, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, blogData && blogData.length > 0 && blogData.map(function (item, index) {
    // console.log(blogData, 'blog');
    var date = item.now_date ? item.now_date : ''; // console.log(date, 'date');

    var stillUtc = moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(date).format(); // const stillUtc = momentz

    var convertedDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(stillUtc).format('YYYY월 M월 D일');
    return __jsx(CardContainer, {
      key: index,
      luminantColor: luminantColor,
      userColor: userColor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, __jsx(IconCloseCon, {
      onClick: function onClick() {
        return deleteItem(item.id, item.image_url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx(IconCloseImg, {
      src: '/images/close.svg',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    })), __jsx(ImageArea, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      defaultControlsConfig: {
        nextButtonText: '>',
        prevButtonText: '<',
        pagingDotsStyle: {
          fill: '#ddd'
        }
      },
      heightMode: "current",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, item && item.image_url.map(function (item) {
      return __jsx(Img, {
        src: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 32
        }
      });
    }))), __jsx(ContentArea, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx(Date, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, item.now_date ? "\uC791\uC131\uC77C ".concat(convertedDate) : ''), __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, item.title), __jsx(Comment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, item.comment), __jsx(Location, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, item.location_name && __jsx(Location_icon, {
      src: '/images/location.png',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 44
      }
    }), item.location_name)));
  }), blogData && blogData.length === 0 && __jsx(Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(AllView, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "\uC804\uCCB4\uBCF4\uAE30"), __jsx(WriteWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(Write, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "\uCCAB\uBC88\uC9F8 \uAE00\uC744 \uC791\uC131\uD574\uBCF4\uC138\uC694."), __jsx(WriteImg, {
    src: '/images/keyboard.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  })))));
}
var ListArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ListArea",
  componentId: "sc-15878t4-0"
})(["width:100%;height:100%;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "List__Content",
  componentId: "sc-15878t4-1"
})(["padding:0 40px 40px;box-sizing:border-box;display:flex;flex-wrap:wrap;flex-direction:column;"]);
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__CardContainer",
  componentId: "sc-15878t4-2"
})(["display:flex;flex-direction:column;margin:0 0 30px;width:100%;padding:30px;box-sizing:border-box;border-top:2px dotted ", ";background:#f6f6f6;border-radius:5px;position:relative;"], function (props) {
  return props.userColor ? props.userColor : '#ddd';
});
var ImageArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ImageArea",
  componentId: "sc-15878t4-3"
})(["width:100%;height:100%;margin-bottom:10px;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__Img",
  componentId: "sc-15878t4-4"
})(["width:100%;height:100%;"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ContentArea",
  componentId: "sc-15878t4-5"
})(["width:100%;height:100%;display:flex;flex-direction:column;"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Date",
  componentId: "sc-15878t4-6"
})(["display:flex;justify-content:flex-end;font-size:13px;color:#aaa;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Title",
  componentId: "sc-15878t4-7"
})(["font-size:21px;font-weight:bold;margin-top:10px;"]);
var Comment = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Comment",
  componentId: "sc-15878t4-8"
})(["font-size:15px;margin-top:10px;line-height:1.4;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Location",
  componentId: "sc-15878t4-9"
})(["color:#6da3f7;font-size:13px;margin-top:15px;display:flex;align-items:center;"]);
var Location_icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__Location_icon",
  componentId: "sc-15878t4-10"
})(["width:14px;height:14px;"]);
var WriteWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__WriteWrap",
  componentId: "sc-15878t4-11"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var Write = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Write",
  componentId: "sc-15878t4-12"
})(["font-size:", ";color:#ccc;margin:200px 0 10px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont);
var WriteImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__WriteImg",
  componentId: "sc-15878t4-13"
})(["max-width:80px;max-height:80px;"]);
var IconCloseCon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__IconCloseCon",
  componentId: "sc-15878t4-14"
})(["position:absolute;top:-6px;right:-6px;width:20px;height:20px;background-color:#ddd;border-radius:12px;cursor:pointer;:hover{opacity:0.5;}"]);
var IconCloseImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__IconCloseImg",
  componentId: "sc-15878t4-15"
})(["position:absolute;top:3px;left:3px;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Col",
  componentId: "sc-15878t4-16"
})([""]);
var AllView = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__AllView",
  componentId: "sc-15878t4-17"
})([""]);

/***/ })

})
//# sourceMappingURL=blog.js.165b00e060cd4c17b93f.hot-update.js.map