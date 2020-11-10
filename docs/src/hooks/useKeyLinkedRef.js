/*
 * *****************************************************************************
 * File: useKeyLinkedRef.js (/src/hooks/useKeyLinkedRef.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 7:01:52 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:04:36 pm
 * *****************************************************************************
 */

import React, { useCallback } from 'react'
import { useKeyLinkedRef } from '@rs1/react-hooks'

export default props => {
    /* 75 is the code for the 'K' key */
    const buttonRef = useKeyLinkedRef(75)

    const handleClick = useCallback(e => {
        console.log(`Received click on: "${e?.currentTarget?.id}"`)
    }, [])

    return (
        <div>
            <button
                ref={buttonRef}
                onClick={handleClick}
                id='key-linked-button'
            >
                Click me or press 'K'
            </button>
            <h5>...and keep an eye on the console!</h5>
        </div>
    )
}
