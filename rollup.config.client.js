import {baseConfig, basePlugins} from './rollup.config.base'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'

const plugins = [
  stylusCssModules({
//      output: 'build/teeth/crocfarm.css',
  }),
  nodeResolve({}),
  commonjs({ addModuleOptions: false }),
  babel(babelrc({
    addModuleOptions: false
  })),
]

const clientConfig = Object.assign(
  baseConfig,
  { plugins },
  {
    entry: 'src/main.js',
    targets: [
      {
        dest: 'build/teeth/crocfarm.js',
        format: 'iife',
        moduleName: 'crocfarm',
      }
    ],
  })

export default clientConfig
