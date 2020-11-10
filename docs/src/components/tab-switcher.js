/*
 * *****************************************************************************
 * File: tab-switcher.js (/src/components/tab-switcher.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Tuesday, 10th November 2020 11:29:47 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:03:25 pm
 * *****************************************************************************
 */

import styled from '@emotion/styled'
import React from 'react'

export default ({ tabs, ...props }) => (
    <Switcher {...props}>
        {(tabs || []).map((tab, idx) => (
            <Choice key={idx} isActive={tab.active} onClick={tab.onClick}>
                {tab.label}
            </Choice>
        ))}
    </Switcher>
)

const Switcher = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const Choice = styled.div`
    padding: 5px 10px;
    background: ${props => (props.isActive ? '#009fe3' : '#eeeeee')};
    color: ${props => (props.isActive ? '#ffffff' : '#000000')};
    border: 1px solid ${props => (props.isActive ? '#008ed2' : '#dddddd')};
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
        background: #009fe3;
        color: #ffffff;
        border: 1px solid #008ed2;
    }
    &:first-of-type {
        border-radius: 5px 0 0 5px;
    }
    &:last-of-type {
        border-radius: 0 5px 5px 0;
    }
`
