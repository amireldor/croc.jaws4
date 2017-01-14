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
        sourceMaps: true,
        sourceMapFile: 'server.js.map',
      }
    ],
  })

export default serverConfig;
