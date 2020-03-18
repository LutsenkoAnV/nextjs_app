webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./pages/components/MyLayout.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\projects_ma\\TT\\react_posts_app\\pages\\posts\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Section = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "id__Section",
  componentId: "arycg-0"
})(["position:relative;font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;width:60%;padding:20px;margin-top:20px;border-radius:10px;box-shadow:0 0 17px -1px rgba(0,0,0,0.81);& .post__text{margin-bottom:40px;}& .post__text:after{content:\"\";display:block;margin:40px auto;width:95%;border-bottom:1px solid black;}"]);
var Comment = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "id__Comment",
  componentId: "arycg-1"
})(["position:relative;width:950px;margin:0 auto 15px;padding:15px;background-color:#f2f3f5;border-radius:18px;& .destroy-comment{display:none;position:absolute;margin:0;padding:0;border:0;background:none;top:5px;right:10px;width:30px;font-size:40px;font-family:arial;color:#cc9a9a;outline:none;transition:color 0.2s ease-out;cursor:pointer;&:after{content:\"\xD7\";}}& .destroy-comment:hover{color:#af5b5e;}&:hover .destroy-comment{display:block;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "id__Form",
  componentId: "arycg-2"
})(["width:100%;& .form__button{display:block;margin:0 auto;}"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].textarea.withConfig({
  displayName: "id__Textarea",
  componentId: "arycg-3"
})(["display:block;margin:10px auto;width:380px;height:80px;border-radius:5px;"]);

var loadData = function loadData(id) {
  var response, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://simple-blog-api.crew.red/posts/".concat(id, "?_embed=comments")));

        case 2:
          response = _context.sent;
          data = response.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Post = function Post(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.show),
      post = _useState2[0],
      setPost = _useState2[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    var show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();

            if (value) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://simple-blog-api.crew.red/comments', {
              postId: post.id,
              body: value
            }));

          case 5:
            _context2.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(loadData(post.id));

          case 7:
            show = _context2.sent;
            setValue('');
            setPost(show);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var deleteComment = function deleteComment(event) {
    var id, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteComment$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = event.target.dataset.id;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("https://simple-blog-api.crew.red/comments/".concat(id)));

          case 3:
            _context3.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(loadData(post.id));

          case 5:
            show = _context3.sent;
            setPost(show);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("h2", {
    className: "post__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, post.title), __jsx("p", {
    className: "post__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, post.body), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, post.comments.map(function (comment) {
    return __jsx(Comment, {
      key: comment.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "destroy-comment",
      "aria-label": "Delete",
      "data-id": comment.id,
      onClick: deleteComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), __jsx("p", {
      className: "comment__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, comment.body));
  })), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(Textarea, {
    type: "text",
    placeholder: "input comment",
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "form__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Add comment"))));
};

Post.getInitialProps = function _callee(context) {
  var id, show;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = context.query.id;
          _context4.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(loadData(id));

        case 3:
          show = _context4.sent;
          return _context4.abrupt("return", {
            show: show
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.d987418235a211c4a887.hot-update.js.map