class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let unique = new Map()

        for(let i = 0; i<nums.length; i++){
            let complement = target - nums[i]

            if(unique.has(complement)){
                return [unique.get(complement), i];
            }

            unique.set(nums[i], i)
        }
    }
}
