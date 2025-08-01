const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt"); 

function ReadFileData() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "This is the original content.");
  }
  let data = fs.readFileSync(filePath, "utf-8");
  console.log("File Content:\n" + data + "\n");
}

function AppendFileData() {
  fs.appendFileSync(filePath, "\nThis is Appended data");
  console.log("Data appended successfully.\n");
}

module.exports = { ReadFileData, AppendFileData };
