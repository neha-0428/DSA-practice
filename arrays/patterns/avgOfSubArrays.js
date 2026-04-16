// Average of all subarrays of size k

function avg(arr, k) {
    let windowSum = 0;
    let averages = []

    for(let i=0; i<k; i++) {
        windowSum += arr[i]
    }

    averages.push(windowSum / k)

    for(let i=k; i<arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i-k]

        averages.push(windowSum / k)
    }

    return averages

}

console.log(avg([2, 1, 5, 1, 3, 2], 3)) 