"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/homepages/mainbanner.jsx":
/*!*************************************************!*\
  !*** ./app/components/homepages/mainbanner.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Carousel_Image_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Carousel,Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/carousel/index.js\");\n/* harmony import */ var _barrel_optimize_names_Carousel_Image_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Carousel,Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main_Carousel() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/mainslider/\").then((response)=>{\n            console.log(\"Fetched data:\", response.data);\n            setImages(response.data);\n        }).catch((error)=>console.error(\"Error fetching data:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:relative mt- bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Carousel_Image_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            autoplay: true,\n            children: images.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gradient-to-t from-slate-900 to-slate-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Carousel_Image_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"w-full h-[100vh] md:h-[100vh]\",\n                        src: img.SliderImage,\n                        alt: \"Banner \".concat(index + 1)\n                    }, void 0, false, {\n                        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/mainbanner.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/mainbanner.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/mainbanner.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/mainbanner.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Main_Carousel, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = Main_Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main_Carousel);\nvar _c;\n$RefreshReg$(_c, \"Main_Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlcy9tYWluYmFubmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUM7QUFDWTtBQUN6QjtBQUUxQixTQUFTTTs7SUFDUCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUkMsNkNBQUtBLENBQUNJLEdBQUcsQ0FBQyxxQ0FDUEMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDTixVQUFVRyxTQUFTRyxJQUFJO1FBQ3pCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0osUUFBUUksS0FBSyxDQUFDLHdCQUF3QkE7SUFDMUQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNsQixrRkFBUUE7WUFBQ21CLFFBQVE7c0JBQ2ZaLE9BQU9hLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDaEIsOERBQUNMO29CQUFnQkMsV0FBVTs4QkFDekIsNEVBQUNqQixrRkFBS0E7d0JBQUNpQixXQUFVO3dCQUFnQ0ssS0FBS0YsSUFBSUcsV0FBVzt3QkFBRUMsS0FBSyxVQUFvQixPQUFWSCxRQUFROzs7Ozs7bUJBRHRGQTs7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBdkJTaEI7S0FBQUE7QUF5QlQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2VzL21haW5iYW5uZXIuanN4PzAzZTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBDYXJvdXNlbCwgSW1hZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gTWFpbl9DYXJvdXNlbCgpIHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL21haW5zbGlkZXIvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIGRhdGE6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRJbWFnZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpyZWxhdGl2ZSBtdC0gYmctd2hpdGVcIj5cbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTkwMCB0by1zbGF0ZS03MDAnPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzEwMHZoXSBtZDpoLVsxMDB2aF0nIHNyYz17aW1nLlNsaWRlckltYWdlfSBhbHQ9e2BCYW5uZXIgJHtpbmRleCArIDF9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluX0Nhcm91c2VsO1xuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJNYWluX0Nhcm91c2VsIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXV0b3BsYXkiLCJtYXAiLCJpbWciLCJpbmRleCIsInNyYyIsIlNsaWRlckltYWdlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/homepages/mainbanner.jsx\n"));

/***/ })

});