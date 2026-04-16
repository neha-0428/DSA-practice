
// function sortedSquares(arr) {
//     let left = 0
//     let right = arr.length - 1

//     while (left < right) {

//         if(Math.abs(arr[left]) > Math.abs(arr[right])) {
//             let temp = arr[right]
//             arr[right] = Math.pow(arr[left], 2)
//             arr[left] = temp
//             right--;
//         } else if (Math.abs(arr[left] < Math.abs(arr[right]))) {
//             arr[right] = Math.pow(arr[right] , 2);
//             right--;
//         }

//     }

//     return arr;

// }

function sortedSquares(nums) {
    let left = 0
    let right = nums.length - 1

    while(left < right) {

        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            let temp = nums[right]
            nums[right] = Math.pow(nums[left], 2)
            nums[left] = temp
            right--

        } else if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            nums[right] = Math.pow(nums[right], 2)
            right--

        }
    }

    return nums;
    
};




console.log(sortedSquares([-12,-1,0,3,10]))
console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))




// -12,-1,0,3,10 - left = 0 right = 4
// left > right
// 10, -1, 0 , 3, 144 - left = 0 , right = 3
// left > right
// 3 , -1, 0, 100, 144 - left = 0, right = 2
// left > right
// 0, -1, 9, 100, 144 - left = 0, right = 1
// 

// -4,-1,0,3,10 - left = 0 right = 4
// -4, -1, 0, 3, 100 - left = 0 right = 3
// 3, -1, 0, 16, 100 - left = 0 right = 2
// 0, 