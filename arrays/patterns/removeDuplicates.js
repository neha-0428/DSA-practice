// Remove duplicates

function remove(arr) {
    if(arr.length === 0) return 0
    let left = 0;

    for(let right = 1; right < arr.length; right++) {
        if(arr[right] !== arr[left]) {
            left++
            arr[left] = arr[right]
        }
    }

    arr.length = left+1
    return arr

}

console.log(remove([1, 2, 2, 3, 4, 5, 5]))
console.log(remove([1, 2, 2, 2, 4, 4, 5]))