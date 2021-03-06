/*
 * *****************************************************************************
 * File: babel.config.js (/babel.config.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:54:20 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 4:57:50 pm
 * *****************************************************************************
 */

const presets = [
	["@babel/preset-env", {
		targets: 'since 2005',
		useBuiltIns: "usage",
        corejs: 3,
    }],
	"@babel/preset-react",
 ];
const plugins = [

];

module.exports = { presets, plugins };
