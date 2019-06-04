const pidusage = require('pidusage');
const report = require('./report');
const config = require('../config/default');

let count = 1;

module.exports.start = ({arrProcessId, maxCount = config.maxCount, interval = config.interval, isOutput}) => {

  console.log("Start monitoring...");
  console.log(`Estimated time : ${maxCount * interval}s`);

  if (isOutput) report.check();

  return setInterval(function () {
    pidusage(arrProcessId, function (err, stats) {
      if (count > maxCount) {
        console.log("Monitoring done!");
        process.exit(0);
      }
      
      if (isOutput) {
        process.stdout.write(".");
        report.reportToFile(stats);
      } else {
        report.reportToConsole(stats);
      }
      count++;
    })
  }, interval)
};
