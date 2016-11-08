# tachyons-cli [![Build Status](https://secure.travis-ci.org/tachyons-css/tachyons-cli.svg?branch=master)](https://travis-ci.org/tachyons-css/tachyons-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Postprocess Tachyons stylesheets with a CLI app.

This module is used to process Tachyons css modules and generate their documentation.
It is leveraged in an [npm script](https://github.com/tachyons-css/tachyons-base/blob/d55f2f4458b1e03c582f8a6c86a41d964512775f/package.json#L34) shared among all modules.

It is meant to be installed globally with the `--global` flag, and requires `v4` of node or higher.

## Installation

```bash
npm install --global tachyons-cli
```

## Usage

```sh
$ tachyons --help

  Postprocess tachyons stylesheets

  Usage
    $ tachyons <input.css>

  Options
    -m, --minify Minify the output stylesheet
    -r, --repeat Repeat class names to increase specificity
    -a, --authors Dynamically add authors based on package.json
    -n, --new Generate a new Tachyons project
    --generate-docs Generate documentation for a given module
    --package The path to the module package to be documented

  Example
    $ tachyons src/tachyons.css > dist/c.css
    $ tachyons src/tachyons.css > dist/c.css --minify
    $ tachyons src/tachyons.css > dist/c.repeated.css --repeat
    $ tachyons src/tachyons-type-scale.css --generate-docs --package=./package.json > readme.md
    $ tachyons --new=my-new-project
```

#### Within a Tachyons css module

```sh
$ tachyons src/tachyons-base.css > css/tachyons-base.css && \
  tachyons src/tachyons-base.css --minify > css/tachyons-base.min.css && \
  tachyons src/tachyons-base.css --generate-docs --package=../../package.json > readme.md
```

## Development

```sh
$ npm t
```

## Related

- [`tachyons`](https://github.com/tachyons-css/tachyons)
- [`tachyons-build-css`](https://github.com/tachyons-css/tachyons-build-css)
- [`postcss`](https://github.com/postcss/postcss)
- [`cssstats`](https://github.com/cssstats/cssstats)
- [`immutable-css`](https://github.com/johnotander/immutable-css)

## License

ISC

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
