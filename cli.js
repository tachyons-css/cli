#!/usr/bin/env node
'use strict'

const fs = require('fs')
const _ = require('lodash')
const meow = require('meow')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const isBlank = require('is-blank')
const isPresnet = require('is-present')
const fileExists = require('file-exists')
const cssstats = require('cssstats')
const trailingLines = require('single-trailing-newline')

const postcss = require('postcss')
const cssnano = require('cssnano')
const queries = require('css-mqpacker')
const perfect = require('perfectionist')
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
    --generate-docs Generate documentation for a given module
    --package The path to the module package to be documented

  Example
    $ tachyons src/tachyons.css > dist/c.css
    $ tachyons src/tachyons.css > dist/c.css --minify
    $ tachyons src/tachyons-type-scale.css --generate-docs --package=./package.json > readme.md
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
  atImport(), vars(), conditionals(), media(), queries(), perfect({ format: 'compact' })
]

if (cli.flags.minify) {
  plugins.push(cssnano())
  plugins.push(rmComments())
}

const input = fs.readFileSync(inputFile, 'utf8')
postcss(plugins).process(input, {
  from: inputFile,
  to: outputFile
}).then(function (result) {
  if (cli.flags.generateDocs) {
    const stats = cssstats(result.css)
    const pkg = require(cli.flags.package)
    const template = fs.readFileSync(__dirname + '/templates/readme.md', 'utf8')
    const tpl = _.template(template)

    const md = tpl({
      module: pkg,
      stats: stats,
      srcCss: trailingLines(result.css)
    })

    console.log(trailingLines(md))
    process.exit(0)
  } else {
    console.log(trailingLines(result.css))
    process.exit(0)
  }
})
