'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

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

    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = new Map();
    return _this;
  }

  _createClass(ScrollBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._ps = new _perfectScrollbar2.default(this._container, this.props.option);
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._ps.update();
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
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll() {
      this._ps.update();
    }
  }, {
    key: 'handleRef',
    value: function handleRef(ref) {
      this._container = ref;
      this.props.containerRef(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          component = _props.component;

      var Comp = component;

      return _react2.default.createElement(
        Comp,
        { className: 'scrollbar-container ' + className, ref: this.handleRef },
        children
      );
    }
  }]);

  return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  component: 'div'
};

ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  option: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
};
module.exports = exports.default;