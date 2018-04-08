/// <reference types="react" />

import React from "react";

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
    onScrollY?: ((containerRef) => void);

    /**
     * fires when the x-axis is scrolled in either direction.
     */
    onScrollX?: ((containerRef) => void);

    /**
     * fires when scrolling upwards.
     */
    onScrollUp?: ((containerRef) => void);

    /**
     * fires when scrolling downwards.
     */
    onScrollDown?: ((containerRef) => void);

    /**
     * fires when scrolling to the left.
     */
    onScrollLeft?: ((containerRef) => void);

    /**
     * fires when scrolling to the right.
     */
    onScrollRight?: ((containerRef) => void);

    /**
     * fires when scrolling reaches the start of the y-axis.
     */
    onYReachStart?: ((containerRef) => void);

    /**
     * fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
     */
    onYReachEnd?: ((containerRef) => void);

    /**
     * fires when scrolling reaches the start of the x-axis.
     */
    onXReachStart?: ((containerRef) => void);

    /**
     * fires when scrolling reaches the end of the x-axis.
     */
    onXReachEnd?: ((containerRef) => void);
}

export default class ScrollBar extends React.Component<ScrollBarProps, any> { }
