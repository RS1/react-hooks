/*
 * *****************************************************************************
 * File: useKeyAction.js (/src/useKeyAction.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Tuesday, 10th November 2020 8:13:09 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Wednesday, 11th November 2020 7:28:19 pm
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
            !['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'].includes(
                e.target.nodeName
            ) &&
            e.keyCode === key &&
            callback()
        window.addEventListener('keydown', cb)
        return () => window.removeEventListener('keydown', cb)
    }, [key, ...deps])
}
