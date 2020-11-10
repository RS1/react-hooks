/*
 * *****************************************************************************
 * File: useDynamicRef.js (/src/useDynamicRef.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 4:58:54 pm
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
