import 'babel-polyfill'
import koa from 'koa'
import mount from 'koa-mount'
import serve from 'koa-static'
import pug from 'pug'
import mithrilRender from 'mithril-node-render'

import AppComponent from './components/App'

const __DEV__ = process.env.DEV

const pugFile = './templates/base.pug'
const compiledPug = !__DEV__ && pug.compileFile(pugFile)

const app = koa()

app.use(mount('/teeth', serve('./teeth')))
app.use(function *() {
  const mithrilHtml = mithrilRender(AppComponent)
  
  let pugHtml;
  const params = { app: mithrilHtml }

  if (!__DEV__) {
    pugHtml = compiledPug(params)
  } else {
    pugHtml = pug.renderFile(pugFile, params)
  }

  this.body = pugHtml
})

const port = process.env.PORT || 3000

app.listen(port)
console.log(`listening on ${port}`)
