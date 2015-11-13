# tachyons-type-scale 3.1.0

Performance based css module.

#### Stats

229 | 25 | 24
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-type-scale
```

#### With Git

```
git clone https://github.com/tachyons-css/tachyons-type-scale
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-type-scale";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-type-scale">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built in the `css` directory.

## The CSS

```css
/*

   TYPE SCALE

*/
.mega { font-size: 4rem; }
.f1 { font-size: 2rem; }
.f2 { font-size: 1.5rem; }
.f3 { font-size: 1.25rem; }
.f4 { font-size: 1rem; }
.f5, .small { font-size: .85rem; }
@media screen and (min-width: 48em) {
 .mega-ns { font-size: 4rem; }
 .f1-ns { font-size: 2rem; }
 .f2-ns { font-size: 1.5rem; }
 .f3-ns { font-size: 1.25em; }
 .f4-ns { font-size: 1rem; }
 .f5-ns { font-size: .85rem; }
}
@media screen and (min-width: 48em) and (max-width: 64em) {
 .mega-m { font-size: 4rem; }
 .f1-m { font-size: 2rem; }
 .f2-m { font-size: 1.5rem; }
 .f3-m { font-size: 1.25rem; }
 .f4-m { font-size: 1rem; }
 .f5-m { font-size: .85rem; }
}
@media screen and (min-width: 64em) {
 .mega-l { font-size: 4rem; }
 .f1-l { font-size: 2rem; }
 .f2-l { font-size: 1.5rem; }
 .f3-l { font-size: 1.25rem; }
 .f4-l { font-size: 1rem; }
 .f5-l { font-size: .85rem; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT
