/*
 * *****************************************************************************
 * File: useRectRef.js (/src/useRectRef.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Monday, 30th November 2020 4:34:30 pm
 * *****************************************************************************
 */

import { useState, useRef, useEffect } from 'react'

export default ({ useOffset = false, delay = false } = {}) => {
    const ref = useRef()
    const delayer = useRef()
    const [rect, setRect] = useState({})

    const update = () =>
        setRect(
            useOffset && ref?.current
                ? {
                      top: ref?.current?.offsetTop,
                      left: ref?.current?.offsetLeft,
                      width: ref?.current?.offsetWidth,
                      height: ref?.current?.offsetHeight,
                  }
                : ref?.current?.getBoundingClientRect() ?? {}
        )

    const fn = () => {
        if (!delay) return update()
        if (delayer.current) clearTimeout(delayer.current)
        delayer.current = setTimeout(update, delay)
    }

    useEffect(() => {
        fn()
        window.addEventListener('resize', fn)
        window.addEventListener('orientationchange', fn)
        return () => {
            window.removeEventListener('resize', fn)
            window.removeEventListener('orientationchange', fn)
        }
    }, [])

    return [rect, ref, fn]
}
