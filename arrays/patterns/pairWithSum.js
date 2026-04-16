// Pair with sum in sorted array (return indices)

function pair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right]

        if(sum === target) {
            return [left, right]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }

    return false

}

console.log(pair([1, 2, 3, 4, 6], 6))



// If interviewer asks:
// 👉 “What if array is NOT sorted?”

// You should say:

// Either sort + two pointers (O(n log n))
// OR use hashmap (O(n))