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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AnimalCard */ \"./src/components/AnimalCard/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section.withConfig({\n  displayName: \"view__PageWrapper\",\n  componentId: \"sc-1beciyq-0\"\n})([\"width:100%;display:flex;justify-content:center;flex-direction:column;input{max-width:300px;}\"]);\n_c = PageWrapper;\nvar CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__CardsWrapper\",\n  componentId: \"sc-1beciyq-1\"\n})([\"display:flex;flex-direction:column;justify-content:center;row-gap:20px;margin-bottom:10px;\"]);\n_c2 = CardsWrapper;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"view__PageTitle\",\n  componentId: \"sc-1beciyq-2\"\n})([\"font-family:'Cabin Sketch',cursive;color:green;font-size:60px;\"]);\n_c3 = PageTitle;\nfunction AnimalsView(_ref) {\n  _s();\n\n  var _this = this;\n\n  var animals = _ref.animals;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),\n      _React$useState2 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var types = ['cow', 'pig', 'sheep'];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(animals),\n      _React$useState4 = (0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      animalsArray = _React$useState4[0],\n      setAnimalsArray = _React$useState4[1];\n\n  console.log(Math.floor(Math.random() * 3));\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    if (!value) return;\n    setAnimalsArray(function (oldArray) {\n      return [].concat((0,C_Users_carlo_Desktop_front_end_interview_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(oldArray), [{\n        id: animals.length + 1,\n        type: types[Math.floor(Math.random() * 3)],\n        name: value\n      }]);\n    });\n  };\n\n  console.log(animals);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CardsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageTitle, {\n        children: \"Animals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), animalsArray.map(function (animal) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AnimalCard, {\n          id: animal.id,\n          name: animal.name,\n          type: animal.type\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      value: value,\n      placeholder: \"Add a new animal\",\n      onChange: function onChange(e) {\n        return setValue(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_3__.AddButton, {\n      onClick: handleClick,\n      children: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalsView, \"mLpVQf709VhoBwM7pvzlDe2m/ko=\");\n\n_c4 = AnimalsView;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PageWrapper\");\n$RefreshReg$(_c2, \"CardsWrapper\");\n$RefreshReg$(_c3, \"PageTitle\");\n$RefreshReg$(_c4, \"AnimalsView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxXQUFXLEdBQUdGLDRFQUFIO0VBQUE7RUFBQTtBQUFBLG9HQUFqQjtLQUFNRTtBQVdOLElBQU1FLFlBQVksR0FBR0osd0VBQUg7RUFBQTtFQUFBO0FBQUEsa0dBQWxCO01BQU1JO0FBUU4sSUFBTUUsU0FBUyxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSxzRUFBZjtNQUFNTTtBQU1DLFNBQVNDLFdBQVQsT0FJSjtFQUFBOztFQUFBOztFQUFBLElBSERDLE9BR0MsUUFIREEsT0FHQzs7RUFFRCxzQkFBMEJWLHFEQUFBLENBQWUsRUFBZixDQUExQjtFQUFBO0VBQUEsSUFBT1ksS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBQWQ7O0VBQ0EsdUJBQXdDZCxxREFBQSxDQUFlVSxPQUFmLENBQXhDO0VBQUE7RUFBQSxJQUFPSyxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFaOztFQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBWTtJQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBSSxDQUFDWixLQUFMLEVBQVk7SUFFWkksZUFBZSxDQUFDLFVBQUFTLFFBQVE7TUFBQSxzTEFBUUEsUUFBUixJQUN0QjtRQUNFQyxFQUFFLEVBQUVoQixPQUFPLENBQUNpQixNQUFSLEdBQWlCLENBRHZCO1FBRUVDLElBQUksRUFBRWQsS0FBSyxDQUFDSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQUQsQ0FGYjtRQUdFUSxJQUFJLEVBQUVqQjtNQUhSLENBRHNCO0lBQUEsQ0FBVCxDQUFmO0VBTUQsQ0FWRDs7RUFZQUssT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVo7RUFFQSxvQkFDRSw4REFBQyxXQUFEO0lBQUEsd0JBQ0UsOERBQUMsWUFBRDtNQUFBLHdCQUNFLDhEQUFDLFNBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixFQUVHSyxZQUFZLENBQUNlLEdBQWIsQ0FBaUIsVUFBQ0MsTUFBRDtRQUFBLG9CQUNoQiw4REFBQyw4REFBRDtVQUNFLEVBQUUsRUFBRUEsTUFBTSxDQUFDTCxFQURiO1VBRUUsSUFBSSxFQUFFSyxNQUFNLENBQUNGLElBRmY7VUFHRSxJQUFJLEVBQUVFLE1BQU0sQ0FBQ0g7UUFIZjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRGdCO01BQUEsQ0FBakIsQ0FGSDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQVdFO01BQ0ksSUFBSSxFQUFDLE1BRFQ7TUFFSSxTQUFTLEVBQUMsT0FGZDtNQUdJLEtBQUssRUFBRWhCLEtBSFg7TUFJSSxXQUFXLEVBQUMsa0JBSmhCO01BS0ksUUFBUSxFQUFFLGtCQUFBVyxDQUFDO1FBQUEsT0FBSVYsUUFBUSxDQUFDVSxDQUFDLENBQUNTLE1BQUYsQ0FBU3BCLEtBQVYsQ0FBWjtNQUFBO0lBTGY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVhGLGVBa0JFLDhEQUFDLDZEQUFEO01BQVcsT0FBTyxFQUFFVSxXQUFwQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXNCRDs7R0FoRGViOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeD9lODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJ0AvbGliL2FuaW1hbHMnXG5pbXBvcnQgeyBBbmltYWxDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQWRkQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hbENhcmQnXG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuYFxuXG5jb25zdCBDYXJkc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcm93LWdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbmBcblxuY29uc3QgUGFnZVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdDYWJpbiBTa2V0Y2gnLCBjdXJzaXZlO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogNjBweDtcbmBcblxuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hbHNWaWV3ICh7XG4gIGFuaW1hbHNcbn06IHtcbiAgYW5pbWFsczogQW5pbWFsW11cbn0pIHtcbiAgXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IHR5cGVzID0gWydjb3cnLCAncGlnJywgJ3NoZWVwJ107XG4gIGNvbnN0IFthbmltYWxzQXJyYXksIHNldEFuaW1hbHNBcnJheV0gPSBSZWFjdC51c2VTdGF0ZShhbmltYWxzKVxuXG4gIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpKVxuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIHNldEFuaW1hbHNBcnJheShvbGRBcnJheSA9PiBbLi4ub2xkQXJyYXksIFxuICAgICAge1xuICAgICAgICBpZDogYW5pbWFscy5sZW5ndGggKyAxLCBcbiAgICAgICAgdHlwZTogdHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCBcbiAgICAgICAgbmFtZTogdmFsdWVcbiAgICAgIH1dKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGFuaW1hbHMpXG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXI+XG4gICAgICA8Q2FyZHNXcmFwcGVyPlxuICAgICAgICA8UGFnZVRpdGxlPkFuaW1hbHM8L1BhZ2VUaXRsZT5cbiAgICAgICAge2FuaW1hbHNBcnJheS5tYXAoKGFuaW1hbCkgPT4gKFxuICAgICAgICAgIDxBbmltYWxDYXJkICBcbiAgICAgICAgICAgIGlkPXthbmltYWwuaWR9IFxuICAgICAgICAgICAgbmFtZT17YW5pbWFsLm5hbWV9IFxuICAgICAgICAgICAgdHlwZT17YW5pbWFsLnR5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRzV3JhcHBlcj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IGFuaW1hbFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxBZGRCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkFkZDwvQWRkQnV0dG9uPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFuaW1hbENhcmQiLCJzdHlsZWQiLCJBZGRCdXR0b24iLCJQYWdlV3JhcHBlciIsInNlY3Rpb24iLCJDYXJkc1dyYXBwZXIiLCJkaXYiLCJQYWdlVGl0bGUiLCJBbmltYWxzVmlldyIsImFuaW1hbHMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0eXBlcyIsImFuaW1hbHNBcnJheSIsInNldEFuaW1hbHNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9sZEFycmF5IiwiaWQiLCJsZW5ndGgiLCJ0eXBlIiwibmFtZSIsIm1hcCIsImFuaW1hbCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});