const os = require("os");

function getSystemInfo() {
  console.log("System Information:");
  console.log("-------------------------");
  console.log(`Architecture: ${os.arch()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log(`CPU Model: ${os.cpus()[0].model}`);
  console.log(`Hostname: ${os.hostname()}`);
  console.log(`OS Type: ${os.type()}`);
}

module.exports = getSystemInfo;
