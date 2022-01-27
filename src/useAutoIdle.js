/*
 * *****************************************************************************
 * File: useAutoIdle.js (/src/useAutoIdle.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020-2022 Andrea Corsini T/A RS1 Project - All rights reserved.
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Thursday, 27th January 2022 3:02:30 pm
 * *****************************************************************************
 */

import { useState, useEffect, useRef, useCallback } from 'react'

const noop = () => {}

export default (
    selector,
    { callback = noop, wait = 5, condition = true, initial = false } = {}
) => {
    const idleTimer = useRef()
    const idleCondition = useRef(condition ?? true)
    const [isIdle, setIdle] = useState(initial ?? false)

    const goIdle = useCallback(
        () => idleCondition.current === true && setIdle(true),
        [idleCondition.current]
    )

    const resetIdle = useCallback(() => {
        if (idleTimer.current) clearTimeout(idleTimer.current)
        idleTimer.current = setTimeout(goIdle, (wait ?? 5) * 1000)
        setIdle(false)
    }, [idleTimer.current, wait, goIdle])

    useEffect(() => {
        idleCondition.current = condition ?? true
        if (!idleCondition.current && idleTimer.current) {
            clearTimeout(idleTimer.current)
            idleTimer.current = null
        } else if (condition && !idleTimer.current) {
            resetIdle()
        }
    }, [condition, resetIdle])

    useEffect(() => {
        // eslint-disable-next-line prettier/prettier
        (callback ?? noop)(isIdle)
    }, [isIdle])

    useEffect(() => {
        const element = selector ?? window
        if (!element?.addEventListener) return

        element.addEventListener('mousemove', resetIdle)
        return () => element.removeEventListener('mousemove', resetIdle)
    }, [selector])

    return [isIdle, resetIdle]
}
