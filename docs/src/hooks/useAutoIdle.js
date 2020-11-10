/*
 * *****************************************************************************
 * File: useAutoIdle.js (/src/hooks/useAutoIdle.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:57:06 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:03:57 pm
 * *****************************************************************************
 */

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
