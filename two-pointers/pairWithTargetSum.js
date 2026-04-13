// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers index1 and index2, 
// each incremented by one, as an integer array [index1, index2] of length 2.

function pairsWithIndex(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        let sum = numbers[left] + numbers[right]

        if(sum === target) {
            return [left, right]
        }

        if(sum < target) {
            left++
        } else [
            right--
        ]
    }

    return [-1, -1]
}

function pairsWithIndex2(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left < right) {
        // console.log(left, right, 'index')
        let sum = nums[left] + nums[right]
        // console.log(sum, sum)

        if(sum === target) {
            return [left, right]
        }

        // console.log('here', sum, target)
        if(sum < target) {
            left++
        } else {
            right--
        }
    }

    return [-1, -1]
}

console.log(pairsWithIndex([2,7,11,15], 9))

console.log(pairsWithIndex2([2,7,11,15], 9))
