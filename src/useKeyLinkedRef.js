/*
 * *****************************************************************************
 * File: useKeyRef.js (/src/hooks/useKeyRef.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 12:03:22 pm
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
