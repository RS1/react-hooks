/*
 * *****************************************************************************
 * File: app.js (/src/app.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:24:53 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:02:28 pm
 * *****************************************************************************
 */

import React, { useState } from 'react'
import styled from '@emotion/styled'

import './app.css'

import Hook, { hooks } from './components/hook'

export default () => {
    const [page, setPage] = useState(hooks[0])

    return (
        <Container>
            <Sidebar>
                <Title>ReactHooks</Title>
                {hooks.map(title => (
                    <Button
                        key={title}
                        active={page === title}
                        onClick={() => setPage(title)}
                    >
                        {title}
                    </Button>
                ))}
            </Sidebar>
            <Page>
                <Hook hook={page} />
            </Page>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 100vh;
`

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    width: 250px;
    min-height: 100%;
    background: #eeeeee;
`

const Button = styled.div`
    background: ${props => (props.active ? '#009fe3' : '#ffffff')};
    color: ${props => (props.active ? '#ffffff' : '#000000')};
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
        background: #009fe3;
        color: #ffffff;
    }
`

const Page = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    width: 100%;
    min-height: 100%;
    background: #ffffff;
    overflow-x: scroll;
`

const Title = styled.h1``
