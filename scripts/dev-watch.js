import * as rollup from 'rollup'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import fs from 'fs'
import path from 'path'

const outputDir = 'build/'
const serverFilePath = path.join(outputDir, 'server.js')
const clientFilePath = path.join(outputDir, 'teeth', 'crocfarm.js')

export const globals = {
  'mithril': 'm'
}

const pkg = require('../package.json')
const external = Object.keys(pkg.dependencies)

let compiledStylesheets = []

function addStylesheet(css) {
  compiledStylesheets.push(css)
}

function getConcatenatedStylesheets() {
  return compiledStylesheets.join('\n')
}

let config  = {
  plugins: [
    stylusCssModules({
      output: addStylesheet
    }),
    nodeResolve(),
    babel(babelrc({
      addModuleOptions: false,
    })),
  ],
  globals,
  sourceMap: true
}

let clientConfig = {
  ...config,
}

let serverConfig = {
  ...config,
  external,
  entry: 'src/server.js',
}

let clientBundleCache, serverBundleCache

rollup.rollup(serverConfig).then(bundle => {
  serverBundleCache = bundle
  bundle.write({
    format: 'cjs',
    dest: serverFilePath,
  })
})
