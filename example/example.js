import React, { Component } from 'react';
// eslint-disable-next-line
import ScrollBar from 'react-perfect-scrollbar';
// eslint-disable-next-line
import 'react-perfect-scrollbar/styles.scss';

import './example.scss';

function logEvent(type) {
  console.log(`event '${type}' triggered!`);
}

const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function wrapper(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: undefined,
      onXReachEnd: null,
      items: Array.from(new Array(100).keys()),
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        className: 'dummy',
        onXReachEnd: () => logEvent('onXReachEnd'),
      });
    }, 5000);
  }

  handleYReachEnd = () => {
    logEvent('onYReachEnd');
  }

  handleTrigger = () => {
    this.setState({
      items: Array.from(new Array(100).keys()),
    });
  }

  handleSync = debounce((ps) => {
    ps.update();
    console.log('debounce sync ps container in 1000ms');
  }, 1000)

  render() {
    const { className, onXReachEnd } = this.state;

    return (
      <React.Fragment>

        <div className="example">
          <ScrollBar
            className={className}
            onScrollY={() => logEvent('onScrollY')}
            onScrollX={() => logEvent('onScrollX')}
            onScrollUp={() => logEvent('onScrollUp')}
            onScrollDown={() => logEvent('onScrollDown')}
            onScrollLeft={() => logEvent('onScrollLeft')}
            onScrollRight={() => logEvent('onScrollRight')}
            onYReachStart={() => logEvent('onYReachStart')}
            onYReachEnd={this.handleYReachEnd}
            onXReachStart={() => logEvent('onXReachStart')}
            onXReachEnd={onXReachEnd}
            component="div"
          >
            <div className="content" />
          </ScrollBar>
        </div>
        <div className="example">
          <button onClick={this.handleTrigger}>Trigger</button>
          <ScrollBar onSync={this.handleSync}>
            {this.state.items.map(e => (<div key={e}>{e}</div>))}
          </ScrollBar>
        </div>
      </React.Fragment>
    );
  }
}

export default Example;
