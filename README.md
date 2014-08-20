This is a simple blogging template for the  [Siteleaf](http://siteleaf.com) CMS. If you're not familiar with Siteleaf, think of it as a web-based static site generator that's easy enough for your non-technical clients to use.

**You build the template, then let them manage the content in Siteleaf**, publishing out static files to FTP, SFTP, Amazon S3, Rackspace Cloud, Siteleaf hosting, or even Github Pages.

Developing for it is [super simple](http://vimeo.com/70121781), there's a ruby gem that lets you build projects locally—using all your favorite [preprocessors](http://sass-lang.com) and [servers](http://pow.cx).

![related-articles.html](http://frameleafs.siteleaf.net/assets/related-articles.html%20-%20:Users:bryanschuetz:Projects:frameleafs.png)

Templating is done with the delightfully easy to use  [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) engine.

> "That _can't_ work, too easy. [it works]"
> <cite>--me, everytime I'm building a template in liquid.</cite>

The layout in this template uses a heavily modified grid from the [Frameless](http://framelessgrid.com) anti framework. Because who wants a fluid grid:

* Make a regular fixed-width grid
* Make it repeat infinitely
* Center it on the viewport
* ??
* Profit
