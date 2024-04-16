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

/***/ "(app-pages-browser)/./app/components/homepages/topstudentlist.jsx":
/*!*****************************************************!*\
  !*** ./app/components/homepages/topstudentlist.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./app/components/homepages/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TopStudentList() {\n    _s();\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [slidesPerView, setSlidesPerView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://127.0.0.1:8000/studentlist/\").then((response)=>{\n            setStudents(response.data);\n            setSlidesPerView(window.innerWidth < 768 ? 1 : 4);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setSlidesPerView(window.innerWidth < 768 ? 1 : 4);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 px-5 md:px-20 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-center text-4xl text-black font-bold\",\n                children: \"Top Student\"\n            }, void 0, false, {\n                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                watchSlidesProgress: true,\n                slidesPerView: slidesPerView,\n                className: \"mySwiper\",\n                children: students.map((student)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"\".concat(student.Student_Pic),\n                                    className: \"mx-auto w-24 h-24 rounded-full mt-5\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"my-3 border-t border-gray-300\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"text-lg font-semibold\",\n                                    children: student.Student_Name\n                                }, void 0, false, {\n                                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: student.Student_Description\n                                }, void 0, false, {\n                                    fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, student.id, false, {\n                        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pritesh/Desktop/demo_app/app/components/homepages/topstudentlist.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(TopStudentList, \"CTUw/OrkJd35ayA6G1uiQZVi5iM=\");\n_c = TopStudentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopStudentList);\nvar _c;\n$RefreshReg$(_c, \"TopStudentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlcy90b3BzdHVkZW50bGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNBO0FBQy9CO0FBQ007QUFDSjtBQUV0QixTQUFTTTs7SUFFUCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUduREQsZ0RBQVNBLENBQUM7UUFDUkksNkNBQUtBLENBQUNNLEdBQUcsQ0FBQyxzQ0FDUEMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKTCxZQUFZSyxTQUFTQyxJQUFJO1lBQ3pCSixpQkFBaUJLLE9BQU9DLFVBQVUsR0FBRyxNQUFNLElBQUk7UUFDakQsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtZQUNMQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNKLEdBQUcsRUFBRTtJQUVMakIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsZUFBZTtZQUNuQlYsaUJBQWlCSyxPQUFPQyxVQUFVLEdBQUcsTUFBTSxJQUFJO1FBQ2pEO1FBRUFELE9BQU9NLGdCQUFnQixDQUFDLFVBQVVEO1FBRWxDLE9BQU87WUFDTEwsT0FBT08sbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0Qzs7Ozs7OzBCQUMxRCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDdkIsZ0RBQU1BO2dCQUFDd0IscUJBQXFCO2dCQUFNbEIsZUFBZUE7Z0JBQWVlLFdBQVU7MEJBQ3hFakIsU0FBU3FCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ3pCLHFEQUFXQTtrQ0FDViw0RUFBQ21COzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ007b0NBQUlDLEtBQUssR0FBdUIsT0FBcEJGLFFBQVFHLFdBQVc7b0NBQUlSLFdBQVU7Ozs7Ozs4Q0FFOUMsOERBQUNTO29DQUFHVCxXQUFVOzs7Ozs7OENBQ2QsOERBQUNVO29DQUFHVixXQUFVOzhDQUF5QkssUUFBUU0sWUFBWTs7Ozs7OzhDQUMzRCw4REFBQ0M7b0NBQUVaLFdBQVU7OENBQVdLLFFBQVFRLG1CQUFtQjs7Ozs7Ozs7Ozs7O3VCQU5yQ1IsUUFBUVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWF0QztHQWhEU2hDO0tBQUFBO0FBa0RULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlcy90b3BzdHVkZW50bGlzdC5qc3g/YmUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmZ1bmN0aW9uIFRvcFN0dWRlbnRMaXN0KCkge1xuXG4gIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2xpZGVzUGVyVmlldywgc2V0U2xpZGVzUGVyVmlld10gPSB1c2VTdGF0ZSg0KTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3N0dWRlbnRsaXN0L1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRTdHVkZW50cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0U2xpZGVzUGVyVmlldyh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IDEgOiA0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldFNsaWRlc1BlclZpZXcod2luZG93LmlubmVyV2lkdGggPCA3NjggPyAxIDogNCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHB4LTUgbWQ6cHgtMjAgYmctd2hpdGVcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlRvcCBTdHVkZW50PC9oMz5cbiAgICAgIDxiciAvPlxuICAgICAgPFN3aXBlciB3YXRjaFNsaWRlc1Byb2dyZXNzPXt0cnVlfSBzbGlkZXNQZXJWaWV3PXtzbGlkZXNQZXJWaWV3fSBjbGFzc05hbWU9XCJteVN3aXBlclwiPlxuICAgICAgICB7c3R1ZGVudHMubWFwKChzdHVkZW50KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17c3R1ZGVudC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtzdHVkZW50LlN0dWRlbnRfUGljfWB9IGNsYXNzTmFtZT1cIm14LWF1dG8gdy0yNCBoLTI0IHJvdW5kZWQtZnVsbCBtdC01XCIgLz5cblxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMyBib3JkZXItdCBib3JkZXItZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3N0dWRlbnQuU3R1ZGVudF9OYW1lfTwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57c3R1ZGVudC5TdHVkZW50X0Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFN0dWRlbnRMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsImF4aW9zIiwiVG9wU3R1ZGVudExpc3QiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwic2xpZGVzUGVyVmlldyIsInNldFNsaWRlc1BlclZpZXciLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImJyIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIm1hcCIsInN0dWRlbnQiLCJpbWciLCJzcmMiLCJTdHVkZW50X1BpYyIsImhyIiwiaDQiLCJTdHVkZW50X05hbWUiLCJwIiwiU3R1ZGVudF9EZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/homepages/topstudentlist.jsx\n"));

/***/ })

});