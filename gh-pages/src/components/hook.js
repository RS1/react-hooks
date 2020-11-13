/*
 * *****************************************************************************
 * File: hook.js (/src/components/hook.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Tuesday, 10th November 2020 10:51:42 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Friday, 13th November 2020 11:51:00 am
 * *****************************************************************************
 */

import styled from '@emotion/styled'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import TabSwitcher from './tab-switcher'
import mdCodeBlock from './md-codeblock'

export const hooks = [
    'useAgentParser',
    'useAutoIdle',
    'useDynamicRef',
    'useFullScreen',
    'useKeyLinkedRef',
    'useListener',
    'useMediaQuery',
    'useRectRef',
    'useRefEffect',
    'useSliderRef',
]

const components = hooks.reduce(
    (acc, hook) => ({ ...acc, [hook]: require(`../hooks/${hook}.js`).default }),
    {}
)

const mds = hooks.reduce(
    (acc, hook) => ({ ...acc, [hook]: require(`../hooks/${hook}.md`).default }),
    {}
)

export default ({ hook, ...props }) => {
    const hookName = hook || hooks[0]
    const Hook = components[hookName]
    const [viewCode, setViewCode] = useState(false)

    const tabs = [
        {
            label: 'View code',
            active: viewCode,
            onClick: () => setViewCode(true),
        },
        {
            label: 'Run code',
            active: !viewCode,
            onClick: () => setViewCode(false),
        },
    ]

    return (
        <Wrapper {...props}>
            <h1>{`{ ${hookName} }`}</h1>
            <TabSwitcher tabs={tabs} />
            <hr />
            {viewCode ? (
                <ReactMarkdown
                    children={mds[hookName]}
                    renderers={{ code: mdCodeBlock }}
                />
            ) : (
                <Hook />
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
