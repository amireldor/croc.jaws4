import m from 'mithril'

export default {
  controller: function (args) {
  },

  view: function (ctrl, args) {
    return m('div', [
      m('div.submit', [
        m('h3', "feed the croc"),
        m('button', "Feed the croc!")
      ]),
      m('div.meals', [
        m('h3', "your latest meals"),
        m('ul', [
          m('li', m('a', { href: 'https://crck.fr/temp-temp'}, 'crck.fr/mighty-bison')),
          m('li', m('a', { href: 'https://crck.fr/temp-temp'}, 'crck.fr/ajar-bat')),
          m('li', m('a', { href: 'https://crck.fr/temp-temp'}, 'crck.fr/heoric-cockroach')),
        ])
      ])
    ])
  }
}
