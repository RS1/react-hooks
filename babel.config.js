/*
 * *****************************************************************************
 * File: babel.config.js (/babel.config.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:54:20 am
 * 
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * Modified on Monday, 9th November 2020 10:54:34 am
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