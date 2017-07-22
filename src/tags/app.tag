app
  sitehead(short="{ shortHeader }")
  notfound(if="{ notFound }" animal="james")
  editarea

  style.
    @import "globals.styl"

    :scope
      font-family $main-font

      display grid
      grid-template-columns 100%
      grid-columns-gap 100px
      justify-content center
      justify-items stretch

      & > *
        margin 0
        padding 10px


  script.
    this.shortHeader = true
    this.notFound = true
