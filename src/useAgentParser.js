/*
 * *****************************************************************************
 * File: useAgentParser.js (/src/hooks/useAgentParser.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 11:55:56 am
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
