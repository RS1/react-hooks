/*
 * *****************************************************************************
 * File: useFullScreen.js (/src/hooks/useFullScreen.js) | @rs1/rsplayer
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Sunday, 8th November 2020 4:58:39 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * Modified on Monday, 9th November 2020 11:57:21 am
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
}) => {
    const onChange = useRef(_onChange)
    const onError = useRef(_onError)

    const usable = Boolean(fsAPI) && Boolean(window.document[fsAPI.enabled])
    const [isActive, setActive] = useState(false)

    useEffect(
        () => {
            if (!fsAPI) return
            setActive(window.document[fsAPI.element] !== null)
        },
        !fsAPI ? [] : [window.document[fsAPI.element]]
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
        if (ret instanceof Promise) ret.then(onChange).catch(onError)
        return ret
    }, [])

    const doExit = useCallback(() => {
        if (!usable) return false

        const ret = window.document[fsAPI.exit]()
        if (ret instanceof Promise) ret.then(onChange).catch(onError)
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
