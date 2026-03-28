// At most K distinct
// A substring can have maximum K different characters
// 👉 Find the longest substring
// 👉 that has ≤ K distinct characters

function atMostK(str, k) {
    let left = 0
    let freq = {}
    let maxLen = 0
    let distinct = 0

    for(let right = 0; right < str.length; right++) {
        let char = str[right]

        if(freq[char]) {
            freq[char]++
        } else {
            freq[char] = 1
            distinct++
        }
        
        while(distinct > k) {
            let leftChar = str[left]
            freq[leftChar]--
            
            if(freq[leftChar] === 0) {
                distinct--
                delete freq[leftChar]
            }

            left++
        }

        
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen

}

console.log(atMostK("eceba", 2))
