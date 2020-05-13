/*
给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

示例 1:

输入: [1,1,2,3,3,4,4,8,8]
输出: 2
示例 2:

输入: [3,3,7,7,10,11,11]
输出: 10
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /* 暴力破解法 */
// var nums = [3,3,7,7,10,11,11];
var singleNonDuplicate = function(nums) {
  if(nums[0] !== nums[1]){
    return nums[0];
  }
  if(nums[nums.length -1] !==nums[nums.length-2]){
    return nums[nums.length - 1];
  }
  for(var i = 1;i < nums.length -1;i++){
    if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]){
      return nums[i];
    }
  }
};

// 二分搜索法优化
var nums = [3,3,7,7,10,11,11];
var singleNonDuplicate2 = function(nums) {
  var l = 0;
  var r = nums.length - 1;
  while(l <= r){
    let mid = l + ( r - l )/2;
      if(nums[mid - 1] == nums[mid]){
        (mid - 1) % 2 == 0 ? l = mid + 1 : r = mid - 2
      }else if(nums[mid + 1] == nums[mid]){
        mid % 2 == 0 ? l = mid + 2 : r = mid - 1
      }else{
        return nums[mid];
      }
  }
  return -1;
};

console.log(singleNonDuplicate2(nums))
