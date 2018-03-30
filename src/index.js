#! /usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const args = process.argv.splice(process.execArgv.length + 2);

const action = args[0];
const name = args[1];

if (action === 'new') {
  console.log(`Creating new project ${name}`);

  fs.copy(__dirname + '/structure', name)
    .then(() => console.log('Success!'))
    .catch(err => console.error(err))
}
