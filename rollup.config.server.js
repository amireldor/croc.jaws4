import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const external = [
  'koa',
  'babel-polyfill',
]

const globals = {
  'mithril': 'm',
}

const config = {
  entry: 'src/server.js',
  plugins: [
    nodeResolve({
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(babelrc({
      addModuleOptions: false,  // needed for stage-0 to load properly
      // (options for es2015 is given in .baberc)
    })),
  ],
  external,
  globals,
  targets: [
    {
      dest: 'build/server.js',
      format: 'cjs',
      sourceMaps: true,
      sourceMapFile: 'server.js.map',
    }
  ]
}

export default config;
