const pidusage = require('pidusage');
const report = require('./report');
const config = require('../config/default');
const commaNumber = require('comma-number');

let count = 1;

module.exports.start = ({arrProcessId, maxCount = config.maxCount, interval = config.interval, isOutput}) => {

  console.log("Start monitoring...");
  console.log(`Estimated time : ${commaNumber(maxCount * interval)}ms`);

  if (isOutput) report.check();

  return setInterval(() => {
    pidusage(arrProcessId, (err, stats) => {
      if (count > maxCount) {
        console.log("\nMonitoring done!");
        if (isOutput) console.log("Results are stored in the 'simpmonit-reports' directory.")
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
