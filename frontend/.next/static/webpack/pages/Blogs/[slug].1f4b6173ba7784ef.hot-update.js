"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Blogs/[slug]",{

/***/ "./pages/Blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/Blogs/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Blog = (param)=>{\n    let { blog } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const regeneratePage = async ()=>{\n            setIsLoading(true);\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/blogsBuild\", {\n                    slug: router.query.slug\n                });\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        regeneratePage();\n    }, [\n        router.query.slug\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Programs\\\\Node_Workspace\\\\strapi-app-frontend-next-js\\\\pages\\\\Blogs\\\\[slug].js\",\n            lineNumber: 25,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"E:\\\\Programs\\\\Node_Workspace\\\\strapi-app-frontend-next-js\\\\pages\\\\Blogs\\\\[slug].js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: blog.content\n            }, void 0, false, {\n                fileName: \"E:\\\\Programs\\\\Node_Workspace\\\\strapi-app-frontend-next-js\\\\pages\\\\Blogs\\\\[slug].js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Programs\\\\Node_Workspace\\\\strapi-app-frontend-next-js\\\\pages\\\\Blogs\\\\[slug].js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Blog, \"x+tVIixJA9gAIfgroQ/xQSjtIFk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9CbG9ncy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ2xCO0FBRTFCLE1BQU1JLE9BQU87UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ2xCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsaUJBQWlCO1lBQ25CRCxhQUFhO1lBQ2IsSUFBSTtnQkFDQSxNQUFNTCxrREFBVSxDQUFDLG1CQUFtQjtvQkFBRVEsTUFBTUwsT0FBT00sS0FBSyxDQUFDRCxJQUFJO2dCQUFDO1lBQ2xFLEVBQUUsT0FBT0UsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtZQUNsQixTQUFVO2dCQUNOTCxhQUFhO1lBQ2pCO1FBQ0o7UUFFQUM7SUFDSixHQUFHO1FBQUNILE9BQU9NLEtBQUssQ0FBQ0QsSUFBSTtLQUFDO0lBRXRCLElBQUlKLFdBQVc7UUFDWCxxQkFBTyw4REFBQ1E7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDQTs7MEJBQ0csOERBQUNDOzBCQUFJWCxLQUFLWSxLQUFLOzs7Ozs7MEJBQ2YsOERBQUNDOzBCQUFHYixLQUFLYyxPQUFPOzs7Ozs7Ozs7Ozs7QUFHNUI7R0E3Qk1mOztRQUNhSixrREFBU0E7OztLQUR0Qkk7O0FBdUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Jsb2dzL1tzbHVnXS5qcz9lNmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEJsb2cgPSAoeyBibG9nIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZ2VuZXJhdGVQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2Jsb2dzQnVpbGQnLCB7IHNsdWc6IHJvdXRlci5xdWVyeS5zbHVnIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVnZW5lcmF0ZVBhZ2UoKTtcclxuICAgIH0sIFtyb3V0ZXIucXVlcnkuc2x1Z10pO1xyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntibG9nLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIC8vIEZldGNoIGFsbCBibG9ncyBmcm9tIHlvdXIgQVBJXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYmxvZ3MnKTtcclxuICAgIC8vIGNvbnN0IGJsb2dzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBibG9nc1xyXG4gICAgY29uc3QgcGF0aHMgPSBibG9ncy5kYXRhLm1hcCgoYmxvZykgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogYmxvZy5zbHVnIH0sXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXHJcbiAgICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgLy8gRmV0Y2ggYmxvZyBkYXRhIGJhc2VkIG9uIHRoZSBzbHVnXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9ibG9ncy8ke3BhcmFtcy5zbHVnfWApO1xyXG4gICAgY29uc3QgYmxvZyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgLy8gUGFzcyBibG9nIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBibG9nIH0gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJCbG9nIiwiYmxvZyIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJlZ2VuZXJhdGVQYWdlIiwicG9zdCIsInNsdWciLCJxdWVyeSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Blogs/[slug].js\n"));

/***/ })

});