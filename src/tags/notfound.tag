notfound

  p your animal was not found!
    br
    | It might have been digested already.

  .sadbox(if="{ opts.animal }")
    p.animal-name { opts.animal }

  style.
    @import "globals.styl"

    :scope
      text-align center

    .sadbox
      color $sad-color
      background $sad-background-color

      font-size $big-font-size
      text-decoration line-through

      padding 20px
      margin auto
      width 70vw
