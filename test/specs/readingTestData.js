const { expect } = require('@wdio/globals')
// import fs from 'node:fs'
// import path from 'node:path'
// import parse from 'csv-parse/sync'

const fs = require('node:fs')
const path = require('node:path')
const { parse } = require('csv-parse/sync')


const records = parse(fs.readFileSync(path.join(__dirname, 'testdata.csv')), {
  columns: true,
  skip_empty_lines: true
})

describe('my test suite', async() => {
    for (const record of records) {
        it(`foo: ${record.test_case}`, async () => {
            console.log(record.test_case, record.some_value, record.some_other_value)
        })
    }
})