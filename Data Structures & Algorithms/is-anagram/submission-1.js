class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false

        let counts= new Map()

        for(const char of s){
            counts.set(char, (counts.get(char) || 0) + 1)
        }

        for(const char of t){
            if(!counts.has(char)) return false

            counts.set(char, counts.get(char) - 1)

            if(counts.get(char)<0) return false
        }

        return true
    }
}
