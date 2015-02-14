# Saber

Ghost theme made simple, with emoji support!

![Saber](http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-155177.jpg)

## Quick start for installation

```
1. cd into your Ghost theme directory and then 
git clone https://github.com/0x142857/Saber.git
2. Edit post.hbs to use your own comment service
3. Restart your Ghost instance and select `Saber` in your Ghost backstage settings
```

Do wanna a navigation menu for your blog? Remove the comment symbols in `default.hbs`:

```html
<header class="site-header">
  <div class="container">
    <h1 class="site-title"><a href="{{@blog.url}}">{{@blog.title}}</a></h1>
    <!--<nav class="nav-right">
      <ul class="pages clearfix">
        <li><a href="{{@blog.url}}">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>-->
  </div>
</header>
```

-EOF- Now enjoy and have fun blogging with the elegant Ghost blog 😋

Inspired by [Veganshe](http://www.veganshe.com) && [GitHub Blog](https://github.com/blog)

# Saber? Why?

[Saber (Fate/stay night)](http://en.wikipedia.org/wiki/Saber_(Fate/stay_night))

## Demonstration

The theme is used in [The GitHunt blog](https://blog.githunt.io).

## License

[MIT](LICENSE).



