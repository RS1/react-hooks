/*
 * *****************************************************************************
 * File: useRectRef.js (/src/hooks/useRectRef.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 7:03:47 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:05:03 pm
 * *****************************************************************************
 */

import React from 'react'
import { useRectRef } from '@rs1/react-hooks'

export default props => {
    const [rect, sectionRef] = useRectRef()

    return (
        <div
            ref={sectionRef}
        >{`I'm ${rect.width}px x ${rect.height}px, try resizing the window!`}</div>
    )
}
