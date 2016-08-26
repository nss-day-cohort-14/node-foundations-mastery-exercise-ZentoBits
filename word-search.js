#!/usr/bin/env node

const { createReadStream } = require('fs')
const chalk = require('chalk')
const limit = require('./limit-ten')
const es = require('event-stream')

const [,, args] = process.argv

if (!args) {
  console.log(chalk.red("Invalid input:"))
  console.log(chalk.white("./word-search.js [searchterm]"))
} else {
  createReadStream('/usr/share/dict/words')
  .pipe(es.split())
  .pipe(es.map((data, cb) => {

  if (data.startsWith(`${args[0]}`)) {
    cb(null, `${data}\n`)
  } else {
    cb()
  }
    cb(null, data)
  }))
  .pipe(limit)
  .pipe(process.stdout)
}
