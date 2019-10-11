exports.ids = [7];
exports.modules = {

/***/ "Mh9J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WinnerLook_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("w2gl");
/* harmony import */ var _WinnerLook_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WinnerLook_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gEaM");
/* harmony import */ var _src_images_gray_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kHLz");
/* harmony import */ var _src_images_gray_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_images_gray_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uoFm");
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazy_images__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const WinnerLook = props => {
  let url = props.url;

  if (url.startsWith('http')) {
    url;
  } else {
    url = 'http://' + url;
  }

  let winnerLook = __jsx("div", {
    className: "WinnerLookDiv"
  }, __jsx("div", {
    className: "WinnerLookCont"
  }, __jsx("p", {
    className: "WinnerLookName"
  }, props.name.toUpperCase()), __jsx(react_lazy_images__WEBPACK_IMPORTED_MODULE_5__["LazyImage"], {
    src: props.imageUrl,
    alt: "WINNER LOOK",
    placeholder: ({
      imageProps,
      ref
    }) => __jsx("img", {
      ref: ref,
      className: "WinnerLookPic",
      src: _src_images_gray_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: imageProps.alt
    }),
    actual: ({
      imageProps
    }) => __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: "WinnerLookPic"
    }, imageProps))
  }), __jsx("div", {
    className: "totalVotes"
  }, props.votes > 1 ? props.votes + " VOTES" : props.votes + " VOTE"), __jsx("a", {
    href: url,
    target: "_blank"
  }, "GET THE LOOK")));

  return __jsx("div", null, props.imageUrl ? winnerLook : __jsx(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (WinnerLook);

/***/ }),

/***/ "kHLz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gray-7473a32ff25b69145e6e196863d51cdd.jpg";

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "w2gl":
/***/ (function(module, exports) {



/***/ })

};;