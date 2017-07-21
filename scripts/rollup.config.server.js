import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

let plugins = [
  babel(babelrc({
    addModuleOptions: false,
  })),
]

export default {
  entry: "src/server.js",
  dest: "build/server.js",
  format: "cjs",
  plugins,
}
