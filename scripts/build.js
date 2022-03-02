const rollup = require("rollup");
const fs = require("fs");

let builds = require("./config").getAllBuilds();
console.log("builds: ", builds);

build(builds);
function build(builds) {
  let build = 0;
  const total = builds.length;
  const next = () => {
    buildEntry(builds[build])
      .then(() => {
        build++;
        if (build < total) {
          next();
        }
      })
      .catch(logError);
  };
  next();
}

function buildEntry(config) {
  console.log("config: ", config);
  const output = config.output;
  const { file, format } = output;
  return rollup
    .rollup(config)
    .then((bundle) => bundle.generate(output))
    .then((res) => {
      const {
        output: [{ code }],
      } = res;
      return write(file, code);
    });
}

function write(dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report(extra) {
      resolve();
    }
    fs.writeFile(dest, code, (err) => {
      if (err) return reject(err);
      report();
    });
  });
}

function logError(e) {
  console.log(e);
}
