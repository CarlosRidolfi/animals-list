"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/animals/view.tsx":
/*!************************************!*\
  !*** ./src/pages/animals/view.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AnimalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AnimalCard */ \"./src/components/AnimalCard/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n  displayName: \"view__CardsWrapper\",\n  componentId: \"sc-1beciyq-0\"\n})([\"display:flex;flex-direction:column;row-gap:20px;margin-bottom:10px;\"]);\n_c = CardsWrapper;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"view__PageTitle\",\n  componentId: \"sc-1beciyq-1\"\n})([\"font-family:'Cabin Sketch',cursive;color:green;font-size:60px;\"]);\n_c2 = PageTitle;\nfunction AnimalsView(_ref) {\n  _s();\n\n  var _this = this;\n\n  var animals = _ref.animals;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(''),\n      _React$useState2 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  console.log(value);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CardsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(PageTitle, {\n        children: \"Animals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), animals.map(function (animal) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_2__.AnimalCard, {\n          id: animal.id,\n          name: animal.name,\n          type: animal.type\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      value: value,\n      placeholder: \"Add a new task\",\n      onChange: function onChange(e) {\n        return setValue(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_2__.AddButton, {\n      children: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalsView, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n\n_c3 = AnimalsView;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CardsWrapper\");\n$RefreshReg$(_c2, \"PageTitle\");\n$RefreshReg$(_c3, \"AnimalsView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksWUFBWSxHQUFHRiw0RUFBSDtFQUFBO0VBQUE7QUFBQSwyRUFBbEI7S0FBTUU7QUFPTixJQUFNRSxTQUFTLEdBQUdKLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHNFQUFmO01BQU1JO0FBTUMsU0FBU0UsV0FBVCxPQUlKO0VBQUE7O0VBQUE7O0VBQUEsSUFIREMsT0FHQyxRQUhEQSxPQUdDOztFQUVELHNCQUEwQlQscURBQUEsQ0FBZSxFQUFmLENBQTFCO0VBQUE7RUFBQSxJQUFPVyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7RUFFQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLFlBQUQ7TUFBQSx3QkFDRSw4REFBQyxTQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsRUFFR0YsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0MsTUFBRDtRQUFBLG9CQUNYLDhEQUFDLDhEQUFEO1VBQ0UsRUFBRSxFQUFFQSxNQUFNLENBQUNDLEVBRGI7VUFFRSxJQUFJLEVBQUVELE1BQU0sQ0FBQ0UsSUFGZjtVQUdFLElBQUksRUFBRUYsTUFBTSxDQUFDRztRQUhmO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEVztNQUFBLENBQVosQ0FGSDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQVdFO01BQ0ksSUFBSSxFQUFDLE1BRFQ7TUFFSSxTQUFTLEVBQUMsT0FGZDtNQUdJLEtBQUssRUFBRVIsS0FIWDtNQUlJLFdBQVcsRUFBQyxnQkFKaEI7TUFLSSxRQUFRLEVBQUUsa0JBQUFTLENBQUM7UUFBQSxPQUFJUixRQUFRLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTVixLQUFWLENBQVo7TUFBQTtJQUxmO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYRixlQWtCRSw4REFBQyw2REFBRDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXNCRDs7R0EvQmVIOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeD9lODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJ0AvbGliL2FuaW1hbHMnXG5pbXBvcnQgeyBBbmltYWxDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQWRkQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5cbmNvbnN0IENhcmRzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYFxuXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ0NhYmluIFNrZXRjaCcsIGN1cnNpdmU7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gQW5pbWFsc1ZpZXcgKHtcbiAgYW5pbWFsc1xufToge1xuICBhbmltYWxzOiBBbmltYWxbXVxufSkge1xuICBcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc29sZS5sb2codmFsdWUpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcmRzV3JhcHBlcj5cbiAgICAgICAgPFBhZ2VUaXRsZT5BbmltYWxzPC9QYWdlVGl0bGU+XG4gICAgICAgIHthbmltYWxzLm1hcCgoYW5pbWFsKSA9PiAoXG4gICAgICAgICAgPEFuaW1hbENhcmQgIFxuICAgICAgICAgICAgaWQ9e2FuaW1hbC5pZH0gXG4gICAgICAgICAgICBuYW1lPXthbmltYWwubmFtZX0gXG4gICAgICAgICAgICB0eXBlPXthbmltYWwudHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2FyZHNXcmFwcGVyPlxuICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdGFza1wiXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxBZGRCdXR0b24+QWRkPC9BZGRCdXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFuaW1hbENhcmQiLCJzdHlsZWQiLCJBZGRCdXR0b24iLCJDYXJkc1dyYXBwZXIiLCJzZWN0aW9uIiwiUGFnZVRpdGxlIiwiZGl2IiwiQW5pbWFsc1ZpZXciLCJhbmltYWxzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImFuaW1hbCIsImlkIiwibmFtZSIsInR5cGUiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});