/// <reference types="react" />
/// <reference types="perfect-scrollbar" />

import * as React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

export interface ScrollBarProps {
  /**
   * class name on container
   */
  className?: string;

  /**
    * style on container
    */
  style?: React.CSSProperties;

  /**
   * perfect-scrollbar init options
   *
   * @deprecated in favor of {@link #options}
   */
  option?: PerfectScrollbar.Options;

  /**
   * perfect-scrollbar init options
   */
  options?: PerfectScrollbar.Options;

  /**
   * get the container ref
   */
  containerRef?: ((container: HTMLElement) => void);

  /**
   * fires when the y-axis is scrolled in either direction.
   */
  onScrollY?: ((container: HTMLElement) => void);

  /**
   * fires when the x-axis is scrolled in either direction.
   */
  onScrollX?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling upwards.
   */
  onScrollUp?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling downwards.
   */
  onScrollDown?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling to the left.
   */
  onScrollLeft?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling to the right.
   */
  onScrollRight?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling reaches the start of the y-axis.
   */
  onYReachStart?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
   */
  onYReachEnd?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling reaches the start of the x-axis.
   */
  onXReachStart?: ((container: HTMLElement) => void);

  /**
   * fires when scrolling reaches the end of the x-axis.
   */
  onXReachEnd?: ((container: HTMLElement) => void);

  /**
   * component name
   */
  component?: string;
}

export default class ScrollBar extends React.Component<ScrollBarProps, any> { }
