const fs         = require('fs');
const path       = require('path');
const projectDir = path.resolve(fs.realpathSync(process.cwd()));

const mockData = path.resolve(projectDir, 'mock/data');
const conf     = path.resolve(projectDir, 'mock/conf.json');

module.exports = {
  projectDir,
  mockData,
  conf,
};
