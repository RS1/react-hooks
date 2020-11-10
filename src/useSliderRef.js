/*
 * *****************************************************************************
 * File: useSliderRef.js (/src/useSliderRef.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:00:12 pm
 * *****************************************************************************
 */

import { useState, useCallback } from 'react'
import useRefEffect from './useRefEffect'
import useDynamicRef from './useDynamicRef'

const intersect = (min, val, max) => Math.min(Math.max(min, val), max)
const properties = direction => {
    switch (direction) {
        case 'BTT':
            return ['Y', 'Top', 'bottom', 'height', false]
        case 'TTB':
            return ['Y', 'Top', 'top', 'height', true]
        case 'RTL':
            return ['X', 'Left', 'right', 'width', false]
        case 'LTR':
        default:
            return ['X', 'Left', 'left', 'width', true]
    }
}

export default (initial = null, initial_value = 0, direction = 'LTR') => {
    const [ref, callbackRef] = useDynamicRef(initial, false)
    const [hasFocus, setFocus] = useState(false)
    const [value, setValue] = useState(initial_value)

    const mouseMove = useCallback(
        e => {
            if (!e || !ref) return
            const rect = ref.getBoundingClientRect()
            const [dir, scroll, from, to, std] = properties(direction)
            const { [from]: progress, [to]: maximum } = rect

            setValue(
                intersect(
                    0,
                    (std ? 1 : -1) *
                        (e[`page${dir}`] -
                            progress +
                            window[`page${dir}Offset`] ??
                            (document.documentElement ||
                                document.body.parentNode ||
                                document.body)[`scroll${scroll}`]),
                    maximum
                ) / maximum
            )
        },
        [ref, direction]
    )
    const mouseDown = useCallback(
        e => {
            setFocus(true)
            mouseMove(e)
        },
        [ref]
    )
    const mouseUp = useCallback(e => {
        setFocus(false)
    }, [])

    useRefEffect(
        ref,
        () => {
            ref.addEventListener('mousedown', mouseDown)
            ref.addEventListener('touchstart', mouseDown)
            if (hasFocus) {
                ref.addEventListener('mousemove', mouseMove)
                ref.addEventListener('touchmove', mouseMove)
                ref.addEventListener('mouseup', mouseUp)
                ref.addEventListener('touchend', mouseUp)
            }
            return () => {
                ref.removeEventListener('mousedown', mouseDown)
                ref.removeEventListener('touchstart', mouseDown)
                if (hasFocus) {
                    ref.removeEventListener('mousemove', mouseMove)
                    ref.removeEventListener('touchmove', mouseMove)
                    ref.removeEventListener('mouseup', mouseUp)
                    ref.removeEventListener('touchend', mouseUp)
                }
            }
        },
        [hasFocus, mouseDown, mouseMove, mouseUp]
    )

    return [value, callbackRef]
}
