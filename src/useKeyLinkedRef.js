/*
 * *****************************************************************************
 * File: useKeyLinkedRef.js (/src/useKeyLinkedRef.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 4:59:26 pm
 * *****************************************************************************
 */

import useDynamicRef from './useDynamicRef'
import useListener from './useListener'

export default keyCode => {
    const [button, buttonRef] = useDynamicRef(null, false)

    useListener(
        window,
        'keydown',
        e => e.keyCode === keyCode && button.click(),
        [button, keyCode]
    )

    return buttonRef
}
