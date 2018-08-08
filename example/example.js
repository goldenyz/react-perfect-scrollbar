import React from 'react';
// eslint-disable-next-line
import ScrollBar from 'react-perfect-scrollbar';
// eslint-disable-next-line
import 'react-perfect-scrollbar/dist/css/styles.css';

import './example.scss';

function logEvent(type) {
  console.log(`event '${type}' triggered!`);
}

export default () => (
  <div className="example">
    <ScrollBar
      onScrollY={() => logEvent('onScrollY')}
      onScrollX={() => logEvent('onScrollX')}
      onScrollUp={() => logEvent('onScrollUp')}
      onScrollDown={() => logEvent('onScrollDown')}
      onScrollLeft={() => logEvent('onScrollLeft')}
      onScrollRight={() => logEvent('onScrollRight')}
      onYReachStart={() => logEvent('onYReachStart')}
      onYReachEnd={() => logEvent('onYReachEnd')}
      onXReachStart={() => logEvent('onXReachStart')}
      onXReachEnd={() => logEvent('onXReachEnd')}
      component="div"
    >
      <div className="content" />
    </ScrollBar>
  </div>
);
