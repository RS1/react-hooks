/*
 * *****************************************************************************
 * File: useMediaQuery.js (/src/hooks/useMediaQuery.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Friday, 13th November 2020 11:48:54 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Friday, 13th November 2020 11:50:09 am
 * *****************************************************************************
 */

import React from 'react'
import { useMediaQuery } from '@rs1/react-hooks'

export default props => {
    /*
     * You can pass an array of breakpoint widths
     * to this custom hook, it'll return an array
     * of boolean values indicating if that size
     * is supported. Additionally an extra parameter
     * is returned to signal if no width is supported.
     * The widths must be passed in descending order.
     */
    const [desktop, laptop, tablet, smartphone, none] = useMediaQuery([
        1920,
        1024,
        768,
        414,
    ])

    /*
     * Alternatively, you can pass an object of
     * breakpoint widths for every key to this custom
     * hook, it'll return an object of boolean values
     * for every key indicating if that size is
     * supported. Additionally an extra key 'none'
     * is returned to signal if no width is supported.
     * The widths must be passed in descending order.
     */
    const mq = useMediaQuery({
        desktop: 1920,
        laptop: 1024,
        tablet: 768,
        smartphone: 414,
    })

    /*
     * The above 'useMediaQuery' hooks transform the
     * breakpoint widths to these conditions:
     * desktop:    min-width == 1920px
     * laptop:     min-width == 1024px && max-width == 1919px
     * tablet:     min-width ==  768px && max-width == 1023px
     * smartphone: min-width ==  414px && max-width ==  767px
     * none:       max-width ==  413px
     */

    return (
        <div>
            {desktop && <p>I'm visible on desktops</p>}
            {laptop && <p>I'm visible on laptops</p>}
            {tablet && <p>I'm visible on tablets</p>}
            {smartphone && <p>I'm visible on smartphones</p>}
            {none && <p>This screen size is not managed :(</p>}
            <hr />
            {mq.desktop && <p>I'm visible on desktops too</p>}
            {mq.laptop && <p>I'm visible on laptops too</p>}
            {mq.tablet && <p>I'm visible on tablets too</p>}
            {mq.smartphone && <p>I'm visible on smartphones too</p>}
            {mq.none && <p>This screen size is not managed here too :(</p>}
        </div>
    )
}
