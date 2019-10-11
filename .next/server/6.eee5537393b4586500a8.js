exports.ids = [6];
exports.modules = {

/***/ "5Kgn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Looks/Look.css
var Look = __webpack_require__("V18B");

// EXTERNAL MODULE: ./lib/init-firebase.js
var init_firebase = __webpack_require__("t9ZQ");

// EXTERNAL MODULE: ./src/components/UI/Modal/Modal.css
var Modal = __webpack_require__("x4r7");

// EXTERNAL MODULE: ./src/components/UI/Backdrop/Backdrop.css
var Backdrop = __webpack_require__("LF3/");

// CONCATENATED MODULE: ./src/components/UI/Backdrop/Backdrop.js
var __jsx = external_react_default.a.createElement;



const backdrop = props => props.show ? __jsx("div", {
  className: "Backdrop",
  onClick: props.clicked
}) : null;

/* harmony default export */ var Backdrop_Backdrop = (backdrop);
// CONCATENATED MODULE: ./src/components/UI/Modal/Modal.js
var Modal_jsx = external_react_default.a.createElement;




const Modal_modal = props => {
  return Modal_jsx("div", null, Modal_jsx(Backdrop_Backdrop, {
    show: props.show,
    clicked: props.modalClosed
  }), Modal_jsx("div", {
    className: "Modal",
    onClick: props.clicked,
    style: {
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }
  }, props.children));
};

/* harmony default export */ var Modal_Modal = (external_react_default.a.memo(Modal_modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/images/favicon.png
var favicon = __webpack_require__("Yhqy");
var favicon_default = /*#__PURE__*/__webpack_require__.n(favicon);

// EXTERNAL MODULE: ./src/images/gray.jpg
var gray = __webpack_require__("kHLz");
var gray_default = /*#__PURE__*/__webpack_require__.n(gray);

// EXTERNAL MODULE: external "react-lazy-images"
var external_react_lazy_images_ = __webpack_require__("uoFm");

// CONCATENATED MODULE: ./src/components/Looks/Look.js


var Look_jsx = external_react_default.a.createElement;









const Look_Look = props => {
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])(false);

  const fetchVote = async id => {
    const res = await fetch(`https://the-v-lust.firebaseio.com/votes/${id}.json`);
    const json = await res.json();
    let jsonVotes = 0;
    json ? jsonVotes = json.votes : jsonVotes = 0;
    let newVote = jsonVotes + 1;
    return new promise_default.a(resolve => {
      resolve(init_firebase["a" /* default */].database().ref('votes/' + id).set({
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

  return Look_jsx("div", {
    className: "event"
  }, Look_jsx(Modal_Modal, {
    show: modal
  }, Look_jsx("p", {
    className: "ModalText"
  }, "Thank you for voting!"), Look_jsx(link_default.a, {
    href: "/results"
  }, Look_jsx("img", {
    src: favicon_default.a,
    className: "ModalImage"
  })), Look_jsx("br", null), Look_jsx(link_default.a, {
    href: "/results"
  }, "Check out who's winning!")), Look_jsx("div", {
    className: "look",
    onClick: commonId => voting(props.id)
  }, Look_jsx(external_react_lazy_images_["LazyImage"], {
    src: props.image,
    alt: "LOOK",
    placeholder: ({
      imageProps,
      ref
    }) => Look_jsx("img", {
      ref: ref,
      className: "image",
      src: gray_default.a,
      style: {
        width: '100%',
        height: '100%'
      },
      alt: imageProps.alt
    }),
    actual: ({
      imageProps
    }) => Look_jsx("img", Object(esm_extends["a" /* default */])({
      className: "image"
    }, imageProps))
  }), Look_jsx("p", {
    className: "text"
  }, props.name.toUpperCase())));
};

/* harmony default export */ var Looks_Look = __webpack_exports__["default"] = (Look_Look);

/***/ }),

/***/ "LF3/":
/***/ (function(module, exports) {



/***/ }),

/***/ "V18B":
/***/ (function(module, exports) {



/***/ }),

/***/ "Yhqy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-1c7ef88dcf8fdfea8d7665d7cb24b996.png";

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

/***/ "t9ZQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Mn+7");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ha8t");
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
/* harmony default export */ __webpack_exports__["a"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app());

/***/ }),

/***/ "x4r7":
/***/ (function(module, exports) {



/***/ })

};;