import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
// TODO: maybe I'll need this:
//import nodeResolve from 'rollup-plugin-node-resolve'

let plugins = [
//  nodeResolve(),
  babel(babelrc({
    addModuleOptions: false,
  })),
]

export default {
  entry: "src/client.js",
  dest: "build/public/client.js",
  plugins,
}
