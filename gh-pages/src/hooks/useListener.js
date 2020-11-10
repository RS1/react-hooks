/*
 * *****************************************************************************
 * File: useListener.js (/src/hooks/useListener.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 7:02:36 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:04:48 pm
 * *****************************************************************************
 */

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
