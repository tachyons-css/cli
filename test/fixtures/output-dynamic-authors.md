# tachyons-type-scale 5.0.2

Performance based css module.

#### Stats

318 | 40 | 32
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
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   TYPE SCALE

*/
/* For Hero Titles */
.f-6, .f-headline { font-size: 6rem; }
.f-5, .f-subheadline { font-size: 5rem; }
/* Type Scale */
.f1 { font-size: 3rem; }
.f2 { font-size: 2.25rem; }
.f3 { font-size: 1.5rem; }
.f4 { font-size: 1.25rem; }
.f5 { font-size: 1rem; }
.f6 { font-size: .875rem; }
@media screen and (min-width: 48em) {
 .f-6-ns, .f-headline-ns { font-size: 6rem; }
 .f-5-ns, .f-subheadline-ns { font-size: 5rem; }
 .f1-ns { font-size: 3rem; }
 .f2-ns { font-size: 2.25rem; }
 .f3-ns { font-size: 1.5rem; }
 .f4-ns { font-size: 1.25rem; }
 .f5-ns { font-size: 1rem; }
 .f6-ns { font-size: .875rem; }
}
@media screen and (min-width: 48em) and (max-width: 64em) {
 .f-6-m, .f-headline-m { font-size: 6rem; }
 .f-5-m, .f-subheadline-m { font-size: 5rem; }
 .f1-m { font-size: 3rem; }
 .f2-m { font-size: 2.25rem; }
 .f3-m { font-size: 1.5rem; }
 .f4-m { font-size: 1.25rem; }
 .f5-m { font-size: 1rem; }
 .f6-m { font-size: .875rem; }
}
@media screen and (min-width: 64em) {
 .f-6-l, .f-headline-l { font-size: 6rem; }
 .f-5-l, .f-subheadline-l { font-size: 5rem; }
 .f1-l { font-size: 3rem; }
 .f2-l { font-size: 2.25rem; }
 .f3-l { font-size: 1.5rem; }
 .f4-l { font-size: 1.25rem; }
 .f5-l { font-size: 1rem; }
 .f6-l { font-size: .875rem; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

- [mrmrs](http://mrmrs.cc)

## License

MIT

