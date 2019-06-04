# simpmonit

<a href="https://www.npmjs.com/package/simpmonit"><img src="https://img.shields.io/npm/v/simpmonit.svg?style=flat-square&colorB=51C838" alt="NPM Version"></a>
<a href="https://github.com/yurseria/simpmonit/blob/master/LICENSE"><img
src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>

Simple process monitoring tool for command line interface.

## Get Started

Install the module globally.

    npm install -g simpmonit
    simpmonit

or, locally.

    npm install simpmonit
    npx simpmonit

The program will print out its own resource usage.

    Start monitoring...
    Estimated time : 60000s
    [2940] 2019-06-05 00:12:07.343, CPU : 12%, MEM : 27.4 MB
    [2940] 2019-06-05 00:12:08.342, CPU : 1%, MEM : 28.3 MB
    [2940] 2019-06-05 00:12:09.347, CPU : 0%, MEM : 28.3 MB
    ...
    Monitoring done!

## Basic Usage

    > simpmonit [OPTIONS]

    -?, --help              Display this help and exit.
    -v, --version           Output version information and exit.
    -t, --time              Number of times to run monitoring.
    -i, --interval          Monitoring interval(milliseconds).
    -p, --process           Comma-separated PID values.
    -o, --output            Save monitoring results to a file. The results are stored in the 'simpmonit-reports' folder.

Runs 10 times every 500ms and commands to save results.

    simpmonit -t 10 -i 500 -o

The results are stored in the 'simpmonit-reports' folder.

    > ls ./simpmonit-reports

    reports_pid2940_20190605.log

### Options

`--time` : Number of times to run monitoring. `default : 60`

`--interval` : Monitoring interval. `default: 1s`

`--process` : Comma-separated PID values. `default: process.pid`

## To-Do

- add output format
- add report file name pattern
- make chart
