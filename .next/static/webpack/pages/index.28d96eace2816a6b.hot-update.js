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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AnimalCard */ \"./src/components/AnimalCard/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section.withConfig({\n  displayName: \"view__PageWrapper\",\n  componentId: \"sc-1beciyq-0\"\n})([\"display:flex;justify-content:center;align-items:center;flex-direction:column;input{max-width:200px;}\"]);\n_c = PageWrapper;\nvar CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__CardsWrapper\",\n  componentId: \"sc-1beciyq-1\"\n})([\"display:flex;flex-direction:column;justify-content:center;row-gap:20px;margin-bottom:10px;\"]);\n_c2 = CardsWrapper;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__PageTitle\",\n  componentId: \"sc-1beciyq-2\"\n})([\"font-family:'Cabin Sketch',cursive;color:green;font-size:60px;\"]);\n_c3 = PageTitle;\nfunction AnimalsView(_ref) {\n  _s();\n\n  var _this = this;\n\n  var animals = _ref.animals;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),\n      _React$useState2 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var types = ['cow', 'pig', 'sheep'];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(animals),\n      _React$useState4 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      animalsArray = _React$useState4[0],\n      setAnimalsArray = _React$useState4[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    if (!value) return;\n    setAnimalsArray(function (oldArray) {\n      return [].concat((0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(oldArray), [{\n        id: animalsArray.length + 1,\n        type: types[Math.floor(Math.random() * 3)],\n        name: value\n      }]);\n    });\n  };\n\n  var handleDelete = function handleDelete(id) {\n    console.log(id);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CardsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageTitle, {\n        children: \"Animals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), animalsArray.map(function (animal) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AnimalCard, {\n          id: animal.id,\n          name: animal.name,\n          type: animal.type,\n          handleDelete: handleDelete(animal.id)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      value: value,\n      placeholder: \"Add a new animal\",\n      onChange: function onChange(e) {\n        return setValue(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AddButton, {\n      onClick: handleClick,\n      children: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalsView, \"mLpVQf709VhoBwM7pvzlDe2m/ko=\");\n\n_c4 = AnimalsView;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PageWrapper\");\n$RefreshReg$(_c2, \"CardsWrapper\");\n$RefreshReg$(_c3, \"PageTitle\");\n$RefreshReg$(_c4, \"AnimalsView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxXQUFXLEdBQUdGLDRFQUFIO0VBQUE7RUFBQTtBQUFBLDRHQUFqQjtLQUFNRTtBQVdOLElBQU1FLFlBQVksR0FBR0osd0VBQUg7RUFBQTtFQUFBO0FBQUEsa0dBQWxCO01BQU1JO0FBUU4sSUFBTUUsU0FBUyxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSxzRUFBZjtNQUFNTTtBQU1DLFNBQVNDLFdBQVQsT0FJSjtFQUFBOztFQUFBOztFQUFBLElBSERDLE9BR0MsUUFIREEsT0FHQzs7RUFFRCxzQkFBMEJWLHFEQUFBLENBQWUsRUFBZixDQUExQjtFQUFBO0VBQUEsSUFBT1ksS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBQWQ7O0VBQ0EsdUJBQXdDZCxxREFBQSxDQUFlVSxPQUFmLENBQXhDO0VBQUE7RUFBQSxJQUFPSyxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBWTtJQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBSSxDQUFDUCxLQUFMLEVBQVk7SUFFWkksZUFBZSxDQUFDLFVBQUFJLFFBQVE7TUFBQSxzTEFBUUEsUUFBUixJQUN0QjtRQUNFQyxFQUFFLEVBQUVOLFlBQVksQ0FBQ08sTUFBYixHQUFzQixDQUQ1QjtRQUVFQyxJQUFJLEVBQUVULEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFELENBRmI7UUFHRUMsSUFBSSxFQUFFZjtNQUhSLENBRHNCO0lBQUEsQ0FBVCxDQUFmO0VBTUQsQ0FWRDs7RUFZQSxJQUFNZ0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1AsRUFBRCxFQUFhO0lBQ2hDUSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsRUFBWjtFQUNELENBRkQ7O0VBSUEsb0JBQ0UsOERBQUMsV0FBRDtJQUFBLHdCQUNFLDhEQUFDLFlBQUQ7TUFBQSx3QkFDRSw4REFBQyxTQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsRUFFR04sWUFBWSxDQUFDZ0IsR0FBYixDQUFpQixVQUFDQyxNQUFEO1FBQUEsb0JBQ2hCLDhEQUFDLDhEQUFEO1VBQ0UsRUFBRSxFQUFFQSxNQUFNLENBQUNYLEVBRGI7VUFFRSxJQUFJLEVBQUVXLE1BQU0sQ0FBQ0wsSUFGZjtVQUdFLElBQUksRUFBRUssTUFBTSxDQUFDVCxJQUhmO1VBSUUsWUFBWSxFQUFFSyxZQUFZLENBQUNJLE1BQU0sQ0FBQ1gsRUFBUjtRQUo1QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRGdCO01BQUEsQ0FBakIsQ0FGSDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQVlFO01BQ0ksSUFBSSxFQUFDLE1BRFQ7TUFFSSxTQUFTLEVBQUMsT0FGZDtNQUdJLEtBQUssRUFBRVQsS0FIWDtNQUlJLFdBQVcsRUFBQyxrQkFKaEI7TUFLSSxRQUFRLEVBQUUsa0JBQUFNLENBQUM7UUFBQSxPQUFJTCxRQUFRLENBQUNLLENBQUMsQ0FBQ2UsTUFBRixDQUFTckIsS0FBVixDQUFaO01BQUE7SUFMZjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBWkYsZUFtQkUsOERBQUMsNkRBQUQ7TUFBVyxPQUFPLEVBQUVLLFdBQXBCO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBbkJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBdUJEOztHQWpEZVI7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hbmltYWxzL3ZpZXcudHN4P2U4NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnQC9saWIvYW5pbWFscydcbmltcG9ydCB7IEFuaW1hbENhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWFsQ2FyZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBBZGRCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWFsQ2FyZCdcblxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbmBcblxuY29uc3QgQ2FyZHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHJvdy1nYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gXG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnQ2FiaW4gU2tldGNoJywgY3Vyc2l2ZTtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDYwcHg7XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBBbmltYWxzVmlldyAoe1xuICBhbmltYWxzXG59OiB7XG4gIGFuaW1hbHM6IEFuaW1hbFtdXG59KSB7XG4gIFxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB0eXBlcyA9IFsnY293JywgJ3BpZycsICdzaGVlcCddO1xuICBjb25zdCBbYW5pbWFsc0FycmF5LCBzZXRBbmltYWxzQXJyYXldID0gUmVhY3QudXNlU3RhdGUoYW5pbWFscylcbiAgXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICBzZXRBbmltYWxzQXJyYXkob2xkQXJyYXkgPT4gWy4uLm9sZEFycmF5LCBcbiAgICAgIHtcbiAgICAgICAgaWQ6IGFuaW1hbHNBcnJheS5sZW5ndGggKyAxLCBcbiAgICAgICAgdHlwZTogdHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCBcbiAgICAgICAgbmFtZTogdmFsdWVcbiAgICAgIH1dKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlcj5cbiAgICAgIDxDYXJkc1dyYXBwZXI+XG4gICAgICAgIDxQYWdlVGl0bGU+QW5pbWFsczwvUGFnZVRpdGxlPlxuICAgICAgICB7YW5pbWFsc0FycmF5Lm1hcCgoYW5pbWFsKSA9PiAoXG4gICAgICAgICAgPEFuaW1hbENhcmQgIFxuICAgICAgICAgICAgaWQ9e2FuaW1hbC5pZH0gXG4gICAgICAgICAgICBuYW1lPXthbmltYWwubmFtZX0gXG4gICAgICAgICAgICB0eXBlPXthbmltYWwudHlwZX1cbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlKGFuaW1hbC5pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRzV3JhcHBlcj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IGFuaW1hbFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxBZGRCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkFkZDwvQWRkQnV0dG9uPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFuaW1hbENhcmQiLCJzdHlsZWQiLCJBZGRCdXR0b24iLCJQYWdlV3JhcHBlciIsInNlY3Rpb24iLCJDYXJkc1dyYXBwZXIiLCJkaXYiLCJQYWdlVGl0bGUiLCJBbmltYWxzVmlldyIsImFuaW1hbHMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0eXBlcyIsImFuaW1hbHNBcnJheSIsInNldEFuaW1hbHNBcnJheSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2xkQXJyYXkiLCJpZCIsImxlbmd0aCIsInR5cGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYW1lIiwiaGFuZGxlRGVsZXRlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImFuaW1hbCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});