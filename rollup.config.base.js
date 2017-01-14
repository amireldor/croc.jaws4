import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'

export const globals = {
  'mithril': 'm'
}

export const basePlugins = [
  stylusCssModules({
      output: 'build/teeth/crocfarm.css',
  }),
  nodeResolve({}),
  babel(babelrc({
    addModuleOptions: false,
  })),
]

export const baseConfig = {
  plugins: basePlugins,
  globals,
}
