/*
 * *****************************************************************************
 * File: useSliderRef.js (/src/hooks/useSliderRef.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 11:58:23 am
 * *****************************************************************************
 */

import { useState, useCallback } from 'react'
import useRefEffect from './useRefEffect'
import useDynamicRef from './useDynamicRef'

export default (initial = null, initial_value = 0) => {
    const [ref, callbackRef] = useDynamicRef(initial)
    const [hasFocus, setFocus] = useState(false)
    const [value, setValue] = useState(initial_value)

    const mouseMove = useCallback(
        e => {
            if (!e || !ref) return
            const rect = ref.getBoundingClientRect()
            const scrollX =
                window.pageXOffset ??
                (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                ).scrollLeft

            let delta = e.pageX - (rect.left + scrollX)
            delta = Math.max(delta, 0)
            delta = Math.min(delta, rect.width)
            setValue(delta / rect.width)
        },
        [ref]
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
