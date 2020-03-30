/**
 * 
 *  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力破解法
let nums = [2,11,7,15], target = 9;
let twoSum = function(nums, target) {
  for(let i = 0;i < nums.length;i++){
      let item = target-nums[i];  // 找到差值
      let j = nums.indexOf(item);
      if(j !== -1 && i !== j){
          return [i,j];
      }
  }
};

// 更加简单的方法
let twoSum1 = function(nums, target) {
    let obj = {};
    let len = nums.length;
    for(let i = 0;i < len;i++){
        obj[nums[i]] = i;
    }
    for(let i = 0;i < len ;i++){
        let item = target-nums[i];          // 找到差值
        if(obj[item] && obj[item] !== i){   // 使用对象来查找比使用数组中的indexOf要快得多。
            return [i,obj[item]];
        }
    }
};
// console.log(twoSum1(nums,target));

// 进一步优化
// let nums = [2,11,7,15], target = 9;
let twoSum2 = function(nums, target) {
    let obj = {};
    let len = nums.length;
    for(let i = 0;i < len;i++){
        let item = target-nums[i];
        if(nums[i] in obj && i !== obj[nums[i]]){
          return [i,obj[nums[i]]];
        }else{
            obj[item] = i;
        }
    }
};
console.log(twoSum2(nums,target));