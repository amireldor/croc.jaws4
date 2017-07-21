import m from 'mithril'

import OptionsArea from './OptionsArea'
import ContentArea from './ContentArea'
import ActionArea from './ActionArea'

import styles from './App.styl'

export default {
  controller: function (args) {
  },

  view: function (ctrl, args) {
    return m('div', { class: styles.app }, [
      m('h1', { class: styles.title },"This is fun"),
      OptionsArea,
      ContentArea,
      ActionArea,
    ])
  }
}
