#!/usr/bin/env node

var hello = require("./index.js")
var args = process.argv;
console.log(args);
var cwd = process.cwd();
console.log(cwd);
hello();