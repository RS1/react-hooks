/*
 * *****************************************************************************
 * File: useAgentParser.js (/src/useAgentParser.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 4:58:21 pm
 * *****************************************************************************
 */

import { useState } from 'react'
import UAParserJS from 'ua-parser-js'

const isTouch = () => {
    try {
        return (
            'ontouchstart' in window ||
            (typeof window.DocumentTouch !== 'undefined' &&
                document instanceof window.DocumentTouch) ||
            window.matchMedia('(hover: none)').matches
        )
    } catch (e) {
        return false
    }
}

const parsedUA = (() => {
    const ua = UAParserJS()

    return {
        OS: { ...ua.os },
        browser: { ...ua.browser },
        agent: ua.ua,
    }
})()

export default () => {
    const [state] = useState({
        isTouch: isTouch(),
        ...parsedUA,
    })

    return state
}
