import React, { Component } from 'react';
// eslint-disable-next-line
import ScrollBar from 'react-perfect-scrollbar';
// eslint-disable-next-line
import 'react-perfect-scrollbar/styles.scss';
import './refresh-example.scss';

function logEvent(type) {
  console.log(`refresh example event '${type}' triggered!`);
}

class Example extends Component {
  constructor(props) {
    super(props);
    // this._scrollContainerRef = React.createRef();
    this.state = {
      onXReachEnd: null,
      isSuppressY: false,
      isSuppressX: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        onXReachEnd: () => logEvent('onXReachEnd'),
      });
    }, 5000);
  }

  handleSuppressScrollY = () => {
    this.setState(prevProps => ({
      ...this.state,
      isSuppressY: !prevProps.isSuppressY,
    }));
  }

  handleSuppressScrollX = () => {
    this.setState(prevProps => ({
      ...this.state,
      isSuppressX: !prevProps.isSuppressX,
    }));
  }

  handleYReachEnd = () => {
    logEvent('onYReachEnd');
  }

  render() {
    const { onXReachEnd, isSuppressY, isSuppressX } = this.state;

    return (
      <div className="refresh-example">
        {isSuppressY
          ? <span className="refresh-example__msg">Y Axis scroll <b>suppressed</b></span>
          : <span className="refresh-example__msg">Y Axis scroll <i>available</i></span>
        }
        {isSuppressX
          ? <span className="refresh-example__msg">X Axis scroll <b>suppressed</b></span>
          : <span className="refresh-example__msg">X Axis scroll <i>available</i></span>
        }
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
          options={{
            suppressScrollY: isSuppressY,
            suppressScrollX: isSuppressX,
          }}
          shouldRefresh
        >
          <div className="refresh-example__content" />
        </ScrollBar>
        <button className="refresh-example__btn" onClick={this.handleSuppressScrollY}>Suppress Y scroll</button>
        <button className="refresh-example__btn" onClick={this.handleSuppressScrollX}>Suppress X scroll</button>
      </div>
    );
  }
}

export default Example;
