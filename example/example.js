import React, { Component } from 'react';
// eslint-disable-next-line
import ScrollBar from 'react-perfect-scrollbar';
// eslint-disable-next-line
import 'react-perfect-scrollbar/styles.scss';

import './example.scss';

function logEvent(type) {
  console.log(`event '${type}' triggered!`);
}

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: undefined,
      onXReachEnd: null,
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

  render() {
    const { className, onXReachEnd } = this.state;

    return (
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
    );
  }
}

export default Example;
