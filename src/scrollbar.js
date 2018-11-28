import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';

const handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd',
};
Object.freeze(handlerNameByEvent);

export default class ScrollBar extends Component {
  constructor(props) {
    super(props);

    this.handleRef = this.handleRef.bind(this);
    this._handlerByEvent = {};
  }

  componentDidMount() {
    this._init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.shouldRefresh
      && !this._isEqual(prevProps.option, this.props.option)) {
      this.refresh();
      return;
    }
    this._updateEventHook(prevProps);
    this._ps.update();
  }

  componentWillUnmount() {
    this._destroy();
  }

  _init() {
    this._ps = new PerfectScrollbar(this._container, this.props.option);
    // hook up events
    this._updateEventHook();
  }

  _destroy() {
    // unhook up evens
    Object.keys(this._handlerByEvent).forEach((key) => {
      const value = this._handlerByEvent[key];

      if (value) {
        this._container.removeEventListener(key, value, false);
      }
    });
    this._handlerByEvent = {};
    this._ps.destroy();
    this._ps = null;
  }

  _isEqual(a, b) {
    // create arrays of property names
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    // if number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) return false;

    for (let i = 0; i < aProps.length; i++) {
      const propName = aProps[i];

      // if values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }

      // if both values are arrays such as handlers option in perfect-scollbar
      if (Array.isArray(a[propName])) {
        const aArray = a[propName];
        const bArray = b[propName];
        if (aArray.length !== bArray.length) return false;
        for (let j = 0; j < aArray.length; j++) {
          if (aArray[j] !== bArray[j]) return false;
        }
      }
    }

    // if we made it this far, objects
    // are considered equivalent
    return true;
  }

  _updateEventHook(prevProps = {}) {
    // hook up events
    Object.keys(handlerNameByEvent).forEach((key) => {
      const callback = this.props[handlerNameByEvent[key]];
      const prevCallback = prevProps[handlerNameByEvent[key]];
      if (callback !== prevCallback) {
        if (prevCallback) {
          const prevHandler = this._handlerByEvent[key];
          this._container.removeEventListener(key, prevHandler, false);
          this._handlerByEvent[key] = null;
        }
        if (callback) {
          const handler = () => callback(this._container);
          this._container.addEventListener(key, handler, false);
          this._handlerByEvent[key] = handler;
        }
      }
    });
  }

  updateScroll() {
    this._ps.update();
  }

  refresh() {
    this._destroy();
    this._init();
  }

  handleRef(ref) {
    this._container = ref;
    this.props.containerRef(ref);
  }

  render() {
    const {
      children, component, className, style,
    } = this.props;
    const Comp = component;

    return (
      <Comp style={style} className={`scrollbar-container ${className}`} ref={this.handleRef}>
        {children}
      </Comp>
    );
  }
}

ScrollBar.defaultProps = {
  className: '',
  style: undefined,
  option: undefined,
  shouldRefresh: undefined,
  containerRef: () => { },
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
  component: 'div',
};

ScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  option: PropTypes.object,
  shouldRefresh: PropTypes.bool,
  containerRef: PropTypes.func,
  onScrollY: PropTypes.func,
  onScrollX: PropTypes.func,
  onScrollUp: PropTypes.func,
  onScrollDown: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onYReachStart: PropTypes.func,
  onYReachEnd: PropTypes.func,
  onXReachStart: PropTypes.func,
  onXReachEnd: PropTypes.func,
  component: PropTypes.string,
};
