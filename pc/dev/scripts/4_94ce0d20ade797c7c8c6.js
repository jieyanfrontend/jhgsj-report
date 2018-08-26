(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../node_modules/antd/es/list/style/index.css":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/list/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/list/style/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-list {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n}\n.ant-list * {\n  outline: none;\n}\n.ant-list-pagination {\n  margin-top: 24px;\n  text-align: right;\n}\n.ant-list-more {\n  margin-top: 12px;\n  text-align: center;\n}\n.ant-list-more button {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.ant-list-spin {\n  text-align: center;\n  min-height: 40px;\n}\n.ant-list-empty-text {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  padding: 16px;\n  text-align: center;\n}\n.ant-list-item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.ant-list-item-meta {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 0;\n}\n.ant-list-item-meta-avatar {\n  margin-right: 16px;\n}\n.ant-list-item-meta-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n.ant-list-item-meta-title {\n  color: rgba(0, 0, 0, 0.65);\n  margin-bottom: 4px;\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-list-item-meta-title > a {\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-list-item-meta-title > a:hover {\n  color: #1890ff;\n}\n.ant-list-item-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-list-item-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.ant-list-item-content-single {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.ant-list-item-action {\n  font-size: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-left: 48px;\n  padding: 0;\n  list-style: none;\n}\n.ant-list-item-action > li {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n  cursor: pointer;\n  padding: 0 8px;\n  position: relative;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n}\n.ant-list-item-action > li:first-child {\n  padding-left: 0;\n}\n.ant-list-item-action-split {\n  background-color: #e8e8e8;\n  margin-top: -7px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 1px;\n  height: 14px;\n}\n.ant-list-item-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ant-list-header,\n.ant-list-footer {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.ant-list-empty {\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px 0;\n  font-size: 12px;\n  text-align: center;\n}\n.ant-list-split .ant-list-item {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-split .ant-list-item:last-child {\n  border-bottom: none;\n}\n.ant-list-split .ant-list-header {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-loading .ant-list-spin-nested-loading {\n  min-height: 32px;\n}\n.ant-list-something-after-last-item .ant-spin-container > .ant-list-item:last-child {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-lg .ant-list-item {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.ant-list-sm .ant-list-item {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.ant-list-vertical .ant-list-item {\n  display: block;\n}\n.ant-list-vertical .ant-list-item-extra-wrap {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ant-list-vertical .ant-list-item-main {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ant-list-vertical .ant-list-item-extra {\n  margin-left: 58px;\n}\n.ant-list-vertical .ant-list-item-meta {\n  margin-bottom: 16px;\n}\n.ant-list-vertical .ant-list-item-meta-avatar {\n  display: none;\n}\n.ant-list-vertical .ant-list-item-meta-title {\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 12px;\n  font-size: 16px;\n  line-height: 24px;\n}\n.ant-list-vertical .ant-list-item-content {\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ant-list-vertical .ant-list-item-action {\n  margin-left: auto;\n}\n.ant-list-vertical .ant-list-item-action > li {\n  padding: 0 16px;\n}\n.ant-list-vertical .ant-list-item-action > li:first-child {\n  padding-left: 0;\n}\n.ant-list-grid .ant-list-item {\n  border-bottom: none;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 16px;\n}\n.ant-list-grid .ant-list-item-content {\n  display: block;\n}\n.ant-list-bordered {\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n}\n.ant-list-bordered .ant-list-header {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-footer {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-item {\n  border-bottom: 1px solid #e8e8e8;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-pagination {\n  margin: 16px 24px;\n}\n.ant-list-bordered.ant-list-sm .ant-list-item {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.ant-list-bordered.ant-list-sm .ant-list-header,\n.ant-list-bordered.ant-list-sm .ant-list-footer {\n  padding: 8px 16px;\n}\n.ant-list-bordered.ant-list-lg .ant-list-header,\n.ant-list-bordered.ant-list-lg .ant-list-footer {\n  padding: 16px 24px;\n}\n@media screen and (max-width: 768px) {\n  .ant-list-item-action {\n    margin-left: 24px;\n  }\n  .ant-list-vertical .ant-list-item-extra {\n    margin-left: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .ant-list-item {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  .ant-list-item-action {\n    margin-left: 12px;\n  }\n  .ant-list-vertical .ant-list-item-extra-wrap {\n    -webkit-flex-wrap: wrap-reverse;\n        -ms-flex-wrap: wrap-reverse;\n            flex-wrap: wrap-reverse;\n  }\n  .ant-list-vertical .ant-list-item-main {\n    min-width: 220px;\n  }\n  .ant-list-vertical .ant-list-item-extra {\n    margin-left: 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/index/index.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/index/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".index_card{\r\n    min-height: 100%;\r\n    font-size: 24px;\r\n}\r\n.index_bottom-button-container{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    height: 60px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}", "", {"version":3,"sources":["E:/frontend/jhgsj-report/pc/src/pages/index/index.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;CACnB;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,QAAQ;IACR,SAAS;IACT,mBAAmB;CACtB","file":"index.css","sourcesContent":[".card{\r\n    min-height: 100%;\r\n    font-size: 24px;\r\n}\r\n.bottom-button-container{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    height: 60px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"card": "index_card",
	"bottom-button-container": "index_bottom-button-container"
};

/***/ }),

/***/ "./pages/index/index.css":
/*!*******************************!*\
  !*** ./pages/index/index.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/index/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/index/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/index/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "../node_modules/antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _list = __webpack_require__(/*! antd/es/list */ "../node_modules/antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "../node_modules/antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "../node_modules/antd/es/list/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(/*! ../../history */ "./history.js");

var _history2 = _interopRequireDefault(_history);

var _index = __webpack_require__(/*! ./index.css */ "./pages/index/index.css");

var _index2 = _interopRequireDefault(_index);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      unAudit: 0, //未审核
      Auditing: 0, //审核未通过
      Audited: 0 //审核通过
    }, _this.getSummary = function () {
      (0, _request2.default)({
        url: '/api/web_all_type',
        data: {},
        success: function success(res) {
          var data = res.data;
          _this.setState(_extends({}, data));
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          unAudit = _state.unAudit,
          Auditing = _state.Auditing,
          Audited = _state.Audited;

      var doing = parseInt(unAudit),
          did = parseInt(Audited) + parseInt(Auditing);
      var dataSource = [{
        title: '待审核通过',
        count: doing,
        description: '\u60A8\u6709 ' + doing + ' \u6761\u4FE1\u606F\u5F85\u5BA1\u6838\uFF0C\u8BF7\u524D\u5F80\u5F85\u5BA1\u6838\u4FE1\u606F\u9875\u9762\u7EE7\u7EED\u64CD\u4F5C\uFF01'
      }, {
        title: '已完成审核',
        count: did,
        description: '\u60A8\u5DF2\u5B8C\u6210 ' + did + ' \u6761\u4FE1\u606F\u5BA1\u6838\uFF0C\u8BF7\u524D\u5F80\u5F85\u5BA1\u6838\u4FE1\u606F\u9875\u9762\u7EE7\u7EED\u64CD\u4F5C\uFF01'
      }];
      return _react2.default.createElement(
        _card2.default,
        { className: _index2.default.card, title: '\u6D88\u606F\u901A\u77E5\u4E2D\u5FC3' },
        _react2.default.createElement(_list2.default, {
          dataSource: dataSource,
          renderItem: function renderItem(item) {
            return _react2.default.createElement(
              _list2.default.Item,
              null,
              _react2.default.createElement(_list2.default.Item.Meta, {
                title: item.title,
                description: item.description
              }),
              _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                    return _history2.default.push('/audit');
                  } },
                '\u524D\u5F80\u67E5\u770B'
              )
            );
          }
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSummary();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(_react2.default.Component);

var _default = Index;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', 'E:/frontend/jhgsj-report/pc/src/pages/index/index.js');
  reactHotLoader.register(_default, 'default', 'E:/frontend/jhgsj-report/pc/src/pages/index/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGlzdC9zdHlsZS9pbmRleC5jc3M/ODMyNyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGlzdC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2luZGV4LmNzcz8zYjZjIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic3RhdGUiLCJ1bkF1ZGl0IiwiQXVkaXRpbmciLCJBdWRpdGVkIiwiZ2V0U3VtbWFyeSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RhdGUiLCJkb2luZyIsInBhcnNlSW50IiwiZGlkIiwiZGF0YVNvdXJjZSIsInRpdGxlIiwiY291bnQiLCJkZXNjcmlwdGlvbiIsImNhcmQiLCJpdGVtIiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUdBO0FBQ0EsaVdBQWtXLGlPQUFpTyxvQkFBb0IscUJBQXFCLCtCQUErQixtQ0FBbUMsbUNBQW1DLGNBQWMsZUFBZSxxQkFBcUIsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyx3QkFBd0IscUJBQXFCLHNCQUFzQixHQUFHLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1Qix3QkFBd0IsR0FBRyxrQkFBa0IsdUJBQXVC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QyxRQURYLFVBQ1dBLFFBRFg7QUFBQSxVQUNxQkMsT0FEckIsVUFDcUJBLE9BRHJCOztBQUVOLFVBQU1PLFFBQVFDLFNBQVNWLE9BQVQsQ0FBZDtBQUFBLFVBQ0VXLE1BQU1ELFNBQVNSLE9BQVQsSUFBb0JRLFNBQVNULFFBQVQsQ0FENUI7QUFFRSxVQUFNVyxhQUFhLENBQ2pCO0FBQ0VDLGVBQU8sT0FEVDtBQUVFQyxlQUFPTCxLQUZUO0FBR0VNLHVDQUFtQk4sS0FBbkI7QUFIRixPQURpQixFQUtmO0FBQ0FJLGVBQU8sT0FEUDtBQUVBQyxlQUFPSCxHQUZQO0FBR0FJLG1EQUFxQkosR0FBckI7QUFIQSxPQUxlLENBQW5CO0FBV0EsYUFDSTtBQUFBO0FBQUEsVUFBTSxXQUFXLGdCQUFPSyxJQUF4QixFQUE4QixPQUFNLHNDQUFwQztBQUNJO0FBQ0ksc0JBQVlKLFVBRGhCO0FBRUksc0JBQVk7QUFBQSxtQkFDVjtBQUFBLDZCQUFNLElBQU47QUFBQTtBQUNFLDJEQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0UsdUJBQU9LLEtBQUtKLEtBRGQ7QUFFRSw2QkFBYUksS0FBS0Y7QUFGcEIsZ0JBREY7QUFLRTtBQUFBO0FBQUEsa0JBQUcsU0FBUztBQUFBLDJCQUFNLGtCQUFRRyxJQUFSLENBQWEsUUFBYixDQUFOO0FBQUEsbUJBQVo7QUFBQTtBQUFBO0FBTEYsYUFEVTtBQUFBO0FBRmhCO0FBREosT0FESjtBQWdCSDs7O3dDQUNrQjtBQUNqQixXQUFLZixVQUFMO0FBQ0Q7Ozs7Ozs7OztFQXhDZSxnQkFBTWdCLFM7O2VBc0RYckIsSzs7Ozs7Ozs7Ozs7OzswQkF0RFRBLEsiLCJmaWxlIjoic2NyaXB0cy80Xzk0Y2UwZDIwYWRlNzk3YzdjOGM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXFxuLmFudC1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtbGlzdCAqIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hbnQtbGlzdC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFudC1saXN0LW1vcmUge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LW1vcmUgYnV0dG9uIHtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcbi5hbnQtbGlzdC1zcGluIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5hbnQtbGlzdC1lbXB0eS10ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LWl0ZW0ge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMSAwO1xcbiAgICAgIC1tcy1mbGV4OiAxIDA7XFxuICAgICAgICAgIGZsZXg6IDEgMDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWV0YS10aXRsZSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlID4gYSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtbGlzdC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmFudC1saXN0LWl0ZW0tY29udGVudC1zaW5nbGUge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1hY3Rpb24ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC13ZWJraXQtZmxleDogMCAwIGF1dG87XFxuICAgICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5hbnQtbGlzdC1pdGVtLWFjdGlvbiA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LWl0ZW0tYWN0aW9uID4gbGk6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uYW50LWxpc3QtaXRlbS1hY3Rpb24tc3BsaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG4gIG1hcmdpbi10b3A6IC03cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5hbnQtbGlzdC1oZWFkZXIsXFxuLmFudC1saXN0LWZvb3RlciB7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG4uYW50LWxpc3QtZW1wdHkge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbnQtbGlzdC1zcGxpdCAuYW50LWxpc3QtaXRlbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1oZWFkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtbGlzdC1sb2FkaW5nIC5hbnQtbGlzdC1zcGluLW5lc3RlZC1sb2FkaW5nIHtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtbGlzdC1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtIC5hbnQtc3Bpbi1jb250YWluZXIgPiAuYW50LWxpc3QtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LWxpc3QtbGcgLmFudC1saXN0LWl0ZW0ge1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG59XFxuLmFudC1saXN0LXNtIC5hbnQtbGlzdC1pdGVtIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1leHRyYS13cmFwIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tbWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1leHRyYSB7XFxuICBtYXJnaW4tbGVmdDogNThweDtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLW1ldGEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLW1ldGEtYXZhdGFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWFjdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWFjdGlvbiA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWFjdGlvbiA+IGxpOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLmFudC1saXN0LWdyaWQgLmFudC1saXN0LWl0ZW0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtZ3JpZCAuYW50LWxpc3QtaXRlbS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkIC5hbnQtbGlzdC1oZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkIC5hbnQtbGlzdC1mb290ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkIC5hbnQtbGlzdC1pdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkIC5hbnQtbGlzdC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAyNHB4O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQuYW50LWxpc3Qtc20gLmFudC1saXN0LWl0ZW0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkLmFudC1saXN0LXNtIC5hbnQtbGlzdC1oZWFkZXIsXFxuLmFudC1saXN0LWJvcmRlcmVkLmFudC1saXN0LXNtIC5hbnQtbGlzdC1mb290ZXIge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcbi5hbnQtbGlzdC1ib3JkZXJlZC5hbnQtbGlzdC1sZyAuYW50LWxpc3QtaGVhZGVyLFxcbi5hbnQtbGlzdC1ib3JkZXJlZC5hbnQtbGlzdC1sZyAuYW50LWxpc3QtZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5hbnQtbGlzdC1pdGVtLWFjdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgfVxcbiAgLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWV4dHJhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuYW50LWxpc3QtaXRlbSB7XFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuICAuYW50LWxpc3QtaXRlbS1hY3Rpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIH1cXG4gIC5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1leHRyYS13cmFwIHtcXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIH1cXG4gIC5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1tYWluIHtcXG4gICAgbWluLXdpZHRoOiAyMjBweDtcXG4gIH1cXG4gIC5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1leHRyYSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X2NhcmR7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuLmluZGV4X2JvdHRvbS1idXR0b24tY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRTovZnJvbnRlbmQvamhnc2otcmVwb3J0L3BjL3NyYy9wYWdlcy9pbmRleC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtDQUN0QlwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJke1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcbi5ib3R0b20tYnV0dG9uLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNhcmRcIjogXCJpbmRleF9jYXJkXCIsXG5cdFwiYm90dG9tLWJ1dHRvbi1jb250YWluZXJcIjogXCJpbmRleF9ib3R0b20tYnV0dG9uLWNvbnRhaW5lclwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2hpc3RvcnknO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHVuQXVkaXQ6IDAsLy/mnKrlrqHmoLhcclxuICAgIEF1ZGl0aW5nOiAwLCAvL+WuoeaguOacqumAmui/h1xyXG4gICAgQXVkaXRlZDogMCAvL+WuoeaguOmAmui/h1xyXG4gIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgY29uc3QgeyB1bkF1ZGl0LCBBdWRpdGluZywgQXVkaXRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgZG9pbmcgPSBwYXJzZUludCh1bkF1ZGl0KSxcclxuICAgICAgICBkaWQgPSBwYXJzZUludChBdWRpdGVkKSArIHBhcnNlSW50KEF1ZGl0aW5nKTtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+W+heWuoeaguOmAmui/hycsXHJcbiAgICAgICAgICAgIGNvdW50OiBkb2luZyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGDmgqjmnIkgJHtkb2luZ30g5p2h5L+h5oGv5b6F5a6h5qC477yM6K+35YmN5b6A5b6F5a6h5qC45L+h5oGv6aG16Z2i57un57ut5pON5L2c77yBYFxyXG4gICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5bey5a6M5oiQ5a6h5qC4JyxcclxuICAgICAgICAgICAgY291bnQ6IGRpZCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGDmgqjlt7LlrozmiJAgJHtkaWR9IOadoeS/oeaBr+WuoeaguO+8jOivt+WJjeW+gOW+heWuoeaguOS/oeaBr+mhtemdoue7p+e7reaTjeS9nO+8gWBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHRpdGxlPSfmtojmga/pgJrnn6XkuK3lv4MnPlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2F1ZGl0Jyl9PuWJjeW+gOafpeecizwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgdGhpcy5nZXRTdW1tYXJ5KCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdW1tYXJ5ID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvYXBpL3dlYl9hbGxfdHlwZScsXHJcbiAgICAgICAgZGF0YTp7fSxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9