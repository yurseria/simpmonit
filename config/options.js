const package = require('../package');

const helpMessage = `
${package.name} v${package.version}

${package.description}

Usage : node main.js [OPTIONS]
  -?, --help              Display this help and exit.
  -v, --version           Output version information and exit.
  -t, --time              Number of times to run monitoring.
  -i, --interval          Monitoring interval(milliseconds).
  -p, --process           Comma-separated PID values.
  -o, --output            Save monitoring results to a file. The results are stored in the 'reports' folder.
`;

const versionMessage = `${package.name} v${package.version}`;

module.exports.helpMessage = helpMessage;
module.exports.versionMessage = versionMessage;
