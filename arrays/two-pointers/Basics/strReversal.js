// Problem: Write a function that reverses a string. 
// The input string is given as an array of characters s.
//  You must modify the input array in-place.

function reverse(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right] 
        arr[right] = temp
        left++
        right--
    }

    return arr

}

console.log(reverse(["h","e","l","l","o"]))
console.log(reverse(["H","a","n","n","a","h"]))
console.log(reverse(["A","b","c"]));
