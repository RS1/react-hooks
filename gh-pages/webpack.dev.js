/*
 * *****************************************************************************
 * File: webpack.dev.js (/webpack.dev.js) | @rs1/react-hooks-pages
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 6:24:53 pm
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Tuesday, 10th November 2020 5:01:18 pm
 * *****************************************************************************
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    open: false,
    contentBase: './pages',
    hot: true,
  },
});
