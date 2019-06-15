/*
 * @Author            : Burning
 * @Date              : 2018-12-01 17: 01: 45
 * @Last Modified by: Burning
 * @Last Modified time: 2019-06-15 21:55:45
 */

const paths    = require('../utils/paths');
const mockData = require(paths.mockData);
const conf     = require(paths.conf);

const mockMiddleware = (req, res, next) => {
  if (conf.useMock && mockData[req.url]) {
    return res.json(mockData[req.url]);
  }
  return next();
};

module.exports = mockMiddleware;
