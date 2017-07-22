sitehead
  header
    div.title
      h1
        a(href="/") croc.farm
      |
      | -
      |
      span.slogan remember the animals

    div.description(class="{hide: opts.short}")
      | Let the croc help you move a piece of data between your machines.  You
      | paste or type some text (a useful URL? an ugly GUID or document
      | ID?) and the croc eats an animal and provide you with a temporary, easily
      | remembered URL for accessing on your other device.


  style.
    .title
      text-align center

      & > *
        display inline

    .description
      &.hide
        display none


  script.
    console.log("sit ehead")
