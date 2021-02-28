const fs = require('fs');

exports.importData = async () => {
  let rawdata = await fs.readFileSync(__dirname + '/../data.json');
  let data = JSON.parse(rawdata);
  return data
}