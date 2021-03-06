import m from 'mithril'
import commonStyles from './commonStyles.styl'

export const docTypes = {
  'plain': {},
  'code': {},
  'markdown': {},
  'file': { disabled: true },
}

export default {
  controller: function (args) {
  },

  view: function (ctrl, args) {
    return m('div.options-area', { class: commonStyles.area }, [
      m('ul', this.getDocTypesNodes()),
    ])
  },

  getDocTypesNodes: function () {
    let nodes = [];
    for (let [type, opts] of Object.entries(docTypes)) {
      nodes.push(m('li', `${type} ${opts.disabled === true ? ' - no soup for you!' : ''}`))
    }
    nodes = nodes.concat([
      m('li', "About croc.farm"),
    ])
    return nodes
  }
}
