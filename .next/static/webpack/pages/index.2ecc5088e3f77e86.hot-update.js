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

/***/ "./src/components/AnimalCard/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/AnimalCard/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddButton\": function() { return /* binding */ AddButton; },\n/* harmony export */   \"AnimalCard\": function() { return /* binding */ AnimalCard; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\carlo\\\\Desktop\\\\front-end-interview\\\\src\\\\components\\\\AnimalCard\\\\index.tsx\",\n    _this = undefined;\n\n\n\n\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"AnimalCard__CardWrapper\",\n  componentId: \"sc-nyaowz-0\"\n})([\"width:900px;border:1px solid black;padding:20px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;row-gap:20px;font-family:'Cabin Sketch',cursive;@media screen and (max-width:900px){width:320px;}.hidden{display:none;}:hover{.hidden{display:inline !important;}}\"]);\n_c = CardWrapper;\nvar CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2.withConfig({\n  displayName: \"AnimalCard__CardTitle\",\n  componentId: \"sc-nyaowz-1\"\n})([\"color:black;font-size:24px;\"]);\n_c2 = CardTitle;\nvar ButtonsDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"AnimalCard__ButtonsDiv\",\n  componentId: \"sc-nyaowz-2\"\n})([\"display:flex;justify-content:center;align-items:center;column-gap:10px;\"]);\n_c3 = ButtonsDiv;\nvar NoiseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"AnimalCard__NoiseButton\",\n  componentId: \"sc-nyaowz-3\"\n})([\"max-width:150px;color:black;display:flex;justify-content:center;align-items:center;padding:3px;border:2px solid black;box-shadow:1px 1px 1px;background-color:lightgreen;transition:all ease .5s;cursor:pointer;:hover{background-color:#b1b1db;}\"]);\n_c4 = NoiseButton;\nvar DeleteButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(NoiseButton).withConfig({\n  displayName: \"AnimalCard__DeleteButton\",\n  componentId: \"sc-nyaowz-4\"\n})([\"background-color:tomato;:hover{background-color:tomato;}\"]);\n_c5 = DeleteButton;\nvar AddButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(NoiseButton).withConfig({\n  displayName: \"AnimalCard__AddButton\",\n  componentId: \"sc-nyaowz-5\"\n})([\"background-color:white;font-family:'Cabin Sketch',cursive;margin-top:10px;\"]);\nvar AnimalCard = function AnimalCard(_ref) {\n  var name = _ref.name,\n      id = _ref.id,\n      type = _ref.type,\n      handleDelete = _ref.handleDelete;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardTitle, {\n      children: [name, \" the \", type]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonsDiv, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NoiseButton, {\n        children: \"Make Noise\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DeleteButton, {\n        className: \"hidden\",\n        onClick: function onClick() {\n          return handleDelete;\n        },\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this)]\n  }, id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 9\n  }, _this);\n};\n_c6 = AnimalCard;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"CardWrapper\");\n$RefreshReg$(_c2, \"CardTitle\");\n$RefreshReg$(_c3, \"ButtonsDiv\");\n$RefreshReg$(_c4, \"NoiseButton\");\n$RefreshReg$(_c5, \"DeleteButton\");\n$RefreshReg$(_c6, \"AnimalCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYWxDYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRSxXQUFXLEdBQUdELHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtTQUFqQjtLQUFNQztBQTBCTixJQUFNRSxTQUFTLEdBQUdILHVFQUFIO0VBQUE7RUFBQTtBQUFBLG1DQUFmO01BQU1HO0FBS04sSUFBTUUsVUFBVSxHQUFHTCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrRUFBaEI7TUFBTUs7QUFPTixJQUFNQyxXQUFXLEdBQUdOLDJFQUFIO0VBQUE7RUFBQTtBQUFBLHlQQUFqQjtNQUFNTTtBQWtCTixJQUFNRSxZQUFZLEdBQUdSLDZEQUFNLENBQUNNLFdBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxnRUFBbEI7TUFBTUU7QUFRQyxJQUFNQyxTQUFTLEdBQUdULDZEQUFNLENBQUNNLFdBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxrRkFBZjtBQWFBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXFEO0VBQUEsSUFBbkRDLElBQW1ELFFBQW5EQSxJQUFtRDtFQUFBLElBQTdDQyxFQUE2QyxRQUE3Q0EsRUFBNkM7RUFBQSxJQUF6Q0MsSUFBeUMsUUFBekNBLElBQXlDO0VBQUEsSUFBbkNDLFlBQW1DLFFBQW5DQSxZQUFtQztFQUMzRSxvQkFDSSw4REFBQyxXQUFEO0lBQUEsd0JBQ0ksOERBQUMsU0FBRDtNQUFBLFdBQVlILElBQVosV0FBdUJFLElBQXZCO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLGVBRUksOERBQUMsVUFBRDtNQUFBLHdCQUNJLDhEQUFDLFdBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FESixlQUVJLDhEQUFDLFlBQUQ7UUFBYyxTQUFTLEVBQUMsUUFBeEI7UUFBaUMsT0FBTyxFQUFFO1VBQUEsT0FBTUMsWUFBTjtRQUFBLENBQTFDO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRko7RUFBQSxHQUFrQkYsRUFBbEI7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBU0gsQ0FWTTtNQUFNRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYWxDYXJkL2luZGV4LnRzeD9hNzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICByb3ctZ2FwOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbiBTa2V0Y2gnLCBjdXJzaXZlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oMmBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uc0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuYFxyXG5cclxuY29uc3QgTm9pc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWIxZGI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZChOb2lzZUJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRCdXR0b24gPSBzdHlsZWQoTm9pc2VCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0NhYmluIFNrZXRjaCcsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gXHJcblxyXG50eXBlIEFuaW1hbENhcmRQcm9wcyA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBoYW5kbGVEZWxldGU6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFuaW1hbENhcmQgPSAoe25hbWUsIGlkLCB0eXBlLCBoYW5kbGVEZWxldGV9OiBBbmltYWxDYXJkUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlPntuYW1lfSB0aGUge3R5cGV9PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgIDxCdXR0b25zRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5vaXNlQnV0dG9uPk1ha2UgTm9pc2U8L05vaXNlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBjbGFzc05hbWU9J2hpZGRlbicgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlfT5EZWxldGU8L0RlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25zRGl2PlxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQ2FyZFdyYXBwZXIiLCJkaXYiLCJDYXJkVGl0bGUiLCJoMiIsIkJ1dHRvbnNEaXYiLCJOb2lzZUJ1dHRvbiIsImJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkFkZEJ1dHRvbiIsIkFuaW1hbENhcmQiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiaGFuZGxlRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimalCard/index.tsx\n"));

/***/ })

});