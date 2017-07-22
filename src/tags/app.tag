app
  sitehead(short="{amir}")
  p(onclick="{click}") I like mishmesh

  style.
    p
      background cyan

  script.
    this.amir = true

    click() {
      console.log('click')
      toggle()
    }

    toggle = () => {
      this.amir = !this.amir
      console.log("toggled:", this.amir)
    }

