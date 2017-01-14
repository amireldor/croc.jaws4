import m from 'mithril'

const number = m.prop(100)

export default {
  controller: function (args) {
    this.number = m.prop(100)
    this.magic = () => {
      const newNumber = Math.ceil(Math.random() * 5000)
      console.log('ting!', newNumber)
      number(newNumber)
      console.log('num', number())
    }

    if (typeof window !== 'undefined') {
      m.startComputation()
      setTimeout(() => { this.magic(); m.endComputation() }, 777)
    }
  },
  view: function (ctrl, args) {
    return m('div.app', [
      m('h1', "Monkey island"),
      m('span', [
        "Your lucky number is ",
        m('strong', number())
      ])
    ])
  }
}
