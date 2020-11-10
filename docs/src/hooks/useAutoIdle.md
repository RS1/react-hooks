Useful if you need to update your UI when the user isn't interacting with a component.

How to use it in your React component:
```javascript
import React, { useRef } from 'react'
import { useAutoIdle } from '@rs1/react-hooks'

export default props => {
    const node = useRef()
    const [isIdle] = useAutoIdle(
        // Which node should be watched?
        node?.current,
        {
            // What callback should be fired on change?
            callback: idle =>
                console.log(
                    `The watched node is now ${idle ? 'idle' : 'active'}`
                ),
            // How many seconds shoud be waited before going to idle?
            wait: 5,
            // Is there a condition that should be true before going to idle?
            condition: true,
            // Is the node initially idle?
            initial: false,
        }
    )

    return (
        <div
            ref={node}
            style={{
                minWidth: '300px',
                minHeight: '300px',
                background: isIdle ? 'red' : 'blue',
                color: '#ffffff',
                padding: '15px',
            }}
        >
            This node reacts to your mouse movements. After 5 seconds that you
            stopped interacting, it'll go idle.
            <hr />
            {`This node is currently ${isIdle ? 'idle' : 'active'}`}
        </div>
    )
}
```