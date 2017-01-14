import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'

export const globals = {
  'mithril': 'm'
}

export const basePlugins = [
  nodeResolve({}),
  babel(babelrc({
    addModuleOptions: false
  })),
]

export const baseConfig = {
  plugins: basePlugins,
  globals,
}
