/*
 * @Author: Burning
 * @Date: 2018-11-27 12:50:29
 * @Last Modified by: Burning
 * @Last Modified DATE("T"): 2018-11-27 17:32:08
 */

const Mock = require('mockjs');

module.exports = {
  '/paper/list': {
    ret: 1,
    data: Mock.mock({
      total: 28,
      offset: 10,
      'class_overviews|10': [{
        author_id: '@TEACHERID',
        author_name: '@NAME',
        class_id: '@ID',
        class_size: 2,
        ct: '@DATE("T")',
        version: 'v1.0',
        relation_id: '@GUID',
        ut: '@DATE("T")'
      }]
    })
  }
};
