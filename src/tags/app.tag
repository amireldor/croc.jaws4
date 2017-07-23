app
  sitehead(short="{ shortHeader }")

  a(href="egoz") egoz
  a(href="nice") nice

  router
    route(path="nice")
      notfound(if="{ notFound }" animal="james")
      editarea.grow
    route(path="egoz")
      <p>egoz</p>

  style.
    @import "globals.styl"

    :scope
      font-family $main-font

      position absolute
      top 0
      left 0
      width 100vw
      min-height 100vh

      display flex
      flex-direction column

      & > *
        margin 0
        padding 10px
        outline: 1px solid orange

    .grow
      flex-grow 1


  script.
    this.shortHeader = true
    this.notFound = false
