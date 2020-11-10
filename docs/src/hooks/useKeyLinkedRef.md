Useful to easily let a keyboard key press simulate the click on a DOM node.

How to use it in your React component:
```javascript
import React, { useCallback } from 'react'
import { useKeyLinkedRef } from '@rs1/react-hooks'

export default (props) => {
    /* 75 is the code for the 'K' key */
    const buttonRef = useKeyLinkedRef(75)

    const handleClick = useCallback(e => {
        console.log(`Received click on: "${e?.currentTarget?.id}"`)
    }, [])

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick} id="key-linked-button">
                Click me or press 'K'
            </button>
            <h5>...and keep an eye on the console!</h5>
        </div>
    )
}
```