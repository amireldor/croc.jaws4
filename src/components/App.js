import m from 'mithril'

import OptionsArea from './OptionsArea'
import ContentArea from './ContentArea'
import ActionArea from './ActionArea'

export default {
  controller: function (args) {
  },
  view: function (ctrl, args) {
    return m('div.app', [
      m('h1', "This is fun"),
      OptionsArea,
      ContentArea,
      ActionArea,
    ])
  }
}
