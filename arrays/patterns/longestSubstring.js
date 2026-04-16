// Longest substring without repeating

function longestSubstring(str) {
    let left = 0
    let freq = {}
    let maxLen = 0

    for(let right = 0; right < str.length; right++) {
        let char = str[right]

        freq[char] = (freq[char] || 0) + 1

        while(freq[char] > 1) {
            let leftChar = str[left]
            freq[leftChar]--
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen

}

console.log(longestSubstring("abcabcabb"))