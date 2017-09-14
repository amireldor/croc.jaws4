(in-progress readme)


npm tasks:
----------

Emm..... the relevant ones are the simple "start" and "local-server" which runs a Python 3 HTTP server on the build public folder.

Stuff are real dirty here and I'll do some cleanup hopefully soon.

 * The public and public/vendor folders are missing and that does problems.
 * Seems like only riot.js or the riot.min.js are needed, no need for "riot+tags.js" or something anymore. Need to check and automate.
 * mirthril components and code still exist, should remove.
 * I think there's a dev-watch.js script that needs to be removed. Again, check and make sure.


 BIG TODO:
 Do server rendering. Make app work also without JavaScript. That would be cool.

