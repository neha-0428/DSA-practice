// Given an integer array nums, return all unique triplets:
// [a, b, c] // such that:
// a + b + c = 0

function threeSum(arr) {

    let result = []
    arr = arr.sort((a,  b) => a - b);
    console.log(arr)

    for(let k = 0; k < arr.length; k++) {

        //skip duplicates
        if(k > 0 && (arr[k] === arr[k-1])) {
            continue;
        }

        let left = k + 1;
        let right = arr.length - 1
        

        while(left < right) {
            
            let sum = arr[k] + arr[left] + arr[right]

            if(sum === 0) {
                console.log(k, left, right)
                result.push([arr[k], arr[left], arr[right]])
                left++
                right--

                while(left < right && arr[left] === arr[left - 1]) {
                    left++
                }

                while(left < right && arr[right] === arr[right + 1]) {
                    right--
                }
            }

            if(sum < 0) {
                left++
            } else {
                right--
            }
        }


    }
    
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([-2,0,0,0,2,2]));
