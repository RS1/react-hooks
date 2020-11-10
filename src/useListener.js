/*
 * *****************************************************************************
 * File: useListener.js (/src/useListener.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 4:59:38 pm
 * *****************************************************************************
 */

import { useEffect, useCallback } from 'react'

export default (
    selector = window,
    event = false,
    callback = false,
    dependencies = []
) => {
    const cb = useCallback(
        e => (selector && callback ? callback(e, selector) : {}),
        [selector, ...dependencies]
    )
    useEffect(() => {
        if (!event || !selector || !selector.addEventListener) return
        selector.addEventListener(event, cb)
        return () => {
            selector.removeEventListener(event, cb)
        }
    }, [selector, event, cb])
}
