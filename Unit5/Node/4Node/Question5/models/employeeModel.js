const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "employees.json");

function readEmployees() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

function writeEmployees(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = { readEmployees, writeEmployees };
