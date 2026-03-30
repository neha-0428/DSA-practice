// Character Replacement Problem
// You can change at most k characters
// 👉 Find the longest substring
// 👉 where all characters can become the same

function charReplacement(str, k) {
    let left = 0;
    let freq = {}
    let maxFreq = 0;
    let maxLen = 0;
    
    for(let right=0; right<str.length; right++) {
        let char = str[right]

        freq[char] = (freq[char] || 0) + 1

        maxFreq = Math.max(maxFreq, freq[char])

        // condition checks if windowSize - maxFreq > k
        while((right - left + 1) - maxFreq > k) {
            let leftChar = str[left]
            freq[leftChar]--
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen

}

console.log(charReplacement("AABBABBAB", 1))

