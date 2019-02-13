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
      wheelSpeed: 1,
      onXReachEnd: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onXReachEnd: () => logEvent('onXReachEnd'),
      });
    }, 5000);
  }

  onClick = ({ target: { name } }) => {
    if (name === 'increment') {
      this.setState(prevState => ({
        wheelSpeed: prevState.wheelSpeed + 1,
      }));
    } else {
      this.setState(prevState => ({
        wheelSpeed: prevState.wheelSpeed - 1,
      }));
    }
  }

  handleYReachEnd = () => {
    logEvent('onYReachEnd');
  }

  render() {
    const { onXReachEnd, wheelSpeed } = this.state;

    return (
      <div className="example">
        <ScrollBar
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
          option={{ wheelSpeed }}
        >
          <div className="content" />
        </ScrollBar>
        <button
          name="increment"
          onClick={this.onClick}
        >
          Change speed +1
        </button>
        <button
          name="decrement"
          onClick={this.onClick}
        >
          Change speed -1
        </button>
      </div>
    );
  }
}

export default Example;
