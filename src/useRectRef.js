/*
 * *****************************************************************************
 * File: useRectRef.js (/src/hooks/useRectRef.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 5:33:19 pm
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
