/**
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例1  输入: "abcabcbb"
 *       输出: 3
 *       解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例2     输入: "bbbbb"
 *       输出: 1
 *       解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *       输入: "pwwkew"
 *       输出: 3
 *       解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 */


 /**
 * @param {string}
 * @return {number}
 */
var s = "aabaab!bb";
var lengthOfLongestSubstring = function(s) {
  var arr = [];
  var max = 0;
  for(var i = 0;i < s.length;i++){
    var index = arr.indexOf(s[i]);
    if( index> -1){
      arr.splice(0,index+1);
    }
    arr.push(s[i]);
    max = max > arr.length ? max :arr.length;
  }
  return max;
};
var result = lengthOfLongestSubstring(s);
console.log(result)

