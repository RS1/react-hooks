/*
 * *****************************************************************************
 * File: useFullScreen.js (/src/hooks/useFullScreen.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 7:00:56 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:04:19 pm
 * *****************************************************************************
 */

import React, { useRef } from 'react'
import { useFullScreen } from '@rs1/react-hooks'

export default props => {
    const containerRef = useRef()
    const videoRef = useRef()
    const {
        // request,
        // exit,
        toggle,
        isActive,
        isSupported,
    } = useFullScreen({
        onChange: () => console.log(`Full screen status changed`),
        onError: () => console.log(`Full screen request failed`),
    })

    const bbbMovie =
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    return (
        <div>
            <div
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '200px',
                    position: 'relative',
                    background: isActive ? '#000000' : '#ffffff',
                }}
            >
                <video
                    ref={videoRef}
                    style={{ width: '100%', height: '100%' }}
                    controls
                >
                    <source src={bbbMovie} type='video/mp4' />
                </video>
                {isSupported(containerRef, videoRef) && (
                    <button
                        onClick={() => {
                            /* We can feed two DOM nodes to the API,
                        the first is the one we want to be full screen,
                        the second is an optional media element to be set
                        full screen on the WebKit mobile version that doesn't
                        support the full screen API for normal DOM nodes. */
                            toggle(containerRef, videoRef)
                            /* This is the same as:
                        if (isActive)
                            exit()
                        else
                            request(containerRef, videoRef) */
                        }}
                        style={{
                            position: 'absolute',
                            top: '25px',
                            right: '25px',
                        }}
                    >{`${isActive ? 'Exit' : 'Enter'} full screen`}</button>
                )}
            </div>
        </div>
    )
}
