const childProcess = require("child_process");

const ENCODING_TYPE = "utf8";

const { rootPath } = require("./paths");

function ensureArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

class Logger {
  constructor() {
    this._logs = [];
    this.log = this.log.bind(this);
  }

  log(log) {
    const cleanLog = log.trim();
    if (cleanLog.length) {
      console.log(cleanLog);
      this._logs.push(cleanLog);
    }
  }

  get logs() {
    return this._logs;
  }

  get joinedLogs() {
    return this.logs.join("\n");
  }
}

function getNpmCommand() {
  return /^win/.test(process.platform) ? "npm.cmd" : "npm";
}

function npmRun(commands, options = {}) {
  const logData = new Logger();
  let npmProcess;
  return new Promise((resolve) => {
    const commandsArray = ensureArray(commands);
    npmProcess = childProcess.spawn(getNpmCommand(), ["run"].concat(commandsArray), {
      cwd: options.cwd || rootPath,
      env: {
        ...process.env,
        ...options.env,
        FORCE_COLOR: false,
      },
    });

    npmProcess.stdin.setEncoding(ENCODING_TYPE);
    npmProcess.stdout.setEncoding(ENCODING_TYPE);
    npmProcess.stderr.setEncoding(ENCODING_TYPE);
    npmProcess.stdout.on("data", logData.log);
    npmProcess.stderr.on("data", logData.log);

    npmProcess.on("close", (code) => {
      resolve({
        code,
        logs: logData.joinedLogs,
      });
    });
  });
}

module.exports = {
  npmRun,
};
