/*
 * *****************************************************************************
 * File: babel.config.js (/babel.config.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:24:53 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:01:43 pm
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
	"emotion",
];

module.exports = { presets, plugins };
