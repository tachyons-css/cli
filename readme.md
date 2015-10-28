# tachyons-cli [![Build Status](https://secure.travis-ci.org/tachyons-css/tachyons-cli.png?branch=master)](https://travis-ci.org/tachyons-css/tachyons-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Postprocess tachyons stylesheets with a CLI app.

## Installation

```bash
npm install --g tachyons-cli
```

## Usage

```sh
$ tachyons --help

  Postprocess tachyons stylesheets and, if you wish, generate docs

  Usage
    $ tachyons <input.css>

  Options
    -m, --minify Minify the output stylesheet
    --generate-docs Generate documentation for a given module
    --package The path to the module package to be documented

  Example
    $ tachyons src/tachyons.css > dist/c.css
    $ tachyons -m src/tachyons.css > dist/c.css
    $ tachyons src/tachyons-type-scale.css --generate-docs --package=./package.json > readme.md
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
