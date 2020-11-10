Useful in combination with `useDynamicRef` to react to a DOM node change.

How to use it in your React component:
```javascript
import React, { useReducer } from 'react'
import { useRefEffect, useDynamicRef } from '@rs1/react-hooks'

export default props => {
    const [header, toggle] = useReducer(s => !s, true)
    const [section, sectionRef] = useDynamicRef(null, false)

    useRefEffect(
        section,
        () => {
            console.log(`The section tag is now ${section?.tagName}`)
        },
        []
    )

    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            <hr />
            {header ? (
                <header
                    ref={sectionRef}
                    style={{
                        width: '100%',
                        minHeight: '200px',
                        background: 'red',
                    }}
                />
            ) : (
                <footer
                    ref={sectionRef}
                    style={{
                        width: '100%',
                        minHeight: '200px',
                        background: 'blue',
                    }}
                />
            )}
        </div>
    )
}
```