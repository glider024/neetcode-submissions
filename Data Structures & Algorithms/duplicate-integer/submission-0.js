class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set()
        for(let item of nums){
            if(unique.has(item)){
                return true
            }
            unique.add(item)
        }
         return false
    }
}
