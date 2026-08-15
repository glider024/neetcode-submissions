class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]
        let characters = {')':'(', ']':'[', '}':'{'}

        for (let item of s){
            if(item==='(' || item === '{' || item ==='['){
                stack.push(item)
            }
            else{
                if (stack.pop() !== characters[item]){
                    return false
                }            }
        }
        return stack.length === 0
    }  
}
