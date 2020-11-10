/*
 * *****************************************************************************
 * File: useRefEffect.js (/src/useRefEffect.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:00:01 pm
 * *****************************************************************************
 */

import { useEffect, useCallback } from 'react'

export default (ref = null, callback = false, dependencies = []) => {
    const cb = useCallback(ref => (callback ? callback(ref) : {}), [
        ref,
        ...dependencies,
    ])

    useEffect(() => {
        if (!ref || !cb) return
        return cb(ref)
    }, [ref, cb])
}
