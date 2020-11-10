/*
 * *****************************************************************************
 * File: useDynamicRef.js (/src/hooks/useDynamicRef.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:59:11 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:04:07 pm
 * *****************************************************************************
 */

import React, { useEffect, useReducer, useRef } from 'react'
import { useDynamicRef } from '@rs1/react-hooks'

export const Hook = ({ url, isVideo, ...props }) => {
    const [media, mediaRef /* , updateMediaRef */] = useDynamicRef(
        /* Initial value: */ null,
        /* Require manual-update: */ false
    )
    useEffect(() => {
        console.log(`The media ref tag is: ${media?.tagName}`)
    }, [media])

    const stdRef = useRef()
    useEffect(() => {
        console.log(`The standard ref tag is: ${media?.tagName}`)
    }, [stdRef])

    return (
        <div>
            <h6>
                useDynamicRef - Current tag: {media?.tagName || 'undefined'}
            </h6>
            {isVideo ? (
                <video
                    ref={mediaRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            ) : (
                <audio
                    ref={mediaRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            )}
            <hr />
            <h6>useRef - Current tag: {stdRef?.tagName || 'undefined'}</h6>
            {isVideo ? (
                <video
                    ref={stdRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            ) : (
                <audio
                    ref={stdRef}
                    src={url}
                    controls
                    style={{ width: '100%' }}
                />
            )}
        </div>
    )
}

export default () => {
    const [video, toggle] = useReducer(s => !s, true)

    const bbbMovie =
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    const bbbMusic =
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

    return (
        <>
            <button onClick={toggle}>View {video ? 'audio' : 'video'}</button>
            <Hook url={video ? bbbMovie : bbbMusic} isVideo={video} />
        </>
    )
}
