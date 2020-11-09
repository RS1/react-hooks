# ReactHooks
A collection of useful custom React hooks.
- [`useAgentParser`](#useagentparser)  
   To parse the current user-agent string and to detect if the device is touch enabled.  

- [`useAutoIdle`](#useautoidle)  
   To update your UI when the user isn't interacting with a component.  

- [`useDynamicRef`](#usedynamicref)    
   To keep a dynamic – auto-updating or manual-updating – reference to a DOM node.  

- [`useFullScreen`](#usefullscreen)    
   To gain access to the native Full Screen API.  
   
- [`useKeyLinkedRef`](#usekeylinkedref)    
   To easily let a keyboard key press simulate the click on a DOM node.  
   
- [`useListener`](#uselistener)    
   To attach an event listener to a DOM node, updating it when the DOM node or any dependencies change.  
   
- [`useRectRef`](#userectref)    
   To keep a reference to the bounding client rect of a DOM node.  
   
- [`useRefEffect`](#userefeffect)    
   To in combination with `useDynamicRef` to react to a DOM node change.  
   
- [`useSliderRef`](#usesliderref)    
   To transform any DOM node in a horizontal slider, handling touch and drag events  
   

### useAgentParser
Useful to parse the current user-agent string and to detect if the device is touch enabled.

How to use it in your React component:
```javascript
import React from 'react'
import { useAgentParser } from '@rs1/react-hooks'

export default (props) => {
    const {
        isTouch,
        OS: {
            name: osName,
            version: osVersion,
        },
        browser: {
            name: browserName,
            version: browserVersion,
            major: browserMajor,
        },
        agent,
    } = useAgentParser()

    return (
        <div>
            <h3>{`${osName} (v${osVersion})`}</h3>
            {`You're ${isTouch ? 'touching' : 'surfing'} the web
            with ${browserName} ${browserMajor} (v${browserVersion}),
            what a wonderful browser!`}
            <hr />
            <pre>{agent}</pre>
        </div>
    )
}
```

### useAutoIdle
Useful if you need to update your UI when the user isn't interacting with a component.

How to use it in your React component:
```javascript
import React, { useRef } from 'react'
import { useAutoIdle } from '@rs1/react-hooks'

export default (props) => {
    const node = useRef()
    const [isIdle, resetIdle] = useAutoIdle(
        // Which node should be watched?
        node?.current,
        {
            // What callback should be fired on change?
            callback: idle => console.log(`The watched node is now ${idle ? 'idle' : 'active'}`),
            // How many seconds shoud be waited before going to idle?
            wait: 5,
            // Is there a condition that should be true before going to idle?
            condition: true,
            // Is the node initially idle?
            initial: false,
        },
    )

    return (
        <div ref={node}>
            {`This node is currently ${isIdle ? 'idle' : 'active'}`}
        </div>
    )
}
```

### useDynamicRef
Useful to keep a dynamic – auto-updating or manual-updating – reference to a DOM node.

How to use it in your React component:
```javascript
import React, { useEffect } from 'react'
import { useDynamicRef } from '@rs1/react-hooks'

export default ({ url, is_video, ...props }) => {
    // Manual-updating (default)
    const [
        media,
        mediaRef,
        updateMediaRef,
    ] = useDynamicRef()

    useEffect(() => {
        updateMediaRef()
    }, [is_video])

    // Auto-updating
    const [
        section,
        sectionRef,
    ] = useDynamicRef(
        /* Initial value: */ null,
        /* Require manual-update: */ false,
    )

    useEffect(() => {
        console.log(`The section rect is: 
        ${section?.offsetWidth} x ${section?.offsetHeight}`)
    }, [section])

    return (
        <div>
            {is_video
                ? <video ref={mediaRef} src={url} controls />
                : <audio ref={mediaRef} src={url} controls />
            }
            {/* Try resizing your browser window and check the console */}
            <div style={{
               width: '100vw',
               height: '10vh',
               background: 'red', 
            }} ref={sectionRef} />
        </div>
    )
}
```

### useFullScreen
Useful to gain access to the native Full Screen API.

How to use it in your React component:
```javascript
import React, { useRef } from 'react'
import { useFullScreen } from '@rs1/react-hooks'

export default (props) => {
    const containerRef = useRef()
    const videoRef = useRef()
    const {
        request,
        exit,
        toggle,
        isActive,
        isSupported,
    } = useFullScreen({
        onChange: () => console.log(`Full screen status changed`),
        onError: () => console.log(`Full screen request failed`),
    })

    const bbbMovie = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    return (
        <div>
            <div ref={containerRef} style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative'
                }}>
                <video ref={videoRef} style={{ width: '100%', height: '100%', }} controls>
                    <source src={bbbMovie} type="video/mp4" />
                </video>
                {isSupported && <button onClick={() => {
                        /* We can feed two DOM nodes to the API,
                        the first is the one we want to be full screen,
                        the second is an optional media element to be set
                        full screen on the WebKit mobile version that doesn't
                        support the full screen API for normal DOM nodes. */
                        toggle(containerRef, videoRef)
                        /* This is the same as:
                        if (isActive)
                            exit()
                        else
                            request(containerRef, videoRef) */
                    }} style={{
                        position: 'absolute',
                        top: '25px',
                        left: '25px',
                    }}>{`${isActive ? 'Exit' : 'Enter'} full screen`}</button>}
            </div>
        </div>
    )
}
```

### useKeyLinkedRef
Useful to easily let a keyboard key press simulate the click on a DOM node.

How to use it in your React component:
```javascript
import React, { useCallback } from 'react'
import { useKeyLinkedRef } from '@rs1/react-hooks'

export default (props) => {
    /* 13 is the code for the ENTER key */
    const buttonRef = useKeyLinkedRef(13)

    const handleClick = useCallback(e => {
        console.log(`Received click on: "${e?.currentTarget?.id}"`)
    }, [])

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick} id="key-linked-button">
                Click me or press enter
            </button>
        </div>
    )
}
```

### useListener
Useful to attach an event listener to a DOM node, updating it when the DOM node or any dependencies change.

How to use it in your React component:
```javascript
import React, { useState, useRef } from 'react'
import { useListener } from '@rs1/react-hooks'

export default (props) => {
    const sectionRef = useRef()
    const [counter, setCounter] = useState(0)

    useListener(
        sectionRef.current,
        'mousemove',
        () => console.log(`The counter is at ${counter}`),
        [counter]
    )

    const handleClick = useCallback(() => {
        setCounter(counter => counter+1)
    }, [])

    return (
        <div ref={sectionRef} onClick={handleClick}>
            {`The counter is at ${counter}`}
        </div>
    )
}
```

### useRectRef
Useful to keep a reference to the bounding client rect of a DOM node.

How to use it in your React component:
```javascript
import React from 'react'
import { useRectRef } from '@rs1/react-hooks'

export default (props) => {
    const [rect, sectionRef] = useRectRef()

    return (
        <div ref={sectionRef}>
            {`I'm ${rect.width} x ${rect.height}`}
        </div>
    )
}
```

### useRefEffect
Useful in combination with `useDynamicRef` to react to a DOM node change.

How to use it in your React component:
```javascript
import React from 'react'
import { useRefEffect, useDynamicRef } from '@rs1/react-hooks'

export default (props) => {
    const [section, sectionRef] = useDynamicRef(null, false)
    
    useRefEffect(section, () => {
        console.log(`The section is now ${section?.offsetWidth} x ${section?.offsetHeight}`)
    }, [])

    return (
        <div>
            {/* Try resizing your browser window and check the console */}
            <div ref={sectionRef} style={{
                width: '100vw',
                height: '100vh',
                background: 'red',
            }} />
        </div>
    )
}
```

### useSliderRef
Useful to transform any DOM node in a horizontal slider, handling touch and drag events.

How to use it in your React component:
```javascript
import React from 'react'
import { useSliderRef } from '@rs1/react-hooks'

export default (props) => {
    const [
        value,
        sliderRef
    ] = useSliderRef(
        /* Initial ref value: */ null,
        /* Initial slider value: */ 0,
    )

    return (
        <div>
            <div ref={sliderRef} style={{
                width: '100vw',
                height: '10px',
                background: 'red',
                cursor: 'pointer',
            }} />
            <div style={{
                width: `${value}vw`,
                height: '10px',
                background: 'blue',
                marginTop: '-10px',
                pointerEvents: 'none',
            }} />
        </div>
    )
}
```
