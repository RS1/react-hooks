/*
 * *****************************************************************************
 * File: useKeyAction.js (/src/useKeyAction.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Tuesday, 10th November 2020 8:13:09 pm
 *
 * Copyright (c) 2020-2021 Andrea Corsini T/A RS1 Project - All rights reserved.
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Friday, 21st May 2021 11:30:21 am
 * *****************************************************************************
 */
import { useEffect } from 'react'

export default (
    key = 0,
    callback = () => {},
    deps = [],
    allowInputs = true
) => {
    useEffect(() => {
        if (!key) return
        const cb = e =>
            e &&
            (allowInputs ||
                !['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'].includes(
                    e.target.nodeName
                )) &&
            e.keyCode === key &&
            callback(e)
        window.addEventListener('keydown', cb)
        return () => window.removeEventListener('keydown', cb)
    }, [key, ...deps])
}
