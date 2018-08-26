(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/login/login.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".login_container{\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.login_form{\r\n    box-sizing: content-box;\r\n    width: 368px;\r\n    background: #fff;\r\n    padding: 65px 35px 35px;\r\n    border-radius: 6px;\r\n    margin-top: 150px;\r\n}\r\n.login_login_btn_group{\r\n\r\n}\r\n.login_login_btn{\r\n    width: 100%;\r\n}", "", {"version":3,"sources":["E:/frontend/jhgsj-report/pc/src/pages/login/login.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,cAAc;IACd,wBAAwB;CAC3B;AACD;IACI,wBAAwB;IACxB,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;IACnB,kBAAkB;CACrB;AACD;;CAEC;AACD;IACI,YAAY;CACf","file":"login.css","sourcesContent":[".container{\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.form{\r\n    box-sizing: content-box;\r\n    width: 368px;\r\n    background: #fff;\r\n    padding: 65px 35px 35px;\r\n    border-radius: 6px;\r\n    margin-top: 150px;\r\n}\r\n.login_btn_group{\r\n\r\n}\r\n.login_btn{\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "login_container",
	"form": "login_form",
	"login_btn_group": "login_login_btn_group",
	"login_btn": "login_login_btn"
};

/***/ }),

/***/ "./pages/login/login.css":
/*!*******************************!*\
  !*** ./pages/login/login.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css");

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

/***/ "./pages/login/login.js":
/*!******************************!*\
  !*** ./pages/login/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "../node_modules/antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "../node_modules/antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "../node_modules/antd/es/icon/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "../node_modules/react-router/es/index.js");

var _login = __webpack_require__(/*! ./login.css */ "./pages/login/login.css");

var _login2 = _interopRequireDefault(_login);

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

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loginSuccess: false,
      userRetErr: false,
      passwordRetErr: false
    }, _this.userChange = function () {
      _this.setState({
        userRetErr: false
      });
    }, _this.passwordChange = function () {
      _this.setState({
        passwordRetErr: false
      });
    }, _this.hasErrors = function (fieldsError) {
      return Object.keys(fieldsError).some(function (field) {
        return fieldsError[field];
      });
    }, _this.doLogin = function () {
      var values = _this.props.form.getFieldsValue();
      (0, _request2.default)({
        url: '/api/web_account',
        data: {
          user: values['user'],
          password: values['password']
        },
        success: function success(res) {
          sessionStorage.setItem('user', values['user']);
          _this.setState({
            loginSuccess: true
          });
        },
        fail: function fail(_ref2) {
          var code = _ref2.code,
              msg = _ref2.msg;

          var state = {};
          if (code === 1001) {
            state.userRetErr = msg;
          } else if (code === 1002) {
            state.passwordRetErr = msg;
          } else {}
          _this.setState(state);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          isFieldTouched = _props$form.isFieldTouched,
          getFieldError = _props$form.getFieldError;
      var _state = this.state,
          loginSuccess = _state.loginSuccess,
          userRetErr = _state.userRetErr,
          passwordRetErr = _state.passwordRetErr;

      var userErr = isFieldTouched('user') && getFieldError('user') || userRetErr;
      var passwordErr = isFieldTouched('password') && getFieldError('password') || passwordRetErr;
      var btnErr = this.hasErrors(getFieldsError()) || userErr || passwordErr;
      return _react2.default.createElement(
        'div',
        { className: _login2.default.container },
        loginSuccess ? _react2.default.createElement(_reactRouter.Redirect, { to: '/' }) : null,
        _react2.default.createElement(
          'div',
          { className: _login2.default.form },
          _react2.default.createElement(
            _form2.default,
            null,
            _react2.default.createElement(
              _form2.default.Item,
              {
                validateStatus: userErr ? 'error' : '',
                help: userErr
              },
              getFieldDecorator('user', {
                rules: [{ required: true, message: '请输入用户名' }]
              })(_react2.default.createElement(_input2.default, {
                autoComplete: 'false',
                onChange: this.userChange,
                size: 'large', prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u7528\u6237\u540D' }))
            ),
            _react2.default.createElement(
              _form2.default.Item,
              {
                validateStatus: passwordErr ? 'error' : '',
                help: passwordErr
              },
              getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(_react2.default.createElement(_input2.default, {
                onChange: this.passwordChange,
                autoComplete: 'false',
                type: 'password',
                size: 'large', prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u5BC6\u7801' }))
            ),
            _react2.default.createElement(
              _form2.default.Item,
              null,
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(_react2.default.createElement(
                _checkbox2.default,
                null,
                '\u8BB0\u4F4F\u6211'
              ))
            ),
            _react2.default.createElement(
              _form2.default.Item,
              { className: _login2.default.login_btn_group },
              _react2.default.createElement(
                _button2.default,
                {
                  disabled: btnErr,
                  size: 'large', type: 'primary', htmlType: 'submit', className: _login2.default.login_btn, onClick: this.doLogin },
                '\u767B\u5F55'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.form.validateFields();
      sessionStorage.removeItem('user');
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Login;
}(_react2.default.Component);

var LoginForm = _form2.default.create()(Login);
var _default = LoginForm;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, 'Login', 'E:/frontend/jhgsj-report/pc/src/pages/login/login.js');
  reactHotLoader.register(LoginForm, 'LoginForm', 'E:/frontend/jhgsj-report/pc/src/pages/login/login.js');
  reactHotLoader.register(_default, 'default', 'E:/frontend/jhgsj-report/pc/src/pages/login/login.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vbG9naW4uY3NzPzYzYTciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJzdGF0ZSIsImxvZ2luU3VjY2VzcyIsInVzZXJSZXRFcnIiLCJwYXNzd29yZFJldEVyciIsInVzZXJDaGFuZ2UiLCJzZXRTdGF0ZSIsInBhc3N3b3JkQ2hhbmdlIiwiaGFzRXJyb3JzIiwiZmllbGRzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImZpZWxkIiwiZG9Mb2dpbiIsInZhbHVlcyIsInByb3BzIiwiZm9ybSIsImdldEZpZWxkc1ZhbHVlIiwidXJsIiwiZGF0YSIsInVzZXIiLCJwYXNzd29yZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJmYWlsIiwiY29kZSIsIm1zZyIsImdldEZpZWxkRGVjb3JhdG9yIiwiZ2V0RmllbGRzRXJyb3IiLCJpc0ZpZWxkVG91Y2hlZCIsImdldEZpZWxkRXJyb3IiLCJ1c2VyRXJyIiwicGFzc3dvcmRFcnIiLCJidG5FcnIiLCJjb250YWluZXIiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsImNvbG9yIiwidmFsdWVQcm9wTmFtZSIsImluaXRpYWxWYWx1ZSIsImxvZ2luX2J0bl9ncm91cCIsImxvZ2luX2J0biIsInZhbGlkYXRlRmllbGRzIiwicmVtb3ZlSXRlbSIsIkNvbXBvbmVudCIsIkxvZ2luRm9ybSIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsNEJBQTRCLHNCQUFzQixnQ0FBZ0MsS0FBSyxnQkFBZ0IsZ0NBQWdDLHFCQUFxQix5QkFBeUIsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsS0FBSywyQkFBMkIsU0FBUyxxQkFBcUIsb0JBQW9CLEtBQUssUUFBUSw0R0FB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SFA7QUFJRSxzQkFBTSxPQUpSLEVBSWlCLFFBQVEsZ0RBQU0sTUFBSyxNQUFYLEVBQWtCLE9BQU8sRUFBRWtDLE9BQU8saUJBQVQsRUFBekIsR0FKekIsRUFJb0YsYUFBWSxjQUpoRyxHQUhIO0FBSkwsYUFkSjtBQTRCSTtBQUFBLDZCQUFNLElBQU47QUFBQTtBQUNLWCxnQ0FBa0IsVUFBbEIsRUFBOEI7QUFDM0JZLCtCQUFlLFNBRFk7QUFFM0JDLDhCQUFjO0FBRmEsZUFBOUIsRUFJRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkg7QUFETCxhQTVCSjtBQW9DSTtBQUFBLDZCQUFNLElBQU47QUFBQSxnQkFBWSxXQUFXLGdCQUFNQyxlQUE3QjtBQUNJO0FBQUE7QUFBQTtBQUNFLDRCQUFVUixNQURaO0FBRUUsd0JBQU0sT0FGUixFQUVpQixNQUFLLFNBRnRCLEVBRWdDLFVBQVMsUUFGekMsRUFFa0QsV0FBVyxnQkFBTVMsU0FGbkUsRUFFOEUsU0FBUyxLQUFLL0IsT0FGNUY7QUFBQTtBQUFBO0FBREo7QUFwQ0o7QUFESjtBQUZKLE9BREo7QUFpREg7Ozt3Q0FDa0I7QUFDakIsV0FBS0UsS0FBTCxDQUFXQyxJQUFYLENBQWdCNkIsY0FBaEI7QUFDQXJCLHFCQUFlc0IsVUFBZixDQUEwQixNQUExQjtBQUNEOzs7Ozs7Ozs7RUFqRWUsZ0JBQU1DLFM7O0FBMkcxQixJQUFJQyxZQUFZLGVBQUtDLE1BQUwsR0FBY2xELEtBQWQsQ0FBaEI7ZUFDZWlELFM7Ozs7Ozs7Ozs7Ozs7MEJBNUdUakQsSzswQkEyR0ZpRCxTIiwiZmlsZSI6InNjcmlwdHMvM18xY2FlZmMxMzliOWE1YjVhZjQyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9naW5fY29udGFpbmVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxvZ2luX2Zvcm17XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICB3aWR0aDogMzY4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDY1cHggMzVweCAzNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcclxcbn1cXHJcXG4ubG9naW5fbG9naW5fYnRuX2dyb3Vwe1xcclxcblxcclxcbn1cXHJcXG4ubG9naW5fbG9naW5fYnRue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L2Zyb250ZW5kL2poZ3NqLXJlcG9ydC9wYy9zcmMvcGFnZXMvbG9naW4vbG9naW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7O0NBRUM7QUFDRDtJQUNJLFlBQVk7Q0FDZlwiLFwiZmlsZVwiOlwibG9naW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXJ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9ybXtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIHdpZHRoOiAzNjhweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogNjVweCAzNXB4IDM1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxyXFxufVxcclxcbi5sb2dpbl9idG5fZ3JvdXB7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dpbl9idG57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibG9naW5fY29udGFpbmVyXCIsXG5cdFwiZm9ybVwiOiBcImxvZ2luX2Zvcm1cIixcblx0XCJsb2dpbl9idG5fZ3JvdXBcIjogXCJsb2dpbl9sb2dpbl9idG5fZ3JvdXBcIixcblx0XCJsb2dpbl9idG5cIjogXCJsb2dpbl9sb2dpbl9idG5cIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vbG9naW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9sb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9sb2dpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBJY29uLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2xvZ2luLmNzcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL2hlbHBlcnMvcmVxdWVzdCc7XHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGxvZ2luU3VjY2VzczogZmFsc2UsXHJcbiAgICAgIHVzZXJSZXRFcnI6IGZhbHNlLFxyXG4gICAgICBwYXNzd29yZFJldEVycjogZmFsc2VcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yLCBnZXRGaWVsZHNFcnJvciwgaXNGaWVsZFRvdWNoZWQsIGdldEZpZWxkRXJyb3IgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGxvZ2luU3VjY2VzcywgdXNlclJldEVyciwgcGFzc3dvcmRSZXRFcnIgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdXNlckVyciA9IGlzRmllbGRUb3VjaGVkKCd1c2VyJykgJiYgZ2V0RmllbGRFcnJvcigndXNlcicpIHx8IHVzZXJSZXRFcnI7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRFcnIgPSBpc0ZpZWxkVG91Y2hlZCgncGFzc3dvcmQnKSAmJiBnZXRGaWVsZEVycm9yKCdwYXNzd29yZCcpIHx8IHBhc3N3b3JkUmV0RXJyO1xyXG4gICAgICAgIGNvbnN0IGJ0bkVyciA9IHRoaXMuaGFzRXJyb3JzKGdldEZpZWxkc0Vycm9yKCkpIHx8IHVzZXJFcnIgfHwgcGFzc3dvcmRFcnI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgeyBsb2dpblN1Y2Nlc3MgPyA8UmVkaXJlY3QgdG89Jy8nLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e3VzZXJFcnIgPyAnZXJyb3InOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXt1c2VyRXJyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3VzZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl55So5oi35ZCNJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdmYWxzZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVzZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfSBwcmVmaXg9ezxJY29uIHR5cGU9XCJ1c2VyXCIgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDAsMCwwLC4yNSknIH19IC8+fSBwbGFjZWhvbGRlcj1cIueUqOaIt+WQjVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtwYXNzd29yZEVyciA/ICdlcnJvcicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtwYXNzd29yZEVycn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdwYXNzd29yZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXlr4bnoIEnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eydsYXJnZSd9IHByZWZpeD17PEljb24gdHlwZT1cImxvY2tcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59IHBsYWNlaG9sZGVyPVwi5a+G56CBXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdyZW1lbWJlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnY2hlY2tlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94PuiusOS9j+aIkTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSAgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbl9idG5fZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnRuRXJyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbl9idG59IG9uQ2xpY2s9e3RoaXMuZG9Mb2dpbn0+55m75b2VPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgfVxyXG4gICAgdXNlckNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlclJldEVycjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgcGFzc3dvcmRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmRSZXRFcnI6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgaGFzRXJyb3JzID0gKGZpZWxkc0Vycm9yKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzRXJyb3IpLnNvbWUoZmllbGQgPT4gZmllbGRzRXJyb3JbZmllbGRdKTtcclxuICB9O1xyXG4gICAgZG9Mb2dpbiA9ICgpID0+IHtcclxuICAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMuZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnL2FwaS93ZWJfYWNjb3VudCcsXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgdXNlcjogdmFsdWVzWyd1c2VyJ10sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXNbJ3Bhc3N3b3JkJ11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCB2YWx1ZXNbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGxvZ2luU3VjY2VzczogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6KHtjb2RlLCBtc2d9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHt9O1xyXG4gICAgICAgICAgICBpZihjb2RlID09PSAxMDAxKXtcclxuICAgICAgICAgICAgICBzdGF0ZS51c2VyUmV0RXJyID0gbXNnO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb2RlID09PSAxMDAyKXtcclxuICAgICAgICAgICAgICBzdGF0ZS5wYXNzd29yZFJldEVyciA9IG1zZztcclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxubGV0IExvZ2luRm9ybSA9IEZvcm0uY3JlYXRlKCkoTG9naW4pO1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==