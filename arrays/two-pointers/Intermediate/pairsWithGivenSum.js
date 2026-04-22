// You are given an integer target and an array arr[]. 
// You have to find number of pairs in arr[] which sums up to target. 
// It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes. 

// Examples :

// Input: arr[] = [-1, 1, 5, 5, 7], target = 6
// Output: 3
// Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.

function getPairsCount(arr, target) {
    let left = 0
    let right = arr.length - 1
    let count = 0

    while(left < right) {
        let sum = arr[left] + arr[right]

        if(sum < target) {
            left++
        } else if (sum > target) {
            right--
        } else {
            // if sum === target

            //if both left and right pointer values are same (sorted array) we can use combination formula
            if(arr[left] === arr[right]) {
                let n = right - left + 1
                count += (n * (n - 1)) / 2
                break; 
            } else {
                // else get leftCount and right count and multiple them so that we can get pairs
                let leftCount = 1
                let rightCount = 1

                while(arr[left] === arr[left + 1]) {
                    leftCount++
                    left++
                }

                while(arr[right] === arr[right - 1]) {
                    rightCount++;
                    right--
                }

                count += leftCount * rightCount

                left++
                right--
            }
        }
    }

    return count;

}

console.log(getPairsCount([-1, 1, 5, 5, 7], 6))
console.log(getPairsCount([1, 1, 1, 1], 2));
console.log(getPairsCount([-1, 10, 10, 12, 15], 125));

