Useful to keep a dynamic – auto-updating or manual-updating – reference to a DOM node.

How to use it in your React component:
```javascript
import React, { useEffect, useRef } from 'react'
import { useDynamicRef } from '@rs1/react-hooks'

export default ({ url, isVideo, ...props }) => {
    const [media, mediaRef /* , updateMediaRef */] = useDynamicRef(
        /* Initial value: */ null,
        /* Require manual-update: */ false
    )
    useEffect(() => {
        console.log(`The media ref tag is: ${media?.tagName}`)
    }, [media])

    /* Comparison with the standard useRef hook */
    const stdRef = useRef()
    useEffect(() => {
        console.log(`The standard ref tag is: ${media?.tagName}`)
    }, [stdRef])

    return (
        <div>
            <h6>
                useDynamicRef - Current tag: {media?.tagName || 'undefined'}
            </h6>
            {isVideo ? (
                <video
                    ref={mediaRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            ) : (
                <audio
                    ref={mediaRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            )}
            <hr />
            <h6>useRef - Current tag: {stdRef?.tagName || 'undefined'}</h6>
            {isVideo ? (
                <video
                    ref={stdRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            ) : (
                <audio
                    ref={stdRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            )}
        </div>
    )
}
```