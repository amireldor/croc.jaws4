import * as rollup from 'rollup'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import fs from 'fs'
import path from 'path'

const outputDir = 'build/'
const outputStaticDir = 'build/teeth/'
const serverFilePath = path.join(outputDir, 'server.js')
const clientFilePath = path.join(outputStaticDir, 'crocfarm.js')

export const globals = {
  'mithril': 'm'
}

const pkg = require('../package.json')
const external = Object.keys(pkg.dependencies)

let compiledStylesheets = []

function addStylesheet(css) {
  console.log(css, 'add stylesheet')
  compiledStylesheets.push(css)
}

function getConcatenatedStylesheets() {
  return compiledStylesheets.join('\n')
}

const pluginsFirst = [
  nodeResolve(),
]
const pluginsLast = [
  babel(babelrc({
    addModuleOptions: false,
  })),
]

function makePlugins(pluginsMiddle = []) {
  return [...pluginsFirst, ...pluginsMiddle, ...pluginsLast];
}

let config = {
  globals,
  sourceMap: true
}

let clientConfig = {
  ...config,
  plugins: makePlugins([
    stylusCssModules(),  // intentional no-op
    commonjs({ addModuleOptions: false }),
  ]),
  entry: 'src/main.js',
}

let serverConfig = {
  ...config,
  plugins: makePlugins([
    stylusCssModules({
      output: addStylesheet
    }),
  ]),
  external,
  entry: 'src/server.js',
}

let clientBundleCache, serverBundleCache

console.log("bundling server...")
rollup.rollup(serverConfig).then(bundle => {

  serverBundleCache = bundle
  bundle.write({
    format: 'cjs',
    dest: serverFilePath,
  })

}).then(writeFinalCss).then(() => console.log('HELLO TEST'))

function writeFinalCss() {
  console.log('writingfina css')
  fs.writeFileSync(path.join(outputStaticDir, 'croclipstick.css'), getConcatenatedStylesheets())
}

console.log("bundling client...")
rollup.rollup(clientConfig).then(bundle => {
  clientBundleCache = bundle
  bundle.write({
    format: 'iife',
    dest: clientFilePath,
    moduleName: 'crocfarm',
  })
}).catch(error => {
  console.error(`client bundle error: ${error}`)
})
