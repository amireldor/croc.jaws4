// TODO: don't use rollup.config.*.js, do something with the
// dev-watch.js script wisely so you can both watch and build either
// server or client
import {baseConfig} from './rollup.config.base'


const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)

const serverConfig = Object.assign(
  baseConfig,
  {
    entry: 'src/server.js',
    external,
    targets: [
      {
        dest: 'build/server.js',
        format: 'cjs',
      }
    ],
  })

export default serverConfig;
