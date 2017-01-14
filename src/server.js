import 'babel-polyfill'
import koa from 'koa'

const app = koa()

app.use(function *() {
  this.body = 'I like your cats!'
})

const port = process.env.PORT || 3000

app.listen(port)
console.log(`listening on ${port}`)
