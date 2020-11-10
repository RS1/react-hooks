/*
 * *****************************************************************************
 * File: md-codeblock.js (/src/components/md-codeblock.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Tuesday, 10th November 2020 11:36:52 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:03:14 pm
 * *****************************************************************************
 */

import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default ({ language, value }) => (
    <Prism language={language ?? null} style={coy}>
        {value}
    </Prism>
)
