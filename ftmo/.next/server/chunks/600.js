"use strict";
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4080);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon,
        to: "profile"
    },
    {
        label: "Client Area",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Cog6ToothIcon,
        to: "client-area"
    }
];
function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const closeMenu = ()=>setIsMenuOpen(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        open: isMenuOpen,
        handler: setIsMenuOpen,
        placement: "bottom-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.MenuHandler, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "text",
                    color: "blue-gray",
                    className: "flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 md:ml-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                            variant: "circular",
                            size: "sm",
                            alt: "candice wu",
                            className: "border border-blue-500 p-0.5",
                            src: "https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                            strokeWidth: 2.5,
                            className: `h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                className: "p-1",
                children: profileMenuItems.map(({ label , icon , to  }, key)=>{
                    const isLastItem = key === profileMenuItems.length - 1;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        className: `flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`,
                        children: [
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                href: to,
                                as: "a",
                                variant: "small",
                                className: "font-normal",
                                color: isLastItem ? "red" : "inherit",
                                children: label
                            })
                        ]
                    }, label);
                })
            })
        ]
    });
}
// nav list component
const navListItems = [
    {
        label: "Evaluation Process",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon,
        to: "#evaluation"
    },
    {
        label: "Trading Goals",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.CubeTransparentIcon,
        to: "#goals"
    },
    {
        label: "About Us",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.CodeBracketSquareIcon,
        to: "about"
    }
];
function NavList() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center",
        children: navListItems.map(({ label , icon , to  }, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                as: "a",
                href: to,
                variant: "small",
                color: "blue-gray",
                className: "font-normal",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    className: "flex items-center gap-2 lg:rounded-full",
                    children: label
                })
            }, label))
    });
}
function NavBar() {
    const [isNavOpen, setIsNavOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const toggleIsNavOpen = ()=>setIsNavOpen((cur)=>!cur);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        window.addEventListener("resize", ()=>window.innerWidth >= 960 && setIsNavOpen(false));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
        className: "mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto flex items-center text-blue-gray-900 justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        as: "a",
                        href: "/",
                        className: "mr-4 ml-2 cursor-pointer py-1.5 font-medium flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                width: 30,
                                src: _images_logo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: "logo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-extrabold text-blue-gray-800",
                                children: "FMFX"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavList, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        size: "sm",
                        color: "blue-gray",
                        variant: "text",
                        onClick: toggleIsNavOpen,
                        className: "ml-auto mr-2 lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars2Icon, {
                            className: "h-6 w-6"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileMenu, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.MobileNav, {
                open: isNavOpen,
                className: "overflow-scroll",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavList, {})
            })
        ]
    });
}


/***/ })

};
;