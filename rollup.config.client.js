import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const globals = {
  'mithril': 'm'
}

const config = {
  entry: 'src/main.js',
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(babelrc({
      addModuleOptions: false
    })),
  ],
  globals,
  targets: [
    {
      dest: 'build/crocfarm.js',
      format: 'iife',
      sourceMaps: true,
      moduleName: 'crocfarm',
    }
  ]
}

export default config;
