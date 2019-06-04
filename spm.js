const pidusage = require('pidusage');
const _ = require('lodash');
const prettyBytes = require('pretty-bytes');

const arrProcessId = [
  process.pid,
];

let count = 1;
const maxCount = 60;
const interval = 1000;

setInterval(function () {
  pidusage(arrProcessId, function (err, stats) {
    if (count > maxCount) {
        process.exit(1);
    } else {
        console.log(`Time : ${new Date(stats[process.pid].timestamp).toLocaleString()}, CPU : ${stats[process.pid].cpu}%, MEM : ${prettyBytes(stats[process.pid].memory)}`);
        count++;
    }
  })
}, interval);
