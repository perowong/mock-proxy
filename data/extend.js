/*
 * @Author: Burning
 * @Date: 2018-11-27 14:19:33
 * @Last Modified by: Burning
 * @Last Modified time: 2018-12-01 17:37:06
 */

const Mock = require('mockjs');

/**
 * extend Mock's random method
 * For example:
 * Mock.Random.extend({
 *  teacherID: function () {
 *    const tearchIDs = [1, 2, 3];
 *    return this.pick(tearchIDs);
 *  }
 * });
 * Usage:
 *  1.Random.teacherID();
    2.Mock.mock('@TEACHERID');
    3.Mock.mock({
        id: '@TEACHERID'
    });
 */

const genCountingNumbers = (start, N) => Array.from(new Array(N), (value, index) => start + index);

/* eslint-disable object-shorthand, func-names */
Mock.Random.extend({
  teacherID: function () {
    const tearchIDs = genCountingNumbers(1, 17)
      .concat(genCountingNumbers(50000, 22))
      .concat(genCountingNumbers(100000, 600));
    return this.pick(tearchIDs);
  }
});
