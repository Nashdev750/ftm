"use strict";
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 1636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2536);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4630);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _pages_login__WEBPACK_IMPORTED_MODULE_2__]);
([_api__WEBPACK_IMPORTED_MODULE_1__, _pages_login__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import styles from '@/styles/Dashboard.module.css'
// import Sidebar from './Sidebar'




// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getData } from '@/constants';
// import Login from '@/pages/admin/login';


const Auth = (Child)=>{
    const Layout = ()=>{
        const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
        const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            (0,_api__WEBPACK_IMPORTED_MODULE_1__/* .getData */ .Yu)("verify").then((res)=>{
                setLoading(false);
                setAuth(true);
            }).catch((err)=>{
                setLoading(false);
            });
        }, [
            auth
        ]);
        if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            Child: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        });
        if (!auth) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_login__WEBPACK_IMPORTED_MODULE_2__["default"], {});
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            Child: Child
        });
    };
    return Layout;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);
const Wrapper = ({ Child  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Child, {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Loader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/images/loader2.gif
/* harmony default export */ const loader2 = ({"src":"/_next/static/media/loader2.145b9417.gif","height":1080,"width":1920,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/Loader.jsx


const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "loader",
        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
            src: loader2,
            alt: ""
        })
    });
};
/* harmony default export */ const components_Loader = (Loader);


/***/ })

};
;