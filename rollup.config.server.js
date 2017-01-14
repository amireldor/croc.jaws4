import {baseConfig} from './rollup.config.base'


const external = [
  'koa',
  'babel-polyfill',
]


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
