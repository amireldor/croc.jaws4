// TODO: don't use rollup.config.*.js, do something with the
// dev-watch.js script wisely so you can both watch and build either
// server or client
import {baseConfig, basePlugins} from './rollup.config.base'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'

const plugins = [
  stylusCssModules({
      output: () => { /* handled in rollup.configbase.js, here for compilation success */},
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
