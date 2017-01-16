// TODO: don't use rollup.config.*.js, do something with the
// dev-watch.js script wisely so you can both watch and build either
// server or client
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import fs from 'fs'

export const globals = {
  'mithril': 'm'
}

let compiledStylesheets = []

export const basePlugins = [
  stylusCssModules({
//      output: 'build/teeth/crocfarm.css',
      output: function (css) {
          console.log('WRITING CSS', new Date().toString(), css)
          //fs.writeFileSync('build/teeth/crocfarm.css', css)
          compiledStylesheets.push(css)
      }
  }),
  nodeResolve({}),
  babel(babelrc({
    addModuleOptions: false,
  })),
]

export const baseConfig = {
  plugins: basePlugins,
  globals,
  sourceMap: true,
}
