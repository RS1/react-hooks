/*
 * *****************************************************************************
 * File: rollup.config.js (/rollup.config.js) | @rs1/react-hooks
 * Written by Andrea Corsini <andrea@rs1.it>
 * =============================================================
 * Created on Monday, 9th November 2020 10:51:38 am
 *
 * Copyright (c) 2020 RS1 Project
 * License: Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified on Thursday, 12th November 2020 11:39:30 am
 * *****************************************************************************
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
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
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            exclude: 'node_modules/**',
		}),
        terser(),
    ],
    external: [ ...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies) ],
  }
