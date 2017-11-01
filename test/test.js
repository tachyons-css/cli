const fs = require('fs')
const test = require('ava')
const pify = require('pify')
const childProcess = require('child_process')

test('processes source code', async t => {
  const stdout = await pify(childProcess.execFile)('../cli.js', ['fixtures/input.css'], { cwd: __dirname })

  t.snapshot(stdout)
})

test('processes source code and repeats classes', async t => {
  const stdout = await pify(childProcess.execFile)('../cli.js', ['fixtures/input.css', '--repeat=4'], { cwd: __dirname })

  t.snapshot(stdout)
})

test('documents a module', async t => {
  const stdout = await pify(childProcess.execFile)(
    '../cli.js', [
      'fixtures/input.css',
      '--generate-docs',
      '--package=./node_modules/tachyons-type-scale/package.json',
      '--template=../templates/readme.md'
    ],
    { cwd: __dirname }
  )

  t.snapshot(stdout)
})

test('documents a module with dynamic authors', async t => {
  const stdout = await pify(childProcess.execFile)(
    '../cli.js', [
      '../node_modules/tachyons-type-scale/src/tachyons-type-scale.css',
      '--generate-docs',
      '--package=./node_modules/tachyons-type-scale/package.json',
      '--template=../templates/readme.md',
      '--authors'
    ],
    { cwd: __dirname }
  )

  t.snapshot(stdout)
})
