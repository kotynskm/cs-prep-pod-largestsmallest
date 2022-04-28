
function largestAndSmallest(array) {
    // initialize result array
    const result = [];
    // get the max and the min
    const max = Math.max(...array);
    const min = Math.min(...array);
    // push to result array
    result.push(min,max);

    return result;
}

 console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
 console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
 console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]

 