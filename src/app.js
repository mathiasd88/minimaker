#!/usr/bin/env node

let args = process.argv.splice(process.execArgv.length + 2);

let name = args[0];

console.log(name);
