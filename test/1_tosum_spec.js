var expect = require('expect.js');
var twoSum = require('../question/1_tosum.js')

describe('leetcode q1', function() {
  it('Given an array of integers, return indices of the two numbers such that they add up to a specific targe', function() {
    expect(twoSum([1,2,3,0], 3).toString()).to.be([0,1].toString());
  });
  it('Given an array of integers, return indices of the two numbers such that they add up to a specific targe', function() {
    expect(twoSum([3,2,4], 6).toString()).to.be([1,2].toString());
  });

});