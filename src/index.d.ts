/// <reference types="react" />

import * as React from "react";

export interface ScrollBarProps {
    /**
     * class name on container
     */
    className?: string;

    /**
     * perfect-scrollbar init options
     */
    option?: object;

    /**
     * get the container ref
     */
    containerRef?: (() => void);

    /**
     * fires when the y-axis is scrolled in either direction.
     */
    onScrollY?: (() => void);

    /**
     * fires when the x-axis is scrolled in either direction.
     */
    onScrollX?: (() => void);

    /**
     * fires when scrolling upwards.
     */
    onScrollUp?: (() => void);

    /**
     * fires when scrolling downwards.
     */
    onScrollDown?: (() => void);

    /**
     * fires when scrolling to the left.
     */
    onScrollLeft?: (() => void);

    /**
     * fires when scrolling to the right.
     */
    onScrollRight?: (() => void);

    /**
     * fires when scrolling reaches the start of the y-axis.
     */
    onYReachStart?: (() => void);

    /**
     * fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
     */
    onYReachEnd?: (() => void);

    /**
     * fires when scrolling reaches the start of the x-axis.
     */
    onXReachStart?: (() => void);

    /**
     * fires when scrolling reaches the end of the x-axis.
     */
    onXReachEnd?: (() => void);
}

export default class ScrollBar extends React.Component<ScrollBarProps, any> { }
