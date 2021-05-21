/*
 * *****************************************************************************
 * File: useMediaQuery.js (/src/useMediaQuery.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Friday, 13th November 2020 9:57:59 am
 *
 * Copyright (c) 2020-2021 Andrea Corsini T/A RS1 Project - All rights reserved.
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Monday, 8th February 2021 3:22:59 pm
 * *****************************************************************************
 */

import { useState, useEffect, useMemo } from 'react'

const pToQuery = p =>
    Object.entries(p).reduce(
        (acc, [key, cur], idx, src) => ({
            ...acc,
            [key]: window.matchMedia(
                `(min-width: ${cur}px)${
                    idx ? ` and (max-width: ${--src[--idx][1] | 0}px)` : ``
                }`
            ).matches,
        }),
        {}
    )

export default (sizes = [1920, 1024, 768, 414]) => {
    const props = useMemo(() => ({ ...sizes }), [sizes])
    const [mq, setMQ] = useState(pToQuery(props))

    useEffect(() => {
        const update = () => setMQ(pToQuery(props))
        window.addEventListener('resize', update)
        window.addEventListener('orientationchange', update)
        return () => {
            window.removeEventListener('resize', update)
            window.removeEventListener('orientationchange', update)
        }
    }, [props])

    const vals = Object.values(mq)
    const none = !vals.some(v => v)

    return Array.isArray(sizes) ? [...vals, none] : { ...mq, none }
}
