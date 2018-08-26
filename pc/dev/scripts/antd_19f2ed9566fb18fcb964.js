(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd"],{

/***/ "../node_modules/antd/es/_util/interopDefault.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/_util/interopDefault.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return interopDefault; });
// https://github.com/moment/moment/issues/3650
function interopDefault(m) {
    return m["default"] || m;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/isCssAnimationSupported.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/_util/isCssAnimationSupported.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var animation = void 0;
function isCssAnimationSupported() {
    if (animation !== undefined) {
        return animation;
    }
    var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
    var elm = document.createElement('div');
    if (elm.style.animationName !== undefined) {
        animation = true;
    }
    if (animation !== undefined) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                animation = true;
                break;
            }
        }
    }
    animation = animation || false;
    return animation;
}
/* harmony default export */ __webpack_exports__["default"] = (isCssAnimationSupported);

/***/ }),

/***/ "../node_modules/antd/es/_util/isFlexSupported.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/_util/isFlexSupported.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFlexSupported; });
function isFlexSupported() {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var documentElement = window.document.documentElement;

        return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
    }
    return false;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/throttleByAnimationFrame.js":
/*!*****************************************************************!*\
  !*** ../node_modules/antd/es/_util/throttleByAnimationFrame.js ***!
  \*****************************************************************/
/*! exports provided: default, throttleByAnimationFrameDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttleByAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleByAnimationFrameDecorator", function() { return throttleByAnimationFrameDecorator; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util/getRequestAnimationFrame */ "../node_modules/antd/es/_util/getRequestAnimationFrame.js");


var reqAnimFrame = Object(_util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["default"])();
function throttleByAnimationFrame(fn) {
    var requestId = void 0;
    var later = function later(args) {
        return function () {
            requestId = null;
            fn.apply(undefined, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
        };
    };
    var throttled = function throttled() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    throttled.cancel = function () {
        return Object(_util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["cancelRequestAnimationFrame"])(requestId);
    };
    return throttled;
}
function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        var definingProperty = false;
        return {
            configurable: true,
            get: function get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

/***/ }),

/***/ "../node_modules/antd/es/avatar/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/avatar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var Avatar = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Avatar, _React$Component);

    function Avatar(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Avatar);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

        _this.setScale = function () {
            var childrenNode = _this.avatarChildren;
            if (childrenNode) {
                var childrenWidth = childrenNode.offsetWidth;
                var avatarNode = react_dom__WEBPACK_IMPORTED_MODULE_7__["findDOMNode"](_this);
                var avatarWidth = avatarNode.getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth) {
                    _this.setState({
                        scale: (avatarWidth - 8) / childrenWidth
                    });
                } else {
                    _this.setState({
                        scale: 1
                    });
                }
            }
        };
        _this.handleImgLoadError = function () {
            return _this.setState({ isImgExist: false });
        };
        _this.state = {
            scale: 1,
            isImgExist: true
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Avatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setScale();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.children !== this.props.children || prevState.scale !== this.state.scale && this.state.scale === 1 || prevState.isImgExist !== this.state.isImgExist) {
                this.setScale();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                shape = _a.shape,
                size = _a.size,
                src = _a.src,
                icon = _a.icon,
                className = _a.className,
                others = __rest(_a, ["prefixCls", "shape", "size", "src", "icon", "className"]);
            var sizeCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), _classNames));
            var classString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className, sizeCls, (_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-' + shape, shape), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-image', src && this.state.isImgExist), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-icon', icon), _classNames2));
            var children = this.props.children;
            if (src && this.state.isImgExist) {
                children = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('img', { src: src, onError: this.handleImgLoadError });
            } else if (icon) {
                children = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: icon });
            } else {
                var childrenNode = this.avatarChildren;
                if (childrenNode || this.state.scale !== 1) {
                    var childrenStyle = {
                        msTransform: 'scale(' + this.state.scale + ')',
                        WebkitTransform: 'scale(' + this.state.scale + ')',
                        transform: 'scale(' + this.state.scale + ')',
                        position: 'absolute',
                        display: 'inline-block',
                        left: 'calc(50% - ' + Math.round(childrenNode.offsetWidth / 2) + 'px)'
                    };
                    children = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'span',
                        { className: prefixCls + '-string', ref: function ref(span) {
                                return _this2.avatarChildren = span;
                            }, style: childrenStyle },
                        children
                    );
                } else {
                    children = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'span',
                        { className: prefixCls + '-string', ref: function ref(span) {
                                return _this2.avatarChildren = span;
                            } },
                        children
                    );
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classString }),
                children
            );
        }
    }]);

    return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

Avatar.defaultProps = {
    prefixCls: 'ant-avatar',
    shape: 'circle',
    size: 'default'
};

/***/ }),

/***/ "../node_modules/antd/es/avatar/style/css.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/avatar/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/avatar/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/calendar/locale/en_US.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/card/Grid.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/card/Grid.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        others = __rest(props, ["prefixCls", "className"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls + '-grid', className);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classString }));
});

/***/ }),

/***/ "../node_modules/antd/es/card/Meta.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/card/Meta.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls + '-meta', className);
    var avatarDom = avatar ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-avatar' },
        avatar
    ) : null;
    var titleDom = title ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-title' },
        title
    ) : null;
    var descriptionDom = description ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-description' },
        description
    ) : null;
    var MetaDetail = titleDom || descriptionDom ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-detail' },
        titleDom,
        descriptionDom
    ) : null;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classString }),
        avatarDom,
        MetaDetail
    );
});

/***/ }),

/***/ "../node_modules/antd/es/card/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/card/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Grid */ "../node_modules/antd/es/card/Grid.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Meta */ "../node_modules/antd/es/card/Meta.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tabs */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../row */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../col */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var _util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_util/throttleByAnimationFrame */ "../node_modules/antd/es/_util/throttleByAnimationFrame.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");







var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};












var Card = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Card, _React$Component);

    function Card() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Card);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.updateWiderPaddingCalled = false;
        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__["default"])(window, 'resize', this.updateWiderPadding);
            if ('noHovering' in this.props) {
                Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(!this.props.noHovering, '`noHovering` of Card is deprecated, you can remove it safely or use `hoverable` instead.');
                Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(!!this.props.noHovering, '`noHovering={false}` of Card is deprecated, use `hoverable` instead.');
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixel number indicated by designer
            var WIDTH_BOUNDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUNDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUNDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            react__WEBPACK_IMPORTED_MODULE_7__["Children"].forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid__WEBPACK_IMPORTED_MODULE_11__["default"]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "getAction",
        value: function getAction(actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "li",
                    { style: { width: 100 / actions.length + "%" }, key: "action-" + index },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        "span",
                        null,
                        action
                    )
                );
            });
            return actionList;
        }
        // For 2.x compatible

    }, {
        key: "getCompatibleHoverable",
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                bodyStyle = _a.bodyStyle,
                noHovering = _a.noHovering,
                hoverable = _a.hoverable,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                type = _a.type,
                cover = _a.cover,
                actions = _a.actions,
                tabList = _a.tabList,
                children = _a.children,
                activeTabKey = _a.activeTabKey,
                defaultActiveTabKey = _a.defaultActiveTabKey,
                others = __rest(_a, ["prefixCls", "className", "extra", "bodyStyle", "noHovering", "hoverable", "title", "loading", "bordered", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey"]);
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-loading", loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-bordered", bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-hoverable", this.getCompatibleHoverable()), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-contain-tabs", tabList && tabList.length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-type-" + type, !!type), _classNames));
            var loadingBlock = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-loading-content" },
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 22 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 8 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 15 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 6 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 18 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 13 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 9 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 4 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 3 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 16 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _row__WEBPACK_IMPORTED_MODULE_14__["default"],
                    { gutter: 8 },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 8 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 6 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        _col__WEBPACK_IMPORTED_MODULE_15__["default"],
                        { span: 8 },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                )
            );
            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);
            var head = void 0;
            var tabs = tabList && tabList.length ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                _tabs__WEBPACK_IMPORTED_MODULE_13__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, extraProps, { className: prefixCls + "-head-tabs", size: "large", onChange: this.onTabChange }),
                tabList.map(function (item) {
                    return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tabs__WEBPACK_IMPORTED_MODULE_13__["default"].TabPane, { tab: item.tab, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "div",
                    { className: prefixCls + "-head" },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        "div",
                        { className: prefixCls + "-head-wrapper" },
                        title && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            "div",
                            { className: prefixCls + "-head-title" },
                            title
                        ),
                        extra && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            "div",
                            { className: prefixCls + "-extra" },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-cover" },
                cover
            ) : null;
            var body = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-body", style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "ul",
                { className: prefixCls + "-actions" },
                this.getAction(actions)
            ) : null;
            var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_10__["default"])(others, ['onTabChange']);
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);

    return Card;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

Card.Grid = _Grid__WEBPACK_IMPORTED_MODULE_11__["default"];
Card.Meta = _Meta__WEBPACK_IMPORTED_MODULE_12__["default"];
__decorate([Object(_util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_16__["throttleByAnimationFrameDecorator"])()], Card.prototype, "updateWiderPadding", null);

/***/ }),

/***/ "../node_modules/antd/es/card/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/card/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/card/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tabs/style/css */ "../node_modules/antd/es/tabs/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/checkbox/Checkbox.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/checkbox/Checkbox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-checkbox */ "../node_modules/rc-checkbox/es/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Checkbox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Checkbox, _React$Component);

    function Checkbox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Checkbox);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Checkbox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.state, nextState) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.context.checkboxGroup, nextContext.checkboxGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                indeterminate = props.indeterminate,
                style = props.style,
                onMouseEnter = props.onMouseEnter,
                onMouseLeave = props.onMouseLeave,
                restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

            var checkboxGroup = context.checkboxGroup;

            var checkboxProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps);
            if (checkboxGroup) {
                checkboxProps.onChange = function () {
                    return checkboxGroup.toggleOption({ label: children, value: props.value });
                };
                checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
                checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
            }
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-wrapper', true));
            var checkboxClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-indeterminate', indeterminate));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'label',
                { className: classString, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, checkboxProps, { prefixCls: prefixCls, className: checkboxClass, ref: this.saveCheckbox })),
                children !== undefined ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);

    return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

Checkbox.defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false
};
Checkbox.contextTypes = {
    checkboxGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/checkbox/Group.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/checkbox/Group.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox */ "../node_modules/antd/es/checkbox/Checkbox.js");











var CheckboxGroup = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CheckboxGroup);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(value);
            }
        };
        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CheckboxGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                checkboxGroup: {
                    toggleOption: this.toggleOption,
                    value: this.state.value,
                    disabled: this.props.disabled
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value || []
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.state, nextState);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            var options = this.props.options;
            // https://github.com/Microsoft/TypeScript/issues/7960

            return options.map(function (option) {
                if (typeof option === 'string') {
                    return {
                        label: option,
                        value: option
                    };
                }
                return option;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                className = props.className,
                style = props.style,
                options = props.options;

            var groupPrefixCls = prefixCls + '-group';
            var children = props.children;
            if (options && options.length > 0) {
                children = this.getOptions().map(function (option) {
                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        _Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"],
                        { prefixCls: prefixCls, key: option.value, disabled: 'disabled' in option ? option.disabled : props.disabled, value: option.value, checked: state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                                return _this2.toggleOption(option);
                            }, className: groupPrefixCls + '-item' },
                        option.label
                    );
                });
            }
            var classString = classnames__WEBPACK_IMPORTED_MODULE_7___default()(groupPrefixCls, className);
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: classString, style: style },
                children
            );
        }
    }]);

    return CheckboxGroup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

CheckboxGroup.defaultProps = {
    options: [],
    prefixCls: 'ant-checkbox'
};
CheckboxGroup.propTypes = {
    defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
    value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
    options: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
CheckboxGroup.childContextTypes = {
    checkboxGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/checkbox/index.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/checkbox/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "../node_modules/antd/es/checkbox/Checkbox.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "../node_modules/antd/es/checkbox/Group.js");


_Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _Group__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/checkbox/style/css.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/checkbox/style/css.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/checkbox/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/col/index.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/col/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Col"]);

/***/ }),

/***/ "../node_modules/antd/es/col/style/css.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/col/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "../node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/date-picker/RangePicker.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/RangePicker.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_calendar_es_RangeCalendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-calendar/es/RangeCalendar */ "../node_modules/rc-calendar/es/RangeCalendar.js");
/* harmony import */ var rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-calendar/es/Picker */ "../node_modules/rc-calendar/es/Picker.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_interopDefault__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/interopDefault */ "../node_modules/antd/es/_util/interopDefault.js");







/* tslint:disable jsx-no-multiline-js */








function getShowDateFromValue(value) {
    var _value = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(value, 2),
        start = _value[0],
        end = _value[1];
    // value could be an empty array, then we should not reset showDate


    if (!start && !end) {
        return;
    }
    var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
    return [start, newEnd];
}
function formatValue(value, format) {
    return value && value.format(format) || '';
}
function pickerValueAdapter(value) {
    if (!value) {
        return;
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value, value.clone().add(1, 'month')];
}
function isEmptyArray(arr) {
    if (Array.isArray(arr)) {
        return arr.length === 0 || arr.every(function (i) {
            return !i;
        });
    }
    return false;
}
function fixLocale(value, localeCode) {
    if (!localeCode) {
        return;
    }
    if (!value || value.length === 0) {
        return;
    }
    if (value[0]) {
        value[0].locale(localeCode);
    }
    if (value[1]) {
        value[1].locale(localeCode);
    }
}

var RangePicker = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RangePicker, _React$Component);

    function RangePicker(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, RangePicker);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.setState({ value: [] });
            _this.handleChange([]);
        };
        _this.clearHoverValue = function () {
            return _this.setState({ hoverValue: [] });
        };
        _this.handleChange = function (value) {
            var props = _this.props;
            if (!('value' in props)) {
                _this.setState(function (_ref) {
                    var showDate = _ref.showDate;
                    return {
                        value: value,
                        showDate: getShowDateFromValue(value) || showDate
                    };
                });
            }
            props.onChange(value, [formatValue(value[0], props.format), formatValue(value[1], props.format)]);
        };
        _this.handleOpenChange = function (open) {
            if (!('open' in _this.props)) {
                _this.setState({ open: open });
            }
            if (open === false) {
                _this.clearHoverValue();
            }
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        _this.handleShowDateChange = function (showDate) {
            return _this.setState({ showDate: showDate });
        };
        _this.handleHoverChange = function (hoverValue) {
            return _this.setState({ hoverValue: hoverValue });
        };
        _this.handleRangeMouseLeave = function () {
            if (_this.state.open) {
                _this.clearHoverValue();
            }
        };
        _this.handleCalendarInputSelect = function (value) {
            if (!value[0]) {
                return;
            }
            _this.setState(function (_ref2) {
                var showDate = _ref2.showDate;
                return {
                    value: value,
                    showDate: getShowDateFromValue(value) || showDate
                };
            });
        };
        _this.handleRangeClick = function (value) {
            if (typeof value === 'function') {
                value = value();
            }
            _this.setValue(value, true);
            var onOk = _this.props.onOk;

            if (onOk) {
                onOk(value);
            }
        };
        _this.savePicker = function (node) {
            _this.picker = node;
        };
        _this.renderFooter = function () {
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                ranges = _this$props.ranges,
                renderExtraFooter = _this$props.renderExtraFooter;

            if (!ranges && !renderExtraFooter) {
                return null;
            }
            var customFooter = renderExtraFooter ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: prefixCls + '-footer-extra', key: 'extra' },
                renderExtraFooter.apply(undefined, arguments)
            ) : null;
            var operations = Object.keys(ranges || {}).map(function (range) {
                var value = ranges[range];
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'a',
                    { key: range, onClick: function onClick() {
                            return _this.handleRangeClick(value);
                        }, onMouseEnter: function onMouseEnter() {
                            return _this.setState({ hoverValue: value });
                        }, onMouseLeave: _this.handleRangeMouseLeave },
                    range
                );
            });
            var rangeNode = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: prefixCls + '-footer-extra ' + prefixCls + '-range-quick-selector', key: 'range' },
                operations
            );
            return [rangeNode, customFooter];
        };
        var value = props.value || props.defaultValue || [];
        if (value[0] && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_14__["default"])(moment__WEBPACK_IMPORTED_MODULE_8__).isMoment(value[0]) || value[1] && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_14__["default"])(moment__WEBPACK_IMPORTED_MODULE_8__).isMoment(value[1])) {
            throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: https://u.ant.design/date-picker-value');
        }
        var pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
        _this.state = {
            value: value,
            showDate: pickerValueAdapter(pickerValue || Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_14__["default"])(moment__WEBPACK_IMPORTED_MODULE_8__)()),
            open: props.open,
            hoverValue: []
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(RangePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                var state = this.state;
                var value = nextProps.value || [];
                this.setState({
                    value: value,
                    showDate: getShowDateFromValue(value) || state.showDate
                });
            }
            if ('open' in nextProps) {
                this.setState({
                    open: nextProps.open
                });
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(value, hidePanel) {
            this.handleChange(value);
            if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
                this.setState({ open: false });
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.picker.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.picker.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var state = this.state,
                props = this.props;
            var value = state.value,
                showDate = state.showDate,
                hoverValue = state.hoverValue,
                open = state.open;
            var prefixCls = props.prefixCls,
                popupStyle = props.popupStyle,
                style = props.style,
                disabledDate = props.disabledDate,
                disabledTime = props.disabledTime,
                showTime = props.showTime,
                showToday = props.showToday,
                ranges = props.ranges,
                onOk = props.onOk,
                locale = props.locale,
                localeCode = props.localeCode,
                format = props.format,
                dateRender = props.dateRender,
                onCalendarChange = props.onCalendarChange;

            fixLocale(value, localeCode);
            fixLocale(showDate, localeCode);
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_13__["default"])(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');
            var calendarClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-time', showTime), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-range-with-ranges', ranges), _classNames));
            // 需要选择时间时，点击 ok 时才触发 onChange
            var pickerChangeHandler = {
                onChange: this.handleChange
            };
            var calendarProps = {
                onOk: this.handleChange
            };
            if (props.timePicker) {
                pickerChangeHandler.onChange = function (changedValue) {
                    return _this2.handleChange(changedValue);
                };
            } else {
                calendarProps = {};
            }
            if ('mode' in props) {
                calendarProps.mode = props.mode;
            }
            var startPlaceholder = 'placeholder' in props ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
            var endPlaceholder = 'placeholder' in props ? props.placeholder[1] : locale.lang.rangePlaceholder[1];
            var calendar = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_calendar_es_RangeCalendar__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, calendarProps, { onChange: onCalendarChange, format: format, prefixCls: prefixCls, className: calendarClassName, renderFooter: this.renderFooter, timePicker: props.timePicker, disabledDate: disabledDate, disabledTime: disabledTime, dateInputPlaceholder: [startPlaceholder, endPlaceholder], locale: locale.lang, onOk: onOk, dateRender: dateRender, value: showDate, onValueChange: this.handleShowDateChange, hoverValue: hoverValue, onHoverChange: this.handleHoverChange, onPanelChange: props.onPanelChange, showToday: showToday, onInputSelect: this.handleCalendarInputSelect }));
            // default width for showTime
            var pickerStyle = {};
            if (props.showTime) {
                pickerStyle.width = style && style.width || 350;
            }
            var clearIcon = !props.disabled && props.allowClear && value && (value[0] || value[1]) ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_12__["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
            var input = function input(_ref3) {
                var inputValue = _ref3.value;

                var start = inputValue[0];
                var end = inputValue[1];
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { className: props.pickerInputClass },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]('input', { disabled: props.disabled, readOnly: true, value: start && start.format(props.format) || '', placeholder: startPlaceholder, className: prefixCls + '-range-picker-input', tabIndex: -1 }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'span',
                        { className: prefixCls + '-range-picker-separator' },
                        ' ~ '
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]('input', { disabled: props.disabled, readOnly: true, value: end && end.format(props.format) || '', placeholder: endPlaceholder, className: prefixCls + '-range-picker-input', tabIndex: -1 }),
                    clearIcon,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]('span', { className: prefixCls + '-picker-icon' })
                );
            };
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'span',
                { ref: this.savePicker, id: props.id, className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(props.className, props.pickerClass), style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, pickerStyle), tabIndex: props.disabled ? -1 : 0, onFocus: props.onFocus, onBlur: props.onBlur },
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_10__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, pickerChangeHandler, { calendar: calendar, value: value, open: open, onOpenChange: this.handleOpenChange, prefixCls: prefixCls + '-picker-container', style: popupStyle }),
                    input
                )
            );
        }
    }]);

    return RangePicker;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RangePicker);

RangePicker.defaultProps = {
    prefixCls: 'ant-calendar',
    allowClear: true,
    showToday: false
};

/***/ }),

/***/ "../node_modules/antd/es/date-picker/WeekPicker.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/WeekPicker.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-calendar */ "../node_modules/rc-calendar/es/index.js");
/* harmony import */ var rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-calendar/es/Picker */ "../node_modules/rc-calendar/es/Picker.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_interopDefault__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/interopDefault */ "../node_modules/antd/es/_util/interopDefault.js");












function formatValue(value, format) {
    return value && value.format(format) || '';
}

var WeekPicker = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WeekPicker, _React$Component);

    function WeekPicker(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WeekPicker);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (WeekPicker.__proto__ || Object.getPrototypeOf(WeekPicker)).call(this, props));

        _this.weekDateRender = function (current) {
            var selectedValue = _this.state.value;
            var prefixCls = _this.props.prefixCls;

            if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'div',
                    { className: prefixCls + '-selected-day' },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'div',
                        { className: prefixCls + '-date' },
                        current.date()
                    )
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: prefixCls + '-date' },
                current.date()
            );
        };
        _this.handleChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.props.onChange(value, formatValue(value, _this.props.format));
        };
        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.handleChange(null);
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        var value = props.value || props.defaultValue;
        if (value && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_11__["default"])(moment__WEBPACK_IMPORTED_MODULE_6__).isMoment(value)) {
            throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WeekPicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({ value: nextProps.value });
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                disabled = _props.disabled,
                pickerClass = _props.pickerClass,
                popupStyle = _props.popupStyle,
                pickerInputClass = _props.pickerInputClass,
                format = _props.format,
                allowClear = _props.allowClear,
                locale = _props.locale,
                localeCode = _props.localeCode,
                disabledDate = _props.disabledDate,
                style = _props.style,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur;

            var pickerValue = this.state.value;
            if (pickerValue && localeCode) {
                pickerValue.locale(localeCode);
            }
            var placeholder = 'placeholder' in this.props ? this.props.placeholder : locale.lang.placeholder;
            var calendar = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_calendar__WEBPACK_IMPORTED_MODULE_7__["default"], { showWeekNumber: true, dateRender: this.weekDateRender, prefixCls: prefixCls, format: format, locale: locale.lang, showDateInput: false, showToday: false, disabledDate: disabledDate });
            var clearIcon = !disabled && allowClear && this.state.value ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
            var input = function input(_ref) {
                var value = _ref.value;

                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]('input', { ref: _this2.saveInput, disabled: disabled, readOnly: true, value: value && value.format(format) || '', placeholder: placeholder, className: pickerInputClass, onFocus: onFocus, onBlur: onBlur, style: style }),
                    clearIcon,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]('span', { className: prefixCls + '-picker-icon' })
                );
            };
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'span',
                { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, pickerClass), id: this.props.id },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_8__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { calendar: calendar, prefixCls: prefixCls + '-picker-container', value: pickerValue, onChange: this.handleChange, style: popupStyle }),
                    input
                )
            );
        }
    }]);

    return WeekPicker;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WeekPicker);

WeekPicker.defaultProps = {
    format: 'gggg-wo',
    allowClear: true
};

/***/ }),

/***/ "../node_modules/antd/es/date-picker/createPicker.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/createPicker.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPicker; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_calendar_es_MonthCalendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-calendar/es/MonthCalendar */ "../node_modules/rc-calendar/es/MonthCalendar.js");
/* harmony import */ var rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-calendar/es/Picker */ "../node_modules/rc-calendar/es/Picker.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_interopDefault__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/interopDefault */ "../node_modules/antd/es/_util/interopDefault.js");















function createPicker(TheCalendar) {
    return _a = function (_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CalenderWrapper, _React$Component);

        function CalenderWrapper(props) {
            babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CalenderWrapper);

            var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (CalenderWrapper.__proto__ || Object.getPrototypeOf(CalenderWrapper)).call(this, props));

            _this.renderFooter = function () {
                var _this$props = _this.props,
                    prefixCls = _this$props.prefixCls,
                    renderExtraFooter = _this$props.renderExtraFooter;

                return renderExtraFooter ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-footer-extra' },
                    renderExtraFooter.apply(undefined, arguments)
                ) : null;
            };
            _this.clearSelection = function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.handleChange(null);
            };
            _this.handleChange = function (value) {
                var props = _this.props;
                if (!('value' in props)) {
                    _this.setState({
                        value: value,
                        showDate: value
                    });
                }
                props.onChange(value, value && value.format(props.format) || '');
            };
            _this.handleCalendarChange = function (value) {
                _this.setState({ showDate: value });
            };
            _this.saveInput = function (node) {
                _this.input = node;
            };
            var value = props.value || props.defaultValue;
            if (value && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_14__["default"])(moment__WEBPACK_IMPORTED_MODULE_7__).isMoment(value)) {
                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
            }
            _this.state = {
                value: value,
                showDate: value
            };
            return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CalenderWrapper, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if ('value' in nextProps) {
                    this.setState({
                        value: nextProps.value,
                        showDate: nextProps.value
                    });
                }
            }
        }, {
            key: 'focus',
            value: function focus() {
                this.input.focus();
            }
        }, {
            key: 'blur',
            value: function blur() {
                this.input.blur();
            }
        }, {
            key: 'render',
            value: function render() {
                var _classNames,
                    _this2 = this;

                var _state = this.state,
                    value = _state.value,
                    showDate = _state.showDate;

                var props = Object(omit_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props, ['onChange']);
                var prefixCls = props.prefixCls,
                    locale = props.locale,
                    localeCode = props.localeCode;

                var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
                var disabledTime = props.showTime ? props.disabledTime : null;
                var calendarClassName = classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-time', props.showTime), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-month', rc_calendar_es_MonthCalendar__WEBPACK_IMPORTED_MODULE_8__["default"] === TheCalendar), _classNames));
                if (value && localeCode) {
                    value.locale(localeCode);
                }
                var pickerProps = {};
                var calendarProps = {};
                if (props.showTime) {
                    calendarProps = {
                        // fix https://github.com/ant-design/ant-design/issues/1902
                        onSelect: this.handleChange
                    };
                } else {
                    pickerProps = {
                        onChange: this.handleChange
                    };
                }
                if ('mode' in props) {
                    calendarProps.mode = props.mode;
                }
                Object(_util_warning__WEBPACK_IMPORTED_MODULE_13__["default"])(!('onOK' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
                var calendar = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](TheCalendar, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, calendarProps, { disabledDate: props.disabledDate, disabledTime: disabledTime, locale: locale.lang, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_14__["default"])(moment__WEBPACK_IMPORTED_MODULE_7__)(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, dateRender: props.dateRender, format: props.format, showToday: props.showToday, monthCellContentRender: props.monthCellContentRender, renderFooter: this.renderFooter, onPanelChange: props.onPanelChange, onChange: this.handleCalendarChange, value: showDate }));
                var clearIcon = !props.disabled && props.allowClear && value ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_12__["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
                var input = function input(_ref) {
                    var inputValue = _ref.value;
                    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('input', { ref: _this2.saveInput, disabled: props.disabled, readOnly: true, value: inputValue && inputValue.format(props.format) || '', placeholder: placeholder, className: props.pickerInputClass }),
                        clearIcon,
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('span', { className: prefixCls + '-picker-icon' })
                    );
                };
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { id: props.id, className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(props.className, props.pickerClass), style: props.style, onFocus: props.onFocus, onBlur: props.onBlur },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        rc_calendar_es_Picker__WEBPACK_IMPORTED_MODULE_9__["default"],
                        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, pickerProps, { calendar: calendar, value: value, prefixCls: prefixCls + '-picker-container', style: props.popupStyle }),
                        input
                    )
                );
            }
        }]);

        return CalenderWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]), _a.defaultProps = {
        prefixCls: 'ant-calendar',
        allowClear: true,
        showToday: true
    }, _a;
    var _a;
}

/***/ }),

/***/ "../node_modules/antd/es/date-picker/index.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/date-picker/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-calendar */ "../node_modules/rc-calendar/es/index.js");
/* harmony import */ var rc_calendar_es_MonthCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-calendar/es/MonthCalendar */ "../node_modules/rc-calendar/es/MonthCalendar.js");
/* harmony import */ var _createPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPicker */ "../node_modules/antd/es/date-picker/createPicker.js");
/* harmony import */ var _wrapPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapPicker */ "../node_modules/antd/es/date-picker/wrapPicker.js");
/* harmony import */ var _RangePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RangePicker */ "../node_modules/antd/es/date-picker/RangePicker.js");
/* harmony import */ var _WeekPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeekPicker */ "../node_modules/antd/es/date-picker/WeekPicker.js");







var DatePicker = Object(_wrapPicker__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_createPicker__WEBPACK_IMPORTED_MODULE_3__["default"])(rc_calendar__WEBPACK_IMPORTED_MODULE_1__["default"]));
var MonthPicker = Object(_wrapPicker__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_createPicker__WEBPACK_IMPORTED_MODULE_3__["default"])(rc_calendar_es_MonthCalendar__WEBPACK_IMPORTED_MODULE_2__["default"]), 'YYYY-MM');
babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(DatePicker, {
    RangePicker: Object(_wrapPicker__WEBPACK_IMPORTED_MODULE_4__["default"])(_RangePicker__WEBPACK_IMPORTED_MODULE_5__["default"]),
    MonthPicker: MonthPicker,
    WeekPicker: Object(_wrapPicker__WEBPACK_IMPORTED_MODULE_4__["default"])(_WeekPicker__WEBPACK_IMPORTED_MODULE_6__["default"], 'gggg-wo')
});
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "../node_modules/antd/es/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_calendar_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-calendar/es/locale/en_US */ "../node_modules/rc-calendar/es/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");



// Merge into a locale object
var locale = {
    lang: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, rc_calendar_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"]),
    timePickerLocale: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "../node_modules/antd/es/date-picker/style/css.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/style/css.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/date-picker/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");
/* harmony import */ var _time_picker_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../time-picker/style/css */ "../node_modules/antd/es/time-picker/style/css.js");


// style dependencies



/***/ }),

/***/ "../node_modules/antd/es/date-picker/wrapPicker.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/wrapPicker.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapPicker; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-time-picker/es/Panel */ "../node_modules/rc-time-picker/es/Panel.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _time_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../time-picker */ "../node_modules/antd/es/time-picker/index.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");












function getColumns(_ref) {
    var showHour = _ref.showHour,
        showMinute = _ref.showMinute,
        showSecond = _ref.showSecond,
        use12Hours = _ref.use12Hours;

    var column = 0;
    if (showHour) {
        column += 1;
    }
    if (showMinute) {
        column += 1;
    }
    if (showSecond) {
        column += 1;
    }
    if (use12Hours) {
        column += 1;
    }
    return column;
}
function wrapPicker(Picker, defaultFormat) {
    return _a = function (_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PickerWrapper, _React$Component);

        function PickerWrapper() {
            babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PickerWrapper);

            var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (PickerWrapper.__proto__ || Object.getPrototypeOf(PickerWrapper)).apply(this, arguments));

            _this.handleOpenChange = function (open) {
                var onOpenChange = _this.props.onOpenChange;

                onOpenChange(open);
            };
            _this.handleFocus = function (e) {
                var onFocus = _this.props.onFocus;

                if (onFocus) {
                    onFocus(e);
                }
            };
            _this.handleBlur = function (e) {
                var onBlur = _this.props.onBlur;

                if (onBlur) {
                    onBlur(e);
                }
            };
            _this.savePicker = function (node) {
                _this.picker = node;
            };
            _this.getDefaultLocale = function () {
                var result = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _locale_en_US__WEBPACK_IMPORTED_MODULE_11__["default"], _this.props.locale);
                result.lang = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, result.lang, (_this.props.locale || {}).lang);
                return result;
            };
            _this.renderPicker = function (locale, localeCode) {
                var _classNames2;

                var props = _this.props;
                var prefixCls = props.prefixCls,
                    inputPrefixCls = props.inputPrefixCls;

                var pickerClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-picker', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-picker-' + props.size, !!props.size));
                var pickerInputClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-picker-input', inputPrefixCls, (_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, inputPrefixCls + '-lg', props.size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, inputPrefixCls + '-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, inputPrefixCls + '-disabled', props.disabled), _classNames2));
                var timeFormat = props.showTime && props.showTime.format || 'HH:mm:ss';
                var rcTimePickerProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(_time_picker__WEBPACK_IMPORTED_MODULE_10__["generateShowHourMinuteSecond"])(timeFormat), { format: timeFormat, use12Hours: props.showTime && props.showTime.use12Hours });
                var columns = getColumns(rcTimePickerProps);
                var timePickerCls = prefixCls + '-time-picker-column-' + columns;
                var timePicker = props.showTime ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, rcTimePickerProps, props.showTime, { prefixCls: prefixCls + '-time-picker', className: timePickerCls, placeholder: locale.timePickerLocale.placeholder, transitionName: 'slide-up' })) : null;
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Picker, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, { ref: _this.savePicker, pickerClass: pickerClass, pickerInputClass: pickerInputClass, locale: locale, localeCode: localeCode, timePicker: timePicker, onOpenChange: _this.handleOpenChange, onFocus: _this.handleFocus, onBlur: _this.handleBlur }));
            };
            return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PickerWrapper, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _props = this.props,
                    autoFocus = _props.autoFocus,
                    disabled = _props.disabled;

                if (autoFocus && !disabled) {
                    this.focus();
                }
            }
        }, {
            key: 'focus',
            value: function focus() {
                this.picker.focus();
            }
        }, {
            key: 'blur',
            value: function blur() {
                this.picker.blur();
            }
        }, {
            key: 'render',
            value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { componentName: 'DatePicker', defaultLocale: this.getDefaultLocale },
                    this.renderPicker
                );
            }
        }]);

        return PickerWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]), _a.defaultProps = {
        format: defaultFormat || 'YYYY-MM-DD',
        transitionName: 'slide-up',
        popupStyle: {},
        onChange: function onChange() {},
        onOk: function onOk() {},
        onOpenChange: function onOpenChange() {},

        locale: {},
        prefixCls: 'ant-calendar',
        inputPrefixCls: 'ant-input'
    }, _a;
    var _a;
}

/***/ }),

/***/ "../node_modules/antd/es/form/Form.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/form/Form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_form_es_createDOMForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-form/es/createDOMForm */ "../node_modules/rc-form/es/createDOMForm.js");
/* harmony import */ var rc_form_es_createFormField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-form/es/createFormField */ "../node_modules/rc-form/es/createFormField.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormItem */ "../node_modules/antd/es/form/FormItem.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "../node_modules/antd/es/form/constants.js");
















var Form = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Form, _React$Component);

    function Form(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Form);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        Object(_util_warning__WEBPACK_IMPORTED_MODULE_12__["default"])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Form, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var layout = this.props.layout;

            return {
                vertical: layout === 'vertical'
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                hideRequiredMark = _props.hideRequiredMark,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                layout = _props.layout;

            var formClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-horizontal', layout === 'horizontal'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-vertical', layout === 'vertical'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-inline', layout === 'inline'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-hide-required-mark', hideRequiredMark), _classNames), className);
            var formProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props, ['prefixCls', 'className', 'layout', 'form', 'hideRequiredMark']);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('form', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, formProps, { className: formClassName }));
        }
    }]);

    return Form;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form);

Form.defaultProps = {
    prefixCls: 'ant-form',
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    }
};
Form.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    layout: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['horizontal', 'inline', 'vertical']),
    children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    hideRequiredMark: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
Form.childContextTypes = {
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
Form.Item = _FormItem__WEBPACK_IMPORTED_MODULE_13__["default"];
Form.createFormField = rc_form_es_createFormField__WEBPACK_IMPORTED_MODULE_10__["default"];
Form.create = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return Object(rc_form_es_createDOMForm__WEBPACK_IMPORTED_MODULE_9__["default"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ fieldNameProp: 'id' }, options, { fieldMetaProp: _constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_META_PROP"], fieldDataProp: _constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_DATA_PROP"] }));
};

/***/ }),

/***/ "../node_modules/antd/es/form/FormItem.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/form/FormItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _grid_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../grid/row */ "../node_modules/antd/es/grid/row.js");
/* harmony import */ var _grid_col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../grid/col */ "../node_modules/antd/es/grid/col.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "../node_modules/antd/es/form/constants.js");
















var FormItem = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FormItem, _React$Component);

    function FormItem() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FormItem);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));

        _this.state = { helpShow: false };
        _this.onHelpAnimEnd = function (_key, helpShow) {
            _this.setState({ helpShow: helpShow });
        };
        // Resolve duplicated ids bug between different forms
        // https://github.com/ant-design/ant-design/issues/7351
        _this.onLabelClick = function (e) {
            var label = _this.props.label;

            var id = _this.props.id || _this.getId();
            if (!id) {
                return;
            }
            var controls = document.querySelectorAll('[id="' + id + '"]');
            if (controls.length !== 1) {
                // Only prevent in default situation
                // Avoid preventing event in `label={<a href="xx">link</a>}``
                if (typeof label === 'string') {
                    e.preventDefault();
                }
                var formItemNode = react_dom__WEBPACK_IMPORTED_MODULE_7__["findDOMNode"](_this);
                var control = formItemNode.querySelector('[id="' + id + '"]');
                if (control && control.focus) {
                    control.focus();
                }
            }
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FormItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_13__["default"])(this.getControls(this.props.children, true).length <= 1, '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
        }
    }, {
        key: 'getHelpMsg',
        value: function getHelpMsg() {
            var props = this.props;
            var onlyControl = this.getOnlyControl();
            if (props.help === undefined && onlyControl) {
                var errors = this.getField().errors;
                return errors ? errors.map(function (e) {
                    return e.message;
                }).join(', ') : '';
            }
            return props.help;
        }
    }, {
        key: 'getControls',
        value: function getControls(children, recursively) {
            var controls = [];
            var childrenArray = react__WEBPACK_IMPORTED_MODULE_6__["Children"].toArray(children);
            for (var i = 0; i < childrenArray.length; i++) {
                if (!recursively && controls.length > 0) {
                    break;
                }
                var child = childrenArray[i];
                if (child.type && (child.type === FormItem || child.type.displayName === 'FormItem')) {
                    continue;
                }
                if (!child.props) {
                    continue;
                }
                if (_constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_META_PROP"] in child.props) {
                    // And means FIELD_DATA_PROP in chidl.props, too.
                    controls.push(child);
                } else if (child.props.children) {
                    controls = controls.concat(this.getControls(child.props.children, recursively));
                }
            }
            return controls;
        }
    }, {
        key: 'getOnlyControl',
        value: function getOnlyControl() {
            var child = this.getControls(this.props.children, false)[0];
            return child !== undefined ? child : null;
        }
    }, {
        key: 'getChildProp',
        value: function getChildProp(prop) {
            var child = this.getOnlyControl();
            return child && child.props && child.props[prop];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.getChildProp('id');
        }
    }, {
        key: 'getMeta',
        value: function getMeta() {
            return this.getChildProp(_constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_META_PROP"]);
        }
    }, {
        key: 'getField',
        value: function getField() {
            return this.getChildProp(_constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_DATA_PROP"]);
        }
    }, {
        key: 'renderHelp',
        value: function renderHelp() {
            var prefixCls = this.props.prefixCls;
            var help = this.getHelpMsg();
            var children = help ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-explain', key: 'help' },
                help
            ) : null;
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
                { transitionName: 'show-help', component: '', transitionAppear: true, key: 'help', onEnd: this.onHelpAnimEnd },
                children
            );
        }
    }, {
        key: 'renderExtra',
        value: function renderExtra() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                extra = _props.extra;

            return extra ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-extra' },
                extra
            ) : null;
        }
    }, {
        key: 'getValidateStatus',
        value: function getValidateStatus() {
            var onlyControl = this.getOnlyControl();
            if (!onlyControl) {
                return '';
            }
            var field = this.getField();
            if (field.validating) {
                return 'validating';
            }
            if (field.errors) {
                return 'error';
            }
            var fieldValue = 'value' in field ? field.value : this.getMeta().initialValue;
            if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
                return 'success';
            }
            return '';
        }
    }, {
        key: 'renderValidateWrapper',
        value: function renderValidateWrapper(c1, c2, c3) {
            var props = this.props;
            var onlyControl = this.getOnlyControl;
            var validateStatus = props.validateStatus === undefined && onlyControl ? this.getValidateStatus() : props.validateStatus;
            var classes = this.props.prefixCls + '-item-control';
            if (validateStatus) {
                classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.prefixCls + '-item-control', {
                    'has-feedback': props.hasFeedback || validateStatus === 'validating',
                    'has-success': validateStatus === 'success',
                    'has-warning': validateStatus === 'warning',
                    'has-error': validateStatus === 'error',
                    'is-validating': validateStatus === 'validating'
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: classes },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: this.props.prefixCls + '-item-children' },
                    c1
                ),
                c2,
                c3
            );
        }
    }, {
        key: 'renderWrapper',
        value: function renderWrapper(children) {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                wrapperCol = _props2.wrapperCol;

            var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-item-control-wrapper', wrapperCol && wrapperCol.className);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _grid_col__WEBPACK_IMPORTED_MODULE_12__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, wrapperCol, { className: className, key: 'wrapper' }),
                children
            );
        }
    }, {
        key: 'isRequired',
        value: function isRequired() {
            var required = this.props.required;

            if (required !== undefined) {
                return required;
            }
            if (this.getOnlyControl()) {
                var meta = this.getMeta() || {};
                var validate = meta.validate || [];
                return validate.filter(function (item) {
                    return !!item.rules;
                }).some(function (item) {
                    return item.rules.some(function (rule) {
                        return rule.required;
                    });
                });
            }
            return false;
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                label = _props3.label,
                labelCol = _props3.labelCol,
                colon = _props3.colon,
                id = _props3.id;

            var context = this.context;
            var required = this.isRequired();
            var labelColClassName = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-item-label', labelCol && labelCol.className);
            var labelClassName = classnames__WEBPACK_IMPORTED_MODULE_9___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-item-required', required));
            var labelChildren = label;
            // Keep label is original where there should have no colon
            var haveColon = colon && !context.vertical;
            // Remove duplicated user input colon
            if (haveColon && typeof label === 'string' && label.trim() !== '') {
                labelChildren = label.replace(/[：|:]\s*$/, '');
            }
            return label ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _grid_col__WEBPACK_IMPORTED_MODULE_12__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, labelCol, { className: labelColClassName, key: 'label' }),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'label',
                    { htmlFor: id || this.getId(), className: labelClassName, title: typeof label === 'string' ? label : '', onClick: this.onLabelClick },
                    labelChildren
                )
            ) : null;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var children = this.props.children;

            return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
        }
    }, {
        key: 'renderFormItem',
        value: function renderFormItem(children) {
            var _itemClassName;

            var props = this.props;
            var prefixCls = props.prefixCls;
            var style = props.style;
            var itemClassName = (_itemClassName = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_itemClassName, prefixCls + '-item', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg() || this.state.helpShow), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_itemClassName, prefixCls + '-item-no-colon', !props.colon), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_itemClassName, '' + props.className, !!props.className), _itemClassName);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _grid_row__WEBPACK_IMPORTED_MODULE_11__["default"],
                { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(itemClassName), style: style },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.renderChildren();
            return this.renderFormItem(children);
        }
    }]);

    return FormItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormItem);

FormItem.defaultProps = {
    hasFeedback: false,
    prefixCls: 'ant-form',
    colon: true
};
FormItem.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node]),
    labelCol: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
    help: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool]),
    validateStatus: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['', 'success', 'warning', 'error', 'validating']),
    hasFeedback: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    wrapperCol: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
    colon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
FormItem.contextTypes = {
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

/***/ }),

/***/ "../node_modules/antd/es/form/constants.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/form/constants.js ***!
  \*************************************************/
/*! exports provided: FIELD_META_PROP, FIELD_DATA_PROP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_META_PROP", function() { return FIELD_META_PROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_DATA_PROP", function() { return FIELD_DATA_PROP; });
var FIELD_META_PROP = 'data-__meta';
var FIELD_DATA_PROP = 'data-__field';

/***/ }),

/***/ "../node_modules/antd/es/form/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/form/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "../node_modules/antd/es/form/Form.js");

/* harmony default export */ __webpack_exports__["default"] = (_Form__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/form/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/form/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/form/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grid/style/css */ "../node_modules/antd/es/grid/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/grid/col.js":
/*!*******************************************!*\
  !*** ../node_modules/antd/es/grid/col.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var stringOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]);
var objectOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]);

var Col = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Col, _React$Component);

    function Col() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Col);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
                var _extends2;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if (babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, sizeClassObj, (_extends2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
            });
            var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + span, span !== undefined), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-order-' + order, order), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-offset-' + offset, offset), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-push-' + push, push), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, others, { className: classes }),
                children
            );
        }
    }]);

    return Col;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Col);

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber,
    xxl: objectOrNumber
};

/***/ }),

/***/ "../node_modules/antd/es/grid/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/grid/index.js ***!
  \*********************************************/
/*! exports provided: Row, Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "../node_modules/antd/es/grid/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col */ "../node_modules/antd/es/grid/col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "../node_modules/antd/es/grid/row.js":
/*!*******************************************!*\
  !*** ../node_modules/antd/es/grid/row.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire = void 0;
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = __webpack_require__(/*! enquire.js */ "../node_modules/enquire.js/src/index.js");
}




var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

var Row = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Row, _React$Component);

    function Row() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Row);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));

        _this.state = {
            screens: {}
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Row, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            Object.keys(responsiveMap).map(function (screen) {
                return enquire.register(responsiveMap[screen], {
                    match: function match() {
                        if (babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, prevState.screens, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, screen, true))
                            };
                        });
                    },
                    unmatch: function unmatch() {
                        if (babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, prevState.screens, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, screen, false))
                            };
                        });
                    },
                    // Keep a empty destory to avoid triggering unmatch when unregister
                    destroy: function destroy() {}
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            Object.keys(responsiveMap).map(function (screen) {
                return enquire.unregister(responsiveMap[screen]);
            });
        }
    }, {
        key: 'getGutter',
        value: function getGutter() {
            var gutter = this.props.gutter;

            if ((typeof gutter === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(gutter)) === 'object') {
                for (var i = 0; i <= responsiveArray.length; i++) {
                    var breakpoint = responsiveArray[i];
                    if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                        return gutter[breakpoint];
                    }
                }
            }
            return gutter;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "style", "children", "prefixCls"]);
            var gutter = this.getGutter();
            var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls, !type), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + type, type), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
            var cols = react__WEBPACK_IMPORTED_MODULE_7__["Children"].map(children, function (col) {
                if (!col) {
                    return null;
                }
                if (col.props && gutter > 0) {
                    return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(col, {
                        style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style)
                    });
                }
                return col;
            });
            var otherProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, others);
            delete otherProps.gutter;
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, otherProps, { className: classes, style: rowStyle }),
                cols
            );
        }
    }]);

    return Row;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Row);

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    align: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    justify: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
    gutter: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

/***/ }),

/***/ "../node_modules/antd/es/grid/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/grid/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/input/Group.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/input/Group.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var Group = function Group(props) {
    var _classNames;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-lg', props.size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-compact', props.compact), _classNames), className);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'span',
        { className: cls, style: props.style },
        props.children
    );
};
/* harmony default export */ __webpack_exports__["default"] = (Group);

/***/ }),

/***/ "../node_modules/antd/es/input/Input.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/input/Input.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");










function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Input = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Input, _React$Component);

    function Input() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Input);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Input, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            return classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
        }
    }, {
        key: 'renderLabeledInput',
        value: function renderLabeledInput(children) {
            var _classNames3;

            var props = this.props;
            // Not wrap when there is not addons
            if (!props.addonBefore && !props.addonAfter) {
                return children;
            }
            var wrapperClassName = props.prefixCls + '-group';
            var addonClassName = wrapperClassName + '-addon';
            var addonBefore = props.addonBefore ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: addonClassName },
                props.addonBefore
            ) : null;
            var addonAfter = props.addonAfter ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: addonClassName },
                props.addonAfter
            ) : null;
            var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.prefixCls + '-wrapper', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, wrapperClassName, addonBefore || addonAfter));
            var groupClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.prefixCls + '-group-wrapper', (_classNames3 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, props.prefixCls + '-group-wrapper-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, props.prefixCls + '-group-wrapper-lg', props.size === 'large'), _classNames3));
            // Need another wrapper for changing display:table to display:inline-block
            // and put style prop in wrapper
            if (addonBefore || addonAfter) {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: groupClassName, style: props.style },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'span',
                        { className: className },
                        addonBefore,
                        react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](children, { style: null }),
                        addonAfter
                    )
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: className },
                addonBefore,
                children,
                addonAfter
            );
        }
    }, {
        key: 'renderLabeledIcon',
        value: function renderLabeledIcon(children) {
            var _classNames4;

            var props = this.props;

            if (!('prefix' in props || 'suffix' in props)) {
                return children;
            }
            var prefix = props.prefix ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: props.prefixCls + '-prefix' },
                props.prefix
            ) : null;
            var suffix = props.suffix ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: props.prefixCls + '-suffix' },
                props.suffix
            ) : null;
            var affixWrapperCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.className, props.prefixCls + '-affix-wrapper', (_classNames4 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames4, props.prefixCls + '-affix-wrapper-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames4, props.prefixCls + '-affix-wrapper-lg', props.size === 'large'), _classNames4));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: affixWrapperCls, style: props.style },
                prefix,
                react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](children, { style: null, className: this.getInputClassName() }),
                suffix
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props2 = this.props,
                value = _props2.value,
                className = _props2.className;
            // Fix https://fb.me/react-unknown-prop

            var otherProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
            if ('value' in this.props) {
                otherProps.value = fixControlledValue(value);
                // Input elements must be either controlled or uncontrolled,
                // specify either the value prop, or the defaultValue prop, but not both.
                delete otherProps.defaultValue;
            }
            return this.renderLabeledIcon(react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('input', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(this.getInputClassName(), className), onKeyDown: this.handleKeyDown, ref: this.saveInput })));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderLabeledInput(this.renderInput());
        }
    }]);

    return Input;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

Input.defaultProps = {
    prefixCls: 'ant-input',
    type: 'text',
    disabled: false
};
Input.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['small', 'default', 'large']),
    maxLength: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    addonBefore: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    addonAfter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    autosize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
    onPressEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    prefix: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    suffix: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

/***/ }),

/***/ "../node_modules/antd/es/input/Search.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/input/Search.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "../node_modules/antd/es/input/Input.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Search = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Search, _React$Component);

    function Search() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Search);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));

        _this.onSearch = function () {
            var onSearch = _this.props.onSearch;

            if (onSearch) {
                onSearch(_this.input.input.value);
            }
            _this.input.focus();
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Search, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'getButtonOrIcon',
        value: function getButtonOrIcon() {
            var _props = this.props,
                enterButton = _props.enterButton,
                prefixCls = _props.prefixCls,
                size = _props.size;

            if (!enterButton) {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { className: prefixCls + '-icon', type: 'search', key: 'searchIcon' });
            }
            var enterButtonAsElement = enterButton;
            if (enterButtonAsElement.type === _button__WEBPACK_IMPORTED_MODULE_10__["default"] || enterButtonAsElement.type === 'button') {
                return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](enterButtonAsElement, enterButtonAsElement.type === _button__WEBPACK_IMPORTED_MODULE_10__["default"] ? {
                    className: prefixCls + '-button',
                    size: size,
                    onClick: this.onSearch
                } : {
                    onClick: this.onSearch
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _button__WEBPACK_IMPORTED_MODULE_10__["default"],
                { className: prefixCls + '-button', type: 'primary', size: size, onClick: this.onSearch, key: 'enterButton' },
                enterButton === true ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'search' }) : enterButton
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                inputPrefixCls = _a.inputPrefixCls,
                size = _a.size,
                suffix = _a.suffix,
                enterButton = _a.enterButton,
                others = __rest(_a, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "enterButton"]);
            delete others.onSearch;
            var buttonOrIcon = this.getButtonOrIcon();
            var searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
            var inputClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-enter-button', !!enterButton), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, !!size), _classNames));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ onPressEnter: this.onSearch }, others, { size: size, className: inputClassName, prefixCls: inputPrefixCls, suffix: searchSuffix, ref: this.saveInput }));
        }
    }]);

    return Search;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

Search.defaultProps = {
    inputPrefixCls: 'ant-input',
    prefixCls: 'ant-input-search',
    enterButton: false
};

/***/ }),

/***/ "../node_modules/antd/es/input/TextArea.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/input/TextArea.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _calculateNodeHeight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculateNodeHeight */ "../node_modules/antd/es/input/calculateNodeHeight.js");










function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var TextArea = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TextArea, _React$Component);

    function TextArea() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TextArea);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));

        _this.state = {
            textareaStyles: {}
        };
        _this.resizeTextarea = function () {
            var autosize = _this.props.autosize;

            if (!autosize || !_this.textAreaRef) {
                return;
            }
            var minRows = autosize ? autosize.minRows : null;
            var maxRows = autosize ? autosize.maxRows : null;
            var textareaStyles = Object(_calculateNodeHeight__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.textAreaRef, false, minRows, maxRows);
            _this.setState({ textareaStyles: textareaStyles });
        };
        _this.handleTextareaChange = function (e) {
            if (!('value' in _this.props)) {
                _this.resizeTextarea();
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(e);
            }
        };
        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveTextAreaRef = function (textArea) {
            _this.textAreaRef = textArea;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TextArea, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.resizeTextarea();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Re-render with the new content then recalculate the height as required.
            if (this.props.value !== nextProps.value) {
                if (this.nextFrameActionId) {
                    clearNextFrameAction(this.nextFrameActionId);
                }
                this.nextFrameActionId = onNextFrame(this.resizeTextarea);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.textAreaRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.textAreaRef.blur();
        }
    }, {
        key: 'getTextAreaClassName',
        value: function getTextAreaClassName() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                disabled = _props.disabled;

            return classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-disabled', disabled));
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var otherProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_7__["default"])(props, ['prefixCls', 'onPressEnter', 'autosize']);
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, this.state.textareaStyles);
            // Fix https://github.com/ant-design/ant-design/issues/6776
            // Make sure it could be reset when using form.getFieldDecorator
            if ('value' in otherProps) {
                otherProps.value = otherProps.value || '';
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('textarea', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, { className: this.getTextAreaClassName(), style: style, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: this.saveTextAreaRef }));
        }
    }]);

    return TextArea;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

TextArea.defaultProps = {
    prefixCls: 'ant-input'
};

/***/ }),

/***/ "../node_modules/antd/es/input/calculateNodeHeight.js":
/*!************************************************************!*\
  !*** ../node_modules/antd/es/input/calculateNodeHeight.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateNodeHeight; });
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = void 0;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
    }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox

    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        sizingStyle = _calculateNodeStyling.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content


    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = Number.MIN_SAFE_INTEGER;
    var maxHeight = Number.MAX_SAFE_INTEGER;
    var height = hiddenTextarea.scrollHeight;
    var overflowY = void 0;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}

/***/ }),

/***/ "../node_modules/antd/es/input/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/input/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "../node_modules/antd/es/input/Input.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "../node_modules/antd/es/input/Group.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "../node_modules/antd/es/input/Search.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextArea */ "../node_modules/antd/es/input/TextArea.js");




_Input__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _Group__WEBPACK_IMPORTED_MODULE_1__["default"];
_Input__WEBPACK_IMPORTED_MODULE_0__["default"].Search = _Search__WEBPACK_IMPORTED_MODULE_2__["default"];
_Input__WEBPACK_IMPORTED_MODULE_0__["default"].TextArea = _TextArea__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Input__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/input/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/input/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/input/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style/css */ "../node_modules/antd/es/button/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/list/Item.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/list/Item.js ***!
  \********************************************/
/*! exports provided: Meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Meta = function Meta(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-list' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item-meta', className);
    var content = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
        'div',
        { className: prefixCls + '-item-meta-content' },
        title && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'h4',
            { className: prefixCls + '-item-meta-title' },
            title
        ),
        description && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'div',
            { className: prefixCls + '-item-meta-description' },
            description
        )
    );
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
        avatar && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'div',
            { className: prefixCls + '-item-meta-avatar' },
            avatar
        ),
        (title || description) && content
    );
};
function getGrid(grid, t) {
    return grid[t] && Math.floor(24 / grid[t]);
}
var GridColumns = ['', 1, 2, 3, 4, 6, 8, 12, 24];

var Item = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Item, _React$Component);

    function Item() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Item);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Item, [{
        key: 'render',
        value: function render() {
            var grid = this.context.grid;
            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-list' : _a$prefixCls,
                children = _a.children,
                actions = _a.actions,
                extra = _a.extra,
                className = _a.className,
                others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className"]);
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item', className);
            var metaContent = [];
            var otherContent = [];
            react__WEBPACK_IMPORTED_MODULE_6__["Children"].forEach(children, function (element) {
                if (element && element.type && element.type === Meta) {
                    metaContent.push(element);
                } else {
                    otherContent.push(element);
                }
            });
            var contentClassString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item-content', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-item-content-single', metaContent.length < 1));
            var content = otherContent.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: contentClassString },
                otherContent
            ) : null;
            var actionsContent = void 0;
            if (actions && actions.length > 0) {
                var actionsContentItem = function actionsContentItem(action, i) {
                    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'li',
                        { key: prefixCls + '-item-action-' + i },
                        action,
                        i !== actions.length - 1 && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('em', { className: prefixCls + '-item-action-split' })
                    );
                };
                actionsContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'ul',
                    { className: prefixCls + '-item-action' },
                    actions.map(function (action, i) {
                        return actionsContentItem(action, i);
                    })
                );
            }
            var extraContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-item-extra-wrap' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-item-main' },
                    metaContent,
                    content,
                    actionsContent
                ),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-item-extra' },
                    extra
                )
            );
            var mainContent = grid ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _grid__WEBPACK_IMPORTED_MODULE_9__["Col"],
                { span: getGrid(grid, 'column'), xs: getGrid(grid, 'xs'), sm: getGrid(grid, 'sm'), md: getGrid(grid, 'md'), lg: getGrid(grid, 'lg'), xl: getGrid(grid, 'xl'), xxl: getGrid(grid, 'xxl') },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
                    extra && extraContent,
                    !extra && metaContent,
                    !extra && content,
                    !extra && actionsContent
                )
            ) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
                extra && extraContent,
                !extra && metaContent,
                !extra && content,
                !extra && actionsContent
            );
            return mainContent;
        }
    }]);

    return Item;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Item);

Item.Meta = Meta;
Item.propTypes = {
    column: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xs: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    sm: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    md: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    lg: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xxl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns)
};
Item.contextTypes = {
    grid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/list/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/list/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../spin */ "../node_modules/antd/es/spin/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pagination */ "../node_modules/antd/es/pagination/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Item */ "../node_modules/antd/es/list/Item.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};










var List = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(List, _React$Component);

    function List() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, List);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));

        _this.keys = {};
        _this.renderItem = function (item, index) {
            var _this$props = _this.props,
                dataSource = _this$props.dataSource,
                renderItem = _this$props.renderItem,
                rowKey = _this$props.rowKey;

            var key = void 0;
            if (typeof rowKey === 'function') {
                key = rowKey(dataSource[index]);
            } else if (typeof rowKey === 'string') {
                key = dataSource[rowKey];
            } else {
                key = dataSource.key;
            }
            if (!key) {
                key = 'list-item-' + index;
            }
            _this.keys[index] = key;
            return renderItem(item, index);
        };
        _this.renderEmpty = function (contextLocale) {
            var locale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, contextLocale, _this.props.locale);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: _this.props.prefixCls + '-empty-text' },
                locale.emptyText
            );
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(List, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                grid: this.props.grid
            };
        }
    }, {
        key: 'isSomethingAfterLastItem',
        value: function isSomethingAfterLastItem() {
            var _props = this.props,
                loadMore = _props.loadMore,
                pagination = _props.pagination,
                footer = _props.footer;

            return !!(loadMore || pagination || footer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _a = this.props,
                bordered = _a.bordered,
                split = _a.split,
                className = _a.className,
                children = _a.children,
                itemLayout = _a.itemLayout,
                loadMore = _a.loadMore,
                pagination = _a.pagination,
                prefixCls = _a.prefixCls,
                grid = _a.grid,
                dataSource = _a.dataSource,
                size = _a.size,
                rowKey = _a.rowKey,
                renderItem = _a.renderItem,
                header = _a.header,
                footer = _a.footer,
                loading = _a.loading,
                locale = _a.locale,
                rest = __rest(_a, ["bordered", "split", "className", "children", "itemLayout", "loadMore", "pagination", "prefixCls", "grid", "dataSource", "size", "rowKey", "renderItem", "header", "footer", "loading", "locale"]);
            var loadingProp = loading;
            if (typeof loadingProp === 'boolean') {
                loadingProp = {
                    spinning: loadingProp
                };
            }
            var isLoading = loadingProp && loadingProp.spinning;
            // large => lg
            // small => sm
            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-vertical', itemLayout === 'vertical'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + sizeCls, sizeCls), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-split', split), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-bordered', bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-loading', isLoading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-grid', grid), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-something-after-last-item', this.isSomethingAfterLastItem()), _classNames));
            var paginationContent = pagination ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-pagination' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], pagination)
            ) : null;
            var childrenContent = void 0;
            childrenContent = isLoading && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('div', { style: { minHeight: 53 } });
            if (dataSource.length > 0) {
                var items = dataSource.map(function (item, index) {
                    return _this2.renderItem(item, index);
                });
                var childrenList = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(items, function (child, index) {
                    return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](child, {
                        key: _this2.keys[index]
                    });
                });
                childrenContent = grid ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _grid__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    { gutter: grid.gutter },
                    childrenList
                ) : childrenList;
            } else if (!children && !isLoading) {
                childrenContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { componentName: 'Table', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_10__["default"].Table },
                    this.renderEmpty
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ className: classString }, rest),
                header && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-header' },
                    header
                ),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _spin__WEBPACK_IMPORTED_MODULE_11__["default"],
                    loadingProp,
                    childrenContent,
                    children
                ),
                footer && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-footer' },
                    footer
                ),
                loadMore || paginationContent
            );
        }
    }]);

    return List;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

List.Item = _Item__WEBPACK_IMPORTED_MODULE_14__["default"];
List.childContextTypes = {
    grid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};
List.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-list',
    bordered: false,
    split: true,
    loading: false,
    pagination: false
};

/***/ }),

/***/ "../node_modules/antd/es/list/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/list/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/list/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spin_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spin/style/css */ "../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var _pagination_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pagination/style/css */ "../node_modules/antd/es/pagination/style/css.js");
/* harmony import */ var _grid_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grid/style/css */ "../node_modules/antd/es/grid/style/css.js");


// style dependencies




/***/ }),

/***/ "../node_modules/antd/es/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ../node_modules/antd/es/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var LocaleReceiver = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocaleReceiver, _React$Component);

    function LocaleReceiver() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocaleReceiver);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocaleReceiver.__proto__ || Object.getPrototypeOf(LocaleReceiver)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocaleReceiver, [{
        key: 'getLocale',
        value: function getLocale() {
            var _props = this.props,
                componentName = _props.componentName,
                defaultLocale = _props.defaultLocale;
            var antLocale = this.context.antLocale;

            var localeFromContext = antLocale && antLocale[componentName];
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
        }
    }, {
        key: 'getLocaleCode',
        value: function getLocaleCode() {
            var antLocale = this.context.antLocale;

            var localeCode = antLocale && antLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if (antLocale && antLocale.exist && !localeCode) {
                return 'en-us';
            }
            return localeCode;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.getLocale(), this.getLocaleCode());
        }
    }]);

    return LocaleReceiver;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LocaleReceiver);

LocaleReceiver.contextTypes = {
    antLocale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

/***/ }),

/***/ "../node_modules/antd/es/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/locale-provider/default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");
/* harmony import */ var _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/en_US */ "../node_modules/antd/es/calendar/locale/en_US.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    locale: 'en',
    Pagination: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
    DatePicker: _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"],
    TimePicker: _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"],
    Calendar: _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__["default"],
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
});

/***/ }),

/***/ "../node_modules/antd/es/message/index.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/message/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");



var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer = void 0;
function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    rc_notification__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance({
        prefixCls: prefixCls,
        transitionName: transitionName,
        style: { top: defaultTop },
        getContainer: getContainer
    }, function (instance) {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}
function notice(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var onClose = arguments[3];

    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];
    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }
    var target = key++;
    getMessageInstance(function (instance) {
        instance.notice({
            key: target,
            duration: duration,
            style: {},
            content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                'div',
                { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_2__["default"], { type: iconType }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                    'span',
                    null,
                    content
                )
            ),
            onClose: onClose
        });
    });
    return function () {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
}
/* harmony default export */ __webpack_exports__["default"] = ({
    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
        if (options.transitionName !== undefined) {
            transitionName = options.transitionName;
            messageInstance = null; // delete messageInstance for new transitionName
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
});

/***/ }),

/***/ "../node_modules/antd/es/message/style/css.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/message/style/css.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/message/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/modal/ActionButton.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/modal/ActionButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");








var ActionButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionButton, _React$Component);

    function ActionButton(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionButton);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                actionFn = _this$props.actionFn,
                closeModal = _this$props.closeModal;

            if (actionFn) {
                var ret = void 0;
                if (actionFn.length) {
                    ret = actionFn(closeModal);
                } else {
                    ret = actionFn();
                    if (!ret) {
                        closeModal();
                    }
                }
                if (ret && ret.then) {
                    _this.setState({ loading: true });
                    ret.then(function () {
                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                        // this.setState({ loading: false });
                        closeModal.apply(undefined, arguments);
                    }, function () {
                        // See: https://github.com/ant-design/ant-design/issues/6183
                        _this.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        };
        _this.state = {
            loading: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus) {
                var $this = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this);
                this.timeoutId = setTimeout(function () {
                    return $this.focus();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                children = _props.children;

            var loading = this.state.loading;
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                _button__WEBPACK_IMPORTED_MODULE_6__["default"],
                { type: type, onClick: this.onClick, loading: loading },
                children
            );
        }
    }]);

    return ActionButton;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "../node_modules/antd/es/modal/Modal.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/modal/Modal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dialog */ "../node_modules/rc-dialog/es/DialogWrap.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");












var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Modal, _React$Component);

    function Modal() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Modal);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        _this.renderFooter = function (locale) {
            var _this$props = _this.props,
                okText = _this$props.okText,
                okType = _this$props.okType,
                cancelText = _this$props.cancelText,
                confirmLoading = _this$props.confirmLoading;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { onClick: _this.handleCancel },
                    cancelText || locale.cancelText
                ),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { type: okType, loading: confirmLoading, onClick: _this.handleOk },
                    okText || locale.okText
                )
            );
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition = null;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                footer = _props.footer,
                visible = _props.visible;

            var defaultFooter = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'Modal', defaultLocale: Object(_locale__WEBPACK_IMPORTED_MODULE_11__["getConfirmLocale"])() },
                this.renderFooter
            );
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { footer: footer === undefined ? defaultFooter : footer, visible: visible, mousePosition: mousePosition, onClose: this.handleCancel }));
        }
    }]);

    return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

Modal.defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'
};
Modal.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    onOk: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onCancel: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    okText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    cancelText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
    confirmLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    align: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
    footer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    closable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "../node_modules/antd/es/modal/confirm.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/modal/confirm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirm; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "../node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionButton */ "../node_modules/antd/es/modal/ActionButton.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");


var _this = undefined;








var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"];
var ConfirmDialog = function ConfirmDialog(props) {
    var onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        zIndex = props.zIndex,
        afterClose = props.afterClose,
        visible = props.visible,
        keyboard = props.keyboard;

    var iconType = props.iconType || 'question-circle';
    var okType = props.okType || 'primary';
    var prefixCls = props.prefixCls || 'ant-confirm';
    // 默认为 true，保持向下兼容
    var okCancel = 'okCancel' in props ? props.okCancel : true;
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    var runtimeLocale = Object(_locale__WEBPACK_IMPORTED_MODULE_7__["getConfirmLocale"])();
    var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    var cancelText = props.cancelText || runtimeLocale.cancelText;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, prefixCls + '-' + props.type, props.className);
    var cancelButton = okCancel && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        _ActionButton__WEBPACK_IMPORTED_MODULE_6__["default"],
        { actionFn: onCancel, closeModal: close },
        cancelText
    );
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        _Modal__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: classString, onCancel: close.bind(_this, { triggerCancel: true }), visible: visible, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width, zIndex: zIndex, afterClose: afterClose, keyboard: keyboard },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            'div',
            { className: prefixCls + '-body-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: prefixCls + '-body' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { type: iconType }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'span',
                    { className: prefixCls + '-title' },
                    props.title
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-content' },
                    props.content
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: prefixCls + '-btns' },
                cancelButton,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    _ActionButton__WEBPACK_IMPORTED_MODULE_6__["default"],
                    { type: okType, actionFn: onOk, closeModal: close, autoFocus: true },
                    okText
                )
            )
        )
    );
};
function confirm(config) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (IS_REACT_16) {
            render(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, { close: close, visible: false, afterClose: destroy.bind.apply(destroy, [this].concat(args)) }));
        } else {
            destroy.apply(undefined, args);
        }
    }
    function destroy() {
        var unmountResult = react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (config.onCancel && triggerCancel) {
            config.onCancel.apply(config, args);
        }
    }
    function render(props) {
        react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ConfirmDialog, props), div);
    }
    render(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, { visible: true, close: close }));
    return {
        destroy: close
    };
}

/***/ }),

/***/ "../node_modules/antd/es/modal/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/modal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "../node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm */ "../node_modules/antd/es/modal/confirm.js");



_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].info = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].success = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].error = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'error', iconType: 'cross-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warning = _Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warn = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].confirm = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'confirm', okCancel: true }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/modal/locale.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/modal/locale.js ***!
  \***********************************************/
/*! exports provided: changeConfirmLocale, getConfirmLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeConfirmLocale", function() { return changeConfirmLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmLocale", function() { return getConfirmLocale; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");


var runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
    }
}
function getConfirmLocale() {
    return runtimeLocale;
}

/***/ }),

/***/ "../node_modules/antd/es/modal/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/modal/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/modal/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style/css */ "../node_modules/antd/es/button/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/notification/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/notification/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");




var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer = void 0;
function setNotificationConfig(options) {
    var duration = options.duration,
        placement = options.placement,
        bottom = options.bottom,
        top = options.top,
        getContainer = options.getContainer;

    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
}
function getPlacementStyle(placement) {
    var style = void 0;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
    }
    return style;
}
function getNotificationInstance(prefixCls, placement, callback) {
    var cacheKey = prefixCls + '-' + placement;
    if (notificationInstance[cacheKey]) {
        callback(notificationInstance[cacheKey]);
        return;
    }
    rc_notification__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
        prefixCls: prefixCls,
        className: prefixCls + '-' + placement,
        style: getPlacementStyle(placement),
        getContainer: defaultGetContainer
    }, function (notification) {
        notificationInstance[cacheKey] = notification;
        callback(notification);
    });
}
var typeToIcon = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o',
    warning: 'exclamation-circle-o'
};
function notice(args) {
    var outerPrefixCls = args.prefixCls || 'ant-notification';
    var prefixCls = outerPrefixCls + '-notice';
    var duration = args.duration === undefined ? defaultDuration : args.duration;
    var iconNode = null;
    if (args.icon) {
        iconNode = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            'span',
            { className: prefixCls + '-icon' },
            args.icon
        );
    } else if (args.type) {
        var iconType = typeToIcon[args.type];
        iconNode = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.type, type: iconType });
    }
    var autoMarginTag = !args.description && iconNode ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('span', { className: prefixCls + '-message-single-line-auto-margin' }) : null;
    getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, function (notification) {
        notification.notice({
            content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: iconNode ? prefixCls + '-with-icon' : '' },
                iconNode,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-message' },
                    autoMarginTag,
                    args.message
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-description' },
                    args.description
                ),
                args.btn ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'span',
                    { className: prefixCls + '-btn' },
                    args.btn
                ) : null
            ),
            duration: duration,
            closable: true,
            onClose: args.onClose,
            key: args.key,
            style: args.style || {},
            className: args.className
        });
    });
}
var api = {
    open: notice,
    close: function close(key) {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            return notificationInstance[cacheKey].removeNotice(key);
        });
    },

    config: setNotificationConfig,
    destroy: function destroy() {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
    api[type] = function (args) {
        return api.open(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, args, { type: type }));
    };
});
api.warn = api.warning;
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "../node_modules/antd/es/notification/style/css.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/notification/style/css.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/notification/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/pagination/MiniSelect.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/pagination/MiniSelect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select */ "../node_modules/antd/es/select/index.js");








var MiniSelect = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MiniSelect, _React$Component);

    function MiniSelect() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MiniSelect);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (MiniSelect.__proto__ || Object.getPrototypeOf(MiniSelect)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MiniSelect, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_select__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ size: 'small' }, this.props));
        }
    }]);

    return MiniSelect;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MiniSelect);

MiniSelect.Option = _select__WEBPACK_IMPORTED_MODULE_6__["default"].Option;

/***/ }),

/***/ "../node_modules/antd/es/pagination/Pagination.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/pagination/Pagination.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-pagination */ "../node_modules/rc-pagination/es/index.js");
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var _MiniSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MiniSelect */ "../node_modules/antd/es/pagination/MiniSelect.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};








var Pagination = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Pagination, _React$Component);

    function Pagination() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Pagination);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));

        _this.renderPagination = function (locale) {
            var _a = _this.props,
                className = _a.className,
                size = _a.size,
                restProps = __rest(_a, ["className", "size"]);
            var isSmall = size === 'small';
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, { mini: isSmall }), selectComponentClass: isSmall ? _MiniSelect__WEBPACK_IMPORTED_MODULE_11__["default"] : _select__WEBPACK_IMPORTED_MODULE_10__["default"], locale: locale }));
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Pagination, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                { componentName: 'Pagination', defaultLocale: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"] },
                this.renderPagination
            );
        }
    }]);

    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

Pagination.defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select'
};

/***/ }),

/***/ "../node_modules/antd/es/pagination/index.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/pagination/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "../node_modules/antd/es/pagination/Pagination.js");

/* harmony default export */ __webpack_exports__["default"] = (_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/pagination/style/css.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/pagination/style/css.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/pagination/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../select/style/css */ "../node_modules/antd/es/select/style/css.js");
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");


// style dependencies



/***/ }),

/***/ "../node_modules/antd/es/radio/group.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/group.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");










function getCheckedValue(children) {
    var value = null;
    var matched = false;
    react__WEBPACK_IMPORTED_MODULE_5__["Children"].forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RadioGroup, _React$Component);

    function RadioGroup(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RadioGroup);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled,
                    name: this.props.name
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                _props$className = props.className,
                className = _props$className === undefined ? '' : _props$className,
                options = props.options;

            var groupPrefixCls = prefixCls + '-group';
            var classString = classnames__WEBPACK_IMPORTED_MODULE_7___default()(groupPrefixCls, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, groupPrefixCls + '-' + props.size, props.size), className);
            var children = props.children;
            // 如果存在 options, 优先使用
            if (options && options.length > 0) {
                children = options.map(function (option, index) {
                    if (typeof option === 'string') {
                        // 此处类型自动推导为 string
                        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                            _radio__WEBPACK_IMPORTED_MODULE_9__["default"],
                            { key: index, prefixCls: prefixCls, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
                            option
                        );
                    } else {
                        // 此处类型自动推导为 { label: string value: string }
                        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                            _radio__WEBPACK_IMPORTED_MODULE_9__["default"],
                            { key: index, prefixCls: prefixCls, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
                            option.label
                        );
                    }
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, id: props.id },
                children
            );
        }
    }]);

    return RadioGroup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

RadioGroup.defaultProps = {
    disabled: false,
    prefixCls: 'ant-radio'
};
RadioGroup.childContextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/index.js ***!
  \**********************************************/
/*! exports provided: Button, Group, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "../node_modules/antd/es/radio/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _radioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButton */ "../node_modules/antd/es/radio/radioButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });




_radio__WEBPACK_IMPORTED_MODULE_0__["default"].Button = _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"];
_radio__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _group__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_radio__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/radio/radio.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/radio.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-checkbox */ "../node_modules/rc-checkbox/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Radio = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Radio, _React$Component);

    function Radio() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Radio);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.state, nextState) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

            var radioGroup = context.radioGroup;

            var radioProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps);
            if (radioGroup) {
                radioProps.name = radioGroup.name;
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'label',
                { className: wrapperClassString, style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, radioProps, { prefixCls: prefixCls, ref: this.saveCheckbox })),
                children !== undefined ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);

    return Radio;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Radio);

Radio.defaultProps = {
    prefixCls: 'ant-radio',
    type: 'radio'
};
Radio.contextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/radioButton.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/radio/radioButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");









var RadioButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RadioButton, _React$Component);

    function RadioButton() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RadioButton);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["default"], radioProps);
        }
    }]);

    return RadioButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioButton);

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
RadioButton.contextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/radio/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/radio/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/row/index.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/row/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Row"]);

/***/ }),

/***/ "../node_modules/antd/es/row/style/css.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/row/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "../node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/select/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/select/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-select */ "../node_modules/rc-select/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var SelectPropTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['default', 'large', 'small']),
    combobox: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    notFoundContent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    showSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Select, _React$Component);

    function Select() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Select);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.saveSelect = function (node) {
            _this.rcSelect = node;
        };
        _this.renderSelect = function (locale) {
            var _classNames;

            var _a = _this.props,
                prefixCls = _a.prefixCls,
                _a$className = _a.className,
                className = _a$className === undefined ? '' : _a$className,
                size = _a.size,
                mode = _a.mode,
                restProps = __rest(_a, ["prefixCls", "className", "size", "mode"]);
            var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
            var optionLabelProp = _this.props.optionLabelProp;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // children 带 dom 结构时，无法填入输入框
                optionLabelProp = optionLabelProp || 'value';
            }
            var modeConfig = {
                multiple: mode === 'multiple',
                tags: mode === 'tags',
                combobox: isCombobox
            };
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_select__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, modeConfig, { prefixCls: prefixCls, className: cls, optionLabelProp: optionLabelProp || 'children', notFoundContent: _this.getNotFoundContent(locale), ref: _this.saveSelect }));
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Select, [{
        key: 'focus',
        value: function focus() {
            this.rcSelect.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSelect.blur();
        }
    }, {
        key: 'getNotFoundContent',
        value: function getNotFoundContent(locale) {
            var _props = this.props,
                notFoundContent = _props.notFoundContent,
                mode = _props.mode;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // AutoComplete don't have notFoundContent defaultly
                return notFoundContent === undefined ? null : notFoundContent;
            }
            return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'Select', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__["default"].Select },
                this.renderSelect
            );
        }
    }]);

    return Select;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Select);

Select.Option = rc_select__WEBPACK_IMPORTED_MODULE_8__["Option"];
Select.OptGroup = rc_select__WEBPACK_IMPORTED_MODULE_8__["OptGroup"];
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;

/***/ }),

/***/ "../node_modules/antd/es/select/style/css.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/select/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/select/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/spin/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/spin/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _util_isCssAnimationSupported__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/isCssAnimationSupported */ "../node_modules/antd/es/_util/isCssAnimationSupported.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};







var Spin = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Spin, _React$Component);

    function Spin(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Spin);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Spin, [{
        key: 'isNestedPattern',
        value: function isNestedPattern() {
            return !!(this.props && this.props.children);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!Object(_util_isCssAnimationSupported__WEBPACK_IMPORTED_MODULE_10__["default"])()) {
                // Show text in IE9
                this.setState({
                    notCssAnimationSupported: true
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, 200);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else {
                if (spinning && delay && !isNaN(Number(delay))) {
                    if (this.delayTimeout) {
                        clearTimeout(this.delayTimeout);
                    }
                    this.delayTimeout = window.setTimeout(function () {
                        return _this2.setState({ spinning: spinning });
                    }, delay);
                } else {
                    this.setState({ spinning: spinning });
                }
            }
        }
    }, {
        key: 'renderIndicator',
        value: function renderIndicator() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                indicator = _props.indicator;

            var dotClassName = prefixCls + '-dot';
            if (react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](indicator)) {
                return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](indicator, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(indicator.props.className, dotClassName)
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(dotClassName, prefixCls + '-dot-spin') },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                prefixCls = _a.prefixCls,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                restProps = __rest(_a, ["className", "size", "prefixCls", "tip", "wrapperClassName"]);var _state = this.state,
                spinning = _state.spinning,
                notCssAnimationSupported = _state.notCssAnimationSupported;

            var spinClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-spinning', spinning), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-show-text', !!tip || notCssAnimationSupported), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_11__["default"])(restProps, ['spinning', 'delay', 'indicator']);
            var spinElement = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { className: spinClassName }),
                this.renderIndicator(),
                tip ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName += ' ' + wrapperClassName;
                }
                var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-container', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { component: 'div', className: animateClassName, style: null, transitionName: 'fade' }),
                    spinning && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);

    return Spin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Spin);

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    spinning: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['small', 'default', 'large']),
    wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    indicator: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

/***/ }),

/***/ "../node_modules/antd/es/spin/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/spin/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/spin/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/table/Column.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/table/Column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Column = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Column, _React$Component);

  function Column() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ }),

/***/ "../node_modules/antd/es/table/ColumnGroup.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/table/ColumnGroup.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ColumnGroup = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ColumnGroup, _React$Component);

  function ColumnGroup() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColumnGroup);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
  }

  return ColumnGroup;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ColumnGroup);

ColumnGroup.__ANT_TABLE_COLUMN_GROUP = true;

/***/ }),

/***/ "../node_modules/antd/es/table/FilterDropdownMenuWrapper.js":
/*!******************************************************************!*\
  !*** ../node_modules/antd/es/table/FilterDropdownMenuWrapper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
        'div',
        { className: props.className, onClick: props.onClick },
        props.children
    );
});

/***/ }),

/***/ "../node_modules/antd/es/table/SelectionBox.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/table/SelectionBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radio */ "../node_modules/antd/es/radio/index.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var SelectionBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectionBox, _React$Component);

    function SelectionBox(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectionBox);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SelectionBox.__proto__ || Object.getPrototypeOf(SelectionBox)).call(this, props));

        _this.state = {
            checked: _this.getCheckState(props)
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectionBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                var checked = _this2.getCheckState(_this2.props);
                _this2.setState({ checked: checked });
            });
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                defaultSelection = props.defaultSelection,
                rowIndex = props.rowIndex;

            var checked = false;
            if (store.getState().selectionDirty) {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
            }
            return checked;
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                rowIndex = _a.rowIndex,
                rest = __rest(_a, ["type", "rowIndex"]);var checked = this.state.checked;

            if (type === 'radio') {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ checked: checked, value: rowIndex }, rest));
            } else {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ checked: checked }, rest));
            }
        }
    }]);

    return SelectionBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectionBox);

/***/ }),

/***/ "../node_modules/antd/es/table/SelectionCheckboxAll.js":
/*!*************************************************************!*\
  !*** ../node_modules/antd/es/table/SelectionCheckboxAll.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dropdown */ "../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ "../node_modules/antd/es/menu/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);












var SelectionCheckboxAll = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectionCheckboxAll);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SelectionCheckboxAll.__proto__ || Object.getPrototypeOf(SelectionCheckboxAll)).call(this, props));

        _this.handleSelectAllChagne = function (e) {
            var checked = e.target.checked;
            _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
        };
        _this.defaultSelections = props.hideDefaultSelections ? [] : [{
            key: 'all',
            text: props.locale.selectAll,
            onSelect: function onSelect() {}
        }, {
            key: 'invert',
            text: props.locale.selectInvert,
            onSelect: function onSelect() {}
        }];
        _this.state = {
            checked: _this.getCheckState(props),
            indeterminate: _this.getIndeterminateState(props)
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectionCheckboxAll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setCheckState(nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                _this2.setCheckState(_this2.props);
            });
        }
    }, {
        key: 'checkSelection',
        value: function checkSelection(data, type, byDefaultChecked) {
            var _props = this.props,
                store = _props.store,
                getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
                getRecordKey = _props.getRecordKey;
            // type should be 'every' | 'some'

            if (type === 'every' || type === 'some') {
                return byDefaultChecked ? data[type](function (item, i) {
                    return getCheckboxPropsByItem(item, i).defaultChecked;
                }) : data[type](function (item, i) {
                    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
                });
            }
            return false;
        }
    }, {
        key: 'setCheckState',
        value: function setCheckState(props) {
            var checked = this.getCheckState(props);
            var indeterminate = this.getIndeterminateState(props);
            if (checked !== this.state.checked) {
                this.setState({ checked: checked });
            }
            if (indeterminate !== this.state.indeterminate) {
                this.setState({ indeterminate: indeterminate });
            }
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                data = props.data;

            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
            }
            return checked;
        }
    }, {
        key: 'getIndeterminateState',
        value: function getIndeterminateState(props) {
            var store = props.store,
                data = props.data;

            var indeterminate = void 0;
            if (!data.length) {
                indeterminate = false;
            } else {
                indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            return indeterminate;
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(selections) {
            var _this3 = this;

            return selections.map(function (selection, index) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _menu__WEBPACK_IMPORTED_MODULE_8__["default"].Item,
                    { key: selection.key || index },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'div',
                        { onClick: function onClick() {
                                _this3.props.onSelect(selection.key, index, selection.onSelect);
                            } },
                        selection.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                prefixCls = _props2.prefixCls,
                selections = _props2.selections,
                getPopupContainer = _props2.getPopupContainer;
            var _state = this.state,
                checked = _state.checked,
                indeterminate = _state.indeterminate;

            var selectionPrefixCls = prefixCls + '-selection';
            var customSelections = null;
            if (selections) {
                var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
                var menu = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _menu__WEBPACK_IMPORTED_MODULE_8__["default"],
                    { className: selectionPrefixCls + '-menu', selectedKeys: [] },
                    this.renderMenus(newSelections)
                );
                customSelections = newSelections.length > 0 ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _dropdown__WEBPACK_IMPORTED_MODULE_7__["default"],
                    { overlay: menu, getPopupContainer: getPopupContainer },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'div',
                        { className: selectionPrefixCls + '-down' },
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'down' })
                    )
                ) : null;
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: selectionPrefixCls },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, selectionPrefixCls + '-select-all-custom', customSelections)), checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: this.handleSelectAllChagne }),
                customSelections
            );
        }
    }]);

    return SelectionCheckboxAll;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectionCheckboxAll);

/***/ }),

/***/ "../node_modules/antd/es/table/Table.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/table/Table.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-table */ "../node_modules/rc-table/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pagination */ "../node_modules/antd/es/pagination/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spin */ "../node_modules/antd/es/spin/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _filterDropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filterDropdown */ "../node_modules/antd/es/table/filterDropdown.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./createStore */ "../node_modules/antd/es/table/createStore.js");
/* harmony import */ var _SelectionBox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SelectionBox */ "../node_modules/antd/es/table/SelectionBox.js");
/* harmony import */ var _SelectionCheckboxAll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SelectionCheckboxAll */ "../node_modules/antd/es/table/SelectionCheckboxAll.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Column */ "../node_modules/antd/es/table/Column.js");
/* harmony import */ var _ColumnGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ColumnGroup */ "../node_modules/antd/es/table/ColumnGroup.js");
/* harmony import */ var _createBodyRow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./createBodyRow */ "../node_modules/antd/es/table/createBodyRow.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/table/util.js");







var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



















function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */
var emptyObject = {};

var Table = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Table, _React$Component);

    function Table(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Table);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.getCheckboxPropsByItem = function (item, index) {
            var _this$props$rowSelect = _this.props.rowSelection,
                rowSelection = _this$props$rowSelect === undefined ? {} : _this$props$rowSelect;

            if (!rowSelection.getCheckboxProps) {
                return {};
            }
            var key = _this.getRecordKey(item, index);
            // Cache checkboxProps
            if (!_this.CheckboxPropsCache[key]) {
                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
            }
            return _this.CheckboxPropsCache[key];
        };
        _this.onRow = function (record, index) {
            var _this$props = _this.props,
                onRow = _this$props.onRow,
                prefixCls = _this$props.prefixCls;

            var custom = onRow ? onRow(record, index) : {};
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, custom, { prefixCls: prefixCls, store: _this.store, rowKey: _this.getRecordKey(record, index) });
        };
        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.pagination);
            var filters = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.filters, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = [];
            Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(_this.columns, function (c) {
                if (!c.children) {
                    currentColumnKeys.push(_this.getColumnKey(c));
                }
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if (babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState, function () {
                _this.store.setState({
                    selectionDirty: false
                });
                var onChange = _this.props.onChange;
                if (onChange) {
                    onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { selectionDirty: false, filters: filters,
                        pagination: pagination })));
                }
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var changeableRowKeys = data.filter(function (item, i) {
                return !_this.getCheckboxPropsByItem(item, i).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            var changeRowKeys = [];
            var selectWay = '';
            var checked = void 0;
            // handle default selection
            switch (selectionKey) {
                case 'all':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = true;
                    break;
                case 'removeAll':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) >= 0) {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = false;
                    break;
                case 'invert':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                        } else {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        }
                        changeRowKeys.push(key);
                        selectWay = 'onSelectInvert';
                    });
                    break;
                default:
                    break;
            }
            _this.store.setState({
                selectionDirty: true
            });
            // when select custom selection, callback selections[n].onSelect
            var rowSelection = _this.props.rowSelection;

            var customSelectionStartIndex = 2;
            if (rowSelection && rowSelection.hideDefaultSelections) {
                customSelectionStartIndex = 0;
            }
            if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
                return onSelectFunc(changeableRowKeys);
            }
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: selectWay,
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            for (var _len = arguments.length, otherArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                otherArguments[_key - 1] = arguments[_key];
            }

            var props = _this.props;
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
            var newState = {
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState);
            _this.store.setState({
                selectionDirty: false
            });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { selectionDirty: false, pagination: pagination })));
            }
        };
        _this.renderSelectionBox = function (type) {
            return function (_, record, index) {
                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
                var props = _this.getCheckboxPropsByItem(record, index);
                var handleChange = function handleChange(e) {
                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
                };
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { onClick: stopPropagation },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_SelectionBox__WEBPACK_IMPORTED_MODULE_20__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ type: type, store: _this.store, rowIndex: rowIndex, onChange: handleChange, defaultSelection: _this.getDefaultSelection() }, props))
                );
            };
        };
        _this.getRecordKey = function (record, index) {
            var rowKey = _this.props.rowKey;
            var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(recordKey !== undefined, 'Each record in dataSource of table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see https://u.ant.design/table-row-key');
            return recordKey === undefined ? index : recordKey;
        };
        _this.getPopupContainer = function () {
            return react_dom__WEBPACK_IMPORTED_MODULE_8__["findDOMNode"](_this);
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { pageSize: pageSize,
                current: current });
            _this.setState({ pagination: nextPagination });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { pagination: nextPagination })));
            }
        };
        _this.renderTable = function (contextLocale, loading) {
            var _classNames;

            var locale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, contextLocale, _this.props.locale);
            var _a = _this.props,
                style = _a.style,
                className = _a.className,
                prefixCls = _a.prefixCls,
                showHeader = _a.showHeader,
                restProps = __rest(_a, ["style", "className", "prefixCls", "showHeader"]);
            var data = _this.getCurrentPageData();
            var expandIconAsCell = _this.props.expandedRowRender && _this.props.expandIconAsCell !== false;
            var classString = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + _this.props.size, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-bordered', _this.props.bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-empty', !data.length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-without-column-header', !showHeader), _classNames));
            var columns = _this.renderRowSelection(locale);
            columns = _this.renderColumnsDropdown(columns, locale);
            columns = columns.map(function (column, i) {
                var newColumn = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, column);
                newColumn.key = _this.getColumnKey(newColumn, i);
                return newColumn;
            });
            var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
            if ('expandIconColumnIndex' in restProps) {
                expandIconColumnIndex = restProps.expandIconColumnIndex;
            }
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_table__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ key: 'table' }, restProps, { onRow: _this.onRow, components: _this.components, prefixCls: prefixCls, data: data, columns: columns, showHeader: showHeader, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: !loading.spinning && locale.emptyText }));
        };
        Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: https://u.ant.design/fixed-columns.');
        _this.columns = props.columns || Object(_util__WEBPACK_IMPORTED_MODULE_25__["normalizeColumns"])(props.children);
        _this.createComponents(props.components);
        _this.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.getDefaultSortOrder(_this.columns), {
            // 减少状态
            filters: _this.getFiltersFromColumns(), pagination: _this.getDefaultPagination(props) });
        _this.CheckboxPropsCache = {};
        _this.store = Object(_createStore__WEBPACK_IMPORTED_MODULE_19__["default"])({
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Table, [{
        key: 'getDefaultSelection',
        value: function getDefaultSelection() {
            var _this2 = this;

            var _props$rowSelection = this.props.rowSelection,
                rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

            if (!rowSelection.getCheckboxProps) {
                return [];
            }
            return this.getFlatData().filter(function (item, rowIndex) {
                return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
            }).map(function (record, rowIndex) {
                return _this2.getRecordKey(record, rowIndex);
            });
        }
    }, {
        key: 'getDefaultPagination',
        value: function getDefaultPagination(props) {
            var pagination = props.pagination || {};
            return this.hasPagination(props) ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultPagination, pagination, { current: pagination.defaultCurrent || pagination.current || 1, pageSize: pagination.defaultPageSize || pagination.pageSize || 10 }) : {};
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.columns = nextProps.columns || Object(_util__WEBPACK_IMPORTED_MODULE_25__["normalizeColumns"])(nextProps.children);
            if ('pagination' in nextProps || 'pagination' in this.props) {
                this.setState(function (previousState) {
                    var newPagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultPagination, previousState.pagination, nextProps.pagination);
                    newPagination.current = newPagination.current || 1;
                    newPagination.pageSize = newPagination.pageSize || 10;
                    return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
                });
            }
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                this.store.setState({
                    selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
                });
            }
            if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
                this.store.setState({
                    selectionDirty: false
                });
            }
            // https://github.com/ant-design/ant-design/issues/10133
            this.CheckboxPropsCache = {};
            if (this.getSortOrderColumns(this.columns).length > 0) {
                var sortState = this.getSortStateFromColumns(this.columns);
                if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                    this.setState(sortState);
                }
            }
            var filteredValueColumns = this.getFilteredValueColumns(this.columns);
            if (filteredValueColumns.length > 0) {
                var filtersFromColumns = this.getFiltersFromColumns(this.columns);
                var newFilters = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (this.isFiltersChanged(newFilters)) {
                    this.setState({ filters: newFilters });
                }
            }
            this.createComponents(nextProps.components, this.props.components);
        }
    }, {
        key: 'setSelectedRowKeys',
        value: function setSelectedRowKeys(selectedRowKeys, _ref) {
            var _this3 = this;

            var selectWay = _ref.selectWay,
                record = _ref.record,
                checked = _ref.checked,
                changeRowKeys = _ref.changeRowKeys,
                nativeEvent = _ref.nativeEvent;
            var _props$rowSelection2 = this.props.rowSelection,
                rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

            if (rowSelection && !('selectedRowKeys' in rowSelection)) {
                this.store.setState({ selectedRowKeys: selectedRowKeys });
            }
            var data = this.getFlatData();
            if (!rowSelection.onChange && !rowSelection[selectWay]) {
                return;
            }
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            if (rowSelection.onChange) {
                rowSelection.onChange(selectedRowKeys, selectedRows);
            }
            if (selectWay === 'onSelect' && rowSelection.onSelect) {
                rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
            } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
                });
                rowSelection.onSelectAll(checked, selectedRows, changeRows);
            } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
                rowSelection.onSelectInvert(selectedRowKeys);
            }
        }
    }, {
        key: 'hasPagination',
        value: function hasPagination(props) {
            return (props || this.props).pagination !== false;
        }
    }, {
        key: 'isFiltersChanged',
        value: function isFiltersChanged(filters) {
            var _this4 = this;

            var filtersChanged = false;
            if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
                filtersChanged = true;
            } else {
                Object.keys(filters).forEach(function (columnKey) {
                    if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                        filtersChanged = true;
                    }
                });
            }
            return filtersChanged;
        }
    }, {
        key: 'getSortOrderColumns',
        value: function getSortOrderColumns(columns) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || this.columns || [], function (column) {
                return 'sortOrder' in column;
            });
        }
    }, {
        key: 'getFilteredValueColumns',
        value: function getFilteredValueColumns(columns) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || this.columns || [], function (column) {
                return typeof column.filteredValue !== 'undefined';
            });
        }
    }, {
        key: 'getFiltersFromColumns',
        value: function getFiltersFromColumns(columns) {
            var _this5 = this;

            var filters = {};
            this.getFilteredValueColumns(columns).forEach(function (col) {
                var colKey = _this5.getColumnKey(col);
                filters[colKey] = col.filteredValue;
            });
            return filters;
        }
    }, {
        key: 'getDefaultSortOrder',
        value: function getDefaultSortOrder(columns) {
            var definedSortState = this.getSortStateFromColumns(columns);
            var defaultSortedColumn = Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || [], function (column) {
                return column.defaultSortOrder != null;
            })[0];
            if (defaultSortedColumn && !definedSortState.sortColumn) {
                return {
                    sortColumn: defaultSortedColumn,
                    sortOrder: defaultSortedColumn.defaultSortOrder
                };
            }
            return definedSortState;
        }
    }, {
        key: 'getSortStateFromColumns',
        value: function getSortStateFromColumns(columns) {
            // return first column which sortOrder is not falsy
            var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
                return col.sortOrder;
            })[0];
            if (sortedColumn) {
                return {
                    sortColumn: sortedColumn,
                    sortOrder: sortedColumn.sortOrder
                };
            }
            return {
                sortColumn: null,
                sortOrder: null
            };
        }
    }, {
        key: 'getSorterFn',
        value: function getSorterFn() {
            var _state = this.state,
                sortOrder = _state.sortOrder,
                sortColumn = _state.sortColumn;

            if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
                return;
            }
            return function (a, b) {
                var result = sortColumn.sorter(a, b);
                if (result !== 0) {
                    return sortOrder === 'descend' ? -result : result;
                }
                return 0;
            };
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder(order, column) {
            var _state2 = this.state,
                sortColumn = _state2.sortColumn,
                sortOrder = _state2.sortOrder;
            // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

            var isSortColumn = this.isSortColumn(column);
            if (!isSortColumn) {
                // 当前列未排序
                sortOrder = order;
                sortColumn = column;
            } else {
                // 当前列已排序
                if (sortOrder === order) {
                    // 切换为未排序状态
                    sortOrder = '';
                    sortColumn = null;
                } else {
                    // 切换为排序状态
                    sortOrder = order;
                }
            }
            var newState = {
                sortOrder: sortOrder,
                sortColumn: sortColumn
            };
            // Controlled
            if (this.getSortOrderColumns().length === 0) {
                this.setState(newState);
            }
            var onChange = this.props.onChange;
            if (onChange) {
                onChange.apply(null, this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state, newState)));
            }
        }
    }, {
        key: 'renderRowSelection',
        value: function renderRowSelection(locale) {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                rowSelection = _props.rowSelection;

            var columns = this.columns.concat();
            if (rowSelection) {
                var data = this.getFlatCurrentPageData().filter(function (item, index) {
                    if (rowSelection.getCheckboxProps) {
                        return !_this6.getCheckboxPropsByItem(item, index).disabled;
                    }
                    return true;
                });
                var selectionColumnClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-selection-column', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-selection-column-custom', rowSelection.selections));
                var selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionBox(rowSelection.type),
                    className: selectionColumnClass,
                    fixed: rowSelection.fixed,
                    width: rowSelection.columnWidth
                };
                if (rowSelection.type !== 'radio') {
                    var checkboxAllDisabled = data.every(function (item, index) {
                        return _this6.getCheckboxPropsByItem(item, index).disabled;
                    });
                    selectionColumn.title = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_SelectionCheckboxAll__WEBPACK_IMPORTED_MODULE_21__["default"], { store: this.store, locale: locale, data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, prefixCls: prefixCls, onSelect: this.handleSelectRow, selections: rowSelection.selections, hideDefaultSelections: rowSelection.hideDefaultSelections, getPopupContainer: this.getPopupContainer });
                }
                if ('fixed' in rowSelection) {
                    selectionColumn.fixed = rowSelection.fixed;
                } else if (columns.some(function (column) {
                    return column.fixed === 'left' || column.fixed === true;
                })) {
                    selectionColumn.fixed = 'left';
                }
                if (columns[0] && columns[0].key === 'selection-column') {
                    columns[0] = selectionColumn;
                } else {
                    columns.unshift(selectionColumn);
                }
            }
            return columns;
        }
    }, {
        key: 'getColumnKey',
        value: function getColumnKey(column, index) {
            return column.key || column.dataIndex || index;
        }
    }, {
        key: 'getMaxCurrent',
        value: function getMaxCurrent(total) {
            var _state$pagination = this.state.pagination,
                current = _state$pagination.current,
                pageSize = _state$pagination.pageSize;

            if ((current - 1) * pageSize >= total) {
                return Math.floor((total - 1) / pageSize) + 1;
            }
            return current;
        }
    }, {
        key: 'isSortColumn',
        value: function isSortColumn(column) {
            var sortColumn = this.state.sortColumn;

            if (!column || !sortColumn) {
                return false;
            }
            return this.getColumnKey(sortColumn) === this.getColumnKey(column);
        }
    }, {
        key: 'renderColumnsDropdown',
        value: function renderColumnsDropdown(columns, locale) {
            var _this7 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                dropdownPrefixCls = _props2.dropdownPrefixCls;
            var sortOrder = this.state.sortOrder;

            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(columns, function (originColumn, i) {
                var column = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, originColumn);
                var key = _this7.getColumnKey(column, i);
                var filterDropdown = void 0;
                var sortButton = void 0;
                if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                    var colFilters = _this7.state.filters[key] || [];
                    filterDropdown = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_filterDropdown__WEBPACK_IMPORTED_MODULE_18__["default"], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this7.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown', getPopupContainer: _this7.getPopupContainer });
                }
                if (column.sorter) {
                    var isSortColumn = _this7.isSortColumn(column);
                    if (isSortColumn) {
                        column.className = classnames__WEBPACK_IMPORTED_MODULE_11___default()(column.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-column-sort', sortOrder));
                    }
                    var isAscend = isSortColumn && sortOrder === 'ascend';
                    var isDescend = isSortColumn && sortOrder === 'descend';
                    sortButton = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'div',
                        { className: prefixCls + '-column-sorter' },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'span',
                            { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                    return _this7.toggleSortOrder('ascend', column);
                                } },
                            react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'caret-up' })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'span',
                            { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                    return _this7.toggleSortOrder('descend', column);
                                } },
                            react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'caret-down' })
                        )
                    );
                }
                column.title = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { key: key },
                    column.title,
                    sortButton,
                    filterDropdown
                );
                if (sortButton || filterDropdown) {
                    column.className = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-column-has-filters', column.className);
                }
                return column;
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination(paginationPosition) {
            // 强制不需要分页
            if (!this.hasPagination()) {
                return null;
            }
            var size = 'default';
            var pagination = this.state.pagination;

            if (pagination.size) {
                size = pagination.size;
            } else if (this.props.size === 'middle' || this.props.size === 'small') {
                size = 'small';
            }
            var position = pagination.position || 'bottom';
            var total = pagination.total || this.getLocalData().length;
            return total > 0 && (position === paginationPosition || position === 'both') ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ key: 'pagination-' + paginationPosition }, pagination, { className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(pagination.className, this.props.prefixCls + '-pagination'), onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
        }
        // Get pagination, filters, sorter

    }, {
        key: 'prepareParamsArguments',
        value: function prepareParamsArguments(state) {
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, state.pagination);
            // remove useless handle function in Table.onChange
            delete pagination.onChange;
            delete pagination.onShowSizeChange;
            var filters = state.filters;
            var sorter = {};
            if (state.sortColumn && state.sortOrder) {
                sorter.column = state.sortColumn;
                sorter.order = state.sortOrder;
                sorter.field = state.sortColumn.dataIndex;
                sorter.columnKey = this.getColumnKey(state.sortColumn);
            }
            return [pagination, filters, sorter];
        }
    }, {
        key: 'findColumn',
        value: function findColumn(myKey) {
            var _this8 = this;

            var column = void 0;
            Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(this.columns, function (c) {
                if (_this8.getColumnKey(c) === myKey) {
                    column = c;
                }
            });
            return column;
        }
    }, {
        key: 'getCurrentPageData',
        value: function getCurrentPageData() {
            var data = this.getLocalData();
            var current = void 0;
            var pageSize = void 0;
            var state = this.state;
            // 如果没有分页的话，默认全部展示
            if (!this.hasPagination()) {
                pageSize = Number.MAX_VALUE;
                current = 1;
            } else {
                pageSize = state.pagination.pageSize;
                current = this.getMaxCurrent(state.pagination.total || data.length);
            }
            // 分页
            // ---
            // 当数据量少于等于每页数量时，直接设置数据
            // 否则进行读取分页数据
            if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
                data = data.filter(function (_, i) {
                    return i >= (current - 1) * pageSize && i < current * pageSize;
                });
            }
            return data;
        }
    }, {
        key: 'getFlatData',
        value: function getFlatData() {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatArray"])(this.getLocalData());
        }
    }, {
        key: 'getFlatCurrentPageData',
        value: function getFlatCurrentPageData() {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatArray"])(this.getCurrentPageData());
        }
    }, {
        key: 'recursiveSort',
        value: function recursiveSort(data, sorterFn) {
            var _this9 = this;

            var _props$childrenColumn = this.props.childrenColumnName,
                childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

            return data.sort(sorterFn).map(function (item) {
                return item[childrenColumnName] ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
            });
        }
    }, {
        key: 'getLocalData',
        value: function getLocalData() {
            var _this10 = this;

            var state = this.state;
            var dataSource = this.props.dataSource;

            var data = dataSource || [];
            // 优化本地排序
            data = data.slice(0);
            var sorterFn = this.getSorterFn();
            if (sorterFn) {
                data = this.recursiveSort(data, sorterFn);
            }
            // 筛选
            if (state.filters) {
                Object.keys(state.filters).forEach(function (columnKey) {
                    var col = _this10.findColumn(columnKey);
                    if (!col) {
                        return;
                    }
                    var values = state.filters[columnKey] || [];
                    if (values.length === 0) {
                        return;
                    }
                    var onFilter = col.onFilter;
                    data = onFilter ? data.filter(function (record) {
                        return values.some(function (v) {
                            return onFilter(v, record);
                        });
                    }) : data;
                });
            }
            return data;
        }
    }, {
        key: 'createComponents',
        value: function createComponents() {
            var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var prevComponents = arguments[1];

            var bodyRow = components && components.body && components.body.row;
            var preBodyRow = prevComponents && prevComponents.body && prevComponents.body.row;
            if (!this.components || bodyRow !== preBodyRow) {
                this.components = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, components);
                this.components.body = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, components.body, { row: Object(_createBodyRow__WEBPACK_IMPORTED_MODULE_24__["default"])(bodyRow) });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _props3 = this.props,
                style = _props3.style,
                className = _props3.className,
                prefixCls = _props3.prefixCls;

            var data = this.getCurrentPageData();
            var loading = this.props.loading;
            if (typeof loading === 'boolean') {
                loading = {
                    spinning: loading
                };
            }
            var table = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_15__["default"],
                { componentName: 'Table', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_16__["default"].Table },
                function (locale) {
                    return _this11.renderTable(locale, loading);
                }
            );
            // if there is no pagination or no data,
            // the height of spin should decrease by half of pagination
            var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-wrapper', className), style: style },
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _spin__WEBPACK_IMPORTED_MODULE_14__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, loading, { className: loading.spinning ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '' }),
                    this.renderPagination('top'),
                    table,
                    this.renderPagination('bottom')
                )
            );
        }
    }]);

    return Table;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Table);

Table.Column = _Column__WEBPACK_IMPORTED_MODULE_22__["default"];
Table.ColumnGroup = _ColumnGroup__WEBPACK_IMPORTED_MODULE_23__["default"];
Table.propTypes = {
    dataSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
    columns: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    useFixedHeader: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
    rowSelection: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    loading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
    bordered: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
    locale: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
    dropdownPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};

/***/ }),

/***/ "../node_modules/antd/es/table/createBodyRow.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/table/createBodyRow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTableRow; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");









function createTableRow() {
    var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';

    var BodyRow = function (_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BodyRow, _React$Component);

        function BodyRow(props) {
            babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BodyRow);

            var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).call(this, props));

            _this.store = props.store;

            var _this$store$getState = _this.store.getState(),
                selectedRowKeys = _this$store$getState.selectedRowKeys;

            _this.state = {
                selected: selectedRowKeys.indexOf(props.rowKey) >= 0
            };
            return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BodyRow, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.subscribe();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        }, {
            key: 'subscribe',
            value: function subscribe() {
                var _this2 = this;

                var _props = this.props,
                    store = _props.store,
                    rowKey = _props.rowKey;

                this.unsubscribe = store.subscribe(function () {
                    var _store$getState = _this2.store.getState(),
                        selectedRowKeys = _store$getState.selectedRowKeys;

                    var selected = selectedRowKeys.indexOf(rowKey) >= 0;
                    if (selected !== _this2.state.selected) {
                        _this2.setState({ selected: selected });
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var rowProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.props, ['prefixCls', 'rowKey', 'store']);
                var className = classnames__WEBPACK_IMPORTED_MODULE_7___default()(this.props.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.prefixCls + '-row-selected', this.state.selected));
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    Component,
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rowProps, { className: className }),
                    this.props.children
                );
            }
        }]);

        return BodyRow;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

    return BodyRow;
}

/***/ }),

/***/ "../node_modules/antd/es/table/createStore.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/table/createStore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    function setState(partial) {
        state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }
    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe
    };
}

/***/ }),

/***/ "../node_modules/antd/es/table/filterDropdown.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/table/filterDropdown.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var dom_closest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dom-closest */ "../node_modules/dom-closest/index.js");
/* harmony import */ var dom_closest__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_closest__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dropdown */ "../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../radio */ "../node_modules/antd/es/radio/index.js");
/* harmony import */ var _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FilterDropdownMenuWrapper */ "../node_modules/antd/es/table/FilterDropdownMenuWrapper.js");
















var FilterMenu = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FilterMenu, _React$Component);

    function FilterMenu(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FilterMenu);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

        _this.setNeverShown = function (column) {
            var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"](_this);
            var filterBelongToScrollBody = !!dom_closest__WEBPACK_IMPORTED_MODULE_8___default()(rootNode, '.ant-table-scroll');
            if (filterBelongToScrollBody) {
                // When fixed column have filters, there will be two dropdown menus
                // Filter dropdown menu inside scroll body should never be shown
                // To fix https://github.com/ant-design/ant-design/issues/5010 and
                // https://github.com/ant-design/ant-design/issues/7909
                _this.neverShown = !!column.fixed;
            }
        };
        _this.setSelectedKeys = function (_ref) {
            var selectedKeys = _ref.selectedKeys;

            _this.setState({ selectedKeys: selectedKeys });
        };
        _this.handleClearFilters = function () {
            _this.setState({
                selectedKeys: []
            }, _this.handleConfirm);
        };
        _this.handleConfirm = function () {
            _this.setVisible(false);
            _this.confirmFilter();
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
            if (!visible) {
                _this.confirmFilter();
            }
        };
        _this.handleMenuItemClick = function (info) {
            if (info.keyPath.length <= 1) {
                return;
            }
            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            } else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
        };
        _this.renderFilterIcon = function () {
            var _this$props = _this.props,
                column = _this$props.column,
                locale = _this$props.locale,
                prefixCls = _this$props.prefixCls;

            var filterIcon = column.filterIcon;
            var dropdownSelectedClass = _this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
            return filterIcon ? react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](filterIcon, {
                title: locale.filterTitle,
                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(filterIcon.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-icon', true))
            }) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass });
        };
        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: visible
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FilterMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var column = this.props.column;

            this.setNeverShown(column);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var column = nextProps.column;

            this.setNeverShown(column);
            var newState = {};
            if ('selectedKeys' in nextProps) {
                newState.selectedKeys = nextProps.selectedKeys;
            }
            if ('filterDropdownVisible' in column) {
                newState.visible = column.filterDropdownVisible;
            }
            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            var column = this.props.column;

            if (!('filterDropdownVisible' in column)) {
                this.setState({ visible: visible });
            }
            if (column.onFilterDropdownVisibleChange) {
                column.onFilterDropdownVisibleChange(visible);
            }
        }
    }, {
        key: 'confirmFilter',
        value: function confirmFilter() {
            if (this.state.selectedKeys !== this.props.selectedKeys) {
                this.props.confirmFilter(this.props.column, this.state.selectedKeys);
            }
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(item) {
            var column = this.props.column;

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var input = multiple ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_13__["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                rc_menu__WEBPACK_IMPORTED_MODULE_7__["Item"],
                { key: item.value },
                input,
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    item.text
                )
            );
        }
    }, {
        key: 'hasSubMenu',
        value: function hasSubMenu() {
            var _props$column$filters = this.props.column.filters,
                filters = _props$column$filters === undefined ? [] : _props$column$filters;

            return filters.some(function (item) {
                return !!(item.children && item.children.length > 0);
            });
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(items) {
            var _this2 = this;

            return items.map(function (item) {
                if (item.children && item.children.length > 0) {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        rc_menu__WEBPACK_IMPORTED_MODULE_7__["SubMenu"],
                        { title: item.text, className: subMenuCls, key: item.value.toString() },
                        _this2.renderMenus(item.children)
                    );
                }
                return _this2.renderMenuItem(item);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                column = _props.column,
                locale = _props.locale,
                prefixCls = _props.prefixCls,
                dropdownPrefixCls = _props.dropdownPrefixCls,
                getPopupContainer = _props.getPopupContainer;
            // default multiple selection in filter dropdown

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var dropdownMenuClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, dropdownPrefixCls + '-menu-without-submenu', !this.hasSubMenu()));
            var menus = column.filterDropdown ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
                null,
                column.filterDropdown
            ) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
                { className: prefixCls + '-dropdown' },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    rc_menu__WEBPACK_IMPORTED_MODULE_7__["default"],
                    { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', className: dropdownMenuClass, onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys, getPopupContainer: function getPopupContainer(triggerNode) {
                            return triggerNode.parentNode;
                        } },
                    this.renderMenus(column.filters)
                ),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'div',
                    { className: prefixCls + '-dropdown-btns' },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'a',
                        { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
                        locale.filterConfirm
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'a',
                        { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
                        locale.filterReset
                    )
                )
            );
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _dropdown__WEBPACK_IMPORTED_MODULE_10__["default"],
                { trigger: ['click'], overlay: menus, visible: this.neverShown ? false : this.state.visible, onVisibleChange: this.onVisibleChange, getPopupContainer: getPopupContainer, forceRender: true },
                this.renderFilterIcon()
            );
        }
    }]);

    return FilterMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilterMenu);

FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},

    column: {}
};

/***/ }),

/***/ "../node_modules/antd/es/table/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/table/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "../node_modules/antd/es/table/Table.js");

/* harmony default export */ __webpack_exports__["default"] = (_Table__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/table/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/table/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/table/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../radio/style/css */ "../node_modules/antd/es/radio/style/css.js");
/* harmony import */ var _checkbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");
/* harmony import */ var _dropdown_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dropdown/style/css */ "../node_modules/antd/es/dropdown/style/css.js");
/* harmony import */ var _spin_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spin/style/css */ "../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var _pagination_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/style/css */ "../node_modules/antd/es/pagination/style/css.js");


// style dependencies






/***/ }),

/***/ "../node_modules/antd/es/table/util.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/table/util.js ***!
  \*********************************************/
/*! exports provided: flatArray, treeMap, flatFilter, normalizeColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatArray", function() { return flatArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeMap", function() { return treeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatFilter", function() { return flatFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColumns", function() { return normalizeColumns; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            if (item[childrenName]) {
                var newItem = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item);
                delete newItem[childrenName];
                result.push(newItem);
                if (item[childrenName].length > 0) {
                    loop(item[childrenName]);
                }
            } else {
                result.push(item);
            }
        });
    };
    loop(data);
    return result;
}
function treeMap(tree, mapper) {
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, mapper(node, index), extra);
    });
}
function flatFilter(tree, callback) {
    return tree.reduce(function (acc, node) {
        if (callback(node)) {
            acc.push(node);
        }
        if (node.children) {
            var children = flatFilter(node.children, callback);
            acc.push.apply(acc, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(children));
        }
        return acc;
    }, []);
}
function normalizeColumns(elements) {
    var columns = [];
    react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(elements, function (element) {
        if (!react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](element)) {
            return;
        }
        var column = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}

/***/ }),

/***/ "../node_modules/antd/es/tabs/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/tabs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-tabs */ "../node_modules/rc-tabs/es/index.js");
/* harmony import */ var rc_tabs_es_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tabs/es/ScrollableInkTabBar */ "../node_modules/rc-tabs/es/ScrollableInkTabBar.js");
/* harmony import */ var rc_tabs_es_TabContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-tabs/es/TabContent */ "../node_modules/rc-tabs/es/TabContent.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_isFlexSupported__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_util/isFlexSupported */ "../node_modules/antd/es/_util/isFlexSupported.js");

















var Tabs = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Tabs, _React$Component);

    function Tabs() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = react_dom__WEBPACK_IMPORTED_MODULE_8__["findDOMNode"](this);
            if (tabNode && !Object(_util_isFlexSupported__WEBPACK_IMPORTED_MODULE_15__["default"])() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                tabBarExtraContent = _props.tabBarExtraContent,
                tabBarStyle = _props.tabBarStyle,
                hideAdd = _props.hideAdd,
                onTabClick = _props.onTabClick,
                onPrevClick = _props.onPrevClick,
                onNextClick = _props.onNextClick,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated,
                tabBarGutter = _props.tabBarGutter;

            var _ref = (typeof animated === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(animated)) === 'object' ? {
                inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane
            } : {
                inkBarAnimated: animated, tabPaneAnimated: animated
            },
                inkBarAnimated = _ref.inkBarAnimated,
                tabPaneAnimated = _ref.tabPaneAnimated;
            // card tabs should not have animation


            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by designed.');
            var cls = classnames__WEBPACK_IMPORTED_MODULE_12___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, !!size), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + type, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = [];
            if (type === 'editable-card') {
                childrenWithClose = [];
                react__WEBPACK_IMPORTED_MODULE_7__["Children"].forEach(children, function (child, index) {
                    var closable = child.props.closable;
                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'close', onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        } }) : null;
                    childrenWithClose.push(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"](child, {
                        tab: react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'span',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }
            tabBarExtraContent = tabBarExtraContent ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;
            var renderTabBar = function renderTabBar() {
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_tabs_es_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_10__["default"], { inkBarAnimated: inkBarAnimated, extraContent: tabBarExtraContent, onTabClick: onTabClick, onPrevClick: onPrevClick, onNextClick: onNextClick, style: tabBarStyle, tabBarGutter: tabBarGutter });
            };
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                rc_tabs__WEBPACK_IMPORTED_MODULE_9__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: renderTabBar, renderTabContent: function renderTabContent() {
                        return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_tabs_es_TabContent__WEBPACK_IMPORTED_MODULE_11__["default"], { animated: tabPaneAnimated, animatedWithMargin: true });
                    }, onChange: this.handleChange }),
                childrenWithClose.length > 0 ? childrenWithClose : children
            );
        }
    }]);

    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

Tabs.TabPane = rc_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"];
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    hideAdd: false
};

/***/ }),

/***/ "../node_modules/antd/es/tabs/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/tabs/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/tabs/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/time-picker/index.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/time-picker/index.js ***!
  \****************************************************/
/*! exports provided: generateShowHourMinuteSecond, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateShowHourMinuteSecond", function() { return generateShowHourMinuteSecond; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_time_picker_es_TimePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-time-picker/es/TimePicker */ "../node_modules/rc-time-picker/es/TimePicker.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");
/* harmony import */ var _util_interopDefault__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/interopDefault */ "../node_modules/antd/es/_util/interopDefault.js");













function generateShowHourMinuteSecond(format) {
    // Ref: http://momentjs.com/docs/#/parsing/string-format/
    return {
        showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
        showMinute: format.indexOf('m') > -1,
        showSecond: format.indexOf('s') > -1
    };
}

var TimePicker = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TimePicker, _React$Component);

    function TimePicker(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TimePicker);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

        _this.handleChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                _this$props$format = _this$props.format,
                format = _this$props$format === undefined ? 'HH:mm:ss' : _this$props$format;

            if (onChange) {
                onChange(value, value && value.format(format) || '');
            }
        };
        _this.handleOpenClose = function (_ref) {
            var open = _ref.open;
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        _this.saveTimePicker = function (timePickerRef) {
            _this.timePickerRef = timePickerRef;
        };
        _this.renderTimePicker = function (locale) {
            var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props);
            delete props.defaultValue;
            var format = _this.getDefaultFormat();
            var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(props.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.prefixCls + '-' + props.size, !!props.size));
            var addon = function addon(panel) {
                return props.addon ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: props.prefixCls + '-panel-addon' },
                    props.addon(panel)
                ) : null;
            };
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_time_picker_es_TimePicker__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, generateShowHourMinuteSecond(format), props, { ref: _this.saveTimePicker, format: format, className: className, value: _this.state.value, placeholder: props.placeholder === undefined ? locale.placeholder : props.placeholder, onChange: _this.handleChange, onOpen: _this.handleOpenClose, onClose: _this.handleOpenClose, addon: addon }));
        };
        var value = props.value || props.defaultValue;
        if (value && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_12__["default"])(moment__WEBPACK_IMPORTED_MODULE_7__).isMoment(value)) {
            throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/time-picker-value');
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TimePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({ value: nextProps.value });
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.timePickerRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.timePickerRef.blur();
        }
    }, {
        key: 'getDefaultFormat',
        value: function getDefaultFormat() {
            var _props = this.props,
                format = _props.format,
                use12Hours = _props.use12Hours;

            if (format) {
                return format;
            } else if (use12Hours) {
                return 'h:mm:ss a';
            }
            return 'HH:mm:ss';
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'TimePicker', defaultLocale: _locale_en_US__WEBPACK_IMPORTED_MODULE_11__["default"] },
                this.renderTimePicker
            );
        }
    }]);

    return TimePicker;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TimePicker);

TimePicker.defaultProps = {
    prefixCls: 'ant-time-picker',
    align: {
        offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true
};

/***/ }),

/***/ "../node_modules/antd/es/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
    placeholder: 'Select time'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "../node_modules/antd/es/time-picker/style/css.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/time-picker/style/css.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/time-picker/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");


// style dependencies


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvaW50ZXJvcERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL2lzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC9pc0ZsZXhTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL3Rocm90dGxlQnlBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvYXZhdGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9hdmF0YXIvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jYWxlbmRhci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NhcmQvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2FyZC9NZXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jYXJkL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2hlY2tib3gvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NoZWNrYm94L0dyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jaGVja2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2hlY2tib3gvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NvbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL1JhbmdlUGlja2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kYXRlLXBpY2tlci9XZWVrUGlja2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kYXRlLXBpY2tlci9jcmVhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvd3JhcFBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZm9ybS9Gb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9mb3JtL0Zvcm1JdGVtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9mb3JtL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZm9ybS9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvY29sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ncmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ncmlkL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZ3JpZC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L0dyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvU2VhcmNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC9UZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvY2FsY3VsYXRlTm9kZUhlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGlzdC9JdGVtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9saXN0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbWVzc2FnZS9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL0FjdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL2NvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ub3RpZmljYXRpb24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wYWdpbmF0aW9uL01pbmlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcGFnaW5hdGlvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL2dyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcmFkaW8vcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL3JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9yYWRpby9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcm93L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zZWxlY3Qvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zcGluL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zcGluL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvQ29sdW1uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9Db2x1bW5Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvRmlsdGVyRHJvcGRvd25NZW51V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvU2VsZWN0aW9uQm94LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9TZWxlY3Rpb25DaGVja2JveEFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL2NyZWF0ZUJvZHlSb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9maWx0ZXJEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RpbWUtcGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RpbWUtcGlja2VyL3N0eWxlL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Rjs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ2dFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUIscUVBQXFFO0FBQ3RGLG9IQUEyQyxpQkFBaUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7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OztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQ25QQTtBQUNBLCtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFHQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBMEI7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0pBQTBFO0FBQzFFO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtFQUFrRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZIQUFtRCw4RUFBOEU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBDQUEwQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxxSkFBaUUsK0xBQStMO0FBQ2hRO0FBQ0E7QUFDQTtBQUNBLHVGQUEyQixlQUFlO0FBQzFDLG9KQUFnRSxzREFBc0Q7QUFDdEgscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQW1DO0FBQ25DO0FBQ0E7QUFDQSw2S0FBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxvTkFBZ0UsZ0RBQWdELDhSQUE4UjtBQUM5WTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUdBQTREO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMvYW50ZF8xOWYyZWQ5NTY2ZmIxOGZjYjk2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8zNjUwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcm9wRGVmYXVsdChtKSB7XG4gICAgcmV0dXJuIG1bXCJkZWZhdWx0XCJdIHx8IG07XG59IiwidmFyIGFuaW1hdGlvbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKCkge1xuICAgIGlmIChhbmltYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH1cbiAgICB2YXIgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zIEtodG1sJy5zcGxpdCgnICcpO1xuICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoZWxtLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbmltYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21QcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IGZhbHNlO1xuICAgIHJldHVybiBhbmltYXRpb247XG59XG5leHBvcnQgZGVmYXVsdCBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ZsZXhTdXBwb3J0ZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHJldHVybiAnZmxleCcgaW4gZG9jdW1lbnRFbGVtZW50LnN0eWxlIHx8ICd3ZWJraXRGbGV4JyBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGUgfHwgJ0ZsZXgnIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZSB8fCAnbXNGbGV4JyBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lLCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJy4uL191dGlsL2dldFJlcXVlc3RBbmltYXRpb25GcmFtZSc7XG52YXIgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm4pIHtcbiAgICB2YXIgcmVxdWVzdElkID0gdm9pZCAwO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IG51bGw7XG4gICAgICAgICAgICBmbi5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0SWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gcmVxQW5pbUZyYW1lKGxhdGVyKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3R0bGVkLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xuICAgIH07XG4gICAgcmV0dXJuIHRocm90dGxlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICB2YXIgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZmluaW5nUHJvcGVydHkgfHwgdGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYm91bmRGbiA9IHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZEZuLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBib3VuZEZuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgQXZhdGFyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXZhdGFyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEF2YXRhcihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXZhdGFyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXZhdGFyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXZhdGFyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnNldFNjYWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuTm9kZSA9IF90aGlzLmF2YXRhckNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbldpZHRoID0gY2hpbGRyZW5Ob2RlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBhdmF0YXJOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBhdmF0YXJXaWR0aCA9IGF2YXRhck5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgLy8gYWRkIDRweCBnYXAgZm9yIGVhY2ggc2lkZSB0byBnZXQgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgaWYgKGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUltZ0xvYWRFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IGlzSW1nRXhpc3Q6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgaXNJbWdFeGlzdDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF2YXRhciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChwcmV2UHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgcHJldlN0YXRlLnNjYWxlICE9PSB0aGlzLnN0YXRlLnNjYWxlICYmIHRoaXMuc3RhdGUuc2NhbGUgPT09IDEgfHwgcHJldlN0YXRlLmlzSW1nRXhpc3QgIT09IHRoaXMuc3RhdGUuaXNJbWdFeGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgICBfY2xhc3NOYW1lczIsXG4gICAgICAgICAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2hhcGUgPSBfYS5zaGFwZSxcbiAgICAgICAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICAgICAgICBzcmMgPSBfYS5zcmMsXG4gICAgICAgICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic3JjXCIsIFwiaWNvblwiLCBcImNsYXNzTmFtZVwiXSk7XG4gICAgICAgICAgICB2YXIgc2l6ZUNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1sZycsIHNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctc20nLCBzaXplID09PSAnc21hbGwnKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIHNpemVDbHMsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy0nICsgc2hhcGUsIHNoYXBlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1pbWFnZScsIHNyYyAmJiB0aGlzLnN0YXRlLmlzSW1nRXhpc3QpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLWljb24nLCBpY29uKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKHNyYyAmJiB0aGlzLnN0YXRlLmlzSW1nRXhpc3QpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBzcmMsIG9uRXJyb3I6IHRoaXMuaGFuZGxlSW1nTG9hZEVycm9yIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogaWNvbiB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuTm9kZSA9IHRoaXMuYXZhdGFyQ2hpbGRyZW47XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuTm9kZSB8fCB0aGlzLnN0YXRlLnNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlblN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNUcmFuc2Zvcm06ICdzY2FsZSgnICsgdGhpcy5zdGF0ZS5zY2FsZSArICcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlYmtpdFRyYW5zZm9ybTogJ3NjYWxlKCcgKyB0aGlzLnN0YXRlLnNjYWxlICsgJyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoJyArIHRoaXMuc3RhdGUuc2NhbGUgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gJyArIE1hdGgucm91bmQoY2hpbGRyZW5Ob2RlLm9mZnNldFdpZHRoIC8gMikgKyAncHgpJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zdHJpbmcnLCByZWY6IGZ1bmN0aW9uIHJlZihzcGFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuYXZhdGFyQ2hpbGRyZW4gPSBzcGFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHN0eWxlOiBjaGlsZHJlblN0eWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXN0cmluZycsIHJlZjogZnVuY3Rpb24gcmVmKHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5hdmF0YXJDaGlsZHJlbiA9IHNwYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIG90aGVycywgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nIH0pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF2YXRhcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1hdmF0YXInLFxuICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICBzaXplOiAnZGVmYXVsdCdcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiaW1wb3J0IGVuX1VTIGZyb20gJy4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG5leHBvcnQgZGVmYXVsdCBlbl9VUzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1jYXJkJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLWdyaWQnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSkpO1xufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtY2FyZCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGF2YXRhciA9IHByb3BzLmF2YXRhcixcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJhdmF0YXJcIiwgXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdKTtcblxuICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1tZXRhJywgY2xhc3NOYW1lKTtcbiAgICB2YXIgYXZhdGFyRG9tID0gYXZhdGFyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1ldGEtYXZhdGFyJyB9LFxuICAgICAgICBhdmF0YXJcbiAgICApIDogbnVsbDtcbiAgICB2YXIgdGl0bGVEb20gPSB0aXRsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tZXRhLXRpdGxlJyB9LFxuICAgICAgICB0aXRsZVxuICAgICkgOiBudWxsO1xuICAgIHZhciBkZXNjcmlwdGlvbkRvbSA9IGRlc2NyaXB0aW9uID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1ldGEtZGVzY3JpcHRpb24nIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgKSA6IG51bGw7XG4gICAgdmFyIE1ldGFEZXRhaWwgPSB0aXRsZURvbSB8fCBkZXNjcmlwdGlvbkRvbSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tZXRhLWRldGFpbCcgfSxcbiAgICAgICAgdGl0bGVEb20sXG4gICAgICAgIGRlc2NyaXB0aW9uRG9tXG4gICAgKSA6IG51bGw7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgIGF2YXRhckRvbSxcbiAgICAgICAgTWV0YURldGFpbFxuICAgICk7XG59KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG52YXIgX19kZWNvcmF0ZSA9IHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsXG4gICAgICAgIGQ7XG4gICAgaWYgKCh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKFJlZmxlY3QpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7ZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIH1yZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL3RhYnMnO1xuaW1wb3J0IFJvdyBmcm9tICcuLi9yb3cnO1xuaW1wb3J0IENvbCBmcm9tICcuLi9jb2wnO1xuaW1wb3J0IHsgdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yIH0gZnJvbSAnLi4vX3V0aWwvdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uL191dGlsL3dhcm5pbmcnO1xuXG52YXIgQ2FyZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENhcmQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2FyZCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcmQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FyZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkZXJQYWRkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy51cGRhdGVXaWRlclBhZGRpbmdDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMub25UYWJDaGFuZ2UgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25UYWJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vblRhYkNoYW5nZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlUmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLmNvbnRhaW5lciA9IG5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FyZCwgW3tcbiAgICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2lkZXJQYWRkaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpZGVyUGFkZGluZyk7XG4gICAgICAgICAgICBpZiAoJ25vSG92ZXJpbmcnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKCF0aGlzLnByb3BzLm5vSG92ZXJpbmcsICdgbm9Ib3ZlcmluZ2Agb2YgQ2FyZCBpcyBkZXByZWNhdGVkLCB5b3UgY2FuIHJlbW92ZSBpdCBzYWZlbHkgb3IgdXNlIGBob3ZlcmFibGVgIGluc3RlYWQuJyk7XG4gICAgICAgICAgICAgICAgd2FybmluZyghIXRoaXMucHJvcHMubm9Ib3ZlcmluZywgJ2Bub0hvdmVyaW5nPXtmYWxzZX1gIG9mIENhcmQgaXMgZGVwcmVjYXRlZCwgdXNlIGBob3ZlcmFibGVgIGluc3RlYWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplRXZlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpZGVyUGFkZGluZy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInVwZGF0ZVdpZGVyUGFkZGluZ1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlV2lkZXJQYWRkaW5nKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyA5MzYgaXMgYSBtYWdpYyBjYXJkIHdpZHRoIHBpeGVsIG51bWJlciBpbmRpY2F0ZWQgYnkgZGVzaWduZXJcbiAgICAgICAgICAgIHZhciBXSURUSF9CT1VOREFSWV9QWCA9IDkzNjtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCA+PSBXSURUSF9CT1VOREFSWV9QWCAmJiAhdGhpcy5zdGF0ZS53aWRlclBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkZXJQYWRkaW5nOiB0cnVlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZVdpZGVyUGFkZGluZ0NhbGxlZCA9IHRydWU7IC8vIGZpcnN0IHJlbmRlciB3aXRob3V0IGNzcyB0cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGggPCBXSURUSF9CT1VOREFSWV9QWCAmJiB0aGlzLnN0YXRlLndpZGVyUGFkZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWRlclBhZGRpbmc6IGZhbHNlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZVdpZGVyUGFkZGluZ0NhbGxlZCA9IHRydWU7IC8vIGZpcnN0IHJlbmRlciB3aXRob3V0IGNzcyB0cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJpc0NvbnRhaW5HcmlkXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NvbnRhaW5HcmlkKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5HcmlkID0gdm9pZCAwO1xuICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUgPT09IEdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbkdyaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5HcmlkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0QWN0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3Rpb24oYWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFhY3Rpb25zIHx8ICFhY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6IDEwMCAvIGFjdGlvbnMubGVuZ3RoICsgXCIlXCIgfSwga2V5OiBcImFjdGlvbi1cIiArIGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciAyLnggY29tcGF0aWJsZVxuXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZ2V0Q29tcGF0aWJsZUhvdmVyYWJsZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tcGF0aWJsZUhvdmVyYWJsZSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5vSG92ZXJpbmcgPSBfcHJvcHMubm9Ib3ZlcmluZyxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGUgPSBfcHJvcHMuaG92ZXJhYmxlO1xuXG4gICAgICAgICAgICBpZiAoJ25vSG92ZXJpbmcnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW5vSG92ZXJpbmcgfHwgaG92ZXJhYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICEhaG92ZXJhYmxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgX2EkcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1jYXJkJyA6IF9hJHByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZXh0cmEgPSBfYS5leHRyYSxcbiAgICAgICAgICAgICAgICBib2R5U3R5bGUgPSBfYS5ib2R5U3R5bGUsXG4gICAgICAgICAgICAgICAgbm9Ib3ZlcmluZyA9IF9hLm5vSG92ZXJpbmcsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlID0gX2EuaG92ZXJhYmxlLFxuICAgICAgICAgICAgICAgIHRpdGxlID0gX2EudGl0bGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IF9hLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgICAgICAgICAgICBib3JkZXJlZCA9IF9hJGJvcmRlcmVkID09PSB1bmRlZmluZWQgPyB0cnVlIDogX2EkYm9yZGVyZWQsXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgICAgICAgICAgY292ZXIgPSBfYS5jb3ZlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gX2EuYWN0aW9ucyxcbiAgICAgICAgICAgICAgICB0YWJMaXN0ID0gX2EudGFiTGlzdCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYktleSA9IF9hLmFjdGl2ZVRhYktleSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiS2V5ID0gX2EuZGVmYXVsdEFjdGl2ZVRhYktleSxcbiAgICAgICAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImV4dHJhXCIsIFwiYm9keVN0eWxlXCIsIFwibm9Ib3ZlcmluZ1wiLCBcImhvdmVyYWJsZVwiLCBcInRpdGxlXCIsIFwibG9hZGluZ1wiLCBcImJvcmRlcmVkXCIsIFwidHlwZVwiLCBcImNvdmVyXCIsIFwiYWN0aW9uc1wiLCBcInRhYkxpc3RcIiwgXCJjaGlsZHJlblwiLCBcImFjdGl2ZVRhYktleVwiLCBcImRlZmF1bHRBY3RpdmVUYWJLZXlcIl0pO1xuICAgICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgXCItbG9hZGluZ1wiLCBsb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi1ib3JkZXJlZFwiLCBib3JkZXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgXCItaG92ZXJhYmxlXCIsIHRoaXMuZ2V0Q29tcGF0aWJsZUhvdmVyYWJsZSgpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi13aWRlci1wYWRkaW5nXCIsIHRoaXMuc3RhdGUud2lkZXJQYWRkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi1wYWRkaW5nLXRyYW5zaXRpb25cIiwgdGhpcy51cGRhdGVXaWRlclBhZGRpbmdDYWxsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArIFwiLWNvbnRhaW4tZ3JpZFwiLCB0aGlzLmlzQ29udGFpbkdyaWQoKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgXCItY29udGFpbi10YWJzXCIsIHRhYkxpc3QgJiYgdGFiTGlzdC5sZW5ndGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArIFwiLXR5cGUtXCIgKyB0eXBlLCAhIXR5cGUpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmdCbG9jayA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgICAgICAgIHsgZ3V0dGVyOiA4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNwYW46IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgUm93LFxuICAgICAgICAgICAgICAgICAgICB7IGd1dHRlcjogOCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzcGFuOiA4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3BhbjogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgICAgICAgIHsgZ3V0dGVyOiA4IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNwYW46IDYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzcGFuOiAxOCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJvdyxcbiAgICAgICAgICAgICAgICAgICAgeyBndXR0ZXI6IDggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3BhbjogMTMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzcGFuOiA5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgUm93LFxuICAgICAgICAgICAgICAgICAgICB7IGd1dHRlcjogOCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzcGFuOiA0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3BhbjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNwYW46IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgUm93LFxuICAgICAgICAgICAgICAgICAgICB7IGd1dHRlcjogOCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzcGFuOiA4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3BhbjogNiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNwYW46IDggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBoYXNBY3RpdmVUYWJLZXkgPSBhY3RpdmVUYWJLZXkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBleHRyYVByb3BzID0gX2RlZmluZVByb3BlcnR5KHt9LCBoYXNBY3RpdmVUYWJLZXkgPyAnYWN0aXZlS2V5JyA6ICdkZWZhdWx0QWN0aXZlS2V5JywgaGFzQWN0aXZlVGFiS2V5ID8gYWN0aXZlVGFiS2V5IDogZGVmYXVsdEFjdGl2ZVRhYktleSk7XG4gICAgICAgICAgICB2YXIgaGVhZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGFiTGlzdCAmJiB0YWJMaXN0Lmxlbmd0aCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFicyxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZXh0cmFQcm9wcywgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWhlYWQtdGFic1wiLCBzaXplOiBcImxhcmdlXCIsIG9uQ2hhbmdlOiB0aGlzLm9uVGFiQ2hhbmdlIH0pLFxuICAgICAgICAgICAgICAgIHRhYkxpc3QubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYnMuVGFiUGFuZSwgeyB0YWI6IGl0ZW0udGFiLCBrZXk6IGl0ZW0ua2V5IH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0aXRsZSB8fCBleHRyYSB8fCB0YWJzKSB7XG4gICAgICAgICAgICAgICAgaGVhZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1oZWFkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItaGVhZC13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItaGVhZC10aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWV4dHJhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb3ZlckRvbSA9IGNvdmVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1jb3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgY292ZXJcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWJvZHlcIiwgc3R5bGU6IGJvZHlTdHlsZSB9LFxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyBsb2FkaW5nQmxvY2sgOiBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25Eb20gPSBhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWFjdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWN0aW9uKGFjdGlvbnMpXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBkaXZQcm9wcyA9IG9taXQob3RoZXJzLCBbJ29uVGFiQ2hhbmdlJ10pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZywgcmVmOiB0aGlzLnNhdmVSZWYgfSksXG4gICAgICAgICAgICAgICAgaGVhZCxcbiAgICAgICAgICAgICAgICBjb3ZlckRvbSxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgIGFjdGlvbkRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYXJkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5DYXJkLkdyaWQgPSBHcmlkO1xuQ2FyZC5NZXRhID0gTWV0YTtcbl9fZGVjb3JhdGUoW3Rocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpXSwgQ2FyZC5wcm90b3R5cGUsIFwidXBkYXRlV2lkZXJQYWRkaW5nXCIsIG51bGwpOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3RhYnMvc3R5bGUvY3NzJzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJjQ2hlY2tib3ggZnJvbSAncmMtY2hlY2tib3gnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuXG52YXIgQ2hlY2tib3ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDaGVja2JveCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDaGVja2JveCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoZWNrYm94KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2hlY2tib3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGVja2JveCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLnNhdmVDaGVja2JveCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5yY0NoZWNrYm94ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDaGVja2JveCwgW3tcbiAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5jb250ZXh0LmNoZWNrYm94R3JvdXAsIG5leHRDb250ZXh0LmNoZWNrYm94R3JvdXApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMucmNDaGVja2JveC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLnJjQ2hlY2tib3guYmx1cigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUgPSBwcm9wcy5pbmRldGVybWluYXRlLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5kZXRlcm1pbmF0ZVwiLCBcInN0eWxlXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCJdKTtcblxuICAgICAgICAgICAgdmFyIGNoZWNrYm94R3JvdXAgPSBjb250ZXh0LmNoZWNrYm94R3JvdXA7XG5cbiAgICAgICAgICAgIHZhciBjaGVja2JveFByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3hHcm91cCkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94UHJvcHMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveEdyb3VwLnRvZ2dsZU9wdGlvbih7IGxhYmVsOiBjaGlsZHJlbiwgdmFsdWU6IHByb3BzLnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2hlY2tib3hQcm9wcy5jaGVja2VkID0gY2hlY2tib3hHcm91cC52YWx1ZS5pbmRleE9mKHByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hQcm9wcy5kaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkIHx8IGNoZWNrYm94R3JvdXAuZGlzYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLXdyYXBwZXInLCB0cnVlKSk7XG4gICAgICAgICAgICB2YXIgY2hlY2tib3hDbGFzcyA9IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLWluZGV0ZXJtaW5hdGUnLCBpbmRldGVybWluYXRlKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZywgc3R5bGU6IHN0eWxlLCBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJjQ2hlY2tib3gsIF9leHRlbmRzKHt9LCBjaGVja2JveFByb3BzLCB7IHByZWZpeENsczogcHJlZml4Q2xzLCBjbGFzc05hbWU6IGNoZWNrYm94Q2xhc3MsIHJlZjogdGhpcy5zYXZlQ2hlY2tib3ggfSkpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuICE9PSB1bmRlZmluZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2hlY2tib3g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LWNoZWNrYm94JyxcbiAgICBpbmRldGVybWluYXRlOiBmYWxzZVxufTtcbkNoZWNrYm94LmNvbnRleHRUeXBlcyA9IHtcbiAgICBjaGVja2JveEdyb3VwOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ3NoYWxsb3dlcXVhbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbnZhciBDaGVja2JveEdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2hlY2tib3hHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDaGVja2JveEdyb3VwKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGVja2JveEdyb3VwKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2hlY2tib3hHcm91cC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENoZWNrYm94R3JvdXApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMudG9nZ2xlT3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIG9wdGlvbkluZGV4ID0gX3RoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5zdGF0ZS52YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbkluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKCd2YWx1ZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlIHx8IFtdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2hlY2tib3hHcm91cCwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hHcm91cDoge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVPcHRpb246IHRoaXMudG9nZ2xlT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5leHRQcm9wcy52YWx1ZSB8fCBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzc5NjBcblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIHZhciBncm91cFByZWZpeENscyA9IHByZWZpeENscyArICctZ3JvdXAnO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0T3B0aW9ucygpLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tib3gsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByZWZpeENsczogcHJlZml4Q2xzLCBrZXk6IG9wdGlvbi52YWx1ZSwgZGlzYWJsZWQ6ICdkaXNhYmxlZCcgaW4gb3B0aW9uID8gb3B0aW9uLmRpc2FibGVkIDogcHJvcHMuZGlzYWJsZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIGNoZWNrZWQ6IHN0YXRlLnZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTEsIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi50b2dnbGVPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IGdyb3VwUHJlZml4Q2xzICsgJy1pdGVtJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKGdyb3VwUHJlZml4Q2xzLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDaGVja2JveEdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEdyb3VwO1xuXG5DaGVja2JveEdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBwcmVmaXhDbHM6ICdhbnQtY2hlY2tib3gnXG59O1xuQ2hlY2tib3hHcm91cC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5DaGVja2JveEdyb3VwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGNoZWNrYm94R3JvdXA6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuQ2hlY2tib3guR3JvdXAgPSBHcm91cDtcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsImltcG9ydCB7IENvbCB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGRlZmF1bHQgQ29sOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vLi4vZ3JpZC9zdHlsZS9pbmRleC5jc3MnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jztcbi8qIHRzbGludDpkaXNhYmxlIGpzeC1uby1tdWx0aWxpbmUtanMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJhbmdlQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXIvZXMvUmFuZ2VDYWxlbmRhcic7XG5pbXBvcnQgUmNEYXRlUGlja2VyIGZyb20gJ3JjLWNhbGVuZGFyL2VzL1BpY2tlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgaW50ZXJvcERlZmF1bHQgZnJvbSAnLi4vX3V0aWwvaW50ZXJvcERlZmF1bHQnO1xuZnVuY3Rpb24gZ2V0U2hvd0RhdGVGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgX3ZhbHVlID0gX3NsaWNlZFRvQXJyYXkodmFsdWUsIDIpLFxuICAgICAgICBzdGFydCA9IF92YWx1ZVswXSxcbiAgICAgICAgZW5kID0gX3ZhbHVlWzFdO1xuICAgIC8vIHZhbHVlIGNvdWxkIGJlIGFuIGVtcHR5IGFycmF5LCB0aGVuIHdlIHNob3VsZCBub3QgcmVzZXQgc2hvd0RhdGVcblxuXG4gICAgaWYgKCFzdGFydCAmJiAhZW5kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lKHN0YXJ0LCAnbW9udGgnKSA/IGVuZC5jbG9uZSgpLmFkZCgxLCAnbW9udGgnKSA6IGVuZDtcbiAgICByZXR1cm4gW3N0YXJ0LCBuZXdFbmRdO1xufVxuZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUsIGZvcm1hdCkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJztcbn1cbmZ1bmN0aW9uIHBpY2tlclZhbHVlQWRhcHRlcih2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gW3ZhbHVlLCB2YWx1ZS5jbG9uZSgpLmFkZCgxLCAnbW9udGgnKV07XG59XG5mdW5jdGlvbiBpc0VtcHR5QXJyYXkoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMCB8fCBhcnIuZXZlcnkoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiAhaTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGZpeExvY2FsZSh2YWx1ZSwgbG9jYWxlQ29kZSkge1xuICAgIGlmICghbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlWzBdKSB7XG4gICAgICAgIHZhbHVlWzBdLmxvY2FsZShsb2NhbGVDb2RlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlWzFdKSB7XG4gICAgICAgIHZhbHVlWzFdLmxvY2FsZShsb2NhbGVDb2RlKTtcbiAgICB9XG59XG5cbnZhciBSYW5nZVBpY2tlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJhbmdlUGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJhbmdlUGlja2VyKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5nZVBpY2tlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJhbmdlUGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFuZ2VQaWNrZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2xlYXJIb3ZlclZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHsgaG92ZXJWYWx1ZTogW10gfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAoISgndmFsdWUnIGluIHByb3BzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG93RGF0ZSA9IF9yZWYuc2hvd0RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGF0ZTogZ2V0U2hvd0RhdGVGcm9tVmFsdWUodmFsdWUpIHx8IHNob3dEYXRlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSh2YWx1ZSwgW2Zvcm1hdFZhbHVlKHZhbHVlWzBdLCBwcm9wcy5mb3JtYXQpLCBmb3JtYXRWYWx1ZSh2YWx1ZVsxXSwgcHJvcHMuZm9ybWF0KV0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVPcGVuQ2hhbmdlID0gZnVuY3Rpb24gKG9wZW4pIHtcbiAgICAgICAgICAgIGlmICghKCdvcGVuJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG9wZW46IG9wZW4gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvbk9wZW5DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2Uob3Blbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVNob3dEYXRlQ2hhbmdlID0gZnVuY3Rpb24gKHNob3dEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoeyBzaG93RGF0ZTogc2hvd0RhdGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUhvdmVyQ2hhbmdlID0gZnVuY3Rpb24gKGhvdmVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyVmFsdWU6IGhvdmVyVmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJhbmdlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNhbGVuZGFySW5wdXRTZWxlY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWVbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2hvd0RhdGUgPSBfcmVmMi5zaG93RGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dEYXRlOiBnZXRTaG93RGF0ZUZyb21WYWx1ZSh2YWx1ZSkgfHwgc2hvd0RhdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJhbmdlQ2xpY2sgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgb25PayA9IF90aGlzLnByb3BzLm9uT2s7XG5cbiAgICAgICAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgICAgICAgICAgb25Payh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVQaWNrZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMucGlja2VyID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHJhbmdlcyA9IF90aGlzJHByb3BzLnJhbmdlcyxcbiAgICAgICAgICAgICAgICByZW5kZXJFeHRyYUZvb3RlciA9IF90aGlzJHByb3BzLnJlbmRlckV4dHJhRm9vdGVyO1xuXG4gICAgICAgICAgICBpZiAoIXJhbmdlcyAmJiAhcmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXN0b21Gb290ZXIgPSByZW5kZXJFeHRyYUZvb3RlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZm9vdGVyLWV4dHJhJywga2V5OiAnZXh0cmEnIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyRXh0cmFGb290ZXIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gT2JqZWN0LmtleXMocmFuZ2VzIHx8IHt9KS5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmFuZ2VzW3JhbmdlXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogcmFuZ2UsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVJhbmdlQ2xpY2sodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHsgaG92ZXJWYWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbk1vdXNlTGVhdmU6IF90aGlzLmhhbmRsZVJhbmdlTW91c2VMZWF2ZSB9LFxuICAgICAgICAgICAgICAgICAgICByYW5nZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByYW5nZU5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3Rlci1leHRyYSAnICsgcHJlZml4Q2xzICsgJy1yYW5nZS1xdWljay1zZWxlY3RvcicsIGtleTogJ3JhbmdlJyB9LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gW3JhbmdlTm9kZSwgY3VzdG9tRm9vdGVyXTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlIHx8IFtdO1xuICAgICAgICBpZiAodmFsdWVbMF0gJiYgIWludGVyb3BEZWZhdWx0KG1vbWVudCkuaXNNb21lbnQodmFsdWVbMF0pIHx8IHZhbHVlWzFdICYmICFpbnRlcm9wRGVmYXVsdChtb21lbnQpLmlzTW9tZW50KHZhbHVlWzFdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUvZGVmYXVsdFZhbHVlIG9mIFJhbmdlUGlja2VyIG11c3QgYmUgYSBtb21lbnQgb2JqZWN0IGFycmF5IGFmdGVyIGBhbnRkQDIuMGAsICcgKyAnc2VlOiBodHRwczovL3UuYW50LmRlc2lnbi9kYXRlLXBpY2tlci12YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwaWNrZXJWYWx1ZSA9ICF2YWx1ZSB8fCBpc0VtcHR5QXJyYXkodmFsdWUpID8gcHJvcHMuZGVmYXVsdFBpY2tlclZhbHVlIDogdmFsdWU7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgc2hvd0RhdGU6IHBpY2tlclZhbHVlQWRhcHRlcihwaWNrZXJWYWx1ZSB8fCBpbnRlcm9wRGVmYXVsdChtb21lbnQpKCkpLFxuICAgICAgICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgICAgICAgIGhvdmVyVmFsdWU6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFuZ2VQaWNrZXIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV4dFByb3BzLnZhbHVlIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dEYXRlOiBnZXRTaG93RGF0ZUZyb21WYWx1ZSh2YWx1ZSkgfHwgc3RhdGUuc2hvd0RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnb3BlbicgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IG5leHRQcm9wcy5vcGVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlLCBoaWRlUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICgoaGlkZVBhbmVsIHx8ICF0aGlzLnByb3BzLnNob3dUaW1lKSAmJiAhKCdvcGVuJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXMsXG4gICAgICAgICAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBzaG93RGF0ZSA9IHN0YXRlLnNob3dEYXRlLFxuICAgICAgICAgICAgICAgIGhvdmVyVmFsdWUgPSBzdGF0ZS5ob3ZlclZhbHVlLFxuICAgICAgICAgICAgICAgIG9wZW4gPSBzdGF0ZS5vcGVuO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBwb3B1cFN0eWxlID0gcHJvcHMucG9wdXBTdHlsZSxcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZSA9IHByb3BzLmRpc2FibGVkRGF0ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFRpbWUgPSBwcm9wcy5kaXNhYmxlZFRpbWUsXG4gICAgICAgICAgICAgICAgc2hvd1RpbWUgPSBwcm9wcy5zaG93VGltZSxcbiAgICAgICAgICAgICAgICBzaG93VG9kYXkgPSBwcm9wcy5zaG93VG9kYXksXG4gICAgICAgICAgICAgICAgcmFuZ2VzID0gcHJvcHMucmFuZ2VzLFxuICAgICAgICAgICAgICAgIG9uT2sgPSBwcm9wcy5vbk9rLFxuICAgICAgICAgICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVDb2RlID0gcHJvcHMubG9jYWxlQ29kZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgZGF0ZVJlbmRlciA9IHByb3BzLmRhdGVSZW5kZXIsXG4gICAgICAgICAgICAgICAgb25DYWxlbmRhckNoYW5nZSA9IHByb3BzLm9uQ2FsZW5kYXJDaGFuZ2U7XG5cbiAgICAgICAgICAgIGZpeExvY2FsZSh2YWx1ZSwgbG9jYWxlQ29kZSk7XG4gICAgICAgICAgICBmaXhMb2NhbGUoc2hvd0RhdGUsIGxvY2FsZUNvZGUpO1xuICAgICAgICAgICAgd2FybmluZyghKCdvbk9LJyBpbiBwcm9wcyksICdJdCBzaG91bGQgYmUgYFJhbmdlUGlja2VyW29uT2tdYCwgaW5zdGVhZCBvZiBgb25PS2AhJyk7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctdGltZScsIHNob3dUaW1lKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXJhbmdlLXdpdGgtcmFuZ2VzJywgcmFuZ2VzKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgICAgIC8vIOmcgOimgemAieaLqeaXtumXtOaXtu+8jOeCueWHuyBvayDml7bmiY3op6blj5Egb25DaGFuZ2VcbiAgICAgICAgICAgIHZhciBwaWNrZXJDaGFuZ2VIYW5kbGVyID0ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxlbmRhclByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uT2s6IHRoaXMuaGFuZGxlQ2hhbmdlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHByb3BzLnRpbWVQaWNrZXIpIHtcbiAgICAgICAgICAgICAgICBwaWNrZXJDaGFuZ2VIYW5kbGVyLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnbW9kZScgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjYWxlbmRhclByb3BzLm1vZGUgPSBwcm9wcy5tb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0UGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInIGluIHByb3BzID8gcHJvcHMucGxhY2Vob2xkZXJbMF0gOiBsb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyWzBdO1xuICAgICAgICAgICAgdmFyIGVuZFBsYWNlaG9sZGVyID0gJ3BsYWNlaG9sZGVyJyBpbiBwcm9wcyA/IHByb3BzLnBsYWNlaG9sZGVyWzFdIDogbG9jYWxlLmxhbmcucmFuZ2VQbGFjZWhvbGRlclsxXTtcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmFuZ2VDYWxlbmRhciwgX2V4dGVuZHMoe30sIGNhbGVuZGFyUHJvcHMsIHsgb25DaGFuZ2U6IG9uQ2FsZW5kYXJDaGFuZ2UsIGZvcm1hdDogZm9ybWF0LCBwcmVmaXhDbHM6IHByZWZpeENscywgY2xhc3NOYW1lOiBjYWxlbmRhckNsYXNzTmFtZSwgcmVuZGVyRm9vdGVyOiB0aGlzLnJlbmRlckZvb3RlciwgdGltZVBpY2tlcjogcHJvcHMudGltZVBpY2tlciwgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGUsIGRpc2FibGVkVGltZTogZGlzYWJsZWRUaW1lLCBkYXRlSW5wdXRQbGFjZWhvbGRlcjogW3N0YXJ0UGxhY2Vob2xkZXIsIGVuZFBsYWNlaG9sZGVyXSwgbG9jYWxlOiBsb2NhbGUubGFuZywgb25Pazogb25PaywgZGF0ZVJlbmRlcjogZGF0ZVJlbmRlciwgdmFsdWU6IHNob3dEYXRlLCBvblZhbHVlQ2hhbmdlOiB0aGlzLmhhbmRsZVNob3dEYXRlQ2hhbmdlLCBob3ZlclZhbHVlOiBob3ZlclZhbHVlLCBvbkhvdmVyQ2hhbmdlOiB0aGlzLmhhbmRsZUhvdmVyQ2hhbmdlLCBvblBhbmVsQ2hhbmdlOiBwcm9wcy5vblBhbmVsQ2hhbmdlLCBzaG93VG9kYXk6IHNob3dUb2RheSwgb25JbnB1dFNlbGVjdDogdGhpcy5oYW5kbGVDYWxlbmRhcklucHV0U2VsZWN0IH0pKTtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgd2lkdGggZm9yIHNob3dUaW1lXG4gICAgICAgICAgICB2YXIgcGlja2VyU3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaG93VGltZSkge1xuICAgICAgICAgICAgICAgIHBpY2tlclN0eWxlLndpZHRoID0gc3R5bGUgJiYgc3R5bGUud2lkdGggfHwgMzUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsZWFySWNvbiA9ICFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5hbGxvd0NsZWFyICYmIHZhbHVlICYmICh2YWx1ZVswXSB8fCB2YWx1ZVsxXSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2Nyb3NzLWNpcmNsZScsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1waWNrZXItY2xlYXInLCBvbkNsaWNrOiB0aGlzLmNsZWFyU2VsZWN0aW9uIH0pIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGZ1bmN0aW9uIGlucHV0KF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBfcmVmMy52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGlucHV0VmFsdWVbMF07XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGlucHV0VmFsdWVbMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnBpY2tlcklucHV0Q2xhc3MgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCwgcmVhZE9ubHk6IHRydWUsIHZhbHVlOiBzdGFydCAmJiBzdGFydC5mb3JtYXQocHJvcHMuZm9ybWF0KSB8fCAnJywgcGxhY2Vob2xkZXI6IHN0YXJ0UGxhY2Vob2xkZXIsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1yYW5nZS1waWNrZXItaW5wdXQnLCB0YWJJbmRleDogLTEgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1yYW5nZS1waWNrZXItc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyB+ICdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCwgcmVhZE9ubHk6IHRydWUsIHZhbHVlOiBlbmQgJiYgZW5kLmZvcm1hdChwcm9wcy5mb3JtYXQpIHx8ICcnLCBwbGFjZWhvbGRlcjogZW5kUGxhY2Vob2xkZXIsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1yYW5nZS1waWNrZXItaW5wdXQnLCB0YWJJbmRleDogLTEgfSksXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySWNvbixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXBpY2tlci1pY29uJyB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgcmVmOiB0aGlzLnNhdmVQaWNrZXIsIGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMucGlja2VyQ2xhc3MpLCBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCBwaWNrZXJTdHlsZSksIHRhYkluZGV4OiBwcm9wcy5kaXNhYmxlZCA/IC0xIDogMCwgb25Gb2N1czogcHJvcHMub25Gb2N1cywgb25CbHVyOiBwcm9wcy5vbkJsdXIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBSY0RhdGVQaWNrZXIsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgcGlja2VyQ2hhbmdlSGFuZGxlciwgeyBjYWxlbmRhcjogY2FsZW5kYXIsIHZhbHVlOiB2YWx1ZSwgb3Blbjogb3Blbiwgb25PcGVuQ2hhbmdlOiB0aGlzLmhhbmRsZU9wZW5DaGFuZ2UsIHByZWZpeENsczogcHJlZml4Q2xzICsgJy1waWNrZXItY29udGFpbmVyJywgc3R5bGU6IHBvcHVwU3R5bGUgfSksXG4gICAgICAgICAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYW5nZVBpY2tlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VQaWNrZXI7XG5cblJhbmdlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtY2FsZW5kYXInLFxuICAgIGFsbG93Q2xlYXI6IHRydWUsXG4gICAgc2hvd1RvZGF5OiBmYWxzZVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmltcG9ydCBSY0RhdGVQaWNrZXIgZnJvbSAncmMtY2FsZW5kYXIvZXMvUGlja2VyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgaW50ZXJvcERlZmF1bHQgZnJvbSAnLi4vX3V0aWwvaW50ZXJvcERlZmF1bHQnO1xuZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUsIGZvcm1hdCkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJztcbn1cblxudmFyIFdlZWtQaWNrZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXZWVrUGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFdlZWtQaWNrZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlZWtQaWNrZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChXZWVrUGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoV2Vla1BpY2tlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy53ZWVrRGF0ZVJlbmRlciA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IF90aGlzLnByb3BzLnByZWZpeENscztcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgY3VycmVudC55ZWFyKCkgPT09IHNlbGVjdGVkVmFsdWUueWVhcigpICYmIGN1cnJlbnQud2VlaygpID09PSBzZWxlY3RlZFZhbHVlLndlZWsoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctc2VsZWN0ZWQtZGF5JyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5kYXRlKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kYXRlJyB9LFxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGF0ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghKCd2YWx1ZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgZm9ybWF0VmFsdWUodmFsdWUsIF90aGlzLnByb3BzLmZvcm1hdCkpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMuaW5wdXQgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhaW50ZXJvcERlZmF1bHQobW9tZW50KS5pc01vbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlL2RlZmF1bHRWYWx1ZSBvZiBEYXRlUGlja2VyIG9yIE1vbnRoUGlja2VyIG11c3QgYmUgJyArICdhIG1vbWVudCBvYmplY3QgYWZ0ZXIgYGFudGRAMi4wYCwgc2VlOiBodHRwczovL3UuYW50LmRlc2lnbi9kYXRlLXBpY2tlci12YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2Vla1BpY2tlciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0UHJvcHMudmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgcGlja2VyQ2xhc3MgPSBfcHJvcHMucGlja2VyQ2xhc3MsXG4gICAgICAgICAgICAgICAgcG9wdXBTdHlsZSA9IF9wcm9wcy5wb3B1cFN0eWxlLFxuICAgICAgICAgICAgICAgIHBpY2tlcklucHV0Q2xhc3MgPSBfcHJvcHMucGlja2VySW5wdXRDbGFzcyxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBfcHJvcHMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXIgPSBfcHJvcHMuYWxsb3dDbGVhcixcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBfcHJvcHMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZUNvZGUgPSBfcHJvcHMubG9jYWxlQ29kZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUgPSBfcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMub25Gb2N1cyxcbiAgICAgICAgICAgICAgICBvbkJsdXIgPSBfcHJvcHMub25CbHVyO1xuXG4gICAgICAgICAgICB2YXIgcGlja2VyVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHBpY2tlclZhbHVlICYmIGxvY2FsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZS5sb2NhbGUobG9jYWxlQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInIGluIHRoaXMucHJvcHMgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDogbG9jYWxlLmxhbmcucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFyLCB7IHNob3dXZWVrTnVtYmVyOiB0cnVlLCBkYXRlUmVuZGVyOiB0aGlzLndlZWtEYXRlUmVuZGVyLCBwcmVmaXhDbHM6IHByZWZpeENscywgZm9ybWF0OiBmb3JtYXQsIGxvY2FsZTogbG9jYWxlLmxhbmcsIHNob3dEYXRlSW5wdXQ6IGZhbHNlLCBzaG93VG9kYXk6IGZhbHNlLCBkaXNhYmxlZERhdGU6IGRpc2FibGVkRGF0ZSB9KTtcbiAgICAgICAgICAgIHZhciBjbGVhckljb24gPSAhZGlzYWJsZWQgJiYgYWxsb3dDbGVhciAmJiB0aGlzLnN0YXRlLnZhbHVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjcm9zcy1jaXJjbGUnLCBjbGFzc05hbWU6IHByZWZpeENscyArICctcGlja2VyLWNsZWFyJywgb25DbGljazogdGhpcy5jbGVhclNlbGVjdGlvbiB9KSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBmdW5jdGlvbiBpbnB1dChfcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyByZWY6IF90aGlzMi5zYXZlSW5wdXQsIGRpc2FibGVkOiBkaXNhYmxlZCwgcmVhZE9ubHk6IHRydWUsIHZhbHVlOiB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJywgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBjbGFzc05hbWU6IHBpY2tlcklucHV0Q2xhc3MsIG9uRm9jdXM6IG9uRm9jdXMsIG9uQmx1cjogb25CbHVyLCBzdHlsZTogc3R5bGUgfSksXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySWNvbixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXBpY2tlci1pY29uJyB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgcGlja2VyQ2xhc3MpLCBpZDogdGhpcy5wcm9wcy5pZCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJjRGF0ZVBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2FsZW5kYXI6IGNhbGVuZGFyLCBwcmVmaXhDbHM6IHByZWZpeENscyArICctcGlja2VyLWNvbnRhaW5lcicsIHZhbHVlOiBwaWNrZXJWYWx1ZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLCBzdHlsZTogcG9wdXBTdHlsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdlZWtQaWNrZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWtQaWNrZXI7XG5cbldlZWtQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdDogJ2dnZ2ctd28nLFxuICAgIGFsbG93Q2xlYXI6IHRydWVcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBNb250aENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyL2VzL01vbnRoQ2FsZW5kYXInO1xuaW1wb3J0IFJjRGF0ZVBpY2tlciBmcm9tICdyYy1jYWxlbmRhci9lcy9QaWNrZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tICdvbWl0LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgaW50ZXJvcERlZmF1bHQgZnJvbSAnLi4vX3V0aWwvaW50ZXJvcERlZmF1bHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGlja2VyKFRoZUNhbGVuZGFyKSB7XG4gICAgcmV0dXJuIF9hID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzKENhbGVuZGVyV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQ2FsZW5kZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kZXJXcmFwcGVyKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENhbGVuZGVyV3JhcHBlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhbGVuZGVyV3JhcHBlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICAgICAgX3RoaXMucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckV4dHJhRm9vdGVyID0gX3RoaXMkcHJvcHMucmVuZGVyRXh0cmFGb290ZXI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyRXh0cmFGb290ZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZm9vdGVyLWV4dHJhJyB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJFeHRyYUZvb3Rlci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgICAgIGlmICghKCd2YWx1ZScgaW4gcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEYXRlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsdWUsIHZhbHVlICYmIHZhbHVlLmZvcm1hdChwcm9wcy5mb3JtYXQpIHx8ICcnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgc2hvd0RhdGU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnNhdmVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5wdXQgPSBub2RlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiAhaW50ZXJvcERlZmF1bHQobW9tZW50KS5pc01vbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZS9kZWZhdWx0VmFsdWUgb2YgRGF0ZVBpY2tlciBvciBNb250aFBpY2tlciBtdXN0IGJlICcgKyAnYSBtb21lbnQgb2JqZWN0IGFmdGVyIGBhbnRkQDIuMGAsIHNlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vZGF0ZS1waWNrZXItdmFsdWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzaG93RGF0ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ2FsZW5kZXJXcmFwcGVyLCBbe1xuICAgICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RhdGU6IG5leHRQcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2JsdXInLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RhdGUgPSBfc3RhdGUuc2hvd0RhdGU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIFsnb25DaGFuZ2UnXSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVDb2RlID0gcHJvcHMubG9jYWxlQ29kZTtcblxuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9ICdwbGFjZWhvbGRlcicgaW4gcHJvcHMgPyBwcm9wcy5wbGFjZWhvbGRlciA6IGxvY2FsZS5sYW5nLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZFRpbWUgPSBwcm9wcy5zaG93VGltZSA/IHByb3BzLmRpc2FibGVkVGltZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGVuZGFyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXRpbWUnLCBwcm9wcy5zaG93VGltZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1tb250aCcsIE1vbnRoQ2FsZW5kYXIgPT09IFRoZUNhbGVuZGFyKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgbG9jYWxlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5sb2NhbGUobG9jYWxlQ29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwaWNrZXJQcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBjYWxlbmRhclByb3BzID0ge307XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNob3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTkwMlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q6IHRoaXMuaGFuZGxlQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCdtb2RlJyBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhclByb3BzLm1vZGUgPSBwcm9wcy5tb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YXJuaW5nKCEoJ29uT0snIGluIHByb3BzKSwgJ0l0IHNob3VsZCBiZSBgRGF0ZVBpY2tlcltvbk9rXWAgb3IgYE1vbnRoUGlja2VyW29uT2tdYCwgaW5zdGVhZCBvZiBgb25PS2AhJyk7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGVuZGFyID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaGVDYWxlbmRhciwgX2V4dGVuZHMoe30sIGNhbGVuZGFyUHJvcHMsIHsgZGlzYWJsZWREYXRlOiBwcm9wcy5kaXNhYmxlZERhdGUsIGRpc2FibGVkVGltZTogZGlzYWJsZWRUaW1lLCBsb2NhbGU6IGxvY2FsZS5sYW5nLCB0aW1lUGlja2VyOiBwcm9wcy50aW1lUGlja2VyLCBkZWZhdWx0VmFsdWU6IHByb3BzLmRlZmF1bHRQaWNrZXJWYWx1ZSB8fCBpbnRlcm9wRGVmYXVsdChtb21lbnQpKCksIGRhdGVJbnB1dFBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciwgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIGNsYXNzTmFtZTogY2FsZW5kYXJDbGFzc05hbWUsIG9uT2s6IHByb3BzLm9uT2ssIGRhdGVSZW5kZXI6IHByb3BzLmRhdGVSZW5kZXIsIGZvcm1hdDogcHJvcHMuZm9ybWF0LCBzaG93VG9kYXk6IHByb3BzLnNob3dUb2RheSwgbW9udGhDZWxsQ29udGVudFJlbmRlcjogcHJvcHMubW9udGhDZWxsQ29udGVudFJlbmRlciwgcmVuZGVyRm9vdGVyOiB0aGlzLnJlbmRlckZvb3Rlciwgb25QYW5lbENoYW5nZTogcHJvcHMub25QYW5lbENoYW5nZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2UsIHZhbHVlOiBzaG93RGF0ZSB9KSk7XG4gICAgICAgICAgICAgICAgdmFyIGNsZWFySWNvbiA9ICFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5hbGxvd0NsZWFyICYmIHZhbHVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjcm9zcy1jaXJjbGUnLCBjbGFzc05hbWU6IHByZWZpeENscyArICctcGlja2VyLWNsZWFyJywgb25DbGljazogdGhpcy5jbGVhclNlbGVjdGlvbiB9KSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZnVuY3Rpb24gaW5wdXQoX3JlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHJlZjogX3RoaXMyLnNhdmVJbnB1dCwgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLCByZWFkT25seTogdHJ1ZSwgdmFsdWU6IGlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS5mb3JtYXQocHJvcHMuZm9ybWF0KSB8fCAnJywgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBjbGFzc05hbWU6IHByb3BzLnBpY2tlcklucHV0Q2xhc3MgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctcGlja2VyLWljb24nIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMucGlja2VyQ2xhc3MpLCBzdHlsZTogcHJvcHMuc3R5bGUsIG9uRm9jdXM6IHByb3BzLm9uRm9jdXMsIG9uQmx1cjogcHJvcHMub25CbHVyIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBSY0RhdGVQaWNrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHBpY2tlclByb3BzLCB7IGNhbGVuZGFyOiBjYWxlbmRhciwgdmFsdWU6IHZhbHVlLCBwcmVmaXhDbHM6IHByZWZpeENscyArICctcGlja2VyLWNvbnRhaW5lcicsIHN0eWxlOiBwcm9wcy5wb3B1cFN0eWxlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2FsZW5kZXJXcmFwcGVyO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KSwgX2EuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXhDbHM6ICdhbnQtY2FsZW5kYXInLFxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICBzaG93VG9kYXk6IHRydWVcbiAgICB9LCBfYTtcbiAgICB2YXIgX2E7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSY0NhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmltcG9ydCBNb250aENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyL2VzL01vbnRoQ2FsZW5kYXInO1xuaW1wb3J0IGNyZWF0ZVBpY2tlciBmcm9tICcuL2NyZWF0ZVBpY2tlcic7XG5pbXBvcnQgd3JhcFBpY2tlciBmcm9tICcuL3dyYXBQaWNrZXInO1xuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gJy4vUmFuZ2VQaWNrZXInO1xuaW1wb3J0IFdlZWtQaWNrZXIgZnJvbSAnLi9XZWVrUGlja2VyJztcbnZhciBEYXRlUGlja2VyID0gd3JhcFBpY2tlcihjcmVhdGVQaWNrZXIoUmNDYWxlbmRhcikpO1xudmFyIE1vbnRoUGlja2VyID0gd3JhcFBpY2tlcihjcmVhdGVQaWNrZXIoTW9udGhDYWxlbmRhciksICdZWVlZLU1NJyk7XG5fZXh0ZW5kcyhEYXRlUGlja2VyLCB7XG4gICAgUmFuZ2VQaWNrZXI6IHdyYXBQaWNrZXIoUmFuZ2VQaWNrZXIpLFxuICAgIE1vbnRoUGlja2VyOiBNb250aFBpY2tlcixcbiAgICBXZWVrUGlja2VyOiB3cmFwUGlja2VyKFdlZWtQaWNrZXIsICdnZ2dnLXdvJylcbn0pO1xuZXhwb3J0IGRlZmF1bHQgRGF0ZVBpY2tlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IENhbGVuZGFyTG9jYWxlIGZyb20gJ3JjLWNhbGVuZGFyL2VzL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgVGltZVBpY2tlckxvY2FsZSBmcm9tICcuLi8uLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMnO1xuLy8gTWVyZ2UgaW50byBhIGxvY2FsZSBvYmplY3RcbnZhciBsb2NhbGUgPSB7XG4gICAgbGFuZzogX2V4dGVuZHMoeyBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkYXRlJywgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCBkYXRlJywgJ0VuZCBkYXRlJ10gfSwgQ2FsZW5kYXJMb2NhbGUpLFxuICAgIHRpbWVQaWNrZXJMb2NhbGU6IF9leHRlbmRzKHt9LCBUaW1lUGlja2VyTG9jYWxlKVxufTtcbi8vIEFsbCBzZXR0aW5ncyBhdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vaW5wdXQvc3R5bGUvY3NzJztcbmltcG9ydCAnLi4vLi4vdGltZS1waWNrZXIvc3R5bGUvY3NzJzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lUGlja2VyUGFuZWwgZnJvbSAncmMtdGltZS1waWNrZXIvZXMvUGFuZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCB7IGdlbmVyYXRlU2hvd0hvdXJNaW51dGVTZWNvbmQgfSBmcm9tICcuLi90aW1lLXBpY2tlcic7XG5pbXBvcnQgZW5VUyBmcm9tICcuL2xvY2FsZS9lbl9VUyc7XG5mdW5jdGlvbiBnZXRDb2x1bW5zKF9yZWYpIHtcbiAgICB2YXIgc2hvd0hvdXIgPSBfcmVmLnNob3dIb3VyLFxuICAgICAgICBzaG93TWludXRlID0gX3JlZi5zaG93TWludXRlLFxuICAgICAgICBzaG93U2Vjb25kID0gX3JlZi5zaG93U2Vjb25kLFxuICAgICAgICB1c2UxMkhvdXJzID0gX3JlZi51c2UxMkhvdXJzO1xuXG4gICAgdmFyIGNvbHVtbiA9IDA7XG4gICAgaWYgKHNob3dIb3VyKSB7XG4gICAgICAgIGNvbHVtbiArPSAxO1xuICAgIH1cbiAgICBpZiAoc2hvd01pbnV0ZSkge1xuICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICB9XG4gICAgaWYgKHNob3dTZWNvbmQpIHtcbiAgICAgICAgY29sdW1uICs9IDE7XG4gICAgfVxuICAgIGlmICh1c2UxMkhvdXJzKSB7XG4gICAgICAgIGNvbHVtbiArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1uO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcFBpY2tlcihQaWNrZXIsIGRlZmF1bHRGb3JtYXQpIHtcbiAgICByZXR1cm4gX2EgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoUGlja2VyV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gUGlja2VyV3JhcHBlcigpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaWNrZXJXcmFwcGVyKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBpY2tlcldyYXBwZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQaWNrZXJXcmFwcGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLmhhbmRsZU9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAob3Blbikge1xuICAgICAgICAgICAgICAgIHZhciBvbk9wZW5DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2U7XG5cbiAgICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2Uob3Blbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBvbkZvY3VzID0gX3RoaXMucHJvcHMub25Gb2N1cztcblxuICAgICAgICAgICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXMoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBvbkJsdXIgPSBfdGhpcy5wcm9wcy5vbkJsdXI7XG5cbiAgICAgICAgICAgICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuc2F2ZVBpY2tlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGlja2VyID0gbm9kZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5nZXREZWZhdWx0TG9jYWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgZW5VUywgX3RoaXMucHJvcHMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICByZXN1bHQubGFuZyA9IF9leHRlbmRzKHt9LCByZXN1bHQubGFuZywgKF90aGlzLnByb3BzLmxvY2FsZSB8fCB7fSkubGFuZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJQaWNrZXIgPSBmdW5jdGlvbiAobG9jYWxlLCBsb2NhbGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJlZml4Q2xzID0gcHJvcHMuaW5wdXRQcmVmaXhDbHM7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGlja2VyQ2xhc3MgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctcGlja2VyJywgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLXBpY2tlci0nICsgcHJvcHMuc2l6ZSwgISFwcm9wcy5zaXplKSk7XG4gICAgICAgICAgICAgICAgdmFyIHBpY2tlcklucHV0Q2xhc3MgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctcGlja2VyLWlucHV0JywgaW5wdXRQcmVmaXhDbHMsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgaW5wdXRQcmVmaXhDbHMgKyAnLWxnJywgcHJvcHMuc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIGlucHV0UHJlZml4Q2xzICsgJy1zbScsIHByb3BzLnNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBpbnB1dFByZWZpeENscyArICctZGlzYWJsZWQnLCBwcm9wcy5kaXNhYmxlZCksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRm9ybWF0ID0gcHJvcHMuc2hvd1RpbWUgJiYgcHJvcHMuc2hvd1RpbWUuZm9ybWF0IHx8ICdISDptbTpzcyc7XG4gICAgICAgICAgICAgICAgdmFyIHJjVGltZVBpY2tlclByb3BzID0gX2V4dGVuZHMoe30sIGdlbmVyYXRlU2hvd0hvdXJNaW51dGVTZWNvbmQodGltZUZvcm1hdCksIHsgZm9ybWF0OiB0aW1lRm9ybWF0LCB1c2UxMkhvdXJzOiBwcm9wcy5zaG93VGltZSAmJiBwcm9wcy5zaG93VGltZS51c2UxMkhvdXJzIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjb2x1bW5zID0gZ2V0Q29sdW1ucyhyY1RpbWVQaWNrZXJQcm9wcyk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVQaWNrZXJDbHMgPSBwcmVmaXhDbHMgKyAnLXRpbWUtcGlja2VyLWNvbHVtbi0nICsgY29sdW1ucztcbiAgICAgICAgICAgICAgICB2YXIgdGltZVBpY2tlciA9IHByb3BzLnNob3dUaW1lID8gUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lUGlja2VyUGFuZWwsIF9leHRlbmRzKHt9LCByY1RpbWVQaWNrZXJQcm9wcywgcHJvcHMuc2hvd1RpbWUsIHsgcHJlZml4Q2xzOiBwcmVmaXhDbHMgKyAnLXRpbWUtcGlja2VyJywgY2xhc3NOYW1lOiB0aW1lUGlja2VyQ2xzLCBwbGFjZWhvbGRlcjogbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucGxhY2Vob2xkZXIsIHRyYW5zaXRpb25OYW1lOiAnc2xpZGUtdXAnIH0pKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGlja2VyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcmVmOiBfdGhpcy5zYXZlUGlja2VyLCBwaWNrZXJDbGFzczogcGlja2VyQ2xhc3MsIHBpY2tlcklucHV0Q2xhc3M6IHBpY2tlcklucHV0Q2xhc3MsIGxvY2FsZTogbG9jYWxlLCBsb2NhbGVDb2RlOiBsb2NhbGVDb2RlLCB0aW1lUGlja2VyOiB0aW1lUGlja2VyLCBvbk9wZW5DaGFuZ2U6IF90aGlzLmhhbmRsZU9wZW5DaGFuZ2UsIG9uRm9jdXM6IF90aGlzLmhhbmRsZUZvY3VzLCBvbkJsdXI6IF90aGlzLmhhbmRsZUJsdXIgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhQaWNrZXJXcmFwcGVyLCBbe1xuICAgICAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgPSBfcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcblxuICAgICAgICAgICAgICAgIGlmIChhdXRvRm9jdXMgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIExvY2FsZVJlY2VpdmVyLFxuICAgICAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdEYXRlUGlja2VyJywgZGVmYXVsdExvY2FsZTogdGhpcy5nZXREZWZhdWx0TG9jYWxlIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGlja2VyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBQaWNrZXJXcmFwcGVyO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KSwgX2EuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQgfHwgJ1lZWVktTU0tREQnLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ3NsaWRlLXVwJyxcbiAgICAgICAgcG9wdXBTdHlsZToge30sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICAgICAgICBvbk9rOiBmdW5jdGlvbiBvbk9rKCkge30sXG4gICAgICAgIG9uT3BlbkNoYW5nZTogZnVuY3Rpb24gb25PcGVuQ2hhbmdlKCkge30sXG5cbiAgICAgICAgbG9jYWxlOiB7fSxcbiAgICAgICAgcHJlZml4Q2xzOiAnYW50LWNhbGVuZGFyJyxcbiAgICAgICAgaW5wdXRQcmVmaXhDbHM6ICdhbnQtaW5wdXQnXG4gICAgfSwgX2E7XG4gICAgdmFyIF9hO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNyZWF0ZURPTUZvcm0gZnJvbSAncmMtZm9ybS9lcy9jcmVhdGVET01Gb3JtJztcbmltcG9ydCBjcmVhdGVGb3JtRmllbGQgZnJvbSAncmMtZm9ybS9lcy9jcmVhdGVGb3JtRmllbGQnO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL0Zvcm1JdGVtJztcbmltcG9ydCB7IEZJRUxEX01FVEFfUFJPUCwgRklFTERfREFUQV9QUk9QIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG52YXIgRm9ybSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZvcm0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGb3JtKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIHdhcm5pbmcoIXByb3BzLmZvcm0sICdJdCBpcyB1bm5lY2Vzc2FyeSB0byBwYXNzIGBmb3JtYCB0byBgRm9ybWAgYWZ0ZXIgYW50ZEAxLjcuMC4nKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb3JtLCBbe1xuICAgICAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgdmFyIGxheW91dCA9IHRoaXMucHJvcHMubGF5b3V0O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBsYXlvdXQgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgaGlkZVJlcXVpcmVkTWFyayA9IF9wcm9wcy5oaWRlUmVxdWlyZWRNYXJrLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBsYXlvdXQgPSBfcHJvcHMubGF5b3V0O1xuXG4gICAgICAgICAgICB2YXIgZm9ybUNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWhvcml6b250YWwnLCBsYXlvdXQgPT09ICdob3Jpem9udGFsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy12ZXJ0aWNhbCcsIGxheW91dCA9PT0gJ3ZlcnRpY2FsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1pbmxpbmUnLCBsYXlvdXQgPT09ICdpbmxpbmUnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWhpZGUtcmVxdWlyZWQtbWFyaycsIGhpZGVSZXF1aXJlZE1hcmspLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB2YXIgZm9ybVByb3BzID0gb21pdCh0aGlzLnByb3BzLCBbJ3ByZWZpeENscycsICdjbGFzc05hbWUnLCAnbGF5b3V0JywgJ2Zvcm0nLCAnaGlkZVJlcXVpcmVkTWFyayddKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdmb3JtJywgX2V4dGVuZHMoe30sIGZvcm1Qcm9wcywgeyBjbGFzc05hbWU6IGZvcm1DbGFzc05hbWUgfSkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvcm07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1mb3JtJyxcbiAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICBoaWRlUmVxdWlyZWRNYXJrOiBmYWxzZSxcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufTtcbkZvcm0ucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAnaW5saW5lJywgJ3ZlcnRpY2FsJ10pLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlUmVxdWlyZWRNYXJrOiBQcm9wVHlwZXMuYm9vbFxufTtcbkZvcm0uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG59O1xuRm9ybS5JdGVtID0gRm9ybUl0ZW07XG5Gb3JtLmNyZWF0ZUZvcm1GaWVsZCA9IGNyZWF0ZUZvcm1GaWVsZDtcbkZvcm0uY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIHJldHVybiBjcmVhdGVET01Gb3JtKF9leHRlbmRzKHsgZmllbGROYW1lUHJvcDogJ2lkJyB9LCBvcHRpb25zLCB7IGZpZWxkTWV0YVByb3A6IEZJRUxEX01FVEFfUFJPUCwgZmllbGREYXRhUHJvcDogRklFTERfREFUQV9QUk9QIH0pKTtcbn07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgUm93IGZyb20gJy4uL2dyaWQvcm93JztcbmltcG9ydCBDb2wgZnJvbSAnLi4vZ3JpZC9jb2wnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgeyBGSUVMRF9NRVRBX1BST1AsIEZJRUxEX0RBVEFfUFJPUCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxudmFyIEZvcm1JdGVtID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRm9ybUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRm9ybUl0ZW0oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtSXRlbSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm1JdGVtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRm9ybUl0ZW0pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHsgaGVscFNob3c6IGZhbHNlIH07XG4gICAgICAgIF90aGlzLm9uSGVscEFuaW1FbmQgPSBmdW5jdGlvbiAoX2tleSwgaGVscFNob3cpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaGVscFNob3c6IGhlbHBTaG93IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBSZXNvbHZlIGR1cGxpY2F0ZWQgaWRzIGJ1ZyBiZXR3ZWVuIGRpZmZlcmVudCBmb3Jtc1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83MzUxXG4gICAgICAgIF90aGlzLm9uTGFiZWxDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBfdGhpcy5wcm9wcy5sYWJlbDtcblxuICAgICAgICAgICAgdmFyIGlkID0gX3RoaXMucHJvcHMuaWQgfHwgX3RoaXMuZ2V0SWQoKTtcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQ9XCInICsgaWQgKyAnXCJdJyk7XG4gICAgICAgICAgICBpZiAoY29udHJvbHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBwcmV2ZW50IGluIGRlZmF1bHQgc2l0dWF0aW9uXG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgcHJldmVudGluZyBldmVudCBpbiBgbGFiZWw9ezxhIGhyZWY9XCJ4eFwiPmxpbms8L2E+fWBgXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUl0ZW1Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sID0gZm9ybUl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cIicgKyBpZCArICdcIl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9ybUl0ZW0sIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgd2FybmluZyh0aGlzLmdldENvbnRyb2xzKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRydWUpLmxlbmd0aCA8PSAxLCAnYEZvcm0uSXRlbWAgY2Fubm90IGdlbmVyYXRlIGB2YWxpZGF0ZVN0YXR1c2AgYW5kIGBoZWxwYCBhdXRvbWF0aWNhbGx5LCAnICsgJ3doaWxlIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGBnZXRGaWVsZERlY29yYXRvcmAgaW4gaXQuJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEhlbHBNc2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SGVscE1zZygpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgb25seUNvbnRyb2wgPSB0aGlzLmdldE9ubHlDb250cm9sKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGVscCA9PT0gdW5kZWZpbmVkICYmIG9ubHlDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IHRoaXMuZ2V0RmllbGQoKS5lcnJvcnM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycyA/IGVycm9ycy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcsICcpIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuaGVscDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29udHJvbHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJvbHMoY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5KSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlY3Vyc2l2ZWx5ICYmIGNvbnRyb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgJiYgKGNoaWxkLnR5cGUgPT09IEZvcm1JdGVtIHx8IGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdGb3JtSXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoRklFTERfTUVUQV9QUk9QIGluIGNoaWxkLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFuZCBtZWFucyBGSUVMRF9EQVRBX1BST1AgaW4gY2hpZGwucHJvcHMsIHRvby5cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scyA9IGNvbnRyb2xzLmNvbmNhdCh0aGlzLmdldENvbnRyb2xzKGNoaWxkLnByb3BzLmNoaWxkcmVuLCByZWN1cnNpdmVseSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0T25seUNvbnRyb2wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T25seUNvbnRyb2woKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENvbnRyb2xzKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZhbHNlKVswXTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gdW5kZWZpbmVkID8gY2hpbGQgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDaGlsZFByb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRQcm9wKHByb3ApIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0T25seUNvbnRyb2woKTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAmJiBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wc1twcm9wXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZFByb3AoJ2lkJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE1ldGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoaWxkUHJvcChGSUVMRF9NRVRBX1BST1ApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRGaWVsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoaWxkUHJvcChGSUVMRF9EQVRBX1BST1ApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJIZWxwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhlbHAoKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgICAgICB2YXIgaGVscCA9IHRoaXMuZ2V0SGVscE1zZygpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaGVscCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZXhwbGFpbicsIGtleTogJ2hlbHAnIH0sXG4gICAgICAgICAgICAgICAgaGVscFxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgICAgICAgIHsgdHJhbnNpdGlvbk5hbWU6ICdzaG93LWhlbHAnLCBjb21wb25lbnQ6ICcnLCB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLCBrZXk6ICdoZWxwJywgb25FbmQ6IHRoaXMub25IZWxwQW5pbUVuZCB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJFeHRyYScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJFeHRyYSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgZXh0cmEgPSBfcHJvcHMuZXh0cmE7XG5cbiAgICAgICAgICAgIHJldHVybiBleHRyYSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZXh0cmEnIH0sXG4gICAgICAgICAgICAgICAgZXh0cmFcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRWYWxpZGF0ZVN0YXR1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWxpZGF0ZVN0YXR1cygpIHtcbiAgICAgICAgICAgIHZhciBvbmx5Q29udHJvbCA9IHRoaXMuZ2V0T25seUNvbnRyb2woKTtcbiAgICAgICAgICAgIGlmICghb25seUNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmdldEZpZWxkKCk7XG4gICAgICAgICAgICBpZiAoZmllbGQudmFsaWRhdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiAndmFsaWRhdGluZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGQuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9ICd2YWx1ZScgaW4gZmllbGQgPyBmaWVsZC52YWx1ZSA6IHRoaXMuZ2V0TWV0YSgpLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgZmllbGRWYWx1ZSAhPT0gbnVsbCAmJiBmaWVsZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclZhbGlkYXRlV3JhcHBlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJWYWxpZGF0ZVdyYXBwZXIoYzEsIGMyLCBjMykge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBvbmx5Q29udHJvbCA9IHRoaXMuZ2V0T25seUNvbnRyb2w7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVTdGF0dXMgPSBwcm9wcy52YWxpZGF0ZVN0YXR1cyA9PT0gdW5kZWZpbmVkICYmIG9ubHlDb250cm9sID8gdGhpcy5nZXRWYWxpZGF0ZVN0YXR1cygpIDogcHJvcHMudmFsaWRhdGVTdGF0dXM7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMucHJlZml4Q2xzICsgJy1pdGVtLWNvbnRyb2wnO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzTmFtZXModGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnLWl0ZW0tY29udHJvbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2hhcy1mZWVkYmFjayc6IHByb3BzLmhhc0ZlZWRiYWNrIHx8IHZhbGlkYXRlU3RhdHVzID09PSAndmFsaWRhdGluZycsXG4gICAgICAgICAgICAgICAgICAgICdoYXMtc3VjY2Vzcyc6IHZhbGlkYXRlU3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICdoYXMtd2FybmluZyc6IHZhbGlkYXRlU3RhdHVzID09PSAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICdoYXMtZXJyb3InOiB2YWxpZGF0ZVN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lzLXZhbGlkYXRpbmcnOiB2YWxpZGF0ZVN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NlcyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMucHJlZml4Q2xzICsgJy1pdGVtLWNoaWxkcmVuJyB9LFxuICAgICAgICAgICAgICAgICAgICBjMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYzIsXG4gICAgICAgICAgICAgICAgYzNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcldyYXBwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyV3JhcHBlcihjaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2wgPSBfcHJvcHMyLndyYXBwZXJDb2w7XG5cbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctaXRlbS1jb250cm9sLXdyYXBwZXInLCB3cmFwcGVyQ29sICYmIHdyYXBwZXJDb2wuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIENvbCxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgd3JhcHBlckNvbCwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwga2V5OiAnd3JhcHBlcicgfSksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUmVxdWlyZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSZXF1aXJlZCgpIHtcbiAgICAgICAgICAgIHZhciByZXF1aXJlZCA9IHRoaXMucHJvcHMucmVxdWlyZWQ7XG5cbiAgICAgICAgICAgIGlmIChyZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T25seUNvbnRyb2woKSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gdGhpcy5nZXRNZXRhKCkgfHwge307XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRlID0gbWV0YS52YWxpZGF0ZSB8fCBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWl0ZW0ucnVsZXM7XG4gICAgICAgICAgICAgICAgfSkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ydWxlcy5zb21lKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5yZXF1aXJlZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckxhYmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGxhYmVsID0gX3Byb3BzMy5sYWJlbCxcbiAgICAgICAgICAgICAgICBsYWJlbENvbCA9IF9wcm9wczMubGFiZWxDb2wsXG4gICAgICAgICAgICAgICAgY29sb24gPSBfcHJvcHMzLmNvbG9uLFxuICAgICAgICAgICAgICAgIGlkID0gX3Byb3BzMy5pZDtcblxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgICAgICB2YXIgcmVxdWlyZWQgPSB0aGlzLmlzUmVxdWlyZWQoKTtcbiAgICAgICAgICAgIHZhciBsYWJlbENvbENsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1pdGVtLWxhYmVsJywgbGFiZWxDb2wgJiYgbGFiZWxDb2wuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHZhciBsYWJlbENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLWl0ZW0tcmVxdWlyZWQnLCByZXF1aXJlZCkpO1xuICAgICAgICAgICAgdmFyIGxhYmVsQ2hpbGRyZW4gPSBsYWJlbDtcbiAgICAgICAgICAgIC8vIEtlZXAgbGFiZWwgaXMgb3JpZ2luYWwgd2hlcmUgdGhlcmUgc2hvdWxkIGhhdmUgbm8gY29sb25cbiAgICAgICAgICAgIHZhciBoYXZlQ29sb24gPSBjb2xvbiAmJiAhY29udGV4dC52ZXJ0aWNhbDtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVkIHVzZXIgaW5wdXQgY29sb25cbiAgICAgICAgICAgIGlmIChoYXZlQ29sb24gJiYgdHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyAmJiBsYWJlbC50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxDaGlsZHJlbiA9IGxhYmVsLnJlcGxhY2UoL1vvvJp8Ol1cXHMqJC8sICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsYWJlbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBsYWJlbENvbCwgeyBjbGFzc05hbWU6IGxhYmVsQ29sQ2xhc3NOYW1lLCBrZXk6ICdsYWJlbCcgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sRm9yOiBpZCB8fCB0aGlzLmdldElkKCksIGNsYXNzTmFtZTogbGFiZWxDbGFzc05hbWUsIHRpdGxlOiB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnID8gbGFiZWwgOiAnJywgb25DbGljazogdGhpcy5vbkxhYmVsQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDaGlsZHJlblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJDaGlsZHJlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5yZW5kZXJMYWJlbCgpLCB0aGlzLnJlbmRlcldyYXBwZXIodGhpcy5yZW5kZXJWYWxpZGF0ZVdyYXBwZXIoY2hpbGRyZW4sIHRoaXMucmVuZGVySGVscCgpLCB0aGlzLnJlbmRlckV4dHJhKCkpKV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckZvcm1JdGVtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1JdGVtKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgX2l0ZW1DbGFzc05hbWU7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGU7XG4gICAgICAgICAgICB2YXIgaXRlbUNsYXNzTmFtZSA9IChfaXRlbUNsYXNzTmFtZSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2l0ZW1DbGFzc05hbWUsIHByZWZpeENscyArICctaXRlbScsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2l0ZW1DbGFzc05hbWUsIHByZWZpeENscyArICctaXRlbS13aXRoLWhlbHAnLCAhIXRoaXMuZ2V0SGVscE1zZygpIHx8IHRoaXMuc3RhdGUuaGVscFNob3cpLCBfZGVmaW5lUHJvcGVydHkoX2l0ZW1DbGFzc05hbWUsIHByZWZpeENscyArICctaXRlbS1uby1jb2xvbicsICFwcm9wcy5jb2xvbiksIF9kZWZpbmVQcm9wZXJ0eShfaXRlbUNsYXNzTmFtZSwgJycgKyBwcm9wcy5jbGFzc05hbWUsICEhcHJvcHMuY2xhc3NOYW1lKSwgX2l0ZW1DbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUm93LFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGl0ZW1DbGFzc05hbWUpLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1JdGVtKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb3JtSXRlbTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUl0ZW07XG5cbkZvcm1JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYXNGZWVkYmFjazogZmFsc2UsXG4gICAgcHJlZml4Q2xzOiAnYW50LWZvcm0nLFxuICAgIGNvbG9uOiB0cnVlXG59O1xuRm9ybUl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICBsYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICB2YWxpZGF0ZVN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFsnJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvcicsICd2YWxpZGF0aW5nJ10pLFxuICAgIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3cmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29sb246IFByb3BUeXBlcy5ib29sXG59O1xuRm9ybUl0ZW0uY29udGV4dFR5cGVzID0ge1xuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJleHBvcnQgdmFyIEZJRUxEX01FVEFfUFJPUCA9ICdkYXRhLV9fbWV0YSc7XG5leHBvcnQgdmFyIEZJRUxEX0RBVEFfUFJPUCA9ICdkYXRhLV9fZmllbGQnOyIsImltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2dyaWQvc3R5bGUvY3NzJzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgc3RyaW5nT3JOdW1iZXIgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSk7XG52YXIgb2JqZWN0T3JOdW1iZXIgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMubnVtYmVyXSk7XG5cbnZhciBDb2wgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb2wsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29sKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb2wsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgIHZhciBzcGFuID0gcHJvcHMuc3BhbixcbiAgICAgICAgICAgICAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldCxcbiAgICAgICAgICAgICAgICBwdXNoID0gcHJvcHMucHVzaCxcbiAgICAgICAgICAgICAgICBwdWxsID0gcHJvcHMucHVsbCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtY29sJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJzcGFuXCIsIFwib3JkZXJcIiwgXCJvZmZzZXRcIiwgXCJwdXNoXCIsIFwicHVsbFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwicHJlZml4Q2xzXCJdKTtcblxuICAgICAgICAgICAgdmFyIHNpemVDbGFzc09iaiA9IHt9O1xuICAgICAgICAgICAgWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXS5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICAgICAgICAgIHZhciBzaXplUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzW3NpemVdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBzaXplUHJvcHMuc3BhbiA9IHByb3BzW3NpemVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwcm9wc1tzaXplXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemVQcm9wcyA9IHByb3BzW3NpemVdIHx8IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXJzW3NpemVdO1xuICAgICAgICAgICAgICAgIHNpemVDbGFzc09iaiA9IF9leHRlbmRzKHt9LCBzaXplQ2xhc3NPYmosIChfZXh0ZW5kczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSArICctJyArIHNpemVQcm9wcy5zcGFuLCBzaXplUHJvcHMuc3BhbiAhPT0gdW5kZWZpbmVkKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSArICctb3JkZXItJyArIHNpemVQcm9wcy5vcmRlciwgc2l6ZVByb3BzLm9yZGVyIHx8IHNpemVQcm9wcy5vcmRlciA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIHByZWZpeENscyArICctJyArIHNpemUgKyAnLW9mZnNldC0nICsgc2l6ZVByb3BzLm9mZnNldCwgc2l6ZVByb3BzLm9mZnNldCB8fCBzaXplUHJvcHMub2Zmc2V0ID09PSAwKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSArICctcHVzaC0nICsgc2l6ZVByb3BzLnB1c2gsIHNpemVQcm9wcy5wdXNoIHx8IHNpemVQcm9wcy5wdXNoID09PSAwKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSArICctcHVsbC0nICsgc2l6ZVByb3BzLnB1bGwsIHNpemVQcm9wcy5wdWxsIHx8IHNpemVQcm9wcy5wdWxsID09PSAwKSwgX2V4dGVuZHMyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzcGFuLCBzcGFuICE9PSB1bmRlZmluZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctb3JkZXItJyArIG9yZGVyLCBvcmRlciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1vZmZzZXQtJyArIG9mZnNldCwgb2Zmc2V0KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXB1c2gtJyArIHB1c2gsIHB1c2gpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctcHVsbC0nICsgcHVsbCwgcHVsbCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lLCBzaXplQ2xhc3NPYmopO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIG90aGVycywgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG5cbkNvbC5wcm9wVHlwZXMgPSB7XG4gICAgc3Bhbjogc3RyaW5nT3JOdW1iZXIsXG4gICAgb3JkZXI6IHN0cmluZ09yTnVtYmVyLFxuICAgIG9mZnNldDogc3RyaW5nT3JOdW1iZXIsXG4gICAgcHVzaDogc3RyaW5nT3JOdW1iZXIsXG4gICAgcHVsbDogc3RyaW5nT3JOdW1iZXIsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICB4czogb2JqZWN0T3JOdW1iZXIsXG4gICAgc206IG9iamVjdE9yTnVtYmVyLFxuICAgIG1kOiBvYmplY3RPck51bWJlcixcbiAgICBsZzogb2JqZWN0T3JOdW1iZXIsXG4gICAgeGw6IG9iamVjdE9yTnVtYmVyLFxuICAgIHh4bDogb2JqZWN0T3JOdW1iZXJcbn07IiwiaW1wb3J0IFJvdyBmcm9tICcuL3Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJy4vY29sJztcbmV4cG9ydCB7IFJvdywgQ29sIH07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuLy8gbWF0Y2hNZWRpYSBwb2x5ZmlsbCBmb3Jcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XaWNreU5pbGxpYW1zL2VucXVpcmUuanMvaXNzdWVzLzgyXG52YXIgZW5xdWlyZSA9IHZvaWQgMDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBtYXRjaE1lZGlhUG9seWZpbGwgPSBmdW5jdGlvbiBtYXRjaE1lZGlhUG9seWZpbGwobWVkaWFRdWVyeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVkaWE6IG1lZGlhUXVlcnksXG4gICAgICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpIHt9LFxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge31cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgbWF0Y2hNZWRpYVBvbHlmaWxsO1xuICAgIGVucXVpcmUgPSByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG59XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xudmFyIHJlc3BvbnNpdmVBcnJheSA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG52YXIgcmVzcG9uc2l2ZU1hcCA9IHtcbiAgICB4czogJyhtYXgtd2lkdGg6IDU3NXB4KScsXG4gICAgc206ICcobWluLXdpZHRoOiA1NzZweCknLFxuICAgIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgICBsZzogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gICAgeGw6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcblxudmFyIFJvdyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJvdywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSb3coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSb3cuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb3cpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNjcmVlbnM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUm93LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnF1aXJlLnJlZ2lzdGVyKHJlc3BvbnNpdmVNYXBbc2NyZWVuXSwge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZihfdGhpczIucHJvcHMuZ3V0dGVyKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbnM6IF9leHRlbmRzKHt9LCBwcmV2U3RhdGUuc2NyZWVucywgX2RlZmluZVByb3BlcnR5KHt9LCBzY3JlZW4sIHRydWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gdW5tYXRjaCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdHlwZW9mKF90aGlzMi5wcm9wcy5ndXR0ZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuczogX2V4dGVuZHMoe30sIHByZXZTdGF0ZS5zY3JlZW5zLCBfZGVmaW5lUHJvcGVydHkoe30sIHNjcmVlbiwgZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCBhIGVtcHR5IGRlc3RvcnkgdG8gYXZvaWQgdHJpZ2dlcmluZyB1bm1hdGNoIHdoZW4gdW5yZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcChmdW5jdGlvbiAoc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVucXVpcmUudW5yZWdpc3RlcihyZXNwb25zaXZlTWFwW3NjcmVlbl0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEd1dHRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRHdXR0ZXIoKSB7XG4gICAgICAgICAgICB2YXIgZ3V0dGVyID0gdGhpcy5wcm9wcy5ndXR0ZXI7XG5cbiAgICAgICAgICAgIGlmICgodHlwZW9mIGd1dHRlciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZ3V0dGVyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcmVzcG9uc2l2ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBicmVha3BvaW50ID0gcmVzcG9uc2l2ZUFycmF5W2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zY3JlZW5zW2JyZWFrcG9pbnRdICYmIGd1dHRlclticmVha3BvaW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3V0dGVyW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGd1dHRlcjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5ID0gX2EuanVzdGlmeSxcbiAgICAgICAgICAgICAgICBhbGlnbiA9IF9hLmFsaWduLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF9hLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgX2EkcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1yb3cnIDogX2EkcHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1widHlwZVwiLCBcImp1c3RpZnlcIiwgXCJhbGlnblwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJwcmVmaXhDbHNcIl0pO1xuICAgICAgICAgICAgdmFyIGd1dHRlciA9IHRoaXMuZ2V0R3V0dGVyKCk7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCAhdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgdHlwZSwgdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgdHlwZSArICctJyArIGp1c3RpZnksIHR5cGUgJiYganVzdGlmeSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgdHlwZSArICctJyArIGFsaWduLCB0eXBlICYmIGFsaWduKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgdmFyIHJvd1N0eWxlID0gZ3V0dGVyID4gMCA/IF9leHRlbmRzKHsgbWFyZ2luTGVmdDogZ3V0dGVyIC8gLTIsIG1hcmdpblJpZ2h0OiBndXR0ZXIgLyAtMiB9LCBzdHlsZSkgOiBzdHlsZTtcbiAgICAgICAgICAgIHZhciBjb2xzID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb2wucHJvcHMgJiYgZ3V0dGVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNvbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHsgcGFkZGluZ0xlZnQ6IGd1dHRlciAvIDIsIHBhZGRpbmdSaWdodDogZ3V0dGVyIC8gMiB9LCBjb2wucHJvcHMuc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3RoZXJQcm9wcyA9IF9leHRlbmRzKHt9LCBvdGhlcnMpO1xuICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuZ3V0dGVyO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCBzdHlsZTogcm93U3R5bGUgfSksXG4gICAgICAgICAgICAgICAgY29sc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3c7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcblxuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBndXR0ZXI6IDBcbn07XG5Sb3cucHJvcFR5cGVzID0ge1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAganVzdGlmeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGd1dHRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xufTsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtaW5wdXQtZ3JvdXAnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxnJywgcHJvcHMuc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zbScsIHByb3BzLnNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctY29tcGFjdCcsIHByb3BzLmNvbXBhY3QpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNscywgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHcm91cDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuZnVuY3Rpb24gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIElucHV0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXIgPSBfdGhpcyRwcm9wcy5vblByZXNzRW50ZXIsXG4gICAgICAgICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHMub25LZXlEb3duO1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBvblByZXNzRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgICAgICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMuaW5wdXQgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldElucHV0Q2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Q2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfcHJvcHMuc2l6ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNtJywgc2l6ZSA9PT0gJ3NtYWxsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1sZycsIHNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckxhYmVsZWRJbnB1dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbGVkSW5wdXQoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lczM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAvLyBOb3Qgd3JhcCB3aGVuIHRoZXJlIGlzIG5vdCBhZGRvbnNcbiAgICAgICAgICAgIGlmICghcHJvcHMuYWRkb25CZWZvcmUgJiYgIXByb3BzLmFkZG9uQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9IHByb3BzLnByZWZpeENscyArICctZ3JvdXAnO1xuICAgICAgICAgICAgdmFyIGFkZG9uQ2xhc3NOYW1lID0gd3JhcHBlckNsYXNzTmFtZSArICctYWRkb24nO1xuICAgICAgICAgICAgdmFyIGFkZG9uQmVmb3JlID0gcHJvcHMuYWRkb25CZWZvcmUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogYWRkb25DbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5hZGRvbkJlZm9yZVxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgYWRkb25BZnRlciA9IHByb3BzLmFkZG9uQWZ0ZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogYWRkb25DbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5hZGRvbkFmdGVyXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHByb3BzLnByZWZpeENscyArICctd3JhcHBlcicsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgd3JhcHBlckNsYXNzTmFtZSwgYWRkb25CZWZvcmUgfHwgYWRkb25BZnRlcikpO1xuICAgICAgICAgICAgdmFyIGdyb3VwQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcm9wcy5wcmVmaXhDbHMgKyAnLWdyb3VwLXdyYXBwZXInLCAoX2NsYXNzTmFtZXMzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczMsIHByb3BzLnByZWZpeENscyArICctZ3JvdXAtd3JhcHBlci1zbScsIHByb3BzLnNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMzLCBwcm9wcy5wcmVmaXhDbHMgKyAnLWdyb3VwLXdyYXBwZXItbGcnLCBwcm9wcy5zaXplID09PSAnbGFyZ2UnKSwgX2NsYXNzTmFtZXMzKSk7XG4gICAgICAgICAgICAvLyBOZWVkIGFub3RoZXIgd3JhcHBlciBmb3IgY2hhbmdpbmcgZGlzcGxheTp0YWJsZSB0byBkaXNwbGF5OmlubGluZS1ibG9ja1xuICAgICAgICAgICAgLy8gYW5kIHB1dCBzdHlsZSBwcm9wIGluIHdyYXBwZXJcbiAgICAgICAgICAgIGlmIChhZGRvbkJlZm9yZSB8fCBhZGRvbkFmdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGdyb3VwQ2xhc3NOYW1lLCBzdHlsZTogcHJvcHMuc3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7IHN0eWxlOiBudWxsIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgYWRkb25CZWZvcmUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgYWRkb25BZnRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTGFiZWxlZEljb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGFiZWxlZEljb24oY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lczQ7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgIGlmICghKCdwcmVmaXgnIGluIHByb3BzIHx8ICdzdWZmaXgnIGluIHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBwcm9wcy5wcmVmaXggPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1wcmVmaXgnIH0sXG4gICAgICAgICAgICAgICAgcHJvcHMucHJlZml4XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBwcm9wcy5zdWZmaXggPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1zdWZmaXgnIH0sXG4gICAgICAgICAgICAgICAgcHJvcHMuc3VmZml4XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBhZmZpeFdyYXBwZXJDbHMgPSBjbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZSwgcHJvcHMucHJlZml4Q2xzICsgJy1hZmZpeC13cmFwcGVyJywgKF9jbGFzc05hbWVzNCA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXM0LCBwcm9wcy5wcmVmaXhDbHMgKyAnLWFmZml4LXdyYXBwZXItc20nLCBwcm9wcy5zaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNCwgcHJvcHMucHJlZml4Q2xzICsgJy1hZmZpeC13cmFwcGVyLWxnJywgcHJvcHMuc2l6ZSA9PT0gJ2xhcmdlJyksIF9jbGFzc05hbWVzNCkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBhZmZpeFdyYXBwZXJDbHMsIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgICAgICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgc3R5bGU6IG51bGwsIGNsYXNzTmFtZTogdGhpcy5nZXRJbnB1dENsYXNzTmFtZSgpIH0pLFxuICAgICAgICAgICAgICAgIHN1ZmZpeFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVySW5wdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfcHJvcHMyLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lO1xuICAgICAgICAgICAgLy8gRml4IGh0dHBzOi8vZmIubWUvcmVhY3QtdW5rbm93bi1wcm9wXG5cbiAgICAgICAgICAgIHZhciBvdGhlclByb3BzID0gb21pdCh0aGlzLnByb3BzLCBbJ3ByZWZpeENscycsICdvblByZXNzRW50ZXInLCAnYWRkb25CZWZvcmUnLCAnYWRkb25BZnRlcicsICdwcmVmaXgnLCAnc3VmZml4J10pO1xuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMudmFsdWUgPSBmaXhDb250cm9sbGVkVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIElucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkLFxuICAgICAgICAgICAgICAgIC8vIHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgYm90aC5cbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXJQcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMYWJlbGVkSWNvbihSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyh0aGlzLmdldElucHV0Q2xhc3NOYW1lKCksIGNsYXNzTmFtZSksIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCByZWY6IHRoaXMuc2F2ZUlucHV0IH0pKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMYWJlbGVkSW5wdXQodGhpcy5yZW5kZXJJbnB1dCgpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtaW5wdXQnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBkaXNhYmxlZDogZmFsc2Vcbn07XG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ2RlZmF1bHQnLCAnbGFyZ2UnXSksXG4gICAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWRkb25CZWZvcmU6IFByb3BUeXBlcy5ub2RlLFxuICAgIGFkZG9uQWZ0ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRvc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuICAgIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGVcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5cbnZhciBTZWFyY2ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTZWFyY2gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2VhcmNoKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VhcmNoKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2VhcmNoLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VhcmNoKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMub25TZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb25TZWFyY2ggPSBfdGhpcy5wcm9wcy5vblNlYXJjaDtcblxuICAgICAgICAgICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgb25TZWFyY2goX3RoaXMuaW5wdXQuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLmlucHV0ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTZWFyY2gsIFt7XG4gICAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QnV0dG9uT3JJY29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ1dHRvbk9ySWNvbigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uID0gX3Byb3BzLmVudGVyQnV0dG9uLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplO1xuXG4gICAgICAgICAgICBpZiAoIWVudGVyQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaWNvbicsIHR5cGU6ICdzZWFyY2gnLCBrZXk6ICdzZWFyY2hJY29uJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbnRlckJ1dHRvbkFzRWxlbWVudCA9IGVudGVyQnV0dG9uO1xuICAgICAgICAgICAgaWYgKGVudGVyQnV0dG9uQXNFbGVtZW50LnR5cGUgPT09IEJ1dHRvbiB8fCBlbnRlckJ1dHRvbkFzRWxlbWVudC50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZW50ZXJCdXR0b25Bc0VsZW1lbnQsIGVudGVyQnV0dG9uQXNFbGVtZW50LnR5cGUgPT09IEJ1dHRvbiA/IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25TZWFyY2hcbiAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uU2VhcmNoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctYnV0dG9uJywgdHlwZTogJ3ByaW1hcnknLCBzaXplOiBzaXplLCBvbkNsaWNrOiB0aGlzLm9uU2VhcmNoLCBrZXk6ICdlbnRlckJ1dHRvbicgfSxcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvbiA9PT0gdHJ1ZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnc2VhcmNoJyB9KSA6IGVudGVyQnV0dG9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgaW5wdXRQcmVmaXhDbHMgPSBfYS5pbnB1dFByZWZpeENscyxcbiAgICAgICAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBfYS5zdWZmaXgsXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b24gPSBfYS5lbnRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImlucHV0UHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcInN1ZmZpeFwiLCBcImVudGVyQnV0dG9uXCJdKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvdGhlcnMub25TZWFyY2g7XG4gICAgICAgICAgICB2YXIgYnV0dG9uT3JJY29uID0gdGhpcy5nZXRCdXR0b25Pckljb24oKTtcbiAgICAgICAgICAgIHZhciBzZWFyY2hTdWZmaXggPSBzdWZmaXggPyBbc3VmZml4LCBidXR0b25Pckljb25dIDogYnV0dG9uT3JJY29uO1xuICAgICAgICAgICAgdmFyIGlucHV0Q2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1lbnRlci1idXR0b24nLCAhIWVudGVyQnV0dG9uKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplLCAhIXNpemUpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHsgb25QcmVzc0VudGVyOiB0aGlzLm9uU2VhcmNoIH0sIG90aGVycywgeyBzaXplOiBzaXplLCBjbGFzc05hbWU6IGlucHV0Q2xhc3NOYW1lLCBwcmVmaXhDbHM6IGlucHV0UHJlZml4Q2xzLCBzdWZmaXg6IHNlYXJjaFN1ZmZpeCwgcmVmOiB0aGlzLnNhdmVJbnB1dCB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2VhcmNoO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblNlYXJjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaW5wdXRQcmVmaXhDbHM6ICdhbnQtaW5wdXQnLFxuICAgIHByZWZpeENsczogJ2FudC1pbnB1dC1zZWFyY2gnLFxuICAgIGVudGVyQnV0dG9uOiBmYWxzZVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY2FsY3VsYXRlTm9kZUhlaWdodCBmcm9tICcuL2NhbGN1bGF0ZU5vZGVIZWlnaHQnO1xuZnVuY3Rpb24gb25OZXh0RnJhbWUoY2IpIHtcbiAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYiwgMSk7XG59XG5mdW5jdGlvbiBjbGVhck5leHRGcmFtZUFjdGlvbihuZXh0RnJhbWVJZCkge1xuICAgIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5leHRGcmFtZUlkKTtcbiAgICB9XG59XG5cbnZhciBUZXh0QXJlYSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRleHRBcmVhLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRleHRBcmVhKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEFyZWEpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXh0QXJlYS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRleHRBcmVhKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXh0YXJlYVN0eWxlczoge31cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzaXplVGV4dGFyZWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXV0b3NpemUgPSBfdGhpcy5wcm9wcy5hdXRvc2l6ZTtcblxuICAgICAgICAgICAgaWYgKCFhdXRvc2l6ZSB8fCAhX3RoaXMudGV4dEFyZWFSZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWluUm93cyA9IGF1dG9zaXplID8gYXV0b3NpemUubWluUm93cyA6IG51bGw7XG4gICAgICAgICAgICB2YXIgbWF4Um93cyA9IGF1dG9zaXplID8gYXV0b3NpemUubWF4Um93cyA6IG51bGw7XG4gICAgICAgICAgICB2YXIgdGV4dGFyZWFTdHlsZXMgPSBjYWxjdWxhdGVOb2RlSGVpZ2h0KF90aGlzLnRleHRBcmVhUmVmLCBmYWxzZSwgbWluUm93cywgbWF4Um93cyk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRleHRhcmVhU3R5bGVzOiB0ZXh0YXJlYVN0eWxlcyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlVGV4dGFyZWFDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNpemVUZXh0YXJlYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlciA9IF90aGlzJHByb3BzLm9uUHJlc3NFbnRlcixcbiAgICAgICAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wcy5vbktleURvd247XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG9uUHJlc3NFbnRlcikge1xuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbktleURvd24pIHtcbiAgICAgICAgICAgICAgICBvbktleURvd24oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVUZXh0QXJlYVJlZiA9IGZ1bmN0aW9uICh0ZXh0QXJlYSkge1xuICAgICAgICAgICAgX3RoaXMudGV4dEFyZWFSZWYgPSB0ZXh0QXJlYTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUZXh0QXJlYSwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIC8vIFJlLXJlbmRlciB3aXRoIHRoZSBuZXcgY29udGVudCB0aGVuIHJlY2FsY3VsYXRlIHRoZSBoZWlnaHQgYXMgcmVxdWlyZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dEZyYW1lQWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJOZXh0RnJhbWVBY3Rpb24odGhpcy5uZXh0RnJhbWVBY3Rpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lQWN0aW9uSWQgPSBvbk5leHRGcmFtZSh0aGlzLnJlc2l6ZVRleHRhcmVhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhUmVmLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2JsdXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWFSZWYuYmx1cigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUZXh0QXJlYUNsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZXh0QXJlYUNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIG90aGVyUHJvcHMgPSBvbWl0KHByb3BzLCBbJ3ByZWZpeENscycsICdvblByZXNzRW50ZXInLCAnYXV0b3NpemUnXSk7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUudGV4dGFyZWFTdHlsZXMpO1xuICAgICAgICAgICAgLy8gRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY3NzZcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBpdCBjb3VsZCBiZSByZXNldCB3aGVuIHVzaW5nIGZvcm0uZ2V0RmllbGREZWNvcmF0b3JcbiAgICAgICAgICAgIGlmICgndmFsdWUnIGluIG90aGVyUHJvcHMpIHtcbiAgICAgICAgICAgICAgICBvdGhlclByb3BzLnZhbHVlID0gb3RoZXJQcm9wcy52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7IGNsYXNzTmFtZTogdGhpcy5nZXRUZXh0QXJlYUNsYXNzTmFtZSgpLCBzdHlsZTogc3R5bGUsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVUZXh0YXJlYUNoYW5nZSwgcmVmOiB0aGlzLnNhdmVUZXh0QXJlYVJlZiB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dEFyZWE7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LWlucHV0J1xufTsiLCIvLyBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvXG4vKipcbiAqIGNhbGN1bGF0ZU5vZGVIZWlnaHQodWlUZXh0Tm9kZSwgdXNlQ2FjaGUgPSBmYWxzZSlcbiAqL1xudmFyIEhJRERFTl9URVhUQVJFQV9TVFlMRSA9ICdcXG4gIG1pbi1oZWlnaHQ6MCAhaW1wb3J0YW50O1xcbiAgbWF4LWhlaWdodDpub25lICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6MCAhaW1wb3J0YW50O1xcbiAgdmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6LTEwMDAgIWltcG9ydGFudDtcXG4gIHRvcDowICFpbXBvcnRhbnQ7XFxuICByaWdodDowICFpbXBvcnRhbnRcXG4nO1xudmFyIFNJWklOR19TVFlMRSA9IFsnbGV0dGVyLXNwYWNpbmcnLCAnbGluZS1oZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnZm9udC1mYW1pbHknLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zaXplJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHQtdHJhbnNmb3JtJywgJ3dpZHRoJywgJ3RleHQtaW5kZW50JywgJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci13aWR0aCcsICdib3gtc2l6aW5nJ107XG52YXIgY29tcHV0ZWRTdHlsZUNhY2hlID0ge307XG52YXIgaGlkZGVuVGV4dGFyZWEgPSB2b2lkIDA7XG5mdW5jdGlvbiBjYWxjdWxhdGVOb2RlU3R5bGluZyhub2RlKSB7XG4gICAgdmFyIHVzZUNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgIHZhciBub2RlUmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgaWYgKHVzZUNhY2hlICYmIGNvbXB1dGVkU3R5bGVDYWNoZVtub2RlUmVmXSkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdO1xuICAgIH1cbiAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgYm94U2l6aW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy1tb3otYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy13ZWJraXQtYm94LXNpemluZycpO1xuICAgIHZhciBwYWRkaW5nU2l6ZSA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSkgKyBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpO1xuICAgIHZhciBib3JkZXJTaXplID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItYm90dG9tLXdpZHRoJykpICsgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLXdpZHRoJykpO1xuICAgIHZhciBzaXppbmdTdHlsZSA9IFNJWklOR19TVFlMRS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgKyAnOicgKyBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgIH0pLmpvaW4oJzsnKTtcbiAgICB2YXIgbm9kZUluZm8gPSB7XG4gICAgICAgIHNpemluZ1N0eWxlOiBzaXppbmdTdHlsZSxcbiAgICAgICAgcGFkZGluZ1NpemU6IHBhZGRpbmdTaXplLFxuICAgICAgICBib3JkZXJTaXplOiBib3JkZXJTaXplLFxuICAgICAgICBib3hTaXppbmc6IGJveFNpemluZ1xuICAgIH07XG4gICAgaWYgKHVzZUNhY2hlICYmIG5vZGVSZWYpIHtcbiAgICAgICAgY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdID0gbm9kZUluZm87XG4gICAgfVxuICAgIHJldHVybiBub2RlSW5mbztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVIZWlnaHQodWlUZXh0Tm9kZSkge1xuICAgIHZhciB1c2VDYWNoZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIG1pblJvd3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgdmFyIG1heFJvd3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgICBpZiAoIWhpZGRlblRleHRhcmVhKSB7XG4gICAgICAgIGhpZGRlblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5UZXh0YXJlYSk7XG4gICAgfVxuICAgIC8vIEZpeCB3cmFwPVwib2ZmXCIgaXNzdWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82NTc3XG4gICAgaWYgKHVpVGV4dE5vZGUuZ2V0QXR0cmlidXRlKCd3cmFwJykpIHtcbiAgICAgICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd3cmFwJywgdWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZGVuVGV4dGFyZWEucmVtb3ZlQXR0cmlidXRlKCd3cmFwJyk7XG4gICAgfVxuICAgIC8vIENvcHkgYWxsIENTUyBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBpblxuICAgIC8vIHRoZSB0ZXh0Ym94XG5cbiAgICB2YXIgX2NhbGN1bGF0ZU5vZGVTdHlsaW5nID0gY2FsY3VsYXRlTm9kZVN0eWxpbmcodWlUZXh0Tm9kZSwgdXNlQ2FjaGUpLFxuICAgICAgICBwYWRkaW5nU2l6ZSA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5wYWRkaW5nU2l6ZSxcbiAgICAgICAgYm9yZGVyU2l6ZSA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5ib3JkZXJTaXplLFxuICAgICAgICBib3hTaXppbmcgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuYm94U2l6aW5nLFxuICAgICAgICBzaXppbmdTdHlsZSA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5zaXppbmdTdHlsZTtcbiAgICAvLyBOZWVkIHRvIGhhdmUgdGhlIG92ZXJmbG93IGF0dHJpYnV0ZSB0byBoaWRlIHRoZSBzY3JvbGxiYXIgb3RoZXJ3aXNlXG4gICAgLy8gdGV4dC1saW5lcyB3aWxsIG5vdCBjYWxjdWxhdGVkIHByb3Blcmx5IGFzIHRoZSBzaGFkb3cgd2lsbCB0ZWNobmljYWxseSBiZVxuICAgIC8vIG5hcnJvd2VyIGZvciBjb250ZW50XG5cblxuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXppbmdTdHlsZSArICc7JyArIEhJRERFTl9URVhUQVJFQV9TVFlMRSk7XG4gICAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSB1aVRleHROb2RlLnZhbHVlIHx8IHVpVGV4dE5vZGUucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgdmFyIG1pbkhlaWdodCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuICAgIHZhciBtYXhIZWlnaHQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICB2YXIgaGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBvdmVyZmxvd1kgPSB2b2lkIDA7XG4gICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIC8vIGJvcmRlci1ib3g6IGFkZCBib3JkZXIsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCArIGJvcmRlclNpemU7XG4gICAgfSBlbHNlIGlmIChib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHBhZGRpbmcsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnRcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gICAgfVxuICAgIGlmIChtaW5Sb3dzICE9PSBudWxsIHx8IG1heFJvd3MgIT09IG51bGwpIHtcbiAgICAgICAgLy8gbWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuICAgICAgICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9ICcgJztcbiAgICAgICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHBhZGRpbmdTaXplO1xuICAgICAgICBpZiAobWluUm93cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWluSGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWluUm93cztcbiAgICAgICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgICAgIG1pbkhlaWdodCA9IG1pbkhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4Um93cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWF4Um93cztcbiAgICAgICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG92ZXJmbG93WSA9IGhlaWdodCA+IG1heEhlaWdodCA/ICcnIDogJ2hpZGRlbic7XG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBiYXIgZmxhc2ggd2hlbiBhdXRvc2l6ZSB3aXRob3V0IG1heFJvd3NcbiAgICBpZiAoIW1heFJvd3MpIHtcbiAgICAgICAgb3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgfVxuICAgIHJldHVybiB7IGhlaWdodDogaGVpZ2h0LCBtaW5IZWlnaHQ6IG1pbkhlaWdodCwgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsIG92ZXJmbG93WTogb3ZlcmZsb3dZIH07XG59IiwiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSc7XG5JbnB1dC5Hcm91cCA9IEdyb3VwO1xuSW5wdXQuU2VhcmNoID0gU2VhcmNoO1xuSW5wdXQuVGV4dEFyZWEgPSBUZXh0QXJlYTtcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2J1dHRvbi9zdHlsZS9jc3MnOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb2wgfSBmcm9tICcuLi9ncmlkJztcbmV4cG9ydCB2YXIgTWV0YSA9IGZ1bmN0aW9uIE1ldGEocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1saXN0JyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgYXZhdGFyID0gcHJvcHMuYXZhdGFyLFxuICAgICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImF2YXRhclwiLCBcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIl0pO1xuXG4gICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLWl0ZW0tbWV0YScsIGNsYXNzTmFtZSk7XG4gICAgdmFyIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1tZXRhLWNvbnRlbnQnIH0sXG4gICAgICAgIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDQnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1tZXRhLXRpdGxlJyB9LFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgZGVzY3JpcHRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1tZXRhLWRlc2NyaXB0aW9uJyB9LFxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgIGF2YXRhciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLW1ldGEtYXZhdGFyJyB9LFxuICAgICAgICAgICAgYXZhdGFyXG4gICAgICAgICksXG4gICAgICAgICh0aXRsZSB8fCBkZXNjcmlwdGlvbikgJiYgY29udGVudFxuICAgICk7XG59O1xuZnVuY3Rpb24gZ2V0R3JpZChncmlkLCB0KSB7XG4gICAgcmV0dXJuIGdyaWRbdF0gJiYgTWF0aC5mbG9vcigyNCAvIGdyaWRbdF0pO1xufVxudmFyIEdyaWRDb2x1bW5zID0gWycnLCAxLCAyLCAzLCA0LCA2LCA4LCAxMiwgMjRdO1xuXG52YXIgSXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gSXRlbSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSXRlbS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEl0ZW0pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSXRlbSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBncmlkID0gdGhpcy5jb250ZXh0LmdyaWQ7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIF9hJHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYSRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtbGlzdCcgOiBfYSRwcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gX2EuYWN0aW9ucyxcbiAgICAgICAgICAgICAgICBleHRyYSA9IF9hLmV4dHJhLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNoaWxkcmVuXCIsIFwiYWN0aW9uc1wiLCBcImV4dHJhXCIsIFwiY2xhc3NOYW1lXCJdKTtcbiAgICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1pdGVtJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHZhciBtZXRhQ29udGVudCA9IFtdO1xuICAgICAgICAgICAgdmFyIG90aGVyQ29udGVudCA9IFtdO1xuICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlID09PSBNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFDb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJDb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY29udGVudENsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLWl0ZW0tY29udGVudCcsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1pdGVtLWNvbnRlbnQtc2luZ2xlJywgbWV0YUNvbnRlbnQubGVuZ3RoIDwgMSkpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvdGhlckNvbnRlbnQubGVuZ3RoID4gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRlbnRDbGFzc1N0cmluZyB9LFxuICAgICAgICAgICAgICAgIG90aGVyQ29udGVudFxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgYWN0aW9uc0NvbnRlbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uc0NvbnRlbnRJdGVtID0gZnVuY3Rpb24gYWN0aW9uc0NvbnRlbnRJdGVtKGFjdGlvbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcHJlZml4Q2xzICsgJy1pdGVtLWFjdGlvbi0nICsgaSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAhPT0gYWN0aW9ucy5sZW5ndGggLSAxICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2VtJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1hY3Rpb24tc3BsaXQnIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhY3Rpb25zQ29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tYWN0aW9uJyB9LFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uc0NvbnRlbnRJdGVtKGFjdGlvbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBleHRyYUNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tZXh0cmEtd3JhcCcgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1tYWluJyB9LFxuICAgICAgICAgICAgICAgICAgICBtZXRhQ29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWV4dHJhJyB9LFxuICAgICAgICAgICAgICAgICAgICBleHRyYVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgbWFpbkNvbnRlbnQgPSBncmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBDb2wsXG4gICAgICAgICAgICAgICAgeyBzcGFuOiBnZXRHcmlkKGdyaWQsICdjb2x1bW4nKSwgeHM6IGdldEdyaWQoZ3JpZCwgJ3hzJyksIHNtOiBnZXRHcmlkKGdyaWQsICdzbScpLCBtZDogZ2V0R3JpZChncmlkLCAnbWQnKSwgbGc6IGdldEdyaWQoZ3JpZCwgJ2xnJyksIHhsOiBnZXRHcmlkKGdyaWQsICd4bCcpLCB4eGw6IGdldEdyaWQoZ3JpZCwgJ3h4bCcpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9KSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgJiYgZXh0cmFDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAhZXh0cmEgJiYgbWV0YUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICFleHRyYSAmJiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAhZXh0cmEgJiYgYWN0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgICAgICAgICAgZXh0cmEgJiYgZXh0cmFDb250ZW50LFxuICAgICAgICAgICAgICAgICFleHRyYSAmJiBtZXRhQ29udGVudCxcbiAgICAgICAgICAgICAgICAhZXh0cmEgJiYgY29udGVudCxcbiAgICAgICAgICAgICAgICAhZXh0cmEgJiYgYWN0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSXRlbTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcblxuSXRlbS5NZXRhID0gTWV0YTtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGNvbHVtbjogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICB4czogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICBzbTogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICBtZDogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICBsZzogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICB4bDogUHJvcFR5cGVzLm9uZU9mKEdyaWRDb2x1bW5zKSxcbiAgICB4eGw6IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucylcbn07XG5JdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgICBncmlkOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbmltcG9ydCBTcGluIGZyb20gJy4uL3NwaW4nO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9ncmlkJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMaXN0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExpc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMaXN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMua2V5cyA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXJJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlID0gX3RoaXMkcHJvcHMuZGF0YVNvdXJjZSxcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtID0gX3RoaXMkcHJvcHMucmVuZGVySXRlbSxcbiAgICAgICAgICAgICAgICByb3dLZXkgPSBfdGhpcyRwcm9wcy5yb3dLZXk7XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvd0tleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGtleSA9IHJvd0tleShkYXRhU291cmNlW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gZGF0YVNvdXJjZVtyb3dLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBkYXRhU291cmNlLmtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAga2V5ID0gJ2xpc3QtaXRlbS0nICsgaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5rZXlzW2luZGV4XSA9IGtleTtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyRW1wdHkgPSBmdW5jdGlvbiAoY29udGV4dExvY2FsZSkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IF9leHRlbmRzKHt9LCBjb250ZXh0TG9jYWxlLCBfdGhpcy5wcm9wcy5sb2NhbGUpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IF90aGlzLnByb3BzLnByZWZpeENscyArICctZW1wdHktdGV4dCcgfSxcbiAgICAgICAgICAgICAgICBsb2NhbGUuZW1wdHlUZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMucHJvcHMuZ3JpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNTb21ldGhpbmdBZnRlckxhc3RJdGVtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGxvYWRNb3JlID0gX3Byb3BzLmxvYWRNb3JlLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24gPSBfcHJvcHMucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBfcHJvcHMuZm9vdGVyO1xuXG4gICAgICAgICAgICByZXR1cm4gISEobG9hZE1vcmUgfHwgcGFnaW5hdGlvbiB8fCBmb290ZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgICAgICAgICAgICBzcGxpdCA9IF9hLnNwbGl0LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQgPSBfYS5pdGVtTGF5b3V0LFxuICAgICAgICAgICAgICAgIGxvYWRNb3JlID0gX2EubG9hZE1vcmUsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbiA9IF9hLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGdyaWQgPSBfYS5ncmlkLFxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UgPSBfYS5kYXRhU291cmNlLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICAgIHJvd0tleSA9IF9hLnJvd0tleSxcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtID0gX2EucmVuZGVySXRlbSxcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBfYS5oZWFkZXIsXG4gICAgICAgICAgICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSBfYS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgIGxvY2FsZSA9IF9hLmxvY2FsZSxcbiAgICAgICAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJib3JkZXJlZFwiLCBcInNwbGl0XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtTGF5b3V0XCIsIFwibG9hZE1vcmVcIiwgXCJwYWdpbmF0aW9uXCIsIFwicHJlZml4Q2xzXCIsIFwiZ3JpZFwiLCBcImRhdGFTb3VyY2VcIiwgXCJzaXplXCIsIFwicm93S2V5XCIsIFwicmVuZGVySXRlbVwiLCBcImhlYWRlclwiLCBcImZvb3RlclwiLCBcImxvYWRpbmdcIiwgXCJsb2NhbGVcIl0pO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmdQcm9wID0gbG9hZGluZztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGluZ1Byb3AgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICBzcGlubmluZzogbG9hZGluZ1Byb3BcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlzTG9hZGluZyA9IGxvYWRpbmdQcm9wICYmIGxvYWRpbmdQcm9wLnNwaW5uaW5nO1xuICAgICAgICAgICAgLy8gbGFyZ2UgPT4gbGdcbiAgICAgICAgICAgIC8vIHNtYWxsID0+IHNtXG4gICAgICAgICAgICB2YXIgc2l6ZUNscyA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgICAgICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgICAgICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctdmVydGljYWwnLCBpdGVtTGF5b3V0ID09PSAndmVydGljYWwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplQ2xzLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNwbGl0Jywgc3BsaXQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctYm9yZGVyZWQnLCBib3JkZXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1sb2FkaW5nJywgaXNMb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWdyaWQnLCBncmlkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW0nLCB0aGlzLmlzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uQ29udGVudCA9IHBhZ2luYXRpb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXBhZ2luYXRpb24nIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0aW9uLCBwYWdpbmF0aW9uKVxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5Db250ZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgY2hpbGRyZW5Db250ZW50ID0gaXNMb2FkaW5nICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHsgbWluSGVpZ2h0OiA1MyB9IH0pO1xuICAgICAgICAgICAgaWYgKGRhdGFTb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IGRhdGFTb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbkxpc3QgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaXRlbXMsIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBfdGhpczIua2V5c1tpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5Db250ZW50ID0gZ3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJvdyxcbiAgICAgICAgICAgICAgICAgICAgeyBndXR0ZXI6IGdyaWQuZ3V0dGVyIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdFxuICAgICAgICAgICAgICAgICkgOiBjaGlsZHJlbkxpc3Q7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjaGlsZHJlbiAmJiAhaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5Db250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgICAgIHsgY29tcG9uZW50TmFtZTogJ1RhYmxlJywgZGVmYXVsdExvY2FsZTogZGVmYXVsdExvY2FsZS5UYWJsZSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVtcHR5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9LCByZXN0KSxcbiAgICAgICAgICAgICAgICBoZWFkZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhlYWRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBTcGluLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5Db250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZm9vdGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1mb290ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlclxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbG9hZE1vcmUgfHwgcGFnaW5hdGlvbkNvbnRlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGlzdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcblxuTGlzdC5JdGVtID0gSXRlbTtcbkxpc3QuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgZ3JpZDogUHJvcFR5cGVzLmFueVxufTtcbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGFTb3VyY2U6IFtdLFxuICAgIHByZWZpeENsczogJ2FudC1saXN0JyxcbiAgICBib3JkZXJlZDogZmFsc2UsXG4gICAgc3BsaXQ6IHRydWUsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgcGFnaW5hdGlvbjogZmFsc2Vcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vc3Bpbi9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9wYWdpbmF0aW9uL3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL2dyaWQvc3R5bGUvY3NzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBMb2NhbGVSZWNlaXZlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExvY2FsZVJlY2VpdmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIExvY2FsZVJlY2VpdmVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxlUmVjZWl2ZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTG9jYWxlUmVjZWl2ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMb2NhbGVSZWNlaXZlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2NhbGVSZWNlaXZlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3Byb3BzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0LmFudExvY2FsZTtcblxuICAgICAgICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gYW50TG9jYWxlICYmIGFudExvY2FsZVtjb21wb25lbnROYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdHlwZW9mIGRlZmF1bHRMb2NhbGUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0TG9jYWxlKCkgOiBkZWZhdWx0TG9jYWxlLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldExvY2FsZUNvZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlQ29kZSgpIHtcbiAgICAgICAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlO1xuXG4gICAgICAgICAgICB2YXIgbG9jYWxlQ29kZSA9IGFudExvY2FsZSAmJiBhbnRMb2NhbGUubG9jYWxlO1xuICAgICAgICAgICAgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuICAgICAgICAgICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VuLXVzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5nZXRMb2NhbGUoKSwgdGhpcy5nZXRMb2NhbGVDb2RlKCkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExvY2FsZVJlY2VpdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVSZWNlaXZlcjtcblxuTG9jYWxlUmVjZWl2ZXIuY29udGV4dFR5cGVzID0ge1xuICAgIGFudExvY2FsZTogUHJvcFR5cGVzLm9iamVjdFxufTsiLCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uL2VzL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBQYWdpbmF0aW9uOiBQYWdpbmF0aW9uLFxuICAgIERhdGVQaWNrZXI6IERhdGVQaWNrZXIsXG4gICAgVGltZVBpY2tlcjogVGltZVBpY2tlcixcbiAgICBDYWxlbmRhcjogQ2FsZW5kYXIsXG4gICAgVGFibGU6IHtcbiAgICAgICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXIgbWVudScsXG4gICAgICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgICAgIGZpbHRlclJlc2V0OiAnUmVzZXQnLFxuICAgICAgICBlbXB0eVRleHQ6ICdObyBkYXRhJyxcbiAgICAgICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnXG4gICAgfSxcbiAgICBNb2RhbDoge1xuICAgICAgICBva1RleHQ6ICdPSycsXG4gICAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgICAgICBqdXN0T2tUZXh0OiAnT0snXG4gICAgfSxcbiAgICBQb3Bjb25maXJtOiB7XG4gICAgICAgIG9rVGV4dDogJ09LJyxcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICB9LFxuICAgIFRyYW5zZmVyOiB7XG4gICAgICAgIHRpdGxlczogWycnLCAnJ10sXG4gICAgICAgIG5vdEZvdW5kQ29udGVudDogJ05vdCBGb3VuZCcsXG4gICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUnLFxuICAgICAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgICAgICBpdGVtc1VuaXQ6ICdpdGVtcydcbiAgICB9LFxuICAgIFNlbGVjdDoge1xuICAgICAgICBub3RGb3VuZENvbnRlbnQ6ICdOb3QgRm91bmQnXG4gICAgfSxcbiAgICBVcGxvYWQ6IHtcbiAgICAgICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nLi4uJyxcbiAgICAgICAgcmVtb3ZlRmlsZTogJ1JlbW92ZSBmaWxlJyxcbiAgICAgICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgICAgICBwcmV2aWV3RmlsZTogJ1ByZXZpZXcgZmlsZSdcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAncmMtbm90aWZpY2F0aW9uJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDM7XG52YXIgZGVmYXVsdFRvcCA9IHZvaWQgMDtcbnZhciBtZXNzYWdlSW5zdGFuY2UgPSB2b2lkIDA7XG52YXIga2V5ID0gMTtcbnZhciBwcmVmaXhDbHMgPSAnYW50LW1lc3NhZ2UnO1xudmFyIHRyYW5zaXRpb25OYW1lID0gJ21vdmUtdXAnO1xudmFyIGdldENvbnRhaW5lciA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdldE1lc3NhZ2VJbnN0YW5jZShjYWxsYmFjaykge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZUluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBOb3RpZmljYXRpb24ubmV3SW5zdGFuY2Uoe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgICAgICBzdHlsZTogeyB0b3A6IGRlZmF1bHRUb3AgfSxcbiAgICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXJcbiAgICB9LCBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZUluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm90aWNlKGNvbnRlbnQpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHREdXJhdGlvbjtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgb25DbG9zZSA9IGFyZ3VtZW50c1szXTtcblxuICAgIHZhciBpY29uVHlwZSA9IHtcbiAgICAgICAgaW5mbzogJ2luZm8tY2lyY2xlJyxcbiAgICAgICAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXG4gICAgICAgIGVycm9yOiAnY3Jvc3MtY2lyY2xlJyxcbiAgICAgICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gICAgICAgIGxvYWRpbmc6ICdsb2FkaW5nJ1xuICAgIH1bdHlwZV07XG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkNsb3NlID0gZHVyYXRpb247XG4gICAgICAgIGR1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0ga2V5Kys7XG4gICAgZ2V0TWVzc2FnZUluc3RhbmNlKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5ub3RpY2Uoe1xuICAgICAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBjb250ZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWN1c3RvbS1jb250ZW50ICcgKyBwcmVmaXhDbHMgKyAnLScgKyB0eXBlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6IGljb25UeXBlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgICAgICByZXR1cm4gbm90aWNlKGNvbnRlbnQsIGR1cmF0aW9uLCAnaW5mbycsIG9uQ2xvc2UpO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgICAgICByZXR1cm4gbm90aWNlKGNvbnRlbnQsIGR1cmF0aW9uLCAnc3VjY2VzcycsIG9uQ2xvc2UpO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgICAgIHJldHVybiBub3RpY2UoY29udGVudCwgZHVyYXRpb24sICdlcnJvcicsIG9uQ2xvc2UpO1xuICAgIH0sXG5cbiAgICAvLyBEZXBhcnRlZCB1c2FnZSwgcGxlYXNlIHVzZSB3YXJuaW5nKClcbiAgICB3YXJuOiBmdW5jdGlvbiB3YXJuKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgICAgIHJldHVybiBub3RpY2UoY29udGVudCwgZHVyYXRpb24sICd3YXJuaW5nJywgb25DbG9zZSk7XG4gICAgfSxcbiAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgICAgIHJldHVybiBub3RpY2UoY29udGVudCwgZHVyYXRpb24sICd3YXJuaW5nJywgb25DbG9zZSk7XG4gICAgfSxcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiBsb2FkaW5nKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgICAgIHJldHVybiBub3RpY2UoY29udGVudCwgZHVyYXRpb24sICdsb2FkaW5nJywgb25DbG9zZSk7XG4gICAgfSxcbiAgICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWZhdWx0VG9wID0gb3B0aW9ucy50b3A7XG4gICAgICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgZGVmYXVsdFRvcFxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlZmF1bHREdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmdldENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IG9wdGlvbnMudHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgdHJhbnNpdGlvbk5hbWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgICAgICAgbWVzc2FnZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuXG52YXIgQWN0aW9uQnV0dG9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEFjdGlvbkJ1dHRvbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uQnV0dG9uKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQWN0aW9uQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWN0aW9uQnV0dG9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhY3Rpb25GbiA9IF90aGlzJHByb3BzLmFjdGlvbkZuLFxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwgPSBfdGhpcyRwcm9wcy5jbG9zZU1vZGFsO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uRm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25Gbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uRm4oY2xvc2VNb2RhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uRm4oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIHJldC50aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyB1bm5lY2Vzc2FyeSB0byBzZXQgbG9hZGluZz1mYWxzZSwgZm9yIHRoZSBNb2RhbCB3aWxsIGJlIHVubW91bnRlZCBhZnRlciBjbG9zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzYxODNcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWN0aW9uQnV0dG9uLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkdGhpcy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB0eXBlID0gX3Byb3BzLnR5cGUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIHZhciBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgIHsgdHlwZTogdHlwZSwgb25DbGljazogdGhpcy5vbkNsaWNrLCBsb2FkaW5nOiBsb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQWN0aW9uQnV0dG9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JjLWRpYWxvZyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAncmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCB7IGdldENvbmZpcm1Mb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XG52YXIgbW91c2VQb3NpdGlvbiA9IHZvaWQgMDtcbnZhciBtb3VzZVBvc2l0aW9uRXZlbnRCaW5kZWQgPSB2b2lkIDA7XG5cbnZhciBNb2RhbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1vZGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvbkNhbmNlbCA9IF90aGlzLnByb3BzLm9uQ2FuY2VsO1xuICAgICAgICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgb25DYW5jZWwoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU9rID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvbk9rID0gX3RoaXMucHJvcHMub25PaztcbiAgICAgICAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgICAgICAgICAgb25PayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb2tUZXh0ID0gX3RoaXMkcHJvcHMub2tUZXh0LFxuICAgICAgICAgICAgICAgIG9rVHlwZSA9IF90aGlzJHByb3BzLm9rVHlwZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0ID0gX3RoaXMkcHJvcHMuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgICAgICBjb25maXJtTG9hZGluZyA9IF90aGlzJHByb3BzLmNvbmZpcm1Mb2FkaW5nO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDYW5jZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dCB8fCBsb2NhbGUuY2FuY2VsVGV4dFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IG9rVHlwZSwgbG9hZGluZzogY29uZmlybUxvYWRpbmcsIG9uQ2xpY2s6IF90aGlzLmhhbmRsZU9rIH0sXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dCB8fCBsb2NhbGUub2tUZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAobW91c2VQb3NpdGlvbkV2ZW50QmluZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Y+q5pyJ54K55Ye75LqL5Lu25pSv5oyB5LuO6byg5qCH5L2N572u5Yqo55S75bGV5byAXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyAxMDBtcyDlhoXlj5HnlJ/ov4fngrnlh7vkuovku7bvvIzliJnku47ngrnlh7vkvY3nva7liqjnlLvlsZXnpLpcbiAgICAgICAgICAgICAgICAvLyDlkKbliJnnm7TmjqUgem9vbSDlsZXnpLpcbiAgICAgICAgICAgICAgICAvLyDov5nmoLflj6/ku6XlhbzlrrnpnZ7ngrnlh7vmlrnlvI/lsZXlvIBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vdXNlUG9zaXRpb25FdmVudEJpbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBfcHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZTtcblxuICAgICAgICAgICAgdmFyIGRlZmF1bHRGb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExvY2FsZVJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50TmFtZTogJ01vZGFsJywgZGVmYXVsdExvY2FsZTogZ2V0Q29uZmlybUxvY2FsZSgpIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGb290ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGZvb3RlcjogZm9vdGVyID09PSB1bmRlZmluZWQgPyBkZWZhdWx0Rm9vdGVyIDogZm9vdGVyLCB2aXNpYmxlOiB2aXNpYmxlLCBtb3VzZVBvc2l0aW9uOiBtb3VzZVBvc2l0aW9uLCBvbkNsb3NlOiB0aGlzLmhhbmRsZUNhbmNlbCB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LW1vZGFsJyxcbiAgICB3aWR0aDogNTIwLFxuICAgIHRyYW5zaXRpb25OYW1lOiAnem9vbScsXG4gICAgbWFza1RyYW5zaXRpb25OYW1lOiAnZmFkZScsXG4gICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIG9rVHlwZTogJ3ByaW1hcnknXG59O1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb2tUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGNvbmZpcm1Mb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2xcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcblxudmFyIF90aGlzID0gdGhpcztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuL0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgeyBnZXRDb25maXJtTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xudmFyIElTX1JFQUNUXzE2ID0gISFSZWFjdERPTS5jcmVhdGVQb3J0YWw7XG52YXIgQ29uZmlybURpYWxvZyA9IGZ1bmN0aW9uIENvbmZpcm1EaWFsb2cocHJvcHMpIHtcbiAgICB2YXIgb25DYW5jZWwgPSBwcm9wcy5vbkNhbmNlbCxcbiAgICAgICAgb25PayA9IHByb3BzLm9uT2ssXG4gICAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgICAgYWZ0ZXJDbG9zZSA9IHByb3BzLmFmdGVyQ2xvc2UsXG4gICAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICBrZXlib2FyZCA9IHByb3BzLmtleWJvYXJkO1xuXG4gICAgdmFyIGljb25UeXBlID0gcHJvcHMuaWNvblR5cGUgfHwgJ3F1ZXN0aW9uLWNpcmNsZSc7XG4gICAgdmFyIG9rVHlwZSA9IHByb3BzLm9rVHlwZSB8fCAncHJpbWFyeSc7XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyB8fCAnYW50LWNvbmZpcm0nO1xuICAgIC8vIOm7mOiupOS4uiB0cnVl77yM5L+d5oyB5ZCR5LiL5YW85a65XG4gICAgdmFyIG9rQ2FuY2VsID0gJ29rQ2FuY2VsJyBpbiBwcm9wcyA/IHByb3BzLm9rQ2FuY2VsIDogdHJ1ZTtcbiAgICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aCB8fCA0MTY7XG4gICAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gICAgLy8g6buY6K6k5Li6IGZhbHNl77yM5L+d5oyB5pen54mI6buY6K6k6KGM5Li6XG4gICAgdmFyIG1hc2tDbG9zYWJsZSA9IHByb3BzLm1hc2tDbG9zYWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBwcm9wcy5tYXNrQ2xvc2FibGU7XG4gICAgdmFyIHJ1bnRpbWVMb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlKCk7XG4gICAgdmFyIG9rVGV4dCA9IHByb3BzLm9rVGV4dCB8fCAob2tDYW5jZWwgPyBydW50aW1lTG9jYWxlLm9rVGV4dCA6IHJ1bnRpbWVMb2NhbGUuanVzdE9rVGV4dCk7XG4gICAgdmFyIGNhbmNlbFRleHQgPSBwcm9wcy5jYW5jZWxUZXh0IHx8IHJ1bnRpbWVMb2NhbGUuY2FuY2VsVGV4dDtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscywgcHJlZml4Q2xzICsgJy0nICsgcHJvcHMudHlwZSwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gb2tDYW5jZWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQWN0aW9uQnV0dG9uLFxuICAgICAgICB7IGFjdGlvbkZuOiBvbkNhbmNlbCwgY2xvc2VNb2RhbDogY2xvc2UgfSxcbiAgICAgICAgY2FuY2VsVGV4dFxuICAgICk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIERpYWxvZyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLCBvbkNhbmNlbDogY2xvc2UuYmluZChfdGhpcywgeyB0cmlnZ2VyQ2FuY2VsOiB0cnVlIH0pLCB2aXNpYmxlOiB2aXNpYmxlLCB0aXRsZTogJycsIHRyYW5zaXRpb25OYW1lOiAnem9vbScsIGZvb3RlcjogJycsIG1hc2tUcmFuc2l0aW9uTmFtZTogJ2ZhZGUnLCBtYXNrQ2xvc2FibGU6IG1hc2tDbG9zYWJsZSwgc3R5bGU6IHN0eWxlLCB3aWR0aDogd2lkdGgsIHpJbmRleDogekluZGV4LCBhZnRlckNsb3NlOiBhZnRlckNsb3NlLCBrZXlib2FyZDoga2V5Ym9hcmQgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctYm9keS13cmFwcGVyJyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiBpY29uVHlwZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy50aXRsZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbnRlbnQnIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1idG5zJyB9LFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25CdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogb2tUeXBlLCBhY3Rpb25Gbjogb25PaywgY2xvc2VNb2RhbDogY2xvc2UsIGF1dG9Gb2N1czogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBva1RleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpcm0oY29uZmlnKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJlbmRlcihfZXh0ZW5kcyh7fSwgY29uZmlnLCB7IGNsb3NlOiBjbG9zZSwgdmlzaWJsZTogZmFsc2UsIGFmdGVyQ2xvc2U6IGRlc3Ryb3kuYmluZC5hcHBseShkZXN0cm95LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0cm95LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHVubW91bnRSZXN1bHQgPSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRpdik7XG4gICAgICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGRpdi5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmlnZ2VyQ2FuY2VsID0gYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzLnNvbWUoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW0gJiYgcGFyYW0udHJpZ2dlckNhbmNlbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb25maWcub25DYW5jZWwgJiYgdHJpZ2dlckNhbmNlbCkge1xuICAgICAgICAgICAgY29uZmlnLm9uQ2FuY2VsLmFwcGx5KGNvbmZpZywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1EaWFsb2csIHByb3BzKSwgZGl2KTtcbiAgICB9XG4gICAgcmVuZGVyKF9leHRlbmRzKHt9LCBjb25maWcsIHsgdmlzaWJsZTogdHJ1ZSwgY2xvc2U6IGNsb3NlIH0pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBjbG9zZVxuICAgIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBjb25maXJtIGZyb20gJy4vY29uZmlybSc7XG5Nb2RhbC5pbmZvID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHsgdHlwZTogJ2luZm8nLCBpY29uVHlwZTogJ2luZm8tY2lyY2xlJywgb2tDYW5jZWw6IGZhbHNlIH0sIHByb3BzKTtcbiAgICByZXR1cm4gY29uZmlybShjb25maWcpO1xufTtcbk1vZGFsLnN1Y2Nlc3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnc3VjY2VzcycsIGljb25UeXBlOiAnY2hlY2stY2lyY2xlJywgb2tDYW5jZWw6IGZhbHNlIH0sIHByb3BzKTtcbiAgICByZXR1cm4gY29uZmlybShjb25maWcpO1xufTtcbk1vZGFsLmVycm9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHsgdHlwZTogJ2Vycm9yJywgaWNvblR5cGU6ICdjcm9zcy1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwud2FybmluZyA9IE1vZGFsLndhcm4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnd2FybmluZycsIGljb25UeXBlOiAnZXhjbGFtYXRpb24tY2lyY2xlJywgb2tDYW5jZWw6IGZhbHNlIH0sIHByb3BzKTtcbiAgICByZXR1cm4gY29uZmlybShjb25maWcpO1xufTtcbk1vZGFsLmNvbmZpcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnY29uZmlybScsIG9rQ2FuY2VsOiB0cnVlIH0sIHByb3BzKTtcbiAgICByZXR1cm4gY29uZmlybShjb25maWcpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdCc7XG52YXIgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0TG9jYWxlLk1vZGFsKTtcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb25maXJtTG9jYWxlKG5ld0xvY2FsZSkge1xuICAgIGlmIChuZXdMb2NhbGUpIHtcbiAgICAgICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBydW50aW1lTG9jYWxlLCBuZXdMb2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdExvY2FsZS5Nb2RhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vYnV0dG9uL3N0eWxlL2Nzcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAncmMtbm90aWZpY2F0aW9uJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xudmFyIG5vdGlmaWNhdGlvbkluc3RhbmNlID0ge307XG52YXIgZGVmYXVsdER1cmF0aW9uID0gNC41O1xudmFyIGRlZmF1bHRUb3AgPSAyNDtcbnZhciBkZWZhdWx0Qm90dG9tID0gMjQ7XG52YXIgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BSaWdodCc7XG52YXIgZGVmYXVsdEdldENvbnRhaW5lciA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNldE5vdGlmaWNhdGlvbkNvbmZpZyhvcHRpb25zKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgcGxhY2VtZW50ID0gb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tLFxuICAgICAgICB0b3AgPSBvcHRpb25zLnRvcCxcbiAgICAgICAgZ2V0Q29udGFpbmVyID0gb3B0aW9ucy5nZXRDb250YWluZXI7XG5cbiAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWZhdWx0RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlZmF1bHRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuICAgIGlmIChib3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWZhdWx0Qm90dG9tID0gYm90dG9tO1xuICAgIH1cbiAgICBpZiAodG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVmYXVsdFRvcCA9IHRvcDtcbiAgICB9XG4gICAgaWYgKGdldENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlZmF1bHRHZXRDb250YWluZXIgPSBnZXRDb250YWluZXI7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50KSB7XG4gICAgdmFyIHN0eWxlID0gdm9pZCAwO1xuICAgIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IGRlZmF1bHRUb3AsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiBkZWZhdWx0VG9wLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBib3R0b206IGRlZmF1bHRCb3R0b21cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogZGVmYXVsdEJvdHRvbVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiBnZXROb3RpZmljYXRpb25JbnN0YW5jZShwcmVmaXhDbHMsIHBsYWNlbWVudCwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FjaGVLZXkgPSBwcmVmaXhDbHMgKyAnLScgKyBwbGFjZW1lbnQ7XG4gICAgaWYgKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkge1xuICAgICAgICBjYWxsYmFjayhub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbi5uZXdJbnN0YW5jZSh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctJyArIHBsYWNlbWVudCxcbiAgICAgICAgc3R5bGU6IGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCksXG4gICAgICAgIGdldENvbnRhaW5lcjogZGVmYXVsdEdldENvbnRhaW5lclxuICAgIH0sIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldID0gbm90aWZpY2F0aW9uO1xuICAgICAgICBjYWxsYmFjayhub3RpZmljYXRpb24pO1xuICAgIH0pO1xufVxudmFyIHR5cGVUb0ljb24gPSB7XG4gICAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZS1vJyxcbiAgICBpbmZvOiAnaW5mby1jaXJjbGUtbycsXG4gICAgZXJyb3I6ICdjcm9zcy1jaXJjbGUtbycsXG4gICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZS1vJ1xufTtcbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gICAgdmFyIG91dGVyUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgJ2FudC1ub3RpZmljYXRpb24nO1xuICAgIHZhciBwcmVmaXhDbHMgPSBvdXRlclByZWZpeENscyArICctbm90aWNlJztcbiAgICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RHVyYXRpb24gOiBhcmdzLmR1cmF0aW9uO1xuICAgIHZhciBpY29uTm9kZSA9IG51bGw7XG4gICAgaWYgKGFyZ3MuaWNvbikge1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pY29uJyB9LFxuICAgICAgICAgICAgYXJncy5pY29uXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChhcmdzLnR5cGUpIHtcbiAgICAgICAgdmFyIGljb25UeXBlID0gdHlwZVRvSWNvblthcmdzLnR5cGVdO1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaWNvbiAnICsgcHJlZml4Q2xzICsgJy1pY29uLScgKyBhcmdzLnR5cGUsIHR5cGU6IGljb25UeXBlIH0pO1xuICAgIH1cbiAgICB2YXIgYXV0b01hcmdpblRhZyA9ICFhcmdzLmRlc2NyaXB0aW9uICYmIGljb25Ob2RlID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1lc3NhZ2Utc2luZ2xlLWxpbmUtYXV0by1tYXJnaW4nIH0pIDogbnVsbDtcbiAgICBnZXROb3RpZmljYXRpb25JbnN0YW5jZShvdXRlclByZWZpeENscywgYXJncy5wbGFjZW1lbnQgfHwgZGVmYXVsdFBsYWNlbWVudCwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBub3RpZmljYXRpb24ubm90aWNlKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGljb25Ob2RlID8gcHJlZml4Q2xzICsgJy13aXRoLWljb24nIDogJycgfSxcbiAgICAgICAgICAgICAgICBpY29uTm9kZSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbWVzc2FnZScgfSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b01hcmdpblRhZyxcbiAgICAgICAgICAgICAgICAgICAgYXJncy5tZXNzYWdlXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZGVzY3JpcHRpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGFyZ3MuYnRuID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1idG4nIH0sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuYnRuXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xvc2U6IGFyZ3Mub25DbG9zZSxcbiAgICAgICAgICAgIGtleTogYXJncy5rZXksXG4gICAgICAgICAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYXJncy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgYXBpID0ge1xuICAgIG9wZW46IG5vdGljZSxcbiAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2Uoa2V5KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XS5yZW1vdmVOb3RpY2Uoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvbmZpZzogc2V0Tm90aWZpY2F0aW9uQ29uZmlnLFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIGFwaVt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiBhcGkub3BlbihfZXh0ZW5kcyh7fSwgYXJncywgeyB0eXBlOiB0eXBlIH0pKTtcbiAgICB9O1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zZWxlY3QnO1xuXG52YXIgTWluaVNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1pbmlTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTWluaVNlbGVjdCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTZWxlY3QpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTWluaVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1pbmlTZWxlY3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWluaVNlbGVjdCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoeyBzaXplOiAnc21hbGwnIH0sIHRoaXMucHJvcHMpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaW5pU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBNaW5pU2VsZWN0O1xuXG5NaW5pU2VsZWN0Lk9wdGlvbiA9IFNlbGVjdC5PcHRpb247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY1BhZ2luYXRpb24gZnJvbSAncmMtcGFnaW5hdGlvbic7XG5pbXBvcnQgZW5VUyBmcm9tICdyYy1wYWdpbmF0aW9uL2VzL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMb2NhbGVSZWNlaXZlciBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXInO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zZWxlY3QnO1xuaW1wb3J0IE1pbmlTZWxlY3QgZnJvbSAnLi9NaW5pU2VsZWN0JztcblxudmFyIFBhZ2luYXRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQYWdpbmF0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb24oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYWdpbmF0aW9uKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUGFnaW5hdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhZ2luYXRpb24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5yZW5kZXJQYWdpbmF0aW9uID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwic2l6ZVwiXSk7XG4gICAgICAgICAgICB2YXIgaXNTbWFsbCA9IHNpemUgPT09ICdzbWFsbCc7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSY1BhZ2luYXRpb24sIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgeyBtaW5pOiBpc1NtYWxsIH0pLCBzZWxlY3RDb21wb25lbnRDbGFzczogaXNTbWFsbCA/IE1pbmlTZWxlY3QgOiBTZWxlY3QsIGxvY2FsZTogbG9jYWxlIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYWdpbmF0aW9uLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnROYW1lOiAnUGFnaW5hdGlvbicsIGRlZmF1bHRMb2NhbGU6IGVuVVMgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGFnaW5hdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LXBhZ2luYXRpb24nLFxuICAgIHNlbGVjdFByZWZpeENsczogJ2FudC1zZWxlY3QnXG59OyIsImltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3NlbGVjdC9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9pbnB1dC9zdHlsZS9jc3MnOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ3NoYWxsb3dlcXVhbCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9yYWRpbyc7XG5mdW5jdGlvbiBnZXRDaGVja2VkVmFsdWUoY2hpbGRyZW4pIHtcbiAgICB2YXIgdmFsdWUgPSBudWxsO1xuICAgIHZhciBtYXRjaGVkID0gZmFsc2U7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKHJhZGlvKSB7XG4gICAgICAgIGlmIChyYWRpbyAmJiByYWRpby5wcm9wcyAmJiByYWRpby5wcm9wcy5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJhZGlvLnByb3BzLnZhbHVlO1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZCA/IHsgdmFsdWU6IHZhbHVlIH0gOiB1bmRlZmluZWQ7XG59XG5cbnZhciBSYWRpb0dyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmFkaW9Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSYWRpb0dyb3VwKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpb0dyb3VwKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFkaW9Hcm91cC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhZGlvR3JvdXApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMub25SYWRpb0NoYW5nZSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoISgndmFsdWUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSAmJiB2YWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgIGlmICgndmFsdWUnIGluIHByb3BzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKCdkZWZhdWx0VmFsdWUnIGluIHByb3BzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGVja2VkVmFsdWUgPSBnZXRDaGVja2VkVmFsdWUocHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdmFsdWUgPSBjaGVja2VkVmFsdWUgJiYgY2hlY2tlZFZhbHVlLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFkaW9Hcm91cCwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmFkaW9Hcm91cDoge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblJhZGlvQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VkVmFsdWUgPSBnZXRDaGVja2VkVmFsdWUobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoZWNrZWRWYWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuXG4gICAgICAgICAgICB2YXIgZ3JvdXBQcmVmaXhDbHMgPSBwcmVmaXhDbHMgKyAnLWdyb3VwJztcbiAgICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoZ3JvdXBQcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgZ3JvdXBQcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5zaXplLCBwcm9wcy5zaXplKSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgLy8g5aaC5p6c5a2Y5ZyoIG9wdGlvbnMsIOS8mOWFiOS9v+eUqFxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOWkhOexu+Wei+iHquWKqOaOqOWvvOS4uiBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIGRpc2FibGVkOiBfdGhpczIucHJvcHMuZGlzYWJsZWQsIHZhbHVlOiBvcHRpb24sIG9uQ2hhbmdlOiBfdGhpczIub25SYWRpb0NoYW5nZSwgY2hlY2tlZDogX3RoaXMyLnN0YXRlLnZhbHVlID09PSBvcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmraTlpITnsbvlnovoh6rliqjmjqjlr7zkuLogeyBsYWJlbDogc3RyaW5nIHZhbHVlOiBzdHJpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBwcmVmaXhDbHM6IHByZWZpeENscywgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCB8fCBfdGhpczIucHJvcHMuZGlzYWJsZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIG9uQ2hhbmdlOiBfdGhpczIub25SYWRpb0NoYW5nZSwgY2hlY2tlZDogX3RoaXMyLnN0YXRlLnZhbHVlID09PSBvcHRpb24udmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZywgc3R5bGU6IHByb3BzLnN0eWxlLCBvbk1vdXNlRW50ZXI6IHByb3BzLm9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlOiBwcm9wcy5vbk1vdXNlTGVhdmUsIGlkOiBwcm9wcy5pZCB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJhZGlvR3JvdXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvR3JvdXA7XG5cblJhZGlvR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBwcmVmaXhDbHM6ICdhbnQtcmFkaW8nXG59O1xuUmFkaW9Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICByYWRpb0dyb3VwOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCBSYWRpbyBmcm9tICcuL3JhZGlvJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9yYWRpb0J1dHRvbic7XG5SYWRpby5CdXR0b24gPSBCdXR0b247XG5SYWRpby5Hcm91cCA9IEdyb3VwO1xuZXhwb3J0IHsgQnV0dG9uLCBHcm91cCB9O1xuZXhwb3J0IGRlZmF1bHQgUmFkaW87IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmNDaGVja2JveCBmcm9tICdyYy1jaGVja2JveCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcblxudmFyIFJhZGlvID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmFkaW8sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmFkaW8oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpbyk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJhZGlvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFkaW8pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zYXZlQ2hlY2tib3ggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMucmNDaGVja2JveCA9IG5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFkaW8sIFt7XG4gICAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuY29udGV4dC5yYWRpb0dyb3VwLCBuZXh0Q29udGV4dC5yYWRpb0dyb3VwKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICB0aGlzLnJjQ2hlY2tib3guZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy5yY0NoZWNrYm94LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCJdKTtcblxuICAgICAgICAgICAgdmFyIHJhZGlvR3JvdXAgPSBjb250ZXh0LnJhZGlvR3JvdXA7XG5cbiAgICAgICAgICAgIHZhciByYWRpb1Byb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcyk7XG4gICAgICAgICAgICBpZiAocmFkaW9Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMubmFtZSA9IHJhZGlvR3JvdXAubmFtZTtcbiAgICAgICAgICAgICAgICByYWRpb1Byb3BzLm9uQ2hhbmdlID0gcmFkaW9Hcm91cC5vbkNoYW5nZTtcbiAgICAgICAgICAgICAgICByYWRpb1Byb3BzLmNoZWNrZWQgPSBwcm9wcy52YWx1ZSA9PT0gcmFkaW9Hcm91cC52YWx1ZTtcbiAgICAgICAgICAgICAgICByYWRpb1Byb3BzLmRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgcmFkaW9Hcm91cC5kaXNhYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB3cmFwcGVyQ2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13cmFwcGVyJywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13cmFwcGVyLWNoZWNrZWQnLCByYWRpb1Byb3BzLmNoZWNrZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctd3JhcHBlci1kaXNhYmxlZCcsIHJhZGlvUHJvcHMuZGlzYWJsZWQpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogd3JhcHBlckNsYXNzU3RyaW5nLCBzdHlsZTogc3R5bGUsIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmNDaGVja2JveCwgX2V4dGVuZHMoe30sIHJhZGlvUHJvcHMsIHsgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIHJlZjogdGhpcy5zYXZlQ2hlY2tib3ggfSkpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuICE9PSB1bmRlZmluZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmFkaW87XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LXJhZGlvJyxcbiAgICB0eXBlOiAncmFkaW8nXG59O1xuUmFkaW8uY29udGV4dFR5cGVzID0ge1xuICAgIHJhZGlvR3JvdXA6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vcmFkaW8nO1xuXG52YXIgUmFkaW9CdXR0b24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSYWRpb0J1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSYWRpb0J1dHRvbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlvQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJhZGlvQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFkaW9CdXR0b24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFkaW9CdXR0b24sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgcmFkaW9Qcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQucmFkaW9Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMub25DaGFuZ2UgPSB0aGlzLmNvbnRleHQucmFkaW9Hcm91cC5vbkNoYW5nZTtcbiAgICAgICAgICAgICAgICByYWRpb1Byb3BzLmNoZWNrZWQgPSB0aGlzLnByb3BzLnZhbHVlID09PSB0aGlzLmNvbnRleHQucmFkaW9Hcm91cC52YWx1ZTtcbiAgICAgICAgICAgICAgICByYWRpb1Byb3BzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLmNvbnRleHQucmFkaW9Hcm91cC5kaXNhYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJhZGlvLCByYWRpb1Byb3BzKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYWRpb0J1dHRvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XG5cblJhZGlvQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtcmFkaW8tYnV0dG9uJ1xufTtcblJhZGlvQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgICByYWRpb0dyb3VwOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsImltcG9ydCB7IFJvdyB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGRlZmF1bHQgUm93OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vLi4vZ3JpZC9zdHlsZS9pbmRleC5jc3MnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJjU2VsZWN0LCB7IE9wdGlvbiwgT3B0R3JvdXAgfSBmcm9tICdyYy1zZWxlY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbnZhciBTZWxlY3RQcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2xhcmdlJywgJ3NtYWxsJ10pLFxuICAgIGNvbWJvYm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBub3RGb3VuZENvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgc2hvd1NlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNob2ljZVRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuLy8gPT4gSXQgaXMgbmVlZGxlc3MgdG8gZXhwb3J0IHRoZSBkZWNsYXJhdGlvbiBvZiBiZWxvdyB0d28gaW5uZXIgY29tcG9uZW50cy5cbi8vIGV4cG9ydCB7IE9wdGlvbiwgT3B0R3JvdXAgfTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTZWxlY3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zYXZlU2VsZWN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLnJjU2VsZWN0ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyU2VsZWN0ID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgX2EkY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgbW9kZSA9IF9hLm1vZGUsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibW9kZVwiXSk7XG4gICAgICAgICAgICB2YXIgY2xzID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxnJywgc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zbScsIHNpemUgPT09ICdzbWFsbCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWxQcm9wID0gX3RoaXMucHJvcHMub3B0aW9uTGFiZWxQcm9wO1xuXG4gICAgICAgICAgICB2YXIgaXNDb21ib2JveCA9IG1vZGUgPT09ICdjb21ib2JveCc7XG4gICAgICAgICAgICBpZiAoaXNDb21ib2JveCkge1xuICAgICAgICAgICAgICAgIC8vIGNoaWxkcmVuIOW4piBkb20g57uT5p6E5pe277yM5peg5rOV5aGr5YWl6L6T5YWl5qGGXG4gICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wID0gb3B0aW9uTGFiZWxQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9kZUNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogbW9kZSA9PT0gJ211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICB0YWdzOiBtb2RlID09PSAndGFncycsXG4gICAgICAgICAgICAgICAgY29tYm9ib3g6IGlzQ29tYm9ib3hcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSY1NlbGVjdCwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywgbW9kZUNvbmZpZywgeyBwcmVmaXhDbHM6IHByZWZpeENscywgY2xhc3NOYW1lOiBjbHMsIG9wdGlvbkxhYmVsUHJvcDogb3B0aW9uTGFiZWxQcm9wIHx8ICdjaGlsZHJlbicsIG5vdEZvdW5kQ29udGVudDogX3RoaXMuZ2V0Tm90Rm91bmRDb250ZW50KGxvY2FsZSksIHJlZjogX3RoaXMuc2F2ZVNlbGVjdCB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMucmNTZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy5yY1NlbGVjdC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE5vdEZvdW5kQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROb3RGb3VuZENvbnRlbnQobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQgPSBfcHJvcHMubm90Rm91bmRDb250ZW50LFxuICAgICAgICAgICAgICAgIG1vZGUgPSBfcHJvcHMubW9kZTtcblxuICAgICAgICAgICAgdmFyIGlzQ29tYm9ib3ggPSBtb2RlID09PSAnY29tYm9ib3gnO1xuICAgICAgICAgICAgaWYgKGlzQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAvLyBBdXRvQ29tcGxldGUgZG9uJ3QgaGF2ZSBub3RGb3VuZENvbnRlbnQgZGVmYXVsdGx5XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdEZvdW5kQ29udGVudCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG5vdEZvdW5kQ29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub3RGb3VuZENvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGxvY2FsZS5ub3RGb3VuZENvbnRlbnQgOiBub3RGb3VuZENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMb2NhbGVSZWNlaXZlcixcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdTZWxlY3QnLCBkZWZhdWx0TG9jYWxlOiBkZWZhdWx0TG9jYWxlLlNlbGVjdCB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gT3B0R3JvdXA7XG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1zZWxlY3QnLFxuICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgIHRyYW5zaXRpb25OYW1lOiAnc2xpZGUtdXAnLFxuICAgIGNob2ljZVRyYW5zaXRpb25OYW1lOiAnem9vbSdcbn07XG5TZWxlY3QucHJvcFR5cGVzID0gU2VsZWN0UHJvcFR5cGVzOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2lucHV0L3N0eWxlL2Nzcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIGZyb20gJy4uL191dGlsL2lzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkJztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuXG52YXIgU3BpbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNwaW4sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3Bpbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Bpbik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNwaW4uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTcGluKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIHZhciBzcGlubmluZyA9IHByb3BzLnNwaW5uaW5nO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNwaW5uaW5nOiBzcGlubmluZ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNwaW4sIFt7XG4gICAgICAgIGtleTogJ2lzTmVzdGVkUGF0dGVybicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lc3RlZFBhdHRlcm4oKSB7XG4gICAgICAgICAgICByZXR1cm4gISEodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAoIWlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRleHQgaW4gSUU5XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG5vdENzc0FuaW1hdGlvblN1cHBvcnRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxheVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTcGlubmluZyA9IHRoaXMucHJvcHMuc3Bpbm5pbmc7XG4gICAgICAgICAgICB2YXIgc3Bpbm5pbmcgPSBuZXh0UHJvcHMuc3Bpbm5pbmc7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTcGlubmluZyAmJiAhc3Bpbm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7IHNwaW5uaW5nOiBzcGlubmluZyB9KTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGF5VGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwaW5uaW5nICYmIGRlbGF5ICYmICFpc05hTihOdW1iZXIoZGVsYXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxheVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgc3Bpbm5pbmc6IHNwaW5uaW5nIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwaW5uaW5nOiBzcGlubmluZyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckluZGljYXRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGluZGljYXRvciA9IF9wcm9wcy5pbmRpY2F0b3I7XG5cbiAgICAgICAgICAgIHZhciBkb3RDbGFzc05hbWUgPSBwcmVmaXhDbHMgKyAnLWRvdCc7XG4gICAgICAgICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoaW5kaWNhdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaW5kaWNhdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhpbmRpY2F0b3IucHJvcHMuY2xhc3NOYW1lLCBkb3RDbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoZG90Q2xhc3NOYW1lLCBwcmVmaXhDbHMgKyAnLWRvdC1zcGluJykgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICB0aXAgPSBfYS50aXAsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZSA9IF9hLndyYXBwZXJDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwicHJlZml4Q2xzXCIsIFwidGlwXCIsIFwid3JhcHBlckNsYXNzTmFtZVwiXSk7dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc3Bpbm5pbmcgPSBfc3RhdGUuc3Bpbm5pbmcsXG4gICAgICAgICAgICAgICAgbm90Q3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gX3N0YXRlLm5vdENzc0FuaW1hdGlvblN1cHBvcnRlZDtcblxuICAgICAgICAgICAgdmFyIHNwaW5DbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zbScsIHNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctbGcnLCBzaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNwaW5uaW5nJywgc3Bpbm5pbmcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctc2hvdy10ZXh0JywgISF0aXAgfHwgbm90Q3NzQW5pbWF0aW9uU3VwcG9ydGVkKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgLy8gZml4IGh0dHBzOi8vZmIubWUvcmVhY3QtdW5rbm93bi1wcm9wXG4gICAgICAgICAgICB2YXIgZGl2UHJvcHMgPSBvbWl0KHJlc3RQcm9wcywgWydzcGlubmluZycsICdkZWxheScsICdpbmRpY2F0b3InXSk7XG4gICAgICAgICAgICB2YXIgc3BpbkVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBkaXZQcm9wcywgeyBjbGFzc05hbWU6IHNwaW5DbGFzc05hbWUgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJJbmRpY2F0b3IoKSxcbiAgICAgICAgICAgICAgICB0aXAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGV4dCcgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlwXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05lc3RlZFBhdHRlcm4oKSkge1xuICAgICAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0ZUNsYXNzTmFtZSA9IHByZWZpeENscyArICctbmVzdGVkLWxvYWRpbmcnO1xuICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVDbGFzc05hbWUgKz0gJyAnICsgd3JhcHBlckNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLWNvbnRhaW5lcicsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLWJsdXInLCBzcGlubmluZyksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHsgY29tcG9uZW50OiAnZGl2JywgY2xhc3NOYW1lOiBhbmltYXRlQ2xhc3NOYW1lLCBzdHlsZTogbnVsbCwgdHJhbnNpdGlvbk5hbWU6ICdmYWRlJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5pbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdsb2FkaW5nJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BpbkVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSwga2V5OiAnY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzcGluRWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTcGluO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTcGluO1xuXG5TcGluLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtc3BpbicsXG4gICAgc3Bpbm5pbmc6IHRydWUsXG4gICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIHdyYXBwZXJDbGFzc05hbWU6ICcnXG59O1xuU3Bpbi5wcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGlubmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnZGVmYXVsdCcsICdsYXJnZSddKSxcbiAgICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluZGljYXRvcjogUHJvcFR5cGVzLm5vZGVcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIENvbHVtbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2x1bW4sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbHVtbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sdW1uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sdW1uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sdW1uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICByZXR1cm4gQ29sdW1uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIENvbHVtbkdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbHVtbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2x1bW5Hcm91cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sdW1uR3JvdXApO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb2x1bW5Hcm91cC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbHVtbkdyb3VwKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICByZXR1cm4gQ29sdW1uR3JvdXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbkdyb3VwO1xuXG5Db2x1bW5Hcm91cC5fX0FOVF9UQUJMRV9DT0xVTU5fR1JPVVAgPSB0cnVlOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2sgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jaGVja2JveCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vcmFkaW8nO1xuXG52YXIgU2VsZWN0aW9uQm94ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2VsZWN0aW9uQm94LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNlbGVjdGlvbkJveChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0aW9uQm94KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2VsZWN0aW9uQm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VsZWN0aW9uQm94KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tlZDogX3RoaXMuZ2V0Q2hlY2tTdGF0ZShwcm9wcylcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTZWxlY3Rpb25Cb3gsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZCA9IF90aGlzMi5nZXRDaGVja1N0YXRlKF90aGlzMi5wcm9wcyk7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgY2hlY2tlZDogY2hlY2tlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDaGVja1N0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoZWNrU3RhdGUocHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHByb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3Rpb24gPSBwcm9wcy5kZWZhdWx0U2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHJvd0luZGV4ID0gcHJvcHMucm93SW5kZXg7XG5cbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3Rpb25EaXJ0eSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkUm93S2V5cy5pbmRleE9mKHJvd0luZGV4KSA+PSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihyb3dJbmRleCkgPj0gMCB8fCBkZWZhdWx0U2VsZWN0aW9uLmluZGV4T2Yocm93SW5kZXgpID49IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgICAgICAgICAgcm93SW5kZXggPSBfYS5yb3dJbmRleCxcbiAgICAgICAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJ0eXBlXCIsIFwicm93SW5kZXhcIl0pO3ZhciBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJhZGlvLCBfZXh0ZW5kcyh7IGNoZWNrZWQ6IGNoZWNrZWQsIHZhbHVlOiByb3dJbmRleCB9LCByZXN0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCBfZXh0ZW5kcyh7IGNoZWNrZWQ6IGNoZWNrZWQgfSwgcmVzdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNlbGVjdGlvbkJveDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uQm94OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2Ryb3Bkb3duJztcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIFNlbGVjdGlvbkNoZWNrYm94QWxsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2VsZWN0aW9uQ2hlY2tib3hBbGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uQ2hlY2tib3hBbGwocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdGlvbkNoZWNrYm94QWxsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2VsZWN0aW9uQ2hlY2tib3hBbGwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3Rpb25DaGVja2JveEFsbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFnbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3QoY2hlY2tlZCA/ICdhbGwnIDogJ3JlbW92ZUFsbCcsIDAsIG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5kZWZhdWx0U2VsZWN0aW9ucyA9IHByb3BzLmhpZGVEZWZhdWx0U2VsZWN0aW9ucyA/IFtdIDogW3tcbiAgICAgICAgICAgIGtleTogJ2FsbCcsXG4gICAgICAgICAgICB0ZXh0OiBwcm9wcy5sb2NhbGUuc2VsZWN0QWxsLFxuICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnaW52ZXJ0JyxcbiAgICAgICAgICAgIHRleHQ6IHByb3BzLmxvY2FsZS5zZWxlY3RJbnZlcnQsXG4gICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoKSB7fVxuICAgICAgICB9XTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja2VkOiBfdGhpcy5nZXRDaGVja1N0YXRlKHByb3BzKSxcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IF90aGlzLmdldEluZGV0ZXJtaW5hdGVTdGF0ZShwcm9wcylcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTZWxlY3Rpb25DaGVja2JveEFsbCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldENoZWNrU3RhdGUobmV4dFByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuc2V0Q2hlY2tTdGF0ZShfdGhpczIucHJvcHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoZWNrU2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2VsZWN0aW9uKGRhdGEsIHR5cGUsIGJ5RGVmYXVsdENoZWNrZWQpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHN0b3JlID0gX3Byb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgIGdldENoZWNrYm94UHJvcHNCeUl0ZW0gPSBfcHJvcHMuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbSxcbiAgICAgICAgICAgICAgICBnZXRSZWNvcmRLZXkgPSBfcHJvcHMuZ2V0UmVjb3JkS2V5O1xuICAgICAgICAgICAgLy8gdHlwZSBzaG91bGQgYmUgJ2V2ZXJ5JyB8ICdzb21lJ1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2V2ZXJ5JyB8fCB0eXBlID09PSAnc29tZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnlEZWZhdWx0Q2hlY2tlZCA/IGRhdGFbdHlwZV0oZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldENoZWNrYm94UHJvcHNCeUl0ZW0oaXRlbSwgaSkuZGVmYXVsdENoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfSkgOiBkYXRhW3R5cGVdKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGdldFJlY29yZEtleShpdGVtLCBpKSkgPj0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q2hlY2tTdGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDaGVja1N0YXRlKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuZ2V0Q2hlY2tTdGF0ZShwcm9wcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuZ2V0SW5kZXRlcm1pbmF0ZVN0YXRlKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkICE9PSB0aGlzLnN0YXRlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogY2hlY2tlZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRldGVybWluYXRlICE9PSB0aGlzLnN0YXRlLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXRlcm1pbmF0ZTogaW5kZXRlcm1pbmF0ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q2hlY2tTdGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGVja1N0YXRlKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICBkYXRhID0gcHJvcHMuZGF0YTtcblxuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3Rpb25EaXJ0eSA/IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ2V2ZXJ5JywgZmFsc2UpIDogdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnZXZlcnknLCBmYWxzZSkgfHwgdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnZXZlcnknLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmRldGVybWluYXRlU3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5kZXRlcm1pbmF0ZVN0YXRlKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICBkYXRhID0gcHJvcHMuZGF0YTtcblxuICAgICAgICAgICAgdmFyIGluZGV0ZXJtaW5hdGUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlID0gc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3Rpb25EaXJ0eSA/IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ3NvbWUnLCBmYWxzZSkgJiYgIXRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ2V2ZXJ5JywgZmFsc2UpIDogdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnc29tZScsIGZhbHNlKSAmJiAhdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnZXZlcnknLCBmYWxzZSkgfHwgdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnc29tZScsIHRydWUpICYmICF0aGlzLmNoZWNrU2VsZWN0aW9uKGRhdGEsICdldmVyeScsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV0ZXJtaW5hdGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck1lbnVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnVzKHNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9ucy5tYXAoZnVuY3Rpb24gKHNlbGVjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTWVudS5JdGVtLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VsZWN0aW9uLmtleSB8fCBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5wcm9wcy5vblNlbGVjdChzZWxlY3Rpb24ua2V5LCBpbmRleCwgc2VsZWN0aW9uLm9uU2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24udGV4dFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25zID0gX3Byb3BzMi5zZWxlY3Rpb25zLFxuICAgICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX3Byb3BzMi5nZXRQb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBfc3RhdGUuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlID0gX3N0YXRlLmluZGV0ZXJtaW5hdGU7XG5cbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25QcmVmaXhDbHMgPSBwcmVmaXhDbHMgKyAnLXNlbGVjdGlvbic7XG4gICAgICAgICAgICB2YXIgY3VzdG9tU2VsZWN0aW9ucyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBuZXdTZWxlY3Rpb25zID0gQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSA/IHRoaXMuZGVmYXVsdFNlbGVjdGlvbnMuY29uY2F0KHNlbGVjdGlvbnMpIDogdGhpcy5kZWZhdWx0U2VsZWN0aW9ucztcbiAgICAgICAgICAgICAgICB2YXIgbWVudSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIE1lbnUsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBzZWxlY3Rpb25QcmVmaXhDbHMgKyAnLW1lbnUnLCBzZWxlY3RlZEtleXM6IFtdIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWVudXMobmV3U2VsZWN0aW9ucylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGN1c3RvbVNlbGVjdGlvbnMgPSBuZXdTZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bixcbiAgICAgICAgICAgICAgICAgICAgeyBvdmVybGF5OiBtZW51LCBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHNlbGVjdGlvblByZWZpeENscyArICctZG93bicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnZG93bicgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHNlbGVjdGlvblByZWZpeENscyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0aW9uUHJlZml4Q2xzICsgJy1zZWxlY3QtYWxsLWN1c3RvbScsIGN1c3RvbVNlbGVjdGlvbnMpKSwgY2hlY2tlZDogY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZTogaW5kZXRlcm1pbmF0ZSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFnbmUgfSksXG4gICAgICAgICAgICAgICAgY3VzdG9tU2VsZWN0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZWxlY3Rpb25DaGVja2JveEFsbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uQ2hlY2tib3hBbGw7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY1RhYmxlIGZyb20gJ3JjLXRhYmxlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL3BhZ2luYXRpb24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgU3BpbiBmcm9tICcuLi9zcGluJztcbmltcG9ydCBMb2NhbGVSZWNlaXZlciBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXInO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgRmlsdGVyRHJvcGRvd24gZnJvbSAnLi9maWx0ZXJEcm9wZG93bic7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgU2VsZWN0aW9uQm94IGZyb20gJy4vU2VsZWN0aW9uQm94JztcbmltcG9ydCBTZWxlY3Rpb25DaGVja2JveEFsbCBmcm9tICcuL1NlbGVjdGlvbkNoZWNrYm94QWxsJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nO1xuaW1wb3J0IENvbHVtbkdyb3VwIGZyb20gJy4vQ29sdW1uR3JvdXAnO1xuaW1wb3J0IGNyZWF0ZUJvZHlSb3cgZnJvbSAnLi9jcmVhdGVCb2R5Um93JztcbmltcG9ydCB7IGZsYXRBcnJheSwgdHJlZU1hcCwgZmxhdEZpbHRlciwgbm9ybWFsaXplQ29sdW1ucyB9IGZyb20gJy4vdXRpbCc7XG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG52YXIgZGVmYXVsdFBhZ2luYXRpb24gPSB7XG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25TaG93U2l6ZUNoYW5nZTogbm9vcFxufTtcbi8qKlxuICogQXZvaWQgY3JlYXRpbmcgbmV3IG9iamVjdCwgc28gdGhhdCBwYXJlbnQgY29tcG9uZW50J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlXG4gKiBjYW4gd29ya3MgYXBwcm9wcmlhdGVseeOAglxuICovXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxudmFyIFRhYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVGFibGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYmxlKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJsZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5nZXRDaGVja2JveFByb3BzQnlJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMkcm93U2VsZWN0ID0gX3RoaXMucHJvcHMucm93U2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbiA9IF90aGlzJHByb3BzJHJvd1NlbGVjdCA9PT0gdW5kZWZpbmVkID8ge30gOiBfdGhpcyRwcm9wcyRyb3dTZWxlY3Q7XG5cbiAgICAgICAgICAgIGlmICghcm93U2VsZWN0aW9uLmdldENoZWNrYm94UHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIga2V5ID0gX3RoaXMuZ2V0UmVjb3JkS2V5KGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgIC8vIENhY2hlIGNoZWNrYm94UHJvcHNcbiAgICAgICAgICAgIGlmICghX3RoaXMuQ2hlY2tib3hQcm9wc0NhY2hlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5DaGVja2JveFByb3BzQ2FjaGVba2V5XSA9IHJvd1NlbGVjdGlvbi5nZXRDaGVja2JveFByb3BzKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLkNoZWNrYm94UHJvcHNDYWNoZVtrZXldO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vblJvdyA9IGZ1bmN0aW9uIChyZWNvcmQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvblJvdyA9IF90aGlzJHByb3BzLm9uUm93LFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscztcblxuICAgICAgICAgICAgdmFyIGN1c3RvbSA9IG9uUm93ID8gb25Sb3cocmVjb3JkLCBpbmRleCkgOiB7fTtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY3VzdG9tLCB7IHByZWZpeENsczogcHJlZml4Q2xzLCBzdG9yZTogX3RoaXMuc3RvcmUsIHJvd0tleTogX3RoaXMuZ2V0UmVjb3JkS2V5KHJlY29yZCwgaW5kZXgpIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVGaWx0ZXIgPSBmdW5jdGlvbiAoY29sdW1uLCBuZXh0RmlsdGVycykge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZS5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJzID0gX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLmZpbHRlcnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX3RoaXMuZ2V0Q29sdW1uS2V5KGNvbHVtbiksIG5leHRGaWx0ZXJzKSk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZmlsdGVycyBub3QgaW4gY3VycmVudCBjb2x1bW5zXG4gICAgICAgICAgICB2YXIgY3VycmVudENvbHVtbktleXMgPSBbXTtcbiAgICAgICAgICAgIHRyZWVNYXAoX3RoaXMuY29sdW1ucywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbHVtbktleXMucHVzaChfdGhpcy5nZXRDb2x1bW5LZXkoYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb2x1bW5LZXlzLmluZGV4T2YoY29sdW1uS2V5KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpbHRlcnNbY29sdW1uS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgY3VycmVudCBwcm9wXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5jdXJyZW50ID0gMTtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm9uQ2hhbmdlKHBhZ2luYXRpb24uY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJzVG9TZXRTdGF0ZSA9IF9leHRlbmRzKHt9LCBmaWx0ZXJzKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJzIHdoaWNoIGlzIGNvbnRyb2xsZWRcbiAgICAgICAgICAgIF90aGlzLmdldEZpbHRlcmVkVmFsdWVDb2x1bW5zKCkuZm9yRWFjaChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbHVtbktleSA9IF90aGlzLmdldENvbHVtbktleShjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5LZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpbHRlcnNUb1NldFN0YXRlW2NvbHVtbktleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZmlsdGVyc1RvU2V0U3RhdGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5maWx0ZXJzID0gZmlsdGVyc1RvU2V0U3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb250cm9sbGVkIGN1cnJlbnQgcHJvcCB3aWxsIG5vdCByZXNwb25kIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BzLnBhZ2luYXRpb24pID09PSAnb2JqZWN0JyAmJiAnY3VycmVudCcgaW4gcHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnBhZ2luYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGFnaW5hdGlvbiwgeyBjdXJyZW50OiBfdGhpcy5zdGF0ZS5wYWdpbmF0aW9uLmN1cnJlbnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRGlydHk6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlLmFwcGx5KG51bGwsIF90aGlzLnByZXBhcmVQYXJhbXNBcmd1bWVudHMoX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLCB7IHNlbGVjdGlvbkRpcnR5OiBmYWxzZSwgZmlsdGVyczogZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gfSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2VsZWN0ID0gZnVuY3Rpb24gKHJlY29yZCwgcm93SW5kZXgsIGUpIHtcbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIHZhciBuYXRpdmVFdmVudCA9IGUubmF0aXZlRXZlbnQ7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFNlbGVjdGlvbiA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCkuc2VsZWN0aW9uRGlydHkgPyBbXSA6IF90aGlzLmdldERlZmF1bHRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFJvd0tleXMgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkUm93S2V5cy5jb25jYXQoZGVmYXVsdFNlbGVjdGlvbik7XG4gICAgICAgICAgICB2YXIga2V5ID0gX3RoaXMuZ2V0UmVjb3JkS2V5KHJlY29yZCwgcm93SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMucHVzaChfdGhpcy5nZXRSZWNvcmRLZXkocmVjb3JkLCByb3dJbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgIT09IGk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uRGlydHk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRSb3dLZXlzKHNlbGVjdGVkUm93S2V5cywge1xuICAgICAgICAgICAgICAgIHNlbGVjdFdheTogJ29uU2VsZWN0JyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICAgICAgIGNoYW5nZVJvd0tleXM6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBuYXRpdmVFdmVudDogbmF0aXZlRXZlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVSYWRpb1NlbGVjdCA9IGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4LCBlKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICB2YXIgbmF0aXZlRXZlbnQgPSBlLm5hdGl2ZUV2ZW50O1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRTZWxlY3Rpb24gPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGlvbkRpcnR5ID8gW10gOiBfdGhpcy5nZXREZWZhdWx0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRSb3dLZXlzID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuY29uY2F0KGRlZmF1bHRTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIGtleSA9IF90aGlzLmdldFJlY29yZEtleShyZWNvcmQsIHJvd0luZGV4KTtcbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IFtrZXldO1xuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnNldFNlbGVjdGVkUm93S2V5cyhzZWxlY3RlZFJvd0tleXMsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RXYXk6ICdvblNlbGVjdCcsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VSb3dLZXlzOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgbmF0aXZlRXZlbnQ6IG5hdGl2ZUV2ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2VsZWN0Um93ID0gZnVuY3Rpb24gKHNlbGVjdGlvbktleSwgaW5kZXgsIG9uU2VsZWN0RnVuYykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5nZXRGbGF0Q3VycmVudFBhZ2VEYXRhKCk7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFNlbGVjdGlvbiA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCkuc2VsZWN0aW9uRGlydHkgPyBbXSA6IF90aGlzLmdldERlZmF1bHRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFJvd0tleXMgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkUm93S2V5cy5jb25jYXQoZGVmYXVsdFNlbGVjdGlvbik7XG4gICAgICAgICAgICB2YXIgY2hhbmdlYWJsZVJvd0tleXMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhX3RoaXMuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbShpdGVtLCBpKS5kaXNhYmxlZDtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRSZWNvcmRLZXkoaXRlbSwgaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VSb3dLZXlzID0gW107XG4gICAgICAgICAgICB2YXIgc2VsZWN0V2F5ID0gJyc7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBkZWZhdWx0IHNlbGVjdGlvblxuICAgICAgICAgICAgc3dpdGNoIChzZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VhYmxlUm93S2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RXYXkgPSAnb25TZWxlY3RBbGwnO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlQWxsJzpcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlYWJsZVJvd0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzLnNwbGljZShzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSb3dLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFdheSA9ICdvblNlbGVjdEFsbCc7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW52ZXJ0JzpcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlYWJsZVJvd0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMuc3BsaWNlKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RXYXkgPSAnb25TZWxlY3RJbnZlcnQnO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uRGlydHk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gd2hlbiBzZWxlY3QgY3VzdG9tIHNlbGVjdGlvbiwgY2FsbGJhY2sgc2VsZWN0aW9uc1tuXS5vblNlbGVjdFxuICAgICAgICAgICAgdmFyIHJvd1NlbGVjdGlvbiA9IF90aGlzLnByb3BzLnJvd1NlbGVjdGlvbjtcblxuICAgICAgICAgICAgdmFyIGN1c3RvbVNlbGVjdGlvblN0YXJ0SW5kZXggPSAyO1xuICAgICAgICAgICAgaWYgKHJvd1NlbGVjdGlvbiAmJiByb3dTZWxlY3Rpb24uaGlkZURlZmF1bHRTZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgY3VzdG9tU2VsZWN0aW9uU3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gY3VzdG9tU2VsZWN0aW9uU3RhcnRJbmRleCAmJiB0eXBlb2Ygb25TZWxlY3RGdW5jID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uU2VsZWN0RnVuYyhjaGFuZ2VhYmxlUm93S2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0V2F5OiBzZWxlY3RXYXksXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VSb3dLZXlzOiBjaGFuZ2VSb3dLZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUGFnZUNoYW5nZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgb3RoZXJBcmd1bWVudHMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgb3RoZXJBcmd1bWVudHNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uID0gX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLmN1cnJlbnQgPSBwYWdpbmF0aW9uLmN1cnJlbnQgfHwgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2luYXRpb24ub25DaGFuZ2UuYXBwbHkocGFnaW5hdGlvbiwgW3BhZ2luYXRpb24uY3VycmVudF0uY29uY2F0KG90aGVyQXJndW1lbnRzKSk7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIENvbnRyb2xsZWQgY3VycmVudCBwcm9wIHdpbGwgbm90IHJlc3BvbmQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2luYXRpb24gJiYgX3R5cGVvZihwcm9wcy5wYWdpbmF0aW9uKSA9PT0gJ29iamVjdCcgJiYgJ2N1cnJlbnQnIGluIHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5wYWdpbmF0aW9uID0gX2V4dGVuZHMoe30sIHBhZ2luYXRpb24sIHsgY3VycmVudDogX3RoaXMuc3RhdGUucGFnaW5hdGlvbi5jdXJyZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlLmFwcGx5KG51bGwsIF90aGlzLnByZXBhcmVQYXJhbXNBcmd1bWVudHMoX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLCB7IHNlbGVjdGlvbkRpcnR5OiBmYWxzZSwgcGFnaW5hdGlvbjogcGFnaW5hdGlvbiB9KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJTZWxlY3Rpb25Cb3ggPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gX3RoaXMuZ2V0UmVjb3JkS2V5KHJlY29yZCwgaW5kZXgpOyAvLyDku44gMSDlvIDlp4tcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5nZXRDaGVja2JveFByb3BzQnlJdGVtKHJlY29yZCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncmFkaW8nID8gX3RoaXMuaGFuZGxlUmFkaW9TZWxlY3QocmVjb3JkLCByb3dJbmRleCwgZSkgOiBfdGhpcy5oYW5kbGVTZWxlY3QocmVjb3JkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IHN0b3BQcm9wYWdhdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGlvbkJveCwgX2V4dGVuZHMoeyB0eXBlOiB0eXBlLCBzdG9yZTogX3RoaXMuc3RvcmUsIHJvd0luZGV4OiByb3dJbmRleCwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgZGVmYXVsdFNlbGVjdGlvbjogX3RoaXMuZ2V0RGVmYXVsdFNlbGVjdGlvbigpIH0sIHByb3BzKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0UmVjb3JkS2V5ID0gZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciByb3dLZXkgPSBfdGhpcy5wcm9wcy5yb3dLZXk7XG4gICAgICAgICAgICB2YXIgcmVjb3JkS2V5ID0gdHlwZW9mIHJvd0tleSA9PT0gJ2Z1bmN0aW9uJyA/IHJvd0tleShyZWNvcmQsIGluZGV4KSA6IHJlY29yZFtyb3dLZXldO1xuICAgICAgICAgICAgd2FybmluZyhyZWNvcmRLZXkgIT09IHVuZGVmaW5lZCwgJ0VhY2ggcmVjb3JkIGluIGRhdGFTb3VyY2Ugb2YgdGFibGUgc2hvdWxkIGhhdmUgYSB1bmlxdWUgYGtleWAgcHJvcCwgb3Igc2V0IGByb3dLZXlgIHRvIGFuIHVuaXF1ZSBwcmltYXJ5IGtleSwnICsgJ3NlZSBodHRwczovL3UuYW50LmRlc2lnbi90YWJsZS1yb3cta2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkS2V5ID09PSB1bmRlZmluZWQgPyBpbmRleCA6IHJlY29yZEtleTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0UG9wdXBDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVTaG93U2l6ZUNoYW5nZSA9IGZ1bmN0aW9uIChjdXJyZW50LCBwYWdlU2l6ZSkge1xuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBfdGhpcy5zdGF0ZS5wYWdpbmF0aW9uO1xuICAgICAgICAgICAgcGFnaW5hdGlvbi5vblNob3dTaXplQ2hhbmdlKGN1cnJlbnQsIHBhZ2VTaXplKTtcbiAgICAgICAgICAgIHZhciBuZXh0UGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBwYWdpbmF0aW9uLCB7IHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50IH0pO1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBwYWdpbmF0aW9uOiBuZXh0UGFnaW5hdGlvbiB9KTtcbiAgICAgICAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UuYXBwbHkobnVsbCwgX3RoaXMucHJlcGFyZVBhcmFtc0FyZ3VtZW50cyhfZXh0ZW5kcyh7fSwgX3RoaXMuc3RhdGUsIHsgcGFnaW5hdGlvbjogbmV4dFBhZ2luYXRpb24gfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyVGFibGUgPSBmdW5jdGlvbiAoY29udGV4dExvY2FsZSwgbG9hZGluZykge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gX2V4dGVuZHMoe30sIGNvbnRleHRMb2NhbGUsIF90aGlzLnByb3BzLmxvY2FsZSk7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF9hLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlciA9IF9hLnNob3dIZWFkZXIsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcInNob3dIZWFkZXJcIl0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5nZXRDdXJyZW50UGFnZURhdGEoKTtcbiAgICAgICAgICAgIHZhciBleHBhbmRJY29uQXNDZWxsID0gX3RoaXMucHJvcHMuZXhwYW5kZWRSb3dSZW5kZXIgJiYgX3RoaXMucHJvcHMuZXhwYW5kSWNvbkFzQ2VsbCAhPT0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctJyArIF90aGlzLnByb3BzLnNpemUsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctYm9yZGVyZWQnLCBfdGhpcy5wcm9wcy5ib3JkZXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1lbXB0eScsICFkYXRhLmxlbmd0aCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13aXRob3V0LWNvbHVtbi1oZWFkZXInLCAhc2hvd0hlYWRlciksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IF90aGlzLnJlbmRlclJvd1NlbGVjdGlvbihsb2NhbGUpO1xuICAgICAgICAgICAgY29sdW1ucyA9IF90aGlzLnJlbmRlckNvbHVtbnNEcm9wZG93bihjb2x1bW5zLCBsb2NhbGUpO1xuICAgICAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q29sdW1uID0gX2V4dGVuZHMoe30sIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgbmV3Q29sdW1uLmtleSA9IF90aGlzLmdldENvbHVtbktleShuZXdDb2x1bW4sIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb2x1bW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBleHBhbmRJY29uQ29sdW1uSW5kZXggPSBjb2x1bW5zWzBdICYmIGNvbHVtbnNbMF0ua2V5ID09PSAnc2VsZWN0aW9uLWNvbHVtbicgPyAxIDogMDtcbiAgICAgICAgICAgIGlmICgnZXhwYW5kSWNvbkNvbHVtbkluZGV4JyBpbiByZXN0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uQ29sdW1uSW5kZXggPSByZXN0UHJvcHMuZXhwYW5kSWNvbkNvbHVtbkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmNUYWJsZSwgX2V4dGVuZHMoeyBrZXk6ICd0YWJsZScgfSwgcmVzdFByb3BzLCB7IG9uUm93OiBfdGhpcy5vblJvdywgY29tcG9uZW50czogX3RoaXMuY29tcG9uZW50cywgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIGRhdGE6IGRhdGEsIGNvbHVtbnM6IGNvbHVtbnMsIHNob3dIZWFkZXI6IHNob3dIZWFkZXIsIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsIGV4cGFuZEljb25Db2x1bW5JbmRleDogZXhwYW5kSWNvbkNvbHVtbkluZGV4LCBleHBhbmRJY29uQXNDZWxsOiBleHBhbmRJY29uQXNDZWxsLCBlbXB0eVRleHQ6ICFsb2FkaW5nLnNwaW5uaW5nICYmIGxvY2FsZS5lbXB0eVRleHQgfSkpO1xuICAgICAgICB9O1xuICAgICAgICB3YXJuaW5nKCEoJ2NvbHVtbnNQYWdlUmFuZ2UnIGluIHByb3BzIHx8ICdjb2x1bW5zUGFnZVNpemUnIGluIHByb3BzKSwgJ2Bjb2x1bW5zUGFnZVJhbmdlYCBhbmQgYGNvbHVtbnNQYWdlU2l6ZWAgYXJlIHJlbW92ZWQsIHBsZWFzZSB1c2UgJyArICdmaXhlZCBjb2x1bW5zIGluc3RlYWQsIHNlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vZml4ZWQtY29sdW1ucy4nKTtcbiAgICAgICAgX3RoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnMgfHwgbm9ybWFsaXplQ29sdW1ucyhwcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIF90aGlzLmNyZWF0ZUNvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgICAgIF90aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIF90aGlzLmdldERlZmF1bHRTb3J0T3JkZXIoX3RoaXMuY29sdW1ucyksIHtcbiAgICAgICAgICAgIC8vIOWHj+WwkeeKtuaAgVxuICAgICAgICAgICAgZmlsdGVyczogX3RoaXMuZ2V0RmlsdGVyc0Zyb21Db2x1bW5zKCksIHBhZ2luYXRpb246IF90aGlzLmdldERlZmF1bHRQYWdpbmF0aW9uKHByb3BzKSB9KTtcbiAgICAgICAgX3RoaXMuQ2hlY2tib3hQcm9wc0NhY2hlID0ge307XG4gICAgICAgIF90aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiAocHJvcHMucm93U2VsZWN0aW9uIHx8IHt9KS5zZWxlY3RlZFJvd0tleXMgfHwgW10sXG4gICAgICAgICAgICBzZWxlY3Rpb25EaXJ0eTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFibGUsIFt7XG4gICAgICAgIGtleTogJ2dldERlZmF1bHRTZWxlY3Rpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVmYXVsdFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzJHJvd1NlbGVjdGlvbiA9IHRoaXMucHJvcHMucm93U2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbiA9IF9wcm9wcyRyb3dTZWxlY3Rpb24gPT09IHVuZGVmaW5lZCA/IHt9IDogX3Byb3BzJHJvd1NlbGVjdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFyb3dTZWxlY3Rpb24uZ2V0Q2hlY2tib3hQcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZsYXREYXRhKCkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCByb3dJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbShpdGVtLCByb3dJbmRleCkuZGVmYXVsdENoZWNrZWQ7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKHJlY29yZCwgcm93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmdldFJlY29yZEtleShyZWNvcmQsIHJvd0luZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREZWZhdWx0UGFnaW5hdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWZhdWx0UGFnaW5hdGlvbihwcm9wcykge1xuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBwcm9wcy5wYWdpbmF0aW9uIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzUGFnaW5hdGlvbihwcm9wcykgPyBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhZ2luYXRpb24sIHBhZ2luYXRpb24sIHsgY3VycmVudDogcGFnaW5hdGlvbi5kZWZhdWx0Q3VycmVudCB8fCBwYWdpbmF0aW9uLmN1cnJlbnQgfHwgMSwgcGFnZVNpemU6IHBhZ2luYXRpb24uZGVmYXVsdFBhZ2VTaXplIHx8IHBhZ2luYXRpb24ucGFnZVNpemUgfHwgMTAgfSkgOiB7fTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gbmV4dFByb3BzLmNvbHVtbnMgfHwgbm9ybWFsaXplQ29sdW1ucyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgaWYgKCdwYWdpbmF0aW9uJyBpbiBuZXh0UHJvcHMgfHwgJ3BhZ2luYXRpb24nIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdQYWdpbmF0aW9uID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYWdpbmF0aW9uLCBwcmV2aW91c1N0YXRlLnBhZ2luYXRpb24sIG5leHRQcm9wcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFnaW5hdGlvbi5jdXJyZW50ID0gbmV3UGFnaW5hdGlvbi5jdXJyZW50IHx8IDE7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BhZ2luYXRpb24ucGFnZVNpemUgPSBuZXdQYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYWdpbmF0aW9uOiBuZXh0UHJvcHMucGFnaW5hdGlvbiAhPT0gZmFsc2UgPyBuZXdQYWdpbmF0aW9uIDogZW1wdHlPYmplY3QgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMucm93U2VsZWN0aW9uICYmICdzZWxlY3RlZFJvd0tleXMnIGluIG5leHRQcm9wcy5yb3dTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBuZXh0UHJvcHMucm93U2VsZWN0aW9uLnNlbGVjdGVkUm93S2V5cyB8fCBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdkYXRhU291cmNlJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLmRhdGFTb3VyY2UgIT09IHRoaXMucHJvcHMuZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25EaXJ0eTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEwMTMzXG4gICAgICAgICAgICB0aGlzLkNoZWNrYm94UHJvcHNDYWNoZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U29ydE9yZGVyQ29sdW1ucyh0aGlzLmNvbHVtbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc29ydFN0YXRlID0gdGhpcy5nZXRTb3J0U3RhdGVGcm9tQ29sdW1ucyh0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0U3RhdGUuc29ydENvbHVtbiAhPT0gdGhpcy5zdGF0ZS5zb3J0Q29sdW1uIHx8IHNvcnRTdGF0ZS5zb3J0T3JkZXIgIT09IHRoaXMuc3RhdGUuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc29ydFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRWYWx1ZUNvbHVtbnMgPSB0aGlzLmdldEZpbHRlcmVkVmFsdWVDb2x1bW5zKHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRWYWx1ZUNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJzRnJvbUNvbHVtbnMgPSB0aGlzLmdldEZpbHRlcnNGcm9tQ29sdW1ucyh0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdGaWx0ZXJzID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUuZmlsdGVycyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyc0Zyb21Db2x1bW5zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyc1trZXldID0gZmlsdGVyc0Zyb21Db2x1bW5zW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzQ2hhbmdlZChuZXdGaWx0ZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyczogbmV3RmlsdGVycyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudHMobmV4dFByb3BzLmNvbXBvbmVudHMsIHRoaXMucHJvcHMuY29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFNlbGVjdGVkUm93S2V5cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzLCBfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHNlbGVjdFdheSA9IF9yZWYuc2VsZWN0V2F5LFxuICAgICAgICAgICAgICAgIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBfcmVmLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5cyA9IF9yZWYuY2hhbmdlUm93S2V5cyxcbiAgICAgICAgICAgICAgICBuYXRpdmVFdmVudCA9IF9yZWYubmF0aXZlRXZlbnQ7XG4gICAgICAgICAgICB2YXIgX3Byb3BzJHJvd1NlbGVjdGlvbjIgPSB0aGlzLnByb3BzLnJvd1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb24gPSBfcHJvcHMkcm93U2VsZWN0aW9uMiA9PT0gdW5kZWZpbmVkID8ge30gOiBfcHJvcHMkcm93U2VsZWN0aW9uMjtcblxuICAgICAgICAgICAgaWYgKHJvd1NlbGVjdGlvbiAmJiAhKCdzZWxlY3RlZFJvd0tleXMnIGluIHJvd1NlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHsgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RmxhdERhdGEoKTtcbiAgICAgICAgICAgIGlmICghcm93U2VsZWN0aW9uLm9uQ2hhbmdlICYmICFyb3dTZWxlY3Rpb25bc2VsZWN0V2F5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFJvd3MgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAocm93LCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKF90aGlzMy5nZXRSZWNvcmRLZXkocm93LCBpKSkgPj0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJvd1NlbGVjdGlvbi5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbi5vbkNoYW5nZShzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0V2F5ID09PSAnb25TZWxlY3QnICYmIHJvd1NlbGVjdGlvbi5vblNlbGVjdCkge1xuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbi5vblNlbGVjdChyZWNvcmQsIGNoZWNrZWQsIHNlbGVjdGVkUm93cywgbmF0aXZlRXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RXYXkgPT09ICdvblNlbGVjdEFsbCcgJiYgcm93U2VsZWN0aW9uLm9uU2VsZWN0QWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZVJvd3MgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAocm93LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGFuZ2VSb3dLZXlzLmluZGV4T2YoX3RoaXMzLmdldFJlY29yZEtleShyb3csIGkpKSA+PSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbi5vblNlbGVjdEFsbChjaGVja2VkLCBzZWxlY3RlZFJvd3MsIGNoYW5nZVJvd3MpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RXYXkgPT09ICdvblNlbGVjdEludmVydCcgJiYgcm93U2VsZWN0aW9uLm9uU2VsZWN0SW52ZXJ0KSB7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uLm9uU2VsZWN0SW52ZXJ0KHNlbGVjdGVkUm93S2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1BhZ2luYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzUGFnaW5hdGlvbihwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIChwcm9wcyB8fCB0aGlzLnByb3BzKS5wYWdpbmF0aW9uICE9PSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNGaWx0ZXJzQ2hhbmdlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZpbHRlcnNDaGFuZ2VkKGZpbHRlcnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVyc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhmaWx0ZXJzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW5LZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcnNbY29sdW1uS2V5XSAhPT0gX3RoaXM0LnN0YXRlLmZpbHRlcnNbY29sdW1uS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyc0NoYW5nZWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvcnRPcmRlckNvbHVtbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ydE9yZGVyQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhdEZpbHRlcihjb2x1bW5zIHx8IHRoaXMuY29sdW1ucyB8fCBbXSwgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc29ydE9yZGVyJyBpbiBjb2x1bW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RmlsdGVyZWRWYWx1ZUNvbHVtbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmlsdGVyZWRWYWx1ZUNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIGZsYXRGaWx0ZXIoY29sdW1ucyB8fCB0aGlzLmNvbHVtbnMgfHwgW10sIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNvbHVtbi5maWx0ZXJlZFZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRGaWx0ZXJzRnJvbUNvbHVtbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmlsdGVyc0Zyb21Db2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5nZXRGaWx0ZXJlZFZhbHVlQ29sdW1ucyhjb2x1bW5zKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sS2V5ID0gX3RoaXM1LmdldENvbHVtbktleShjb2wpO1xuICAgICAgICAgICAgICAgIGZpbHRlcnNbY29sS2V5XSA9IGNvbC5maWx0ZXJlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVycztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVmYXVsdFNvcnRPcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWZhdWx0U29ydE9yZGVyKGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHZhciBkZWZpbmVkU29ydFN0YXRlID0gdGhpcy5nZXRTb3J0U3RhdGVGcm9tQ29sdW1ucyhjb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0U29ydGVkQ29sdW1uID0gZmxhdEZpbHRlcihjb2x1bW5zIHx8IFtdLCBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5kZWZhdWx0U29ydE9yZGVyICE9IG51bGw7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0U29ydGVkQ29sdW1uICYmICFkZWZpbmVkU29ydFN0YXRlLnNvcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzb3J0Q29sdW1uOiBkZWZhdWx0U29ydGVkQ29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IGRlZmF1bHRTb3J0ZWRDb2x1bW4uZGVmYXVsdFNvcnRPcmRlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmaW5lZFNvcnRTdGF0ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ydFN0YXRlRnJvbUNvbHVtbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ydFN0YXRlRnJvbUNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZpcnN0IGNvbHVtbiB3aGljaCBzb3J0T3JkZXIgaXMgbm90IGZhbHN5XG4gICAgICAgICAgICB2YXIgc29ydGVkQ29sdW1uID0gdGhpcy5nZXRTb3J0T3JkZXJDb2x1bW5zKGNvbHVtbnMpLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC5zb3J0T3JkZXI7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzb3J0Q29sdW1uOiBzb3J0ZWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVkQ29sdW1uLnNvcnRPcmRlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvcnRDb2x1bW46IG51bGwsXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTb3J0ZXJGbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3J0ZXJGbigpIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9IF9zdGF0ZS5zb3J0T3JkZXIsXG4gICAgICAgICAgICAgICAgc29ydENvbHVtbiA9IF9zdGF0ZS5zb3J0Q29sdW1uO1xuXG4gICAgICAgICAgICBpZiAoIXNvcnRPcmRlciB8fCAhc29ydENvbHVtbiB8fCB0eXBlb2Ygc29ydENvbHVtbi5zb3J0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gc29ydENvbHVtbi5zb3J0ZXIoYSwgYik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydE9yZGVyID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvZ2dsZVNvcnRPcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVTb3J0T3JkZXIob3JkZXIsIGNvbHVtbikge1xuICAgICAgICAgICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvcnRDb2x1bW4gPSBfc3RhdGUyLnNvcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gX3N0YXRlMi5zb3J0T3JkZXI7XG4gICAgICAgICAgICAvLyDlj6rlkIzml7blhYHorrjkuIDliJfov5vooYzmjpLluo/vvIzlkKbliJnkvJrlr7zoh7TmjpLluo/pobrluo/nmoTpgLvovpHpl67pophcblxuICAgICAgICAgICAgdmFyIGlzU29ydENvbHVtbiA9IHRoaXMuaXNTb3J0Q29sdW1uKGNvbHVtbik7XG4gICAgICAgICAgICBpZiAoIWlzU29ydENvbHVtbikge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWIl+acquaOkuW6j1xuICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9IG9yZGVyO1xuICAgICAgICAgICAgICAgIHNvcnRDb2x1bW4gPSBjb2x1bW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWIl+W3suaOkuW6j1xuICAgICAgICAgICAgICAgIGlmIChzb3J0T3JkZXIgPT09IG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIh+aNouS4uuacquaOkuW6j+eKtuaAgVxuICAgICAgICAgICAgICAgICAgICBzb3J0T3JkZXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgc29ydENvbHVtbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YiH5o2i5Li65o6S5bqP54q25oCBXG4gICAgICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9IG9yZGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRPcmRlcixcbiAgICAgICAgICAgICAgICBzb3J0Q29sdW1uOiBzb3J0Q29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gQ29udHJvbGxlZFxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U29ydE9yZGVyQ29sdW1ucygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlLmFwcGx5KG51bGwsIHRoaXMucHJlcGFyZVBhcmFtc0FyZ3VtZW50cyhfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgbmV3U3RhdGUpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJvd1NlbGVjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSb3dTZWxlY3Rpb24obG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb24gPSBfcHJvcHMucm93U2VsZWN0aW9uO1xuXG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IHRoaXMuY29sdW1ucy5jb25jYXQoKTtcbiAgICAgICAgICAgIGlmIChyb3dTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RmxhdEN1cnJlbnRQYWdlRGF0YSgpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd1NlbGVjdGlvbi5nZXRDaGVja2JveFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIV90aGlzNi5nZXRDaGVja2JveFByb3BzQnlJdGVtKGl0ZW0sIGluZGV4KS5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uQ29sdW1uQ2xhc3MgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctc2VsZWN0aW9uLWNvbHVtbicsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbScsIHJvd1NlbGVjdGlvbi5zZWxlY3Rpb25zKSk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkNvbHVtbiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2VsZWN0aW9uLWNvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogdGhpcy5yZW5kZXJTZWxlY3Rpb25Cb3gocm93U2VsZWN0aW9uLnR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHNlbGVjdGlvbkNvbHVtbkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBmaXhlZDogcm93U2VsZWN0aW9uLmZpeGVkLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcm93U2VsZWN0aW9uLmNvbHVtbldpZHRoXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocm93U2VsZWN0aW9uLnR5cGUgIT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrYm94QWxsRGlzYWJsZWQgPSBkYXRhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNi5nZXRDaGVja2JveFByb3BzQnlJdGVtKGl0ZW0sIGluZGV4KS5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbHVtbi50aXRsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aW9uQ2hlY2tib3hBbGwsIHsgc3RvcmU6IHRoaXMuc3RvcmUsIGxvY2FsZTogbG9jYWxlLCBkYXRhOiBkYXRhLCBnZXRDaGVja2JveFByb3BzQnlJdGVtOiB0aGlzLmdldENoZWNrYm94UHJvcHNCeUl0ZW0sIGdldFJlY29yZEtleTogdGhpcy5nZXRSZWNvcmRLZXksIGRpc2FibGVkOiBjaGVja2JveEFsbERpc2FibGVkLCBwcmVmaXhDbHM6IHByZWZpeENscywgb25TZWxlY3Q6IHRoaXMuaGFuZGxlU2VsZWN0Um93LCBzZWxlY3Rpb25zOiByb3dTZWxlY3Rpb24uc2VsZWN0aW9ucywgaGlkZURlZmF1bHRTZWxlY3Rpb25zOiByb3dTZWxlY3Rpb24uaGlkZURlZmF1bHRTZWxlY3Rpb25zLCBnZXRQb3B1cENvbnRhaW5lcjogdGhpcy5nZXRQb3B1cENvbnRhaW5lciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCdmaXhlZCcgaW4gcm93U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbHVtbi5maXhlZCA9IHJvd1NlbGVjdGlvbi5maXhlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbnMuc29tZShmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4uZml4ZWQgPT09ICdsZWZ0JyB8fCBjb2x1bW4uZml4ZWQgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29sdW1uLmZpeGVkID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uc1swXSAmJiBjb2x1bW5zWzBdLmtleSA9PT0gJ3NlbGVjdGlvbi1jb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNbMF0gPSBzZWxlY3Rpb25Db2x1bW47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHNlbGVjdGlvbkNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENvbHVtbktleScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb2x1bW5LZXkoY29sdW1uLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5rZXkgfHwgY29sdW1uLmRhdGFJbmRleCB8fCBpbmRleDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TWF4Q3VycmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYXhDdXJyZW50KHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlJHBhZ2luYXRpb24gPSB0aGlzLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IF9zdGF0ZSRwYWdpbmF0aW9uLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcGFnZVNpemUgPSBfc3RhdGUkcGFnaW5hdGlvbi5wYWdlU2l6ZTtcblxuICAgICAgICAgICAgaWYgKChjdXJyZW50IC0gMSkgKiBwYWdlU2l6ZSA+PSB0b3RhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0b3RhbCAtIDEpIC8gcGFnZVNpemUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1NvcnRDb2x1bW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTb3J0Q29sdW1uKGNvbHVtbikge1xuICAgICAgICAgICAgdmFyIHNvcnRDb2x1bW4gPSB0aGlzLnN0YXRlLnNvcnRDb2x1bW47XG5cbiAgICAgICAgICAgIGlmICghY29sdW1uIHx8ICFzb3J0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uS2V5KHNvcnRDb2x1bW4pID09PSB0aGlzLmdldENvbHVtbktleShjb2x1bW4pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJDb2x1bW5zRHJvcGRvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29sdW1uc0Ryb3Bkb3duKGNvbHVtbnMsIGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBkcm9wZG93blByZWZpeENscyA9IF9wcm9wczIuZHJvcGRvd25QcmVmaXhDbHM7XG4gICAgICAgICAgICB2YXIgc29ydE9yZGVyID0gdGhpcy5zdGF0ZS5zb3J0T3JkZXI7XG5cbiAgICAgICAgICAgIHJldHVybiB0cmVlTWFwKGNvbHVtbnMsIGZ1bmN0aW9uIChvcmlnaW5Db2x1bW4sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gX2V4dGVuZHMoe30sIG9yaWdpbkNvbHVtbik7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IF90aGlzNy5nZXRDb2x1bW5LZXkoY29sdW1uLCBpKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyRHJvcGRvd24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHNvcnRCdXR0b24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJzICYmIGNvbHVtbi5maWx0ZXJzLmxlbmd0aCA+IDAgfHwgY29sdW1uLmZpbHRlckRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xGaWx0ZXJzID0gX3RoaXM3LnN0YXRlLmZpbHRlcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyRHJvcGRvd24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbHRlckRyb3Bkb3duLCB7IGxvY2FsZTogbG9jYWxlLCBjb2x1bW46IGNvbHVtbiwgc2VsZWN0ZWRLZXlzOiBjb2xGaWx0ZXJzLCBjb25maXJtRmlsdGVyOiBfdGhpczcuaGFuZGxlRmlsdGVyLCBwcmVmaXhDbHM6IHByZWZpeENscyArICctZmlsdGVyJywgZHJvcGRvd25QcmVmaXhDbHM6IGRyb3Bkb3duUHJlZml4Q2xzIHx8ICdhbnQtZHJvcGRvd24nLCBnZXRQb3B1cENvbnRhaW5lcjogX3RoaXM3LmdldFBvcHVwQ29udGFpbmVyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnNvcnRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTb3J0Q29sdW1uID0gX3RoaXM3LmlzU29ydENvbHVtbihjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTb3J0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjb2x1bW4uY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIHByZWZpeENscyArICctY29sdW1uLXNvcnQnLCBzb3J0T3JkZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBc2NlbmQgPSBpc1NvcnRDb2x1bW4gJiYgc29ydE9yZGVyID09PSAnYXNjZW5kJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRGVzY2VuZCA9IGlzU29ydENvbHVtbiAmJiBzb3J0T3JkZXIgPT09ICdkZXNjZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbHVtbi1zb3J0ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jb2x1bW4tc29ydGVyLXVwICcgKyAoaXNBc2NlbmQgPyAnb24nIDogJ29mZicpLCB0aXRsZTogJ1xcdTIxOTEnLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNy50b2dnbGVTb3J0T3JkZXIoJ2FzY2VuZCcsIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2NhcmV0LXVwJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbHVtbi1zb3J0ZXItZG93biAnICsgKGlzRGVzY2VuZCA/ICdvbicgOiAnb2ZmJyksIHRpdGxlOiAnXFx1MjE5MycsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM3LnRvZ2dsZVNvcnRPcmRlcignZGVzY2VuZCcsIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2NhcmV0LWRvd24nIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHVtbi50aXRsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckRyb3Bkb3duXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoc29ydEJ1dHRvbiB8fCBmaWx0ZXJEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLWNvbHVtbi1oYXMtZmlsdGVycycsIGNvbHVtbi5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclBhZ2luYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGFnaW5hdGlvbihwYWdpbmF0aW9uUG9zaXRpb24pIHtcbiAgICAgICAgICAgIC8vIOW8uuWItuS4jemcgOimgeWIhumhtVxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1BhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNpemUgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbiA9IHRoaXMuc3RhdGUucGFnaW5hdGlvbjtcblxuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24uc2l6ZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBwYWdpbmF0aW9uLnNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2l6ZSA9PT0gJ21pZGRsZScgfHwgdGhpcy5wcm9wcy5zaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBwYWdpbmF0aW9uLnBvc2l0aW9uIHx8ICdib3R0b20nO1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gcGFnaW5hdGlvbi50b3RhbCB8fCB0aGlzLmdldExvY2FsRGF0YSgpLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbCA+IDAgJiYgKHBvc2l0aW9uID09PSBwYWdpbmF0aW9uUG9zaXRpb24gfHwgcG9zaXRpb24gPT09ICdib3RoJykgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRpb24sIF9leHRlbmRzKHsga2V5OiAncGFnaW5hdGlvbi0nICsgcGFnaW5hdGlvblBvc2l0aW9uIH0sIHBhZ2luYXRpb24sIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHBhZ2luYXRpb24uY2xhc3NOYW1lLCB0aGlzLnByb3BzLnByZWZpeENscyArICctcGFnaW5hdGlvbicpLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVQYWdlQ2hhbmdlLCB0b3RhbDogdG90YWwsIHNpemU6IHNpemUsIGN1cnJlbnQ6IHRoaXMuZ2V0TWF4Q3VycmVudCh0b3RhbCksIG9uU2hvd1NpemVDaGFuZ2U6IHRoaXMuaGFuZGxlU2hvd1NpemVDaGFuZ2UgfSkpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgcGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXBhcmVQYXJhbXNBcmd1bWVudHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZVBhcmFtc0FyZ3VtZW50cyhzdGF0ZSkge1xuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBfZXh0ZW5kcyh7fSwgc3RhdGUucGFnaW5hdGlvbik7XG4gICAgICAgICAgICAvLyByZW1vdmUgdXNlbGVzcyBoYW5kbGUgZnVuY3Rpb24gaW4gVGFibGUub25DaGFuZ2VcbiAgICAgICAgICAgIGRlbGV0ZSBwYWdpbmF0aW9uLm9uQ2hhbmdlO1xuICAgICAgICAgICAgZGVsZXRlIHBhZ2luYXRpb24ub25TaG93U2l6ZUNoYW5nZTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJzID0gc3RhdGUuZmlsdGVycztcbiAgICAgICAgICAgIHZhciBzb3J0ZXIgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zb3J0Q29sdW1uICYmIHN0YXRlLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgICAgIHNvcnRlci5jb2x1bW4gPSBzdGF0ZS5zb3J0Q29sdW1uO1xuICAgICAgICAgICAgICAgIHNvcnRlci5vcmRlciA9IHN0YXRlLnNvcnRPcmRlcjtcbiAgICAgICAgICAgICAgICBzb3J0ZXIuZmllbGQgPSBzdGF0ZS5zb3J0Q29sdW1uLmRhdGFJbmRleDtcbiAgICAgICAgICAgICAgICBzb3J0ZXIuY29sdW1uS2V5ID0gdGhpcy5nZXRDb2x1bW5LZXkoc3RhdGUuc29ydENvbHVtbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW3BhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcl07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZpbmRDb2x1bW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmluZENvbHVtbihteUtleSkge1xuICAgICAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2b2lkIDA7XG4gICAgICAgICAgICB0cmVlTWFwKHRoaXMuY29sdW1ucywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXM4LmdldENvbHVtbktleShjKSA9PT0gbXlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEN1cnJlbnRQYWdlRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZURhdGEoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TG9jYWxEYXRhKCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBwYWdlU2l6ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInliIbpobXnmoTor53vvIzpu5jorqTlhajpg6jlsZXnpLpcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhZ2VTaXplID0gc3RhdGUucGFnaW5hdGlvbi5wYWdlU2l6ZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXRNYXhDdXJyZW50KHN0YXRlLnBhZ2luYXRpb24udG90YWwgfHwgZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5YiG6aG1XG4gICAgICAgICAgICAvLyAtLS1cbiAgICAgICAgICAgIC8vIOW9k+aVsOaNrumHj+WwkeS6juetieS6juavj+mhteaVsOmHj+aXtu+8jOebtOaOpeiuvue9ruaVsOaNrlxuICAgICAgICAgICAgLy8g5ZCm5YiZ6L+b6KGM6K+75Y+W5YiG6aG15pWw5o2uXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiBwYWdlU2l6ZSB8fCBwYWdlU2l6ZSA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoXywgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA+PSAoY3VycmVudCAtIDEpICogcGFnZVNpemUgJiYgaSA8IGN1cnJlbnQgKiBwYWdlU2l6ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRGbGF0RGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbGF0RGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0QXJyYXkodGhpcy5nZXRMb2NhbERhdGEoKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEZsYXRDdXJyZW50UGFnZURhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmxhdEN1cnJlbnRQYWdlRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0QXJyYXkodGhpcy5nZXRDdXJyZW50UGFnZURhdGEoKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY3Vyc2l2ZVNvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjdXJzaXZlU29ydChkYXRhLCBzb3J0ZXJGbikge1xuICAgICAgICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMkY2hpbGRyZW5Db2x1bW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuQ29sdW1uTmFtZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNvbHVtbk5hbWUgPSBfcHJvcHMkY2hpbGRyZW5Db2x1bW4gPT09IHVuZGVmaW5lZCA/ICdjaGlsZHJlbicgOiBfcHJvcHMkY2hpbGRyZW5Db2x1bW47XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhLnNvcnQoc29ydGVyRm4pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtW2NoaWxkcmVuQ29sdW1uTmFtZV0gPyBfZXh0ZW5kcyh7fSwgaXRlbSwgX2RlZmluZVByb3BlcnR5KHt9LCBjaGlsZHJlbkNvbHVtbk5hbWUsIF90aGlzOS5yZWN1cnNpdmVTb3J0KGl0ZW1bY2hpbGRyZW5Db2x1bW5OYW1lXSwgc29ydGVyRm4pKSkgOiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldExvY2FsRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbERhdGEoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBkYXRhU291cmNlIHx8IFtdO1xuICAgICAgICAgICAgLy8g5LyY5YyW5pys5Zyw5o6S5bqPXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgwKTtcbiAgICAgICAgICAgIHZhciBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLnJlY3Vyc2l2ZVNvcnQoZGF0YSwgc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g562b6YCJXG4gICAgICAgICAgICBpZiAoc3RhdGUuZmlsdGVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbktleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gX3RoaXMxMC5maW5kQ29sdW1uKGNvbHVtbktleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHN0YXRlLmZpbHRlcnNbY29sdW1uS2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgb25GaWx0ZXIgPSBjb2wub25GaWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBvbkZpbHRlciA/IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkZpbHRlcih2LCByZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogZGF0YTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVDb21wb25lbnRzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICAgICAgICB2YXIgcHJldkNvbXBvbmVudHMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgICAgIHZhciBib2R5Um93ID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmJvZHkgJiYgY29tcG9uZW50cy5ib2R5LnJvdztcbiAgICAgICAgICAgIHZhciBwcmVCb2R5Um93ID0gcHJldkNvbXBvbmVudHMgJiYgcHJldkNvbXBvbmVudHMuYm9keSAmJiBwcmV2Q29tcG9uZW50cy5ib2R5LnJvdztcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRzIHx8IGJvZHlSb3cgIT09IHByZUJvZHlSb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBfZXh0ZW5kcyh7fSwgY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmJvZHkgPSBfZXh0ZW5kcyh7fSwgY29tcG9uZW50cy5ib2R5LCB7IHJvdzogY3JlYXRlQm9keVJvdyhib2R5Um93KSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gX3Byb3BzMy5zdHlsZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMzLnByZWZpeENscztcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldEN1cnJlbnRQYWdlRGF0YSgpO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnByb3BzLmxvYWRpbmc7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvYWRpbmcgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNwaW5uaW5nOiBsb2FkaW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0YWJsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnROYW1lOiAnVGFibGUnLCBkZWZhdWx0TG9jYWxlOiBkZWZhdWx0TG9jYWxlLlRhYmxlIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMxMS5yZW5kZXJUYWJsZShsb2NhbGUsIGxvYWRpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBwYWdpbmF0aW9uIG9yIG5vIGRhdGEsXG4gICAgICAgICAgICAvLyB0aGUgaGVpZ2h0IG9mIHNwaW4gc2hvdWxkIGRlY3JlYXNlIGJ5IGhhbGYgb2YgcGFnaW5hdGlvblxuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb25QYXRjaENsYXNzID0gdGhpcy5oYXNQYWdpbmF0aW9uKCkgJiYgZGF0YSAmJiBkYXRhLmxlbmd0aCAhPT0gMCA/IHByZWZpeENscyArICctd2l0aC1wYWdpbmF0aW9uJyA6IHByZWZpeENscyArICctd2l0aG91dC1wYWdpbmF0aW9uJztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscyArICctd3JhcHBlcicsIGNsYXNzTmFtZSksIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFNwaW4sXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBsb2FkaW5nLCB7IGNsYXNzTmFtZTogbG9hZGluZy5zcGlubmluZyA/IHBhZ2luYXRpb25QYXRjaENsYXNzICsgJyAnICsgcHJlZml4Q2xzICsgJy1zcGluLWhvbGRlcicgOiAnJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCd0b3AnKSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbignYm90dG9tJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcblxuVGFibGUuQ29sdW1uID0gQ29sdW1uO1xuVGFibGUuQ29sdW1uR3JvdXAgPSBDb2x1bW5Hcm91cDtcblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1c2VGaXhlZEhlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcm93U2VsZWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZHJvcGRvd25QcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5UYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YVNvdXJjZTogW10sXG4gICAgcHJlZml4Q2xzOiAnYW50LXRhYmxlJyxcbiAgICB1c2VGaXhlZEhlYWRlcjogZmFsc2UsXG4gICAgcm93U2VsZWN0aW9uOiBudWxsLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2l6ZTogJ2xhcmdlJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBib3JkZXJlZDogZmFsc2UsXG4gICAgaW5kZW50U2l6ZTogMjAsXG4gICAgbG9jYWxlOiB7fSxcbiAgICByb3dLZXk6ICdrZXknLFxuICAgIHNob3dIZWFkZXI6IHRydWVcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFibGVSb3coKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3RyJztcblxuICAgIHZhciBCb2R5Um93ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzKEJvZHlSb3csIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIEJvZHlSb3cocHJvcHMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb2R5Um93KTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJvZHlSb3cuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb2R5Um93KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5zdG9yZSA9IHByb3BzLnN0b3JlO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMkc3RvcmUkZ2V0U3RhdGUgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IF90aGlzJHN0b3JlJGdldFN0YXRlLnNlbGVjdGVkUm93S2V5cztcblxuICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKHByb3BzLnJvd0tleSkgPj0gMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhCb2R5Um93LCBbe1xuICAgICAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IF9wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgcm93S2V5ID0gX3Byb3BzLnJvd0tleTtcblxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3N0b3JlJGdldFN0YXRlID0gX3RoaXMyLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMgPSBfc3RvcmUkZ2V0U3RhdGUuc2VsZWN0ZWRSb3dLZXlzO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKHJvd0tleSkgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICE9PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBzZWxlY3RlZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcm93UHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIFsncHJlZml4Q2xzJywgJ3Jvd0tleScsICdzdG9yZSddKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCB0aGlzLnByb3BzLnByZWZpeENscyArICctcm93LXNlbGVjdGVkJywgdGhpcy5zdGF0ZS5zZWxlY3RlZCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCByb3dQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQm9keVJvdztcbiAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gQm9keVJvdztcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHBhcnRpYWwpIHtcbiAgICAgICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHBhcnRpYWwpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFN0YXRlOiBzZXRTdGF0ZSxcbiAgICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZVxuICAgIH07XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTWVudSwgeyBTdWJNZW51LCBJdGVtIGFzIE1lbnVJdGVtIH0gZnJvbSAncmMtbWVudSc7XG5pbXBvcnQgY2xvc2VzdCBmcm9tICdkb20tY2xvc2VzdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9kcm9wZG93bic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jaGVja2JveCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vcmFkaW8nO1xuaW1wb3J0IEZpbHRlckRyb3Bkb3duTWVudVdyYXBwZXIgZnJvbSAnLi9GaWx0ZXJEcm9wZG93bk1lbnVXcmFwcGVyJztcblxudmFyIEZpbHRlck1lbnUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhGaWx0ZXJNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEZpbHRlck1lbnUocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbHRlck1lbnUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGaWx0ZXJNZW51Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmlsdGVyTWVudSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zZXROZXZlclNob3duID0gZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgdmFyIHJvb3ROb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlckJlbG9uZ1RvU2Nyb2xsQm9keSA9ICEhY2xvc2VzdChyb290Tm9kZSwgJy5hbnQtdGFibGUtc2Nyb2xsJyk7XG4gICAgICAgICAgICBpZiAoZmlsdGVyQmVsb25nVG9TY3JvbGxCb2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaXhlZCBjb2x1bW4gaGF2ZSBmaWx0ZXJzLCB0aGVyZSB3aWxsIGJlIHR3byBkcm9wZG93biBtZW51c1xuICAgICAgICAgICAgICAgIC8vIEZpbHRlciBkcm9wZG93biBtZW51IGluc2lkZSBzY3JvbGwgYm9keSBzaG91bGQgbmV2ZXIgYmUgc2hvd25cbiAgICAgICAgICAgICAgICAvLyBUbyBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNTAxMCBhbmRcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83OTA5XG4gICAgICAgICAgICAgICAgX3RoaXMubmV2ZXJTaG93biA9ICEhY29sdW1uLmZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZEtleXMgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IF9yZWYuc2VsZWN0ZWRLZXlzO1xuXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVDbGVhckZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBbXVxuICAgICAgICAgICAgfSwgX3RoaXMuaGFuZGxlQ29uZmlybSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNvbmZpcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIF90aGlzLmNvbmZpcm1GaWx0ZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25WaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFZpc2libGUodmlzaWJsZSk7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb25maXJtRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU1lbnVJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8ua2V5UGF0aC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW0gPSBfdGhpcy5zdGF0ZS5rZXlQYXRoT2ZTZWxlY3RlZEl0ZW07XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzLmluZGV4T2YoaW5mby5rZXkpID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkZXNlbGVjdCBTdWJNZW51IGNoaWxkXG4gICAgICAgICAgICAgICAgZGVsZXRlIGtleVBhdGhPZlNlbGVjdGVkSXRlbVtpbmZvLmtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCBTdWJNZW51IGNoaWxkXG4gICAgICAgICAgICAgICAga2V5UGF0aE9mU2VsZWN0ZWRJdGVtW2luZm8ua2V5XSA9IGluZm8ua2V5UGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsga2V5UGF0aE9mU2VsZWN0ZWRJdGVtOiBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW0gfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbmRlckZpbHRlckljb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBfdGhpcyRwcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMubG9jYWxlLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscztcblxuICAgICAgICAgICAgdmFyIGZpbHRlckljb24gPSBjb2x1bW4uZmlsdGVySWNvbjtcbiAgICAgICAgICAgIHZhciBkcm9wZG93blNlbGVjdGVkQ2xhc3MgPSBfdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMubGVuZ3RoID4gMCA/IHByZWZpeENscyArICctc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySWNvbiA/IFJlYWN0LmNsb25lRWxlbWVudChmaWx0ZXJJY29uLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGxvY2FsZS5maWx0ZXJUaXRsZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoZmlsdGVySWNvbi5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1pY29uJywgdHJ1ZSkpXG4gICAgICAgICAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0aXRsZTogbG9jYWxlLmZpbHRlclRpdGxlLCB0eXBlOiAnZmlsdGVyJywgY2xhc3NOYW1lOiBkcm9wZG93blNlbGVjdGVkQ2xhc3MgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB2aXNpYmxlID0gJ2ZpbHRlckRyb3Bkb3duVmlzaWJsZScgaW4gcHJvcHMuY29sdW1uID8gcHJvcHMuY29sdW1uLmZpbHRlckRyb3Bkb3duVmlzaWJsZSA6IGZhbHNlO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5czogcHJvcHMuc2VsZWN0ZWRLZXlzLFxuICAgICAgICAgICAga2V5UGF0aE9mU2VsZWN0ZWRJdGVtOiB7fSxcbiAgICAgICAgICAgIHZpc2libGU6IHZpc2libGVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGaWx0ZXJNZW51LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbjtcblxuICAgICAgICAgICAgdGhpcy5zZXROZXZlclNob3duKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBuZXh0UHJvcHMuY29sdW1uO1xuXG4gICAgICAgICAgICB0aGlzLnNldE5ldmVyU2hvd24oY29sdW1uKTtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgaWYgKCdzZWxlY3RlZEtleXMnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkS2V5cyA9IG5leHRQcm9wcy5zZWxlY3RlZEtleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2ZpbHRlckRyb3Bkb3duVmlzaWJsZScgaW4gY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUudmlzaWJsZSA9IGNvbHVtbi5maWx0ZXJEcm9wZG93blZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0VmlzaWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbjtcblxuICAgICAgICAgICAgaWYgKCEoJ2ZpbHRlckRyb3Bkb3duVmlzaWJsZScgaW4gY29sdW1uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiB2aXNpYmxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbHVtbi5vbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5vbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlybUZpbHRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25maXJtRmlsdGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkS2V5cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybUZpbHRlcih0aGlzLnByb3BzLmNvbHVtbiwgdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJNZW51SXRlbScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShpdGVtKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5wcm9wcy5jb2x1bW47XG5cbiAgICAgICAgICAgIHZhciBtdWx0aXBsZSA9ICdmaWx0ZXJNdWx0aXBsZScgaW4gY29sdW1uID8gY29sdW1uLmZpbHRlck11bHRpcGxlIDogdHJ1ZTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IG11bHRpcGxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwgeyBjaGVja2VkOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5pbmRleE9mKGl0ZW0udmFsdWUudG9TdHJpbmcoKSkgPj0gMCB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmFkaW8sIHsgY2hlY2tlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpdGVtLnZhbHVlLnRvU3RyaW5nKCkpID49IDAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBNZW51SXRlbSxcbiAgICAgICAgICAgICAgICB7IGtleTogaXRlbS52YWx1ZSB9LFxuICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU3ViTWVudScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNTdWJNZW51KCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyRjb2x1bW4kZmlsdGVycyA9IHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgZmlsdGVycyA9IF9wcm9wcyRjb2x1bW4kZmlsdGVycyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcHJvcHMkY29sdW1uJGZpbHRlcnM7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck1lbnVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnVzKGl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aE9mU2VsZWN0ZWRJdGVtID0gX3RoaXMyLnN0YXRlLmtleVBhdGhPZlNlbGVjdGVkSXRlbTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpblNlbGVjdGVkID0gT2JqZWN0LmtleXMoa2V5UGF0aE9mU2VsZWN0ZWRJdGVtKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW1ba2V5XS5pbmRleE9mKGl0ZW0udmFsdWUpID49IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViTWVudUNscyA9IGNvbnRhaW5TZWxlY3RlZCA/IF90aGlzMi5wcm9wcy5kcm9wZG93blByZWZpeENscyArICctc3VibWVudS1jb250YWluLXNlbGVjdGVkJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Yk1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBpdGVtLnRleHQsIGNsYXNzTmFtZTogc3ViTWVudUNscywga2V5OiBpdGVtLnZhbHVlLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJNZW51cyhpdGVtLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlck1lbnVJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBfcHJvcHMuY29sdW1uLFxuICAgICAgICAgICAgICAgIGxvY2FsZSA9IF9wcm9wcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBkcm9wZG93blByZWZpeENscyA9IF9wcm9wcy5kcm9wZG93blByZWZpeENscyxcbiAgICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF9wcm9wcy5nZXRQb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgbXVsdGlwbGUgc2VsZWN0aW9uIGluIGZpbHRlciBkcm9wZG93blxuXG4gICAgICAgICAgICB2YXIgbXVsdGlwbGUgPSAnZmlsdGVyTXVsdGlwbGUnIGluIGNvbHVtbiA/IGNvbHVtbi5maWx0ZXJNdWx0aXBsZSA6IHRydWU7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd25NZW51Q2xhc3MgPSBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZHJvcGRvd25QcmVmaXhDbHMgKyAnLW1lbnUtd2l0aG91dC1zdWJtZW51JywgIXRoaXMuaGFzU3ViTWVudSgpKSk7XG4gICAgICAgICAgICB2YXIgbWVudXMgPSBjb2x1bW4uZmlsdGVyRHJvcGRvd24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEZpbHRlckRyb3Bkb3duTWVudVdyYXBwZXIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyRHJvcGRvd25cbiAgICAgICAgICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEZpbHRlckRyb3Bkb3duTWVudVdyYXBwZXIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZHJvcGRvd24nIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTWVudSxcbiAgICAgICAgICAgICAgICAgICAgeyBtdWx0aXBsZTogbXVsdGlwbGUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlTWVudUl0ZW1DbGljaywgcHJlZml4Q2xzOiBkcm9wZG93blByZWZpeENscyArICctbWVudScsIGNsYXNzTmFtZTogZHJvcGRvd25NZW51Q2xhc3MsIG9uU2VsZWN0OiB0aGlzLnNldFNlbGVjdGVkS2V5cywgb25EZXNlbGVjdDogdGhpcy5zZXRTZWxlY3RlZEtleXMsIHNlbGVjdGVkS2V5czogdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMsIGdldFBvcHVwQ29udGFpbmVyOiBmdW5jdGlvbiBnZXRQb3B1cENvbnRhaW5lcih0cmlnZ2VyTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyTm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1lbnVzKGNvbHVtbi5maWx0ZXJzKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRyb3Bkb3duLWJ0bnMnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kcm9wZG93bi1saW5rIGNvbmZpcm0nLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNvbmZpcm0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZS5maWx0ZXJDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kcm9wZG93bi1saW5rIGNsZWFyJywgb25DbGljazogdGhpcy5oYW5kbGVDbGVhckZpbHRlcnMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZS5maWx0ZXJSZXNldFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIERyb3Bkb3duLFxuICAgICAgICAgICAgICAgIHsgdHJpZ2dlcjogWydjbGljayddLCBvdmVybGF5OiBtZW51cywgdmlzaWJsZTogdGhpcy5uZXZlclNob3duID8gZmFsc2UgOiB0aGlzLnN0YXRlLnZpc2libGUsIG9uVmlzaWJsZUNoYW5nZTogdGhpcy5vblZpc2libGVDaGFuZ2UsIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciwgZm9yY2VSZW5kZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbHRlckljb24oKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGaWx0ZXJNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJNZW51O1xuXG5GaWx0ZXJNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVGaWx0ZXI6IGZ1bmN0aW9uIGhhbmRsZUZpbHRlcigpIHt9LFxuXG4gICAgY29sdW1uOiB7fVxufTsiLCJpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSc7XG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbi8vIHN0eWxlIGRlcGVuZGVuY2llc1xuaW1wb3J0ICcuLi8uLi9yYWRpby9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9jaGVja2JveC9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9kcm9wZG93bi9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9zcGluL3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3BhZ2luYXRpb24vc3R5bGUvY3NzJzsiLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXRBcnJheSgpIHtcbiAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgdmFyIGNoaWxkcmVuTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2NoaWxkcmVuJztcblxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uIGxvb3AoYXJyYXkpIHtcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1bY2hpbGRyZW5OYW1lXSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdJdGVtID0gX2V4dGVuZHMoe30sIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdJdGVtW2NoaWxkcmVuTmFtZV07XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bY2hpbGRyZW5OYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvb3AoaXRlbVtjaGlsZHJlbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxvb3AoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmVlTWFwKHRyZWUsIG1hcHBlcikge1xuICAgIHZhciBjaGlsZHJlbk5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdjaGlsZHJlbic7XG5cbiAgICByZXR1cm4gdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XG4gICAgICAgIHZhciBleHRyYSA9IHt9O1xuICAgICAgICBpZiAobm9kZVtjaGlsZHJlbk5hbWVdKSB7XG4gICAgICAgICAgICBleHRyYVtjaGlsZHJlbk5hbWVdID0gdHJlZU1hcChub2RlW2NoaWxkcmVuTmFtZV0sIG1hcHBlciwgY2hpbGRyZW5OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG1hcHBlcihub2RlLCBpbmRleCksIGV4dHJhKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmbGF0RmlsdGVyKHRyZWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRyZWUucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKG5vZGUpKSB7XG4gICAgICAgICAgICBhY2MucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gZmxhdEZpbHRlcihub2RlLmNoaWxkcmVuLCBjYWxsYmFjayk7XG4gICAgICAgICAgICBhY2MucHVzaC5hcHBseShhY2MsIF90b0NvbnN1bWFibGVBcnJheShjaGlsZHJlbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbHVtbnMoZWxlbWVudHMpIHtcbiAgICB2YXIgY29sdW1ucyA9IFtdO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29sdW1uID0gX2V4dGVuZHMoe30sIGVsZW1lbnQucHJvcHMpO1xuICAgICAgICBpZiAoZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgIGNvbHVtbi5rZXkgPSBlbGVtZW50LmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5fX0FOVF9UQUJMRV9DT0xVTU5fR1JPVVApIHtcbiAgICAgICAgICAgIGNvbHVtbi5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNvbHVtbnMoY29sdW1uLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY1RhYnMsIHsgVGFiUGFuZSB9IGZyb20gJ3JjLXRhYnMnO1xuaW1wb3J0IFNjcm9sbGFibGVJbmtUYWJCYXIgZnJvbSAncmMtdGFicy9lcy9TY3JvbGxhYmxlSW5rVGFiQmFyJztcbmltcG9ydCBUYWJDb250ZW50IGZyb20gJ3JjLXRhYnMvZXMvVGFiQ29udGVudCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgaXNGbGV4U3VwcG9ydGVkIGZyb20gJy4uL191dGlsL2lzRmxleFN1cHBvcnRlZCc7XG5cbnZhciBUYWJzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVGFicywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUYWJzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFicyk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRhYnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuY3JlYXRlTmV3VGFiID0gZnVuY3Rpb24gKHRhcmdldEtleSkge1xuICAgICAgICAgICAgdmFyIG9uRWRpdCA9IF90aGlzLnByb3BzLm9uRWRpdDtcbiAgICAgICAgICAgIGlmIChvbkVkaXQpIHtcbiAgICAgICAgICAgICAgICBvbkVkaXQodGFyZ2V0S2V5LCAnYWRkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbW92ZVRhYiA9IGZ1bmN0aW9uICh0YXJnZXRLZXksIGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldEtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvbkVkaXQgPSBfdGhpcy5wcm9wcy5vbkVkaXQ7XG4gICAgICAgICAgICBpZiAob25FZGl0KSB7XG4gICAgICAgICAgICAgICAgb25FZGl0KHRhcmdldEtleSwgJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoYWN0aXZlS2V5KSB7XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGFjdGl2ZUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFicywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB2YXIgTk9fRkxFWCA9ICcgbm8tZmxleCc7XG4gICAgICAgICAgICB2YXIgdGFiTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHRhYk5vZGUgJiYgIWlzRmxleFN1cHBvcnRlZCgpICYmIHRhYk5vZGUuY2xhc3NOYW1lLmluZGV4T2YoTk9fRkxFWCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFiTm9kZS5jbGFzc05hbWUgKz0gTk9fRkxFWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemUsXG4gICAgICAgICAgICAgICAgX3Byb3BzJHR5cGUgPSBfcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHVuZGVmaW5lZCA/ICdsaW5lJyA6IF9wcm9wcyR0eXBlLFxuICAgICAgICAgICAgICAgIHRhYlBvc2l0aW9uID0gX3Byb3BzLnRhYlBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHRhYkJhckV4dHJhQ29udGVudCA9IF9wcm9wcy50YWJCYXJFeHRyYUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdGFiQmFyU3R5bGUgPSBfcHJvcHMudGFiQmFyU3R5bGUsXG4gICAgICAgICAgICAgICAgaGlkZUFkZCA9IF9wcm9wcy5oaWRlQWRkLFxuICAgICAgICAgICAgICAgIG9uVGFiQ2xpY2sgPSBfcHJvcHMub25UYWJDbGljayxcbiAgICAgICAgICAgICAgICBvblByZXZDbGljayA9IF9wcm9wcy5vblByZXZDbGljayxcbiAgICAgICAgICAgICAgICBvbk5leHRDbGljayA9IF9wcm9wcy5vbk5leHRDbGljayxcbiAgICAgICAgICAgICAgICBfcHJvcHMkYW5pbWF0ZWQgPSBfcHJvcHMuYW5pbWF0ZWQsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQgPSBfcHJvcHMkYW5pbWF0ZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcHJvcHMkYW5pbWF0ZWQsXG4gICAgICAgICAgICAgICAgdGFiQmFyR3V0dGVyID0gX3Byb3BzLnRhYkJhckd1dHRlcjtcblxuICAgICAgICAgICAgdmFyIF9yZWYgPSAodHlwZW9mIGFuaW1hdGVkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhbmltYXRlZCkpID09PSAnb2JqZWN0JyA/IHtcbiAgICAgICAgICAgICAgICBpbmtCYXJBbmltYXRlZDogYW5pbWF0ZWQuaW5rQmFyLCB0YWJQYW5lQW5pbWF0ZWQ6IGFuaW1hdGVkLnRhYlBhbmVcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgaW5rQmFyQW5pbWF0ZWQ6IGFuaW1hdGVkLCB0YWJQYW5lQW5pbWF0ZWQ6IGFuaW1hdGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlua0JhckFuaW1hdGVkID0gX3JlZi5pbmtCYXJBbmltYXRlZCxcbiAgICAgICAgICAgICAgICB0YWJQYW5lQW5pbWF0ZWQgPSBfcmVmLnRhYlBhbmVBbmltYXRlZDtcbiAgICAgICAgICAgIC8vIGNhcmQgdGFicyBzaG91bGQgbm90IGhhdmUgYW5pbWF0aW9uXG5cblxuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgIHRhYlBhbmVBbmltYXRlZCA9ICdhbmltYXRlZCcgaW4gdGhpcy5wcm9wcyA/IHRhYlBhbmVBbmltYXRlZCA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2FybmluZyghKHR5cGUuaW5kZXhPZignY2FyZCcpID49IDAgJiYgKHNpemUgPT09ICdzbWFsbCcgfHwgc2l6ZSA9PT0gJ2xhcmdlJykpLCAnVGFic1t0eXBlPWNhcmR8ZWRpdGFibGUtY2FyZF0gZG9lc25cXCd0IGhhdmUgc21hbGwgb3IgbGFyZ2Ugc2l6ZSwgaXRcXCdzIGJ5IGRlc2lnbmVkLicpO1xuICAgICAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXZlcnRpY2FsJywgdGFiUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0YWJQb3NpdGlvbiA9PT0gJ3JpZ2h0JyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSwgISFzaXplKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWNhcmQnLCB0eXBlLmluZGV4T2YoJ2NhcmQnKSA+PSAwKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyB0eXBlLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLW5vLWFuaW1hdGlvbicsICF0YWJQYW5lQW5pbWF0ZWQpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgLy8gb25seSBjYXJkIHR5cGUgdGFicyBjYW4gYmUgYWRkZWQgYW5kIGNsb3NlZFxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuV2l0aENsb3NlID0gW107XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5XaXRoQ2xvc2UgPSBbXTtcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zYWJsZSA9IGNoaWxkLnByb3BzLmNsb3NhYmxlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZSA9IHR5cGVvZiBjbG9zYWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogY2xvc2FibGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZUljb24gPSBjbG9zYWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY2xvc2UnLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbW92ZVRhYihjaGlsZC5rZXksIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuV2l0aENsb3NlLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsb3NhYmxlID8gdW5kZWZpbmVkIDogcHJlZml4Q2xzICsgJy10YWItdW5jbG9zYWJsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy50YWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjaGlsZC5rZXkgfHwgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgdGFiIGhhbmRsZXJcbiAgICAgICAgICAgICAgICBpZiAoIWhpZGVBZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ3BsdXMnLCBjbGFzc05hbWU6IHByZWZpeENscyArICctbmV3LXRhYicsIG9uQ2xpY2s6IHRoaXMuY3JlYXRlTmV3VGFiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50ID0gdGFiQmFyRXh0cmFDb250ZW50ID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1leHRyYS1jb250ZW50JyB9LFxuICAgICAgICAgICAgICAgIHRhYkJhckV4dHJhQ29udGVudFxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgcmVuZGVyVGFiQmFyID0gZnVuY3Rpb24gcmVuZGVyVGFiQmFyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVJbmtUYWJCYXIsIHsgaW5rQmFyQW5pbWF0ZWQ6IGlua0JhckFuaW1hdGVkLCBleHRyYUNvbnRlbnQ6IHRhYkJhckV4dHJhQ29udGVudCwgb25UYWJDbGljazogb25UYWJDbGljaywgb25QcmV2Q2xpY2s6IG9uUHJldkNsaWNrLCBvbk5leHRDbGljazogb25OZXh0Q2xpY2ssIHN0eWxlOiB0YWJCYXJTdHlsZSwgdGFiQmFyR3V0dGVyOiB0YWJCYXJHdXR0ZXIgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUmNUYWJzLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogY2xzLCB0YWJCYXJQb3NpdGlvbjogdGFiUG9zaXRpb24sIHJlbmRlclRhYkJhcjogcmVuZGVyVGFiQmFyLCByZW5kZXJUYWJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJUYWJDb250ZW50KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiQ29udGVudCwgeyBhbmltYXRlZDogdGFiUGFuZUFuaW1hdGVkLCBhbmltYXRlZFdpdGhNYXJnaW46IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSB9KSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbldpdGhDbG9zZS5sZW5ndGggPiAwID8gY2hpbGRyZW5XaXRoQ2xvc2UgOiBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWJzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuXG5UYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LXRhYnMnLFxuICAgIGhpZGVBZGQ6IGZhbHNlXG59OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUmNUaW1lUGlja2VyIGZyb20gJ3JjLXRpbWUtcGlja2VyL2VzL1RpbWVQaWNrZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4vbG9jYWxlL2VuX1VTJztcbmltcG9ydCBpbnRlcm9wRGVmYXVsdCBmcm9tICcuLi9fdXRpbC9pbnRlcm9wRGVmYXVsdCc7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaG93SG91ck1pbnV0ZVNlY29uZChmb3JtYXQpIHtcbiAgICAvLyBSZWY6IGh0dHA6Ly9tb21lbnRqcy5jb20vZG9jcy8jL3BhcnNpbmcvc3RyaW5nLWZvcm1hdC9cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93SG91cjogZm9ybWF0LmluZGV4T2YoJ0gnKSA+IC0xIHx8IGZvcm1hdC5pbmRleE9mKCdoJykgPiAtMSB8fCBmb3JtYXQuaW5kZXhPZignaycpID4gLTEsXG4gICAgICAgIHNob3dNaW51dGU6IGZvcm1hdC5pbmRleE9mKCdtJykgPiAtMSxcbiAgICAgICAgc2hvd1NlY29uZDogZm9ybWF0LmluZGV4T2YoJ3MnKSA+IC0xXG4gICAgfTtcbn1cblxudmFyIFRpbWVQaWNrZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUaW1lUGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRpbWVQaWNrZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVQaWNrZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUaW1lUGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGltZVBpY2tlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghKCd2YWx1ZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIF90aGlzJHByb3BzJGZvcm1hdCA9IF90aGlzJHByb3BzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBfdGhpcyRwcm9wcyRmb3JtYXQgPT09IHVuZGVmaW5lZCA/ICdISDptbTpzcycgOiBfdGhpcyRwcm9wcyRmb3JtYXQ7XG5cbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlLCB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU9wZW5DbG9zZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYub3BlbjtcbiAgICAgICAgICAgIHZhciBvbk9wZW5DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2Uob3Blbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVUaW1lUGlja2VyID0gZnVuY3Rpb24gKHRpbWVQaWNrZXJSZWYpIHtcbiAgICAgICAgICAgIF90aGlzLnRpbWVQaWNrZXJSZWYgPSB0aW1lUGlja2VyUmVmO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJUaW1lUGlja2VyID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIF90aGlzLnByb3BzKTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gX3RoaXMuZ2V0RGVmYXVsdEZvcm1hdCgpO1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMuY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BzLnByZWZpeENscyArICctJyArIHByb3BzLnNpemUsICEhcHJvcHMuc2l6ZSkpO1xuICAgICAgICAgICAgdmFyIGFkZG9uID0gZnVuY3Rpb24gYWRkb24ocGFuZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuYWRkb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctcGFuZWwtYWRkb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmFkZG9uKHBhbmVsKVxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJjVGltZVBpY2tlciwgX2V4dGVuZHMoe30sIGdlbmVyYXRlU2hvd0hvdXJNaW51dGVTZWNvbmQoZm9ybWF0KSwgcHJvcHMsIHsgcmVmOiBfdGhpcy5zYXZlVGltZVBpY2tlciwgZm9ybWF0OiBmb3JtYXQsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCB2YWx1ZTogX3RoaXMuc3RhdGUudmFsdWUsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciA9PT0gdW5kZWZpbmVkID8gbG9jYWxlLnBsYWNlaG9sZGVyIDogcHJvcHMucGxhY2Vob2xkZXIsIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVDaGFuZ2UsIG9uT3BlbjogX3RoaXMuaGFuZGxlT3BlbkNsb3NlLCBvbkNsb3NlOiBfdGhpcy5oYW5kbGVPcGVuQ2xvc2UsIGFkZG9uOiBhZGRvbiB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmICFpbnRlcm9wRGVmYXVsdChtb21lbnQpLmlzTW9tZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUvZGVmYXVsdFZhbHVlIG9mIFRpbWVQaWNrZXIgbXVzdCBiZSBhIG1vbWVudCBvYmplY3QgYWZ0ZXIgYGFudGRAMi4wYCwgJyArICdzZWU6IGh0dHBzOi8vdS5hbnQuZGVzaWduL3RpbWUtcGlja2VyLXZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUaW1lUGlja2VyLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5leHRQcm9wcy52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXJSZWYuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyUmVmLmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVmYXVsdEZvcm1hdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gX3Byb3BzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICB1c2UxMkhvdXJzID0gX3Byb3BzLnVzZTEySG91cnM7XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1c2UxMkhvdXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoOm1tOnNzIGEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdISDptbTpzcyc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMb2NhbGVSZWNlaXZlcixcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdUaW1lUGlja2VyJywgZGVmYXVsdExvY2FsZTogZGVmYXVsdExvY2FsZSB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGltZVBpY2tlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUaW1lUGlja2VyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGlja2VyO1xuXG5UaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtdGltZS1waWNrZXInLFxuICAgIGFsaWduOiB7XG4gICAgICAgIG9mZnNldDogWzAsIC0yXVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkSG91cnM6IHVuZGVmaW5lZCxcbiAgICBkaXNhYmxlZE1pbnV0ZXM6IHVuZGVmaW5lZCxcbiAgICBkaXNhYmxlZFNlY29uZHM6IHVuZGVmaW5lZCxcbiAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b21MZWZ0JyxcbiAgICB0cmFuc2l0aW9uTmFtZTogJ3NsaWRlLXVwJyxcbiAgICBmb2N1c09uT3BlbjogdHJ1ZVxufTsiLCJ2YXIgbG9jYWxlID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IHRpbWUnXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2lucHV0L3N0eWxlL2Nzcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==