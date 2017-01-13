import m from 'mithril'

let view = function () {
  return m('div', [
    m('h1.title', "fun!"),
    m('p', "I like your tie."),
  ]);
}

const rendered = m.render(view())
console.log(rendered)
