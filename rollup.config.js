import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)

const globals = {}
external.map(ext => {
  switch (ext) {
  case 'mithril':
    globals['mithril'] = 'm'
    break
  default:
    globals[ext] = ext
  }
})

const config = {
  entry: 'src/main.js',
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(babelrc()),
  ],
  external: null,
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
