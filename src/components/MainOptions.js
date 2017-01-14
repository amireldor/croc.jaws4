import m from 'mithril'

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
    return m('ul', this.getDocTypesNodes())
  },
  getDocTypesNodes: function () {
    const nodes = [];
    //for (let [type, opts] of Object.entries(docTypes)) {
    //  //nodes.push(m('li', `${type} ${opts.disabled === true ? ' - no soup for you!' : ''}`))
    //  nodes.push(m('li', type))
    //}
    nodes.push(m('li', 'nice'))
    return nodes
  }
}
