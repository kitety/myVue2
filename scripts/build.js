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
      .catch(console.log);
  };
  next();
}

function buildEntry(config) {
  console.log("config: ", config);
  const output = config.output;
  const { file, format } = output;
}
