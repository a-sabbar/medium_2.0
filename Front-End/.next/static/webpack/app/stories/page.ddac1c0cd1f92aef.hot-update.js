"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/stories/page",{

/***/ "(app-client)/./app/stories/page.tsx":
/*!******************************!*\
  !*** ./app/stories/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Nav_UserNav_UserNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Nav/UserNav/UserNav */ \"(app-client)/./components/Nav/UserNav/UserNav.tsx\");\n/* harmony import */ var _Forbidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forbidden */ \"(app-client)/./app/stories/Forbidden.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [isLogIn, setIsLogIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(localStorage.getItem(\"userLoggedIn\") ? true : false);\n    if (!isLogIn) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Forbidden__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n        lineNumber: 10,\n        columnNumber: 24\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_UserNav_UserNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                setIsLogIn: setIsLogIn\n            }, void 0, false, {\n                fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"storiesBody\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left__side\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right__side\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/goinfre/asabbar/build/medium_2_0/app/stories/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wOAHGL6Em4cSm992ZB4Jmn1rVXA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3N0b3JpZXMvcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHc0Q7QUFDbEI7QUFDSjtBQUVqQixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDSSxhQUFhQyxRQUFRLGtCQUFrQixPQUFPO0lBQ3JGLElBQUksQ0FBQ0gsU0FBUyxxQkFBTyw4REFBQ0gsa0RBQVNBOzs7OztJQUMvQixxQkFDRSw4REFBQ087UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNULHVFQUFPQTtnQkFBQ0ssWUFBWUE7Ozs7OzswQkFDckIsOERBQUNLO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7Ozs7OztrQ0FHZiw4REFBQ0M7d0JBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQWZ3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0b3JpZXMvcGFnZS50c3g/YmJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuXG5pbXBvcnQgTmF2VXNlciBmcm9tICdAL2NvbXBvbmVudHMvTmF2L1VzZXJOYXYvVXNlck5hdidcbmltcG9ydCBGb3JiaWRkZW4gZnJvbSAnLi9Gb3JiaWRkZW4nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzTG9nSW4sIHNldElzTG9nSW5dID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTG9nZ2VkSW5cIikgPyB0cnVlIDogZmFsc2UpO1xuICBpZiAoIWlzTG9nSW4pIHJldHVybiA8Rm9yYmlkZGVuLz47XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxOYXZVc2VyIHNldElzTG9nSW49e3NldElzTG9nSW59Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yaWVzQm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnRfX3NpZGUnPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodF9fc2lkZSc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2VXNlciIsIkZvcmJpZGRlbiIsInVzZVN0YXRlIiwiSG9tZSIsImlzTG9nSW4iLCJzZXRJc0xvZ0luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/stories/page.tsx\n"));

/***/ })

});