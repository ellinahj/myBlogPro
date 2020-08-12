webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./src/components/common/PhotoUpload.js":
/*!**********************************************!*\
  !*** ./src/components/common/PhotoUpload.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");


var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/PhotoUpload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Upload(props) {
  var imgFormData = props.imgFormData,
      prevImg = props.prevImg,
      showEdit = props.showEdit,
      clickEdit = props.clickEdit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null]),
      file = _useState[0],
      setFile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      upImg = _useState2[0],
      setUpImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    unit: '%',
    width: 100,
    aspect: 1
  }),
      crop = _useState3[0],
      setCrop = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null]),
      previewUrl = _useState4[0],
      setPreviewUrl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      index = _useState5[0],
      setIndex = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      filename = _useState6[0],
      setFilename = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      fileInfo = _useState7[0],
      setFileInfo = _useState7[1];

  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  var userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.common.userInfo;
  });
  var inputRefs = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([]);

  var controlFileBtn = function controlFileBtn(e, index) {
    e.preventDefault();
    inputRefs.current[index].click();
  };

  var addImg = function addImg(e, index) {
    setIndex(index);

    if (e.target.files && e.target.files.length > 0) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        return setUpImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setFileInfo(e.target.files[0].type);
    }
  };

  var onLoad = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (img) {
    imgRef.current = img;
  }, []);

  var makeClientCrop = function makeClientCrop(crop) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function makeClientCrop$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (imgRef.current && crop.width && crop.height) {
              createCropPreview(imgRef.current, crop, filename);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var createCropPreview = function createCropPreview(image, crop, fileName) {
    var canvas, scaleX, scaleY, ctx;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function createCropPreview$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            canvas = document.createElement('canvas');
            scaleX = image.naturalWidth / image.width;
            scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              canvas.toBlob(function (blob) {
                if (!blob) {
                  reject(new Error('Canvas is empty'));
                  return;
                }

                blob.name = fileName;
                window.URL.revokeObjectURL(previewUrl);

                var tempPreviewUrl = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previewUrl);

                tempPreviewUrl.splice(index, 1, window.URL.createObjectURL(blob));
                setPreviewUrl(tempPreviewUrl);
                prevImg(tempPreviewUrl);
                var blobToFile = new File([blob], filename);

                var tempFile = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(file);

                tempFile.splice(index, 1, blobToFile);
                setFile(tempFile);
              }, fileInfo);
            })["catch"](function (err) {
              console.log('blob promise err', err);
            }));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    imgFormData(file);
  }, [file]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setUpImg([]);
  }, [showEdit]);
  return __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(TitleCenter, {
    onClick: function onClick(e) {
      return clickEdit(e);
    },
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "\uD504\uB85C\uD544\uBCC0\uACBD"), __jsx(ProfileRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(ProfileCenter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, showEdit && __jsx(EditWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(EditImg, {
    src: '/images/edit.svg',
    width: 16,
    onClick: function onClick(e) {
      return controlFileBtn(e, 0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  })), __jsx("input", {
    name: "file",
    type: "file",
    accept: "image/*",
    ref: function ref(_ref) {
      return inputRefs.current[0] = _ref;
    },
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return addImg(e, 0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), showEdit && previewUrl && previewUrl[0] ? __jsx(Img, {
    src: previewUrl[0],
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }) : __jsx(Img, {
    src: userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png',
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }))), showEdit && __jsx(ProfileRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(ReactCropDiv, {
    userColor: userColor,
    src: upImg,
    onImageLoaded: onLoad,
    crop: crop,
    onChange: function onChange(img) {
      return setCrop(img);
    },
    onComplete: makeClientCrop,
    uploadImg: upImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })));
}
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__Row",
  componentId: "sc-5k8m7r-0"
})(["display:flex;flex-direction:column;align-items:flex-start;"]);
var PreviewImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PhotoUpload__PreviewImg",
  componentId: "sc-5k8m7r-1"
})(["width:100%;"]);
var ImageRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__ImageRow",
  componentId: "sc-5k8m7r-2"
})(["display:flex;flex-direction:column;"]);
var ProfileRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__ProfileRow",
  componentId: "sc-5k8m7r-3"
})(["display:flex;width:100%;justify-content:center;margin:20px 0 20px;"]);
var TitleCenter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__TitleCenter",
  componentId: "sc-5k8m7r-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin:20px 0;", " color:", ";font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["BlueEditBtn"], function (props) {
  return props.userColor;
}, function (props) {
  return props.theme.mFont;
});
var ProfileCenter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__ProfileCenter",
  componentId: "sc-5k8m7r-5"
})(["display:flex;align-items:center;justify-content:center;position:relative;"]);
var ReactCropDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_image_crop__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "PhotoUpload__ReactCropDiv",
  componentId: "sc-5k8m7r-6"
})(["margin-bottom:", ";width:", ";height:", ";"], function (props) {
  return props.uploadImg.length > 0 ? '20px' : '0px';
}, function (props) {
  return props.uploadImg.length && '200px';
}, function (props) {
  return props.uploadImg.length && '200px';
});
var EditImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PhotoUpload__EditImg",
  componentId: "sc-5k8m7r-7"
})(["width:", ";height:", ";border-radius:", "px;"], function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width / 2 || 15;
});
var EditWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoUpload__EditWrap",
  componentId: "sc-5k8m7r-8"
})(["cursor:pointer;background-color:#666;position:absolute;bottom:0;left:46px;margin-right:0;width:24px;height:24px;border-radius:12px;display:flex;align-items:center;justify-content:center;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PhotoUpload__Img",
  componentId: "sc-5k8m7r-9"
})(["width:", ";height:", ";border-radius:", "px;margin-right:0;border:1px solid #ddd;"], function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width || '30px';
}, function (props) {
  return props.width / 2 || 15;
});

/***/ })

})
//# sourceMappingURL=mypage.js.89aded9652545f3ead6d.hot-update.js.map