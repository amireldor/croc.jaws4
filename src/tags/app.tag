app
  sitehead(short="{ shortHeader }")
  notfound(if="{ notFound }" animal="james")

  style.
    @import "globals.styl"

    :scope
      font-family sans

  script.
    this.shortHeader = true
    this.notFound = true
