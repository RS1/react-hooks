/*
 * *****************************************************************************
 * File: useListener.js (/src/hooks/useListener.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 11:57:49 am
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
