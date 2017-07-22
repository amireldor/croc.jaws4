editarea
  form(onclick={ click })
    textarea#content(placeholder="type/paste stuff here...")
    input#submit(type="submit" value="feed the croc!")


  style.
    @import "globals.styl"

    :scope
      text-align center
      background maroon

      display flex
      flex-direction column

      padding 0
      margin 0

    form
      display flex
      flex-grow 1
      flex-direction column
      height 100%

    textarea#content
      background red
      flex-grow 1
      width 100%

      display block
      padding 0

      font-family $main-font

    input#submit
      $offset = 30px
      $size = 80px

      position absolute
      right $offset
      bottom $offset

      display inline-block
      width $size
      height $size

      border-radius 100%
      border 1px solid red

      background lime
