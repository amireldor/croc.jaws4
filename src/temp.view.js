/**
 * Temporary mithril view to test stuff
 */

import m from 'mithril'

export default m('div.fun', [
  m('h1.title', "Fun fun fun!"),
  m('h2', "This is nice!"),
  m('p', 'Do you like:', [
    m('ul', [
      m('li', "my name?"),
      m('li', "my dog?"),
      m('li', "my horse?"),
      m('li', "my horse!!"),
    ])
  ], 'You probably like my horse!')
])

