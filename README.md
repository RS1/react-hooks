# ReactHooks
A collection of useful custom React hooks.

Here you can view a working example of every hook, with walk through sample code:  
[Demo site](https://rs1.github.io/react-hooks/)

### Available hooks
- [`useAgentParser`](#useagentparser)  
   Use it to parse the current user-agent string and to detect if the device is touch enabled.  

- [`useAutoIdle`](#useautoidle)  
   Use it to update your UI when the user isn't interacting with a component.  

- [`useDynamicRef`](#usedynamicref)    
   Use it to keep a dynamic – auto-updating or manual-updating – reference to a DOM node.  

- [`useFullScreen`](#usefullscreen)    
   Use it to gain access to the native Full Screen API.  
   
- [`useKeyLinkedRef`](#usekeylinkedref)    
   Use it to easily let a keyboard key press simulate the click on a DOM node.  
   
- [`useListener`](#uselistener)    
   Use it to attach an event listener to a DOM node, updating it when the DOM node or any dependencies change.  
   
- [`useRectRef`](#userectref)    
   Use it to keep a reference to the bounding client rect of a DOM node.  
   
- [`useRefEffect`](#userefeffect)    
   Use it in combination with `useDynamicRef` to react to a DOM node change.  
   
- [`useSliderRef`](#usesliderref)    
   Use it to transform any DOM node in a horizontal slider, handling touch and drag events  
   

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

### useDynamicRef
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

### useFullScreen
Useful to gain access to the native Full Screen API.

How to use it in your React component:
```javascript
import React, { useRef } from 'react'
import { useFullScreen } from '@rs1/react-hooks'

export default props => {
    const containerRef = useRef()
    const videoRef = useRef()
    const {
        // request,
        // exit,
        toggle,
        isActive,
        isSupported,
    } = useFullScreen({
        onChange: () => console.log(`Full screen status changed`),
        onError: () => console.log(`Full screen request failed`),
    })

    const bbbMovie =
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    return (
        <div>
            <div
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '200px',
                    position: 'relative',
                    background: isActive ? '#000000' : '#ffffff',
                }}
            >
                <video
                    ref={videoRef}
                    style={{ width: '100%', height: '100%' }}
                    controls
                >
                    <source src={bbbMovie} type='video/mp4' />
                </video>
                {isSupported(containerRef, videoRef) && (
                    <button
                        onClick={() => {
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
                        }}
                        style={{
                            position: 'absolute',
                            top: '25px',
                            right: '25px',
                        }}
                    >{`${isActive ? 'Exit' : 'Enter'} full screen`}</button>
                )}
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

### useListener
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

### useRectRef
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

### useRefEffect
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

### useSliderRef
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
