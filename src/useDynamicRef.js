/*
 * *****************************************************************************
 * File: useDynamicRef.js (/src/hooks/useDynamicRef.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 12:01:22 pm
 * *****************************************************************************
 */

import { useState, useCallback } from 'react'

export default (initial = null, manualUpdate = true) => {
    const [ref, setRef] = useState({
        current: initial,
        updated: true,
        manual: manualUpdate,
    })

    const requestUpdate = useCallback(() => {
        setRef(ref => ({ ...ref, updated: true }))
    }, [])

    const callbackRef = useCallback(node => {
        setRef(ref => ({
            ...ref,
            current: ref.updated || !ref.manual ? node : ref.current,
            updated: false,
        }))
    }, [])

    return [ref.current, callbackRef, requestUpdate]
}
