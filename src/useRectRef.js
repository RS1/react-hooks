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
 * Modified on Tuesday, 10th November 2020 4:59:48 pm
 * *****************************************************************************
 */

import { useState, useRef, useEffect } from 'react'

export default () => {
    const ref = useRef()
    const [rect, setRect] = useState({})

    const update = () => setRect(ref?.current?.getBoundingClientRect() ?? {})

    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return [rect, ref]
}
