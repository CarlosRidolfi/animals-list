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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimalCard */ \"./src/components/AnimalCard/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\";\n\n\n\n\nvar CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"view__CardsWrapper\",\n  componentId: \"sc-1beciyq-0\"\n})([\"display:flex;flex-direction:column;row-gap:20px;\"]);\n_c = CardsWrapper;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"view__PageTitle\",\n  componentId: \"sc-1beciyq-1\"\n})([\"font-family:'Cabin Sketch',cursive;color:green;font-size:60px;\"]);\n_c2 = PageTitle;\nfunction AnimalsView(_ref) {\n  var _this = this;\n\n  var animals = _ref.animals,\n      addTask = _ref.addTask;\n  var newAnimal = {\n    id: 5,\n    type: 'pig',\n    name: 'Bobby'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CardsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PageTitle, {\n        children: \"Animals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), animals.map(function (animal) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_AnimalCard__WEBPACK_IMPORTED_MODULE_1__.AnimalCard, {\n          id: animal.id,\n          name: animal.name,\n          type: animal.type\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n_c3 = AnimalsView;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CardsWrapper\");\n$RefreshReg$(_c2, \"PageTitle\");\n$RefreshReg$(_c3, \"AnimalsView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFHQSxJQUFNRyxZQUFZLEdBQUdELDRFQUFIO0VBQUE7RUFBQTtBQUFBLHdEQUFsQjtLQUFNQztBQU1OLElBQU1FLFNBQVMsR0FBR0gsd0VBQUg7RUFBQTtFQUFBO0FBQUEsc0VBQWY7TUFBTUc7QUFNQyxTQUFTRSxXQUFULE9BS0o7RUFBQTs7RUFBQSxJQUpEQyxPQUlDLFFBSkRBLE9BSUM7RUFBQSxJQUpRQyxPQUlSLFFBSlFBLE9BSVI7RUFFRCxJQUFNQyxTQUFTLEdBQUc7SUFDaEJDLEVBQUUsRUFBRSxDQURZO0lBRWhCQyxJQUFJLEVBQUUsS0FGVTtJQUdoQkMsSUFBSSxFQUFFO0VBSFUsQ0FBbEI7RUFNQSxvQkFDRTtJQUFBLHVCQUNFLDhEQUFDLFlBQUQ7TUFBQSx3QkFDRSw4REFBQyxTQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsRUFFR0wsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0MsTUFBRDtRQUFBLG9CQUNYLDhEQUFDLDhEQUFEO1VBQ0UsRUFBRSxFQUFFQSxNQUFNLENBQUNKLEVBRGI7VUFFRSxJQUFJLEVBQUVJLE1BQU0sQ0FBQ0YsSUFGZjtVQUdFLElBQUksRUFBRUUsTUFBTSxDQUFDSDtRQUhmO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEVztNQUFBLENBQVosQ0FGSDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFjRDtNQTNCZUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuaW1hbHMvdmlldy50c3g/ZTg3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICdAL2xpYi9hbmltYWxzJ1xuaW1wb3J0IHsgQW5pbWFsQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9BbmltYWxDYXJkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEFkZEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9BbmltYWxDYXJkJ1xuXG5jb25zdCBDYXJkc1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMjBweDtcbmBcblxuY29uc3QgUGFnZVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdDYWJpbiBTa2V0Y2gnLCBjdXJzaXZlO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogNjBweDtcbmBcblxuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hbHNWaWV3ICh7XG4gIGFuaW1hbHMsIGFkZFRhc2tcbn06IHtcbiAgYW5pbWFsczogQW5pbWFsW10sXG4gIGFkZFRhc2s6IGFueVxufSkge1xuXG4gIGNvbnN0IG5ld0FuaW1hbCA9IHtcbiAgICBpZDogNSxcbiAgICB0eXBlOiAncGlnJyxcbiAgICBuYW1lOiAnQm9iYnknLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcmRzV3JhcHBlcj5cbiAgICAgICAgPFBhZ2VUaXRsZT5BbmltYWxzPC9QYWdlVGl0bGU+XG4gICAgICAgIHthbmltYWxzLm1hcCgoYW5pbWFsKSA9PiAoXG4gICAgICAgICAgPEFuaW1hbENhcmQgIFxuICAgICAgICAgICAgaWQ9e2FuaW1hbC5pZH0gXG4gICAgICAgICAgICBuYW1lPXthbmltYWwubmFtZX0gXG4gICAgICAgICAgICB0eXBlPXthbmltYWwudHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2FyZHNXcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbmltYWxDYXJkIiwic3R5bGVkIiwiQ2FyZHNXcmFwcGVyIiwic2VjdGlvbiIsIlBhZ2VUaXRsZSIsImRpdiIsIkFuaW1hbHNWaWV3IiwiYW5pbWFscyIsImFkZFRhc2siLCJuZXdBbmltYWwiLCJpZCIsInR5cGUiLCJuYW1lIiwibWFwIiwiYW5pbWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});