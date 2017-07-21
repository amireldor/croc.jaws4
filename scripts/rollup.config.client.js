import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

let plugins = [
  babel(babelrc({
    addModuleOptions: false,
  })),
]

export default {
  entry: "src/client.js",
  dest: "build/client.js",
  format: "cjs",
  plugins,
}
