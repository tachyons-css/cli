#!/usr/bin/env node
'use strict'

const fs = require('fs')
const meow = require('meow')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const isBlank = require('is-blank')
const isPresnet = require('is-present')
const fileExists = require('file-exists')

const postcss = require('postcss')
const cssnano = require('cssnano')
const queries = require('css-mqpacker')
const prefixer = require('autoprefixer')
const atImport = require('postcss-import')
const media = require('postcss-custom-media')
const vars = require('postcss-css-variables')
const conditionals = require('postcss-conditionals')
const rmComments = require('postcss-discard-comments')

const cli = meow(`
  Usage
    $ tachyons <input.css>

  Options
    -m, --minify Minify the output stylesheet

  Example
    $ tachyons src/tachyons.css > dist/c.css
    $ tachyons -m src/tachyons.css > dist/c.css
`, {
  alias: {
    m: 'minify'
  } 
})

const inputFile = cli.input[0]
const outputFile = cli.input[1]

if (isBlank(inputFile)) {
  console.error(chalk.red('Please provide an input stylesheet'))
  console.log(cli.help)
  process.exit(1)
} else if (!fileExists(inputFile)) {
  console.error(chalk.red('File does not exist ' + inputFile))
  console.log(cli.help)
  process.exit(1)
}

let plugins = [
  atImport(), vars(), conditionals(), media(), rmComments(), queries()
]

if (cli.flags.minify) {
  plugins.push(cssnano())
}

const input = fs.readFileSync(inputFile, 'utf8')
postcss(plugins).process(input, {
  from: inputFile,
  to: outputFile
}).then(function (result) {
  console.log(result.css)
  process.exit(0)
})
