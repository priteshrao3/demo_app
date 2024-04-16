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

/***/ "(app-pages-browser)/./app/components/homepages/studenstlist.jsx":
/*!***************************************************!*\
  !*** ./app/components/homepages/studenstlist.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StudentList = ()=>{\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/studentlist/\").then((response)=>{\n            setCards(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching card data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-center text-4xl text-black font-bold\",\n                children: \"Reviews\"\n            }, void 0, false, {\n                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-4 gap-2 px-5 md:px-24 mb-14  bg-white py-10\",\n                children: cards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center\",\n                                    children: card.Student_Name\n                                }, void 0, false, {\n                                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-3 font-normal text-gray-500 dark:text-gray-400 text-center\",\n                                children: card.Student_Description\n                            }, void 0, false, {\n                                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, card.id, true, {\n                        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/studenstlist.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentList, \"M51NroWgc5aUEHiqsZiaQ+7WeWA=\");\n_c = StudentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentList);\nvar _c;\n$RefreshReg$(_c, \"StudentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlcy9zdHVkZW5zdGxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEM7QUFDbEI7QUFFMUIsTUFBTUcsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsc0NBQ1BDLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSkgsU0FBU0csU0FBU0MsSUFBSTtRQUN4QixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNEM7Ozs7OzswQkFDNUQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUVaVixNQUFNWSxHQUFHLENBQUNDLENBQUFBLHFCQUNULDhEQUFDSjt3QkFBa0JDLFdBQVU7OzBDQUMzQiw4REFBQ0k7Z0NBQUVDLE1BQUs7MENBQ04sNEVBQUNDO29DQUFHTixXQUFVOzhDQUF3RkcsS0FBS0ksWUFBWTs7Ozs7Ozs7Ozs7MENBRXpILDhEQUFDQztnQ0FBRVIsV0FBVTswQ0FBaUVHLEtBQUtNLG1CQUFtQjs7Ozs7Ozt1QkFKOUZOLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekI7R0E5Qk1yQjtLQUFBQTtBQWdDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lcGFnZXMvc3R1ZGVuc3RsaXN0LmpzeD9mOTQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN0dWRlbnRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL3N0dWRlbnRsaXN0LycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldENhcmRzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcmQgZGF0YTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTIwJz5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlJldmlld3M8L2gzPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtMiBweC01IG1kOnB4LTI0IG1iLTE0ICBiZy13aGl0ZSBweS0xMFwiPlxuICAgICAgXG4gICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPVwibWF4LXctc20gcC02IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+e2NhcmQuU3R1ZGVudF9OYW1lfTwvaDU+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTMgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgdGV4dC1jZW50ZXJcIj57Y2FyZC5TdHVkZW50X0Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudExpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlN0dWRlbnRMaXN0IiwiY2FyZHMiLCJzZXRDYXJkcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwiY2FyZCIsImEiLCJocmVmIiwiaDUiLCJTdHVkZW50X05hbWUiLCJwIiwiU3R1ZGVudF9EZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/homepages/studenstlist.jsx\n"));

/***/ })

});