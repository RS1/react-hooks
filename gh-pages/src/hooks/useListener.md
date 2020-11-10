Useful to attach an event listener to a DOM node, updating it when the DOM node or any dependencies change.

How to use it in your React component:
```javascript
import React, { useState, useCallback, useRef } from 'react'
import { useListener } from '@rs1/react-hooks'

export default props => {
    const sectionRef = useRef()
    const [counter, setCounter] = useState(0)

    useListener(
        sectionRef?.current,
        'click',
        () => console.log(`The counter is: ${counter}`),
        [counter]
    )

    const handleClick = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [])

    return (
        <div>
            <p>Click the red section and check the console!</p>
            <button onClick={handleClick}>Increase counter ({counter})</button>
            <hr />
            <div
                ref={sectionRef}
                style={{ padding: '15px', background: 'red', color: '#ffffff' }}
            >
                I've used the useListener hook.
            </div>
        </div>
    )
}
```