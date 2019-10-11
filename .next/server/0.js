exports.ids = [0];
exports.modules = {

/***/ "./lib/init-firebase.js":
/*!******************************!*\
  !*** ./lib/init-firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyCCc0StSnhA-hiPvvZMcSvpaIV7cgC0FjQ",
  authDomain: "the-v-lust.firebaseapp.com",
  databaseURL: "https://the-v-lust.firebaseio.com",
  projectId: "the-v-lust",
  storageBucket: "the-v-lust.appspot.com",
  messagingSenderId: "443230611751",
  appId: "1:443230611751:web:56ad46e2fb9f16d008e102"
};
/* harmony default export */ __webpack_exports__["default"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app());

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./src/components/Looks/Look.css":
/*!***************************************!*\
  !*** ./src/components/Looks/Look.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Looks/Look.js":
/*!**************************************!*\
  !*** ./src/components/Looks/Look.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Look_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Look.css */ "./src/components/Looks/Look.css");
/* harmony import */ var _Look_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Look_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_init_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/init-firebase */ "./lib/init-firebase.js");
/* harmony import */ var _UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/favicon.png */ "./src/images/favicon.png");
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_favicon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_gray_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/gray.jpg */ "./src/images/gray.jpg");
/* harmony import */ var _images_gray_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_gray_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lazy-images */ "react-lazy-images");
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazy_images__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\fverz\\Documents\\myProjects\\vlust-hosting\\src\\components\\Looks\\Look.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const Look = props => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const fetchVote = async id => {
    const res = await fetch(`https://the-v-lust.firebaseio.com/votes/${id}.json`);
    const json = await res.json();
    let jsonVotes = 0;
    json ? jsonVotes = json.votes : jsonVotes = 0;
    let newVote = jsonVotes + 1;
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => {
      resolve(_lib_init_firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('votes/' + id).set({
        pictureId: id,
        votes: newVote
      }));
    });
  };

  const voting = async commonId => {
    await fetchVote(commonId);
    setModal(true);
  };

  let url = props.url;

  if (url.startsWith('http')) {
    url;
  } else {
    url = 'http://' + url;
  }

  return __jsx("div", {
    className: "event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: modal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("p", {
    className: "ModalText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Thank you for voting!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("img", {
    src: _images_favicon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "ModalImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Check out who's winning!")), __jsx("div", {
    className: "look",
    onClick: commonId => voting(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(react_lazy_images__WEBPACK_IMPORTED_MODULE_9__["LazyImage"], {
    src: props.image,
    alt: "LOOK",
    placeholder: ({
      imageProps,
      ref
    }) => __jsx("img", {
      ref: ref,
      className: "image",
      src: _images_gray_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      style: {
        width: '100%',
        height: '100%'
      },
      alt: imageProps.alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }),
    actual: ({
      imageProps
    }) => __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "image"
    }, imageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, props.name.toUpperCase())));
};

/* harmony default export */ __webpack_exports__["default"] = (Look);

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.css":
/*!*************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.js":
/*!************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.css */ "./src/components/UI/Backdrop/Backdrop.css");
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\fverz\\Documents\\myProjects\\vlust-hosting\\src\\components\\UI\\Backdrop\\Backdrop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const backdrop = props => props.show ? __jsx("div", {
  className: "Backdrop",
  onClick: props.clicked,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}) : null;

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./src/components/UI/Modal/Modal.css":
/*!*******************************************!*\
  !*** ./src/components/UI/Modal/Modal.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/UI/Modal/Modal.js":
/*!******************************************!*\
  !*** ./src/components/UI/Modal/Modal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.css */ "./src/components/UI/Modal/Modal.css");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modal_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");
var _jsxFileName = "C:\\Users\\fverz\\Documents\\myProjects\\vlust-hosting\\src\\components\\UI\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const modal = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: props.show,
    clicked: props.modalClosed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: "Modal",
    onClick: props.clicked,
    style: {
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children));

/***/ }),

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-1c7ef88dcf8fdfea8d7665d7cb24b996.png";

/***/ }),

/***/ "./src/images/gray.jpg":
/*!*****************************!*\
  !*** ./src/images/gray.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gray-7473a32ff25b69145e6e196863d51cdd.jpg";

/***/ })

};;
//# sourceMappingURL=0.js.map