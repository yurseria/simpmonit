#!/usr/local/bin/node

const _ = require("lodash");

const argvOptions = require("../config/argv");
const argv = require("minimist")(process.argv.slice(2), argvOptions);
const options = require("../config/options");
const monitoring = require("../src/monitoring");

const arrProcessId = argv.p ? argv.p.split(",") : [process.pid];
const maxCount = argv.t;
const interval = argv.i;

switch (true) {
  case _.has(argv, "h"):
    console.log(options.helpMessage);
    break;
  case _.has(argv, "v"):
    console.log(options.versionMessage);
    break;
  default:
    monitoring.start({ arrProcessId, maxCount, interval, isOutput: argv.o });
    break;
}
