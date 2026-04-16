// Palindrome

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1

    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false
        }

        console.log([left, right])

        left++
        right--
    }

    return true
}

console.log(isPalindrome([1, 2, 4, 2, 1]))
console.log(isPalindrome([1, 2, 4, 5, 2, 1]))