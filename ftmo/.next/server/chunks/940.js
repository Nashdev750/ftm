"use strict";
exports.id = 940;
exports.ids = [940,536];
exports.modules = {

/***/ 2536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "qC": () => (/* binding */ postData)
/* harmony export */ });
/* unused harmony exports baseUrl, getServer */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseUrl = "https://fundmefx.com/api/";
const config = ()=>{
    return {
        authorization: "Bearer " + window.localStorage.getItem("token")
    };
};
const postData = (end, data = {}, conf = {})=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(baseUrl + end, data, {
        headers: {
            ...config(),
            ...conf
        }
    });
const getData = (end)=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(baseUrl + end, {
        headers: config()
    });
const getServer = (end, conf)=>axios.get(baseUrl + end, {
        headers: conf
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;