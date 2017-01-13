import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

const external = [];

export default {
  entry: 'src/main.js',
  plugins: [
    babel(babelrc()),
  ],
  external,
  targets: [
    {
      dest: 'build/fun.js',
      format: 'es',
      sourceMaps: true,
    }
  ]
}
