const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "tasks.json");

function readTasks() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

function writeTasks(tasks) {
  fs.writeFileSync(dbPath, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };
