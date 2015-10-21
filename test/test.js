import fs from 'fs'
import test from 'ava'
import pify from 'pify'
import childProcess from 'child_process'

const output = fs.readFileSync('test/fixtures/output.css', 'utf8').trim()

test(async t => {
  const stdout = await pify(childProcess.execFile)('./cli.js', ['test/fixtures/input.css'])
  t.same(stdout.trim(), output)
})
