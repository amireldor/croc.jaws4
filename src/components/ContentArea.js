import m from 'mithril'

export default {
  controller: function (args) {
  },

  view: function (ctrl, args) {
    return m('div', [
      m('h2', "Content Area"),

      m('div.content-area.meal', [
        m('div.meta', [
          m('h3', "per-meal settings"),
          m('ul', [
            m('li', [
              m('a[role=checkbox]', "Auto-link URLs")
            ])
          ])
        ]),

        m('div#content-edit', { contentEditable: true }, "type or paste something here!"),
      ]),
    ])
  }
}
