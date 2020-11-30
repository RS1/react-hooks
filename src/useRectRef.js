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
 * Modified on Monday, 30th November 2020 4:17:04 pm
 * *****************************************************************************
 */

import { useState, useRef, useEffect } from 'react'

export default ({ useOffset = false } = {}) => {
    const ref = useRef()
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

    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        window.addEventListener('orientationchange', update)
        return () => {
            window.removeEventListener('resize', update)
            window.removeEventListener('orientationchange', update)
        }
    }, [])

    return [rect, ref, update]
}
