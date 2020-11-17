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
 * Modified on Tuesday, 17th November 2020 11:35:38 am
 * *****************************************************************************
 */

import { useState, useRef, useEffect } from 'react'

// Credits to Adam Leggett on StackOverflow:
// https://stackoverflow.com/a/57876601
const adjustedBoundingClientRect = (el, rect) => {
    const style = window.getComputedStyle(el)
    const tx = style.transform

    if (tx) {
        var sx, sy, dx, dy
        if (tx.startsWith('matrix3d(')) {
            const ta = tx.slice(9, -1).split(/, /)
            sx = +ta[0]
            sy = +ta[5]
            dx = +ta[12]
            dy = +ta[13]
        } else if (tx.startsWith('matrix(')) {
            const ta = tx.slice(7, -1).split(/, /)
            sx = +ta[0]
            sy = +ta[3]
            dx = +ta[4]
            dy = +ta[5]
        } else {
            return rect
        }

        const to = style.transformOrigin
        const x = rect.x - dx - (1 - sx) * parseFloat(to)
        const y =
            rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1))
        const w = sx ? rect.width / sx : el.offsetWidth
        const h = sy ? rect.height / sy : el.offsetHeight
        return {
            x: x,
            y: y,
            width: w,
            height: h,
            top: y,
            right: x + w,
            bottom: y + h,
            left: x,
        }
    } else {
        return rect
    }
}

export default ({ withTransforms = true } = {}) => {
    const ref = useRef()
    const [rect, setRect] = useState({})

    const update = () =>
        setRect(() => {
            let ret = ref?.current?.getBoundingClientRect() ?? {}
            if (!withTransforms && ref?.current)
                ret = adjustedBoundingClientRect(ref.current, ret)
            return ret
        })

    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return [rect, ref, update]
}
