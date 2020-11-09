/*
 * *****************************************************************************
 * File: rollup.config.js (/rollup.config.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:51:38 am
 * 
 * Copyright (c) 2020 RS1 Project
 * License: GNU General Public License v3.0 or later
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * Modified on Monday, 9th November 2020 11:37:29 am
 * *****************************************************************************
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'es',
        exports: 'named',
        sourcemap: false,
        strict: false
      }
    ],
    plugins: [
        nodeResolve({ extensions: ['.jsx', '.js'] }),
        commonjs({
            exclude: 'src/**',
        }),
        babel({
            extensions: ['.jsx', '.js'], 
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        terser(),
    ],
    external: [ ...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies) ],
  }