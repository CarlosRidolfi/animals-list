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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AnimalCard */ \"./src/components/AnimalCard/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section.withConfig({\n  displayName: \"view__PageWrapper\",\n  componentId: \"sc-1beciyq-0\"\n})([\"display:flex;justify-content:center;align-items:center;flex-direction:column;input{max-width:200px;}\"]);\n_c = PageWrapper;\nvar CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__CardsWrapper\",\n  componentId: \"sc-1beciyq-1\"\n})([\"display:flex;flex-direction:column;justify-content:center;row-gap:20px;margin-bottom:10px;\"]);\n_c2 = CardsWrapper;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__PageTitle\",\n  componentId: \"sc-1beciyq-2\"\n})([\"font-family:'Cabin Sketch',cursive;color:green;font-size:60px;\"]);\n_c3 = PageTitle;\nfunction AnimalsView(_ref) {\n  _s();\n\n  var _this = this;\n\n  var animals = _ref.animals;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),\n      _React$useState2 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var types = ['cow', 'pig', 'sheep'];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(animals),\n      _React$useState4 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      animalsArray = _React$useState4[0],\n      setAnimalsArray = _React$useState4[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    if (!value) return;\n    setAnimalsArray(function (oldArray) {\n      return [].concat((0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(oldArray), [{\n        id: animalsArray.length + 1,\n        type: types[Math.floor(Math.random() * 3)],\n        name: value\n      }]);\n    });\n  };\n\n  var _handleDelete = function handleDelete(id) {\n    console.log('id', id);\n    var newList = animalsArray.filter(function (line) {\n      return line.id !== id;\n    });\n    setAnimalsArray(newList);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CardsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageTitle, {\n        children: \"Animals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), animalsArray.map(function (animal) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AnimalCard, {\n          id: animal.id,\n          name: animal.name,\n          type: animal.type,\n          handleDelete: function handleDelete() {\n            return _handleDelete(animal.id);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      value: value,\n      placeholder: \"Add a new animal\",\n      onChange: function onChange(e) {\n        return setValue(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AddButton, {\n      onClick: handleClick,\n      children: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalsView, \"mLpVQf709VhoBwM7pvzlDe2m/ko=\");\n\n_c4 = AnimalsView;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PageWrapper\");\n$RefreshReg$(_c2, \"CardsWrapper\");\n$RefreshReg$(_c3, \"PageTitle\");\n$RefreshReg$(_c4, \"AnimalsView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXVCRDs7R0FuRGVSOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeD9lODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJ0AvbGliL2FuaW1hbHMnXG5pbXBvcnQgeyBBbmltYWxDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQWRkQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG5gXG5cbmNvbnN0IENhcmRzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICByb3ctZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYFxuXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ0NhYmluIFNrZXRjaCcsIGN1cnNpdmU7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gQW5pbWFsc1ZpZXcgKHtcbiAgYW5pbWFsc1xufToge1xuICBhbmltYWxzOiBBbmltYWxbXVxufSkge1xuICBcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgdHlwZXMgPSBbJ2NvdycsICdwaWcnLCAnc2hlZXAnXTtcbiAgY29uc3QgW2FuaW1hbHNBcnJheSwgc2V0QW5pbWFsc0FycmF5XSA9IFJlYWN0LnVzZVN0YXRlKGFuaW1hbHMpXG4gIFxuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgc2V0QW5pbWFsc0FycmF5KG9sZEFycmF5ID0+IFsuLi5vbGRBcnJheSwgXG4gICAgICB7XG4gICAgICAgIGlkOiBhbmltYWxzQXJyYXkubGVuZ3RoICsgMSwgXG4gICAgICAgIHR5cGU6IHR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSwgXG4gICAgICAgIG5hbWU6IHZhbHVlXG4gICAgICB9XSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkKTtcbiAgICBjb25zdCBuZXdMaXN0ID0gYW5pbWFsc0FycmF5LmZpbHRlcigobGluZSkgPT4gbGluZS5pZCAhPT0gaWQpO1xuICAgIHNldEFuaW1hbHNBcnJheShuZXdMaXN0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyPlxuICAgICAgPENhcmRzV3JhcHBlcj5cbiAgICAgICAgPFBhZ2VUaXRsZT5BbmltYWxzPC9QYWdlVGl0bGU+XG4gICAgICAgIHthbmltYWxzQXJyYXkubWFwKChhbmltYWwpID0+IChcbiAgICAgICAgICA8QW5pbWFsQ2FyZCAgXG4gICAgICAgICAgICBpZD17YW5pbWFsLmlkfSBcbiAgICAgICAgICAgIG5hbWU9e2FuaW1hbC5uYW1lfSBcbiAgICAgICAgICAgIHR5cGU9e2FuaW1hbC50eXBlfVxuICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUoYW5pbWFsLmlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2FyZHNXcmFwcGVyPlxuICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgYW5pbWFsXCJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPEFkZEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QWRkPC9BZGRCdXR0b24+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQW5pbWFsQ2FyZCIsInN0eWxlZCIsIkFkZEJ1dHRvbiIsIlBhZ2VXcmFwcGVyIiwic2VjdGlvbiIsIkNhcmRzV3JhcHBlciIsImRpdiIsIlBhZ2VUaXRsZSIsIkFuaW1hbHNWaWV3IiwiYW5pbWFscyIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInR5cGVzIiwiYW5pbWFsc0FycmF5Iiwic2V0QW5pbWFsc0FycmF5IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJvbGRBcnJheSIsImlkIiwibGVuZ3RoIiwidHlwZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJoYW5kbGVEZWxldGUiLCJjb25zb2xlIiwibG9nIiwibmV3TGlzdCIsImZpbHRlciIsImxpbmUiLCJtYXAiLCJhbmltYWwiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});