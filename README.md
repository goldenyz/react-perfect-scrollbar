# React-Perfect-Scrollbar [![Build Status](https://travis-ci.org/goldenyz/react-perfect-scrollbar.svg?branch=master)](https://travis-ci.org/goldenyz/react-perfect-scrollbar) [![npm](https://img.shields.io/npm/v/react-perfect-scrollbar.svg?style=flat-square)](https://www.npmjs.com/package/react-perfect-scrollbar) [![npm downloads](https://img.shields.io/npm/dm/react-perfect-scrollbar.svg)](https://www.npmjs.com/package/react-perfect-scrollbar)

This is a wrapper to allow use [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) in React.

***To read documentation for versions < 1.0, please visit [`v0.2.5`](https://github.com/goldenyz/react-perfect-scrollbar/tree/v0.2.5).***

### Usage
Install the package `npm install react-perfect-scrollbar -S`
Import the css file if you have loader for css files:
```js
    import 'react-perfect-scrollbar/dist/css/styles.css';
```

Import the module in the place you want to use:
```js
    import PerfectScrollbar from 'react-perfect-scrollbar'
```

Wrap you content in this component:
```jsx
    <PerfectScrollbar>
        ... SCROLLBAR CONTENT HERE ...
    </PerfectScrollbar>
```

### Props
The following props are accepted:
#### options
The optional parameters used to initialize [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar).
For more info, please refer to  https://github.com/utatti/perfect-scrollbar#options

This prop previously was called "option", but has since been renamed.
If you provide "option" as a prop, it will be used unless "options" is also passed.

#### containerRef
Return the container ref: (ref) => void;
If you want to scroll to somewhere, just update scrollTop/scrollLeft by the ref:
```js
// Suppose you have save the containerRef to this._scrollRef
// change scroll top
this._scrollRef.scrollTop = 0;

// change scroll left
this._scrollRef.scrollLeft = 0;
```

#### component
The container component type. Default to "div". Only string is allowed.
#### className
The className added to container.
#### style
The style added to container.
#### onScrollY
Invoked when the y-axis is scrolled in either direction.
#### onScrollX
Invoked when the x-axis is scrolled in either direction.
#### onScrollUp
Invoked when scrolling upwards.
#### onScrollDown
Invoked when scrolling downwards.
#### onScrollLeft
Invoked when scrolling to the left.
#### onScrollRight
Invoked when scrolling to the right.
#### onYReachStart
Invoked when scrolling reaches the start of the y-axis.
#### onYReachEnd
Invoked when scrolling reaches the end of the y-axis (useful for infinite scroll).
#### onXReachStart
Invoked when scrolling reaches the start of the x-axis.
#### onXReachEnd
Invoked when scrolling reaches the end of the x-axis.

All the callback 'onXXXX' can accept a parameter: the ref to the scrollbar container. You can get the current `scrollTop` and `scrollLeft` from it:
```jsx
    <PerfectScrollbar
        onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
        ... SCROLLBAR CONTENT HERE ...
    </PerfectScrollbar>
```

### Methods
The following method can be called by the component ref:
#### updateScroll
Update the scrollbar(e.g. recalculate the size) manually.
In the following case, the scrollbar will not update automatically, which cause the scrollbar size incorrect.
```js
class Container extends Component {
  ...
  render() {
    return (
      <ScrollBar>
        ...
       <ChildComponent />
        ...
      </ScrollBar>
    );
  }
}

class ChildComponent extends Component {
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} />
        { this.state.show ? <div /> }
      </div>
    )
  }
}
```

You need to call `updateScroll` to get the correct scrollbar size:
```js
class Container extends Component {
  ...
  render() {
    return (
      <ScrollBar
        ref = {(ref) => { this._scrollBarRef = ref; }}
      >
        ...
       <ChildComponent
        onUpdateSize = {() => { this._scrollBarRef.updateScroll(); }}
       />
        ...
      </ScrollBar>
    );
  }
}

class ChildComponent extends Component {
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    }, () => this.props.onUpdateSize());
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} />
        { this.state.show ? <div /> }
      </div>
    )
  }
}
```

### Example
A working example can be found in the `example` directory. Please run `npm run example` in browser. (Must run `npm run build` for the first time)

### License
MIT
