/*
 * *****************************************************************************
 * File: useSliderRef.js (/src/hooks/useSliderRef.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 7:05:01 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:05:28 pm
 * *****************************************************************************
 */

import React from 'react'
import { useSliderRef } from '@rs1/react-hooks'

export default props => {
    const [value, sliderRef] = useSliderRef(
        /* Initial ref value: */ null,
        /* Initial slider value: */ 0,
        /* Slider direction: */ 'LTR'
    )
    /*
     * The slider direction should be one of:
     * 'LTR', 'RTL', 'TTB' or 'BTT'.
     * 'LTR': horizontal - left to right (default)
     * 'RTL': horizontal - right to left
     * 'TTB': vertical - top to bottom
     * 'BTT': vertical - bottom to top
     */

    return (
        <div>
            <p>
                {`Touch me or drag me to change my value! Actually I'm ${Math.round(
                    value * 100
                )}%`}
            </p>
            <div
                ref={sliderRef}
                style={{
                    width: '100%',
                    height: '10px',
                    background: 'red',
                    cursor: 'pointer',
                }}
            />
            <div
                style={{
                    width: `${Math.round(value * 100)}%`,
                    height: '10px',
                    background: 'blue',
                    marginTop: '-10px',
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}
