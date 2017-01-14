import m from 'mithril'

import MainOptions from './MainOptions'

export default {
  controller: function (args) {
  },
  view: function (ctrl, args) {
    return m('div.app', [
      m('h1', "This is fun"),
      MainOptions,
    ])
  }
}
