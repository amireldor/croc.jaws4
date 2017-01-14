import {baseConfig} from './rollup.config.base'

const clientConfig = Object.assign(
  baseConfig,
  {
    entry: 'src/main.js',
    targets: [
      {
        dest: 'build/crocfarm.js',
        format: 'iife',
        sourceMaps: true,
        moduleName: 'crocfarm',
      }
    ],
  })

export default clientConfig
