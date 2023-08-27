// ** https://leetcode.com/problems/two-sum/ **//

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let cur = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (cur + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
