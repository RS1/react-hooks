Useful to transform any DOM node in a horizontal slider, handling touch and drag events.

How to use it in your React component:
```javascript
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
```