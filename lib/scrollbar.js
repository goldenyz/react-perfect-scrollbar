'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _perfectScrollbar = require('perfect-scrollbar');

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
    'ps-scroll-y': 'onScrollY',
    'ps-scroll-x': 'onScrollX',
    'ps-scroll-up': 'onScrollUp',
    'ps-scroll-down': 'onScrollDown',
    'ps-scroll-left': 'onScrollLeft',
    'ps-scroll-right': 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end': 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
    _inherits(ScrollBar, _Component);

    function ScrollBar(props) {
        _classCallCheck(this, ScrollBar);

        var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

        _this._handlerByEvent = new Map();
        return _this;
    }

    _createClass(ScrollBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _perfectScrollbar2.default.initialize(this._container, this.props.option);
            // hook up events
            Object.keys(handlerNameByEvent).forEach(function (key) {
                var callback = _this2.props[handlerNameByEvent[key]];
                if (callback) {
                    var handler = function handler() {
                        return callback(_this2._container);
                    };
                    _this2._handlerByEvent.set(key, handler);
                    _this2._container.addEventListener(key, handler, false);
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            // unhook up evens
            Object.keys(this._handlerByEvent).forEach(function (value, key) {
                _this3._container.removeEventListener(key, value, false);
            });
            this._handlerByEvent.clear();
            _perfectScrollbar2.default.destroy(this._container);
        }

        // methods can be invoked by outside

    }, {
        key: 'setScrollTop',
        value: function setScrollTop(top) {
            if (this._container) {
                this._container.scrollTop = top;
                _perfectScrollbar2.default.update(this._container);

                return true;
            }
            return false;
        }
    }, {
        key: 'setScrollLeft',
        value: function setScrollLeft(left) {
            if (this._container) {
                this._container.scrollLeft = left;
                _perfectScrollbar2.default.update(this._container);

                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var children = this.props.children;


            return _react2.default.createElement(
                'div',
                { className: 'scrollbar-container', ref: function ref(_ref) {
                        _this4._container = _ref;
                    } },
                children
            );
        }
    }]);

    return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
    option: undefined,
    onScrollY: undefined,
    onScrollX: undefined,
    onScrollUp: undefined,
    onScrollDown: undefined,
    onScrollLeft: undefined,
    onScrollRight: undefined,
    onYReachStart: undefined,
    onYReachEnd: undefined,
    onXReachStart: undefined,
    onXReachEnd: undefined
};

ScrollBar.propTypes = {
    children: _propTypes2.default.node.isRequired,
    option: _propTypes2.default.object,
    onScrollY: _propTypes2.default.func,
    onScrollX: _propTypes2.default.func,
    onScrollUp: _propTypes2.default.func,
    onScrollDown: _propTypes2.default.func,
    onScrollLeft: _propTypes2.default.func,
    onScrollRight: _propTypes2.default.func,
    onYReachStart: _propTypes2.default.func,
    onYReachEnd: _propTypes2.default.func,
    onXReachStart: _propTypes2.default.func,
    onXReachEnd: _propTypes2.default.func
};
module.exports = exports['default'];