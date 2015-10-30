# tachyons-type-scale 3.1.0

Performance based css module.

### Stats

---|---|---
229 bytes | 25 selectors | 24 declarations

## Install

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-type-scale
```

#### With Git

```
git clone https://github.com/tachyons-css/tachyons-type-scale
```

## The Code

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

### Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT
