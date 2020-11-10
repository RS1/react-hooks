/*
 * *****************************************************************************
 * File: useFullScreen.js (/src/useFullScreen.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:55:10 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 7:59:05 pm
 * *****************************************************************************
 */

import { useCallback, useEffect, useRef, useState } from 'react'

const fsAPI = (() => {
    const proposals = [
        {
            exit: 'exitFullscreen',
            request: 'requestFullscreen',
            element: 'fullscreenElement',
            enabled: 'fullscreenEnabled',
            onchange: 'onfullscreenchange',
            onerror: 'onfullscreenerror',
        },
        {
            exit: 'webkitExitFullscreen',
            request: 'webkitRequestFullscreen',
            element: 'webkitFullscreenElement',
            enabled: 'webkitFullscreenEnabled',
            onchange: 'webkitfullscreenchange',
            onerror: 'webkitfullscreenerror',
        },
        {
            exit: 'webkitCancelFullScreen',
            request: 'webkitRequestFullScreen',
            element: 'webkitCurrentFullScreenElement',
            enabled: 'webkitCancelFullScreen',
            onchange: 'webkitfullscreenchange',
            onerror: 'webkitfullscreenerror',
        },
        {
            exit: 'mozCancelFullScreen',
            request: 'mozRequestFullScreen',
            element: 'mozFullScreenElement',
            enabled: 'mozFullScreenEnabled',
            onchange: 'mozfullscreenchange',
            onerror: 'mozfullscreenerror',
        },
        {
            exit: 'msExitFullscreen',
            request: 'msRequestFullscreen',
            element: 'msFullscreenElement',
            enabled: 'msFullscreenEnabled',
            onchange: 'MSFullscreenChange',
            onerror: 'MSFullscreenError',
        },
    ]

    const doc = window?.document ?? {}

    for (let i = 0; i < proposals.length; i++) {
        const first = Object.keys(proposals[i])[0]
        if (proposals[i][first] in doc) return { ...proposals[i] }
    }
    return false
})()

const fsMediaAPI = el => {
    const proposals = ['webkitEnterFullscreen', 'enterFullscreen']
    const element = el ?? {}

    for (let i = 0; i < proposals.length; i++) {
        if (proposals[i] in element) return { request: proposals[i] }
    }
    return false
}

export default ({
    onChange: _onChange = () => {},
    onError: _onError = () => {},
} = {}) => {
    const usable = Boolean(fsAPI) && Boolean(window.document[fsAPI.enabled])
    const [isActive, setActive] = useState(false)

    const checkActive = () =>
        fsAPI?.element && setActive(window.document[fsAPI.element] !== null)

    const onChange = useRef(() => {
        checkActive()
        _onChange()
    })
    const onError = useRef(() => {
        checkActive()
        _onError()
    })

    useEffect(
        () => {
            checkActive()
        },
        fsAPI?.element ? [window.document[fsAPI.element]] : []
    )

    useEffect(() => {
        if (!fsAPI) return
        window.document.addEventListener(fsAPI.onchange, onChange.current)
        window.document.addEventListener(fsAPI.onerror, onError.current)
        return () => {
            window.document.removeEventListener(
                fsAPI.onchange,
                onChange.current
            )
            window.document.removeEventListener(fsAPI.onerror, onError.current)
        }
    }, [])

    const doEnter = useCallback((el, fallback, dryRun = false) => {
        const ref = (el?.current ?? el) || window?.document?.documentElement
        if (!ref) return false

        if (!usable) {
            const _ref = fallback?.current ?? fallback
            const isIOS = /(iPhone|iPad|iPod)/.test(navigator?.platform || '')
            if (Boolean(_ref) && _ref.tagName === 'VIDEO' && isIOS === true)
                return ((ref, dryRun) => {
                    const APIs = fsMediaAPI(ref)
                    if (!APIs) return false
                    if (dryRun) return true

                    ref[APIs.request]()
                })(_ref, dryRun)
            return false
        }
        if (dryRun) return true

        const ret = ref[fsAPI.request]()
        if (ret instanceof Promise)
            ret.then(onChange.current).catch(onError.current)
        return ret
    }, [])

    const doExit = useCallback(() => {
        if (!usable) return false

        const ret = window.document[fsAPI.exit]()
        if (ret instanceof Promise)
            ret.then(onChange.current).catch(onError.current)
        return ret
    }, [])

    return {
        request: doEnter,
        exit: doExit,
        toggle: (el, fallback) => (isActive ? doExit() : doEnter(el, fallback)),
        isActive: isActive,
        isSupported: (el, fallback) => doEnter(el, fallback, true),
    }
}
