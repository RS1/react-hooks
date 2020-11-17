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
 * Modified on Tuesday, 17th November 2020 12:00:05 pm
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
                      x: ref?.current?.offsetTop,
                      y: ref?.current?.offsetLeft,
                      width: ref?.current?.offsetWidth,
                      left: ref?.current?.offsetHeight,
                  }
                : ref?.current?.getBoundingClientRect() ?? {}
        )

    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return [rect, ref, update]
}
