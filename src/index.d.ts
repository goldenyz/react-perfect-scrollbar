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
  style?: CSSProperties;

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
  containerRef?: (ref: any) => void;

  /**
   * fires when the y-axis is scrolled in either direction.
   */
  onScrollY?: (container: any) => void;

  /**
   * fires when the x-axis is scrolled in either direction.
   */
  onScrollX?: (container: any) => void;

  /**
   * fires when scrolling upwards.
   */
  onScrollUp?: (container: any) => void;

  /**
   * fires when scrolling downwards.
   */
  onScrollDown?: (container: any) => void;

  /**
   * fires when scrolling to the left.
   */
  onScrollLeft?: (container: any) => void;

  /**
   * fires when scrolling to the right.
   */
  onScrollRight?: (container: any) => void;

  /**
   * fires when scrolling reaches the start of the y-axis.
   */
  onYReachStart?: (container: any) => void;

  /**
   * fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
   */
  onYReachEnd?: (container: any) => void;

  /**
   * fires when scrolling reaches the start of the x-axis.
   */
  onXReachStart?: (container: any) => void;

  /**
   * fires when scrolling reaches the end of the x-axis.
   */
  onXReachEnd?: (container: any) => void;

  /**
   * component name
   */
  component?: string;
}

export default class ScrollBar extends React.Component<ScrollBarProps, any> {}
