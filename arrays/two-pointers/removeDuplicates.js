
function removeDuplicates(arr) {
    let left = 0;
    
    for(let right = 1; right < arr.length; right++) {
        if(arr[right] !== arr[left]) {
            arr[left + 1] = arr[right]
            left++
        }
    }

    arr.length = left + 1

    return arr;

}

console.log(removeDuplicates([1, 1, 2, 3, 3, 5, 7, 9, 9]))
console.log(removeDuplicates([1, 1, 1, 2, 3]))