import {baseConfig, basePlugins} from './rollup.config.base'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const plugins = [
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
        sourceMaps: true,
        moduleName: 'crocfarm',
      }
    ],
  })

export default clientConfig
