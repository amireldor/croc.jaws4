import 'babel-polyfill'
import koa from 'koa'
import pug from 'pug'


const pugFile = './templates/base.pug'

const app = koa()
const compiledPug = !process.env.DEV && pug.compileFile(pugFile)

app.use(function *() {
  let html;
  const params = { fun: 'horse' }

  if (!process.env.DEV) {
    html = compiledPug(params)
  } else {
    html = pug.renderFile(pugFile, params)
  }

  this.body = html
})

const port = process.env.PORT || 3000

app.listen(port)
console.log(`listening on ${port}`)
