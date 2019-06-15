/*
 * @Author: Burning
 * @Date: 2018-11-27 12:50:23
 * @Last Modified by: Burning
 * @Last Modified time: 2018-12-01 17:51:27
 */

require('./extend');

const DemoAPI = require('./API/demo');

module.exports = {
  ...DemoAPI,
};
