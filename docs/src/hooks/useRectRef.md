Useful to keep a reference to the bounding client rect of a DOM node.

How to use it in your React component:
```javascript
import React from 'react'
import { useRectRef } from '@rs1/react-hooks'

export default props => {
    const [rect, sectionRef] = useRectRef()

    return (
        <div
            ref={sectionRef}
        >{`I'm ${rect.width}px x ${rect.height}px, try resizing the window!`}</div>
    )
}
```