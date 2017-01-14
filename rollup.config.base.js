import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export const globals = {
  'mithril': 'm'
}

export const baseConfig = {
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      addModuleOptions: false,  // needed for stage-0 to load properly
      // (options for es2015 is given in .baberc)
    }),
    babel(babelrc({
      addModuleOptions: false
    })),
  ],
  globals,
}
