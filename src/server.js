import 'babel-polyfill'
import koa from 'koa'
import pug from 'pug'
import mithrilRender from 'mithril-node-render'

import tempView from './temp.view'

const pugFile = './templates/base.pug'

const app = koa()
const compiledPug = !process.env.DEV && pug.compileFile(pugFile)

app.use(function *() {
  const mithrilHtml = mithrilRender(tempView)
  
  let pugHtml;
  const params = { app: mithrilHtml }

  if (!process.env.DEV) {
    pugHtml = compiledPug(params)
  } else {
    pugHtml = pug.renderFile(pugFile, params)
  }

  this.body = pugHtml
})

const port = process.env.PORT || 3000

app.listen(port)
console.log(`listening on ${port}`)
