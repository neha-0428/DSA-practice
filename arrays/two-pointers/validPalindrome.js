// Given a string s,
// return true if it is a palindrome,
// considering only:
// alphanumeric characters
// ignoring cases

function palindrome(str) {

    let left = 0
    let right = str.length - 1

    while(left < right) {

        while (left < right && !/[a-zA-Z0-9]/.test(str[left])) {
            left++
        }

        while (left < right && !/[a-zA-Z0-9]/.test(str[right])) {
            right--
        }

        if(str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++
        right--
    }

    return true;

}

console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome("race a car"))
console.log(palindrome(" "))