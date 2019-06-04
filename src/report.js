const fs = require("fs");
const _ = require("lodash");
const prettyBytes = require("pretty-bytes");
const path = require("path");
const dayjs = require("dayjs");
const reportDir = path.join(process.cwd(), "./simpmonit-reports");
const dateFileFormat = "YYYYMMDD";
const dateTimeFormat = "YYYY-MM-DD HH:mm:ss.SSS";

module.exports.check = _ => {
  fs.existsSync(reportDir) || fs.mkdirSync(reportDir);
};

module.exports.reportToFile = stats => {
  _.forEach(stats, (value, key) => {
    fs.writeFileSync(
      path.join(
        reportDir,
        `reports_pid${key}_${dayjs().format(dateFileFormat)}.log`
      ),
      `${dayjs(value.timestamp).format(dateTimeFormat)}, CPU : ${
        value.cpu
      }%, MEM : ${prettyBytes(value.memory)}\n`,
      {
        flag: "a"
      }
    );
  });
};

module.exports.reportToConsole = stats => {
  _.forEach(stats, (value, key) => {
    console.log(
      `[${key}] ${dayjs(value.timestamp).format(dateTimeFormat)}, CPU : ${
        value.cpu
      }%, MEM : ${prettyBytes(value.memory)}`
    );
  });
};
