/*
 * *****************************************************************************
 * File: useMediaQuery.js (/src/useMediaQuery.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Friday, 13th November 2020 9:57:59 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Friday, 13th November 2020 11:58:50 am
 * *****************************************************************************
 */

import { useState, useEffect, useMemo } from 'react'

const pToQuery = p =>
    Object.entries(p).reduce(
        (acc, [key, cur], idx, src) => ({
            ...acc,
            [key]: `(min-width: ${cur}px)${
                (idx && ` and (max-width: ${--src[--idx] | 0}px)`) || ''
            }`,
        }),
        {}
    )

const qToMatch = q =>
    Object.entries(q).reduce(
        (acc, [key, cur]) => ({
            ...acc,
            [key]: window.matchMedia(cur).matches,
        }),
        {}
    )

export default (sizes = [1920, 1024, 768, 414]) => {
    const props = useMemo(() => ({ ...sizes }), [sizes])
    const [queries, setQueries] = useState({})
    const [matches, setMatches] = useState({})

    useEffect(() => {
        const update = () => setQueries(pToQuery(props))
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [props])

    useEffect(() => {
        setMatches(qToMatch(queries))
    }, [queries])

    const vals = Object.values(matches)
    const none = !vals.every(v => v)

    return Array.isArray(sizes) ? [...vals, none] : { ...matches, none }
}
