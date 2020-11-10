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