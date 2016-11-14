#!/usr/bin/env node
'use strict'

const fs = require('fs')
const _ = require('lodash')
const meow = require('meow')
const shtml = require('shtml')
const mkdirp = require('mkdirp')
const isBlank = require('is-blank')
const isPresnet = require('is-present')
const assertFile = require('assert-file-exists')
const cssstats = require('cssstats')
const trailingLines = require('single-trailing-newline')
const authorsToMd = require('authors-to-markdown')

const tachyonsBuildCss = require('tachyons-build-css')

const cli = meow(shtml`
  <div>
    <italic>
      Welcome to the Tachyons cli. This is the build
      tool used for processing Tachyons stylesheets,
      generating apps, and customizing Tachyons
      builds. If you encounter any bugs or have
      questions please file an issue:

      <blue><underline>https://github.com/tachyons-css/tachyons-cli</underline></blue><br><br>
    </italic>
    <underline>Usage</underline>
    $ tachyons [input.css]<br><br>

    <underline>Options</underline>
    -m, --minify Minify the output stylesheet
    -r, --repeat Repeat class names to increase specificity
    -a, --authors Dynamically add authors based on package.json
    -n, --new Generate a new Tachyons project
    --generate-docs Generate documentation for a given module
    --package The path to the module package to be documented<br><br>

    <underline>Examples</underline>
    $ tachyons src/tachyons.css &gt; dist/c.css
    $ tachyons src/tachyons.css &gt; dist/c.css --minify
    $ tachyons src/tachyons.css &gt; dist/c.repeated.css --repeat
    $ tachyons src/tachyons-type-scale.css --generate-docs --package=./package.json &gt; readme.md
    $ tachyons --new=my-new-project
  </div>
`, {
  alias: {
    h: 'help',
    m: 'minify',
    r: 'repeat',
    a: 'authors',
    n: 'new'
  }
})

const inputFile = cli.input[0]
const outputFile = cli.input[1]

if (cli.flags.new) {
  console.log('Generating a new Tachyons project')
  const projDir = cli.flags.new == true ? 'tachyons-project' : cli.flags.new

  mkdirp.sync(projDir)
  mkdirp.sync(projDir + '/src')
  mkdirp.sync(projDir + '/css')

  const index = fs.readFileSync(__dirname + '/templates/new/index.html','utf8')
  const pkg = fs.readFileSync(__dirname + '/templates/new/package.json', 'utf8')
  const readme = fs.readFileSync(__dirname + '/templates/new/readme.md', 'utf8')
  const style = fs.readFileSync(__dirname + '/templates/new/src/styles.css', 'utf8')

  fs.writeFileSync(projDir + '/index.html', index)
  fs.writeFileSync(projDir + '/package.json', pkg)
  fs.writeFileSync(projDir + '/readme.md', readme)
  fs.writeFileSync(projDir + '/src/styles.css', style)

  console.log('New project located in ' + projDir)
  process.exit(0)
}

if (isBlank(inputFile)) {
  console.error(shtml`<red>Please provide an input stylesheet</red>`)
  console.log(cli.help)
  process.exit(1)
} 

assertFile(inputFile)

const input = fs.readFileSync(inputFile, 'utf8')
tachyonsBuildCss(input, {
  from: inputFile,
  to: outputFile,
  minify: cli.flags.minify,
  repeat: cli.flags.repeat
}).then(function (result) {
  if (cli.flags.generateDocs) {
    const stats = cssstats(result.css)
    const pkg = require(cli.flags.package)
    const template = fs.readFileSync(__dirname + '/templates/readme.md', 'utf8')
    const tpl = _.template(template)

    let authors = `* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)
`

    if (cli.flags.authors) {
      authors = authorsToMd(pkg)
    }

    const md = tpl({
      module: pkg,
      stats: stats,
      authors: authors,
      srcCss: trailingLines(result.css)
    })

    console.log(trailingLines(md))
    process.exit(0)
  } else {
    console.log(trailingLines(result.css))
    process.exit(0)
  }
})
