/*
 * *****************************************************************************
 * File: useAgentParser.js (/src/hooks/useAgentParser.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:51:54 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:03:42 pm
 * *****************************************************************************
 */

import React from 'react'
import { useAgentParser } from '@rs1/react-hooks'

export default props => {
    const {
        isTouch,
        OS: { name: osName, version: osVersion },
        browser: {
            name: browserName,
            version: browserVersion,
            major: browserMajor,
        },
        agent,
    } = useAgentParser()

    return (
        <div>
            <h3>{`${osName} (v${osVersion})`}</h3>
            {`You're ${isTouch ? 'touching' : 'surfing'} the web
            with ${browserName} ${browserMajor} (v${browserVersion}),
            what a wonderful browser!`}
            <hr />
            <pre style={{ whiteSpace: 'normal' }}>{agent}</pre>
        </div>
    )
}
