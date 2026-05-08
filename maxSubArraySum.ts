function maxSubarraySum(arr: number[], num: number): number | null {

    let maxsum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxsum += arr[i]!;
    }
    tempSum = maxsum;

    for (let i = num; i < arr.length; i++) {
        tempSum = (tempSum - arr[i - num]!) + arr[i]!;
        maxsum = Math.max(tempSum, maxsum);
    }

    return maxsum;
}


console.log("1:", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), "=> 10");
console.log("2:", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), "=> 17");
console.log("3:", maxSubarraySum([4, 2, 1, 6], 1), "=> 6");

console.log("4:", maxSubarraySum([4, 2, 1, 6, 2], 4), "=> 13");
console.log("5:", maxSubarraySum([], 4), "=> null");

console.log("6:", maxSubarraySum([1, 2], 3), "=> null");
console.log("7:", maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3), "=> 19");

console.log("8:", maxSubarraySum([100, 200, 300, 400], 2), "=> 700");
console.log("9:", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), "=> 39");

console.log("10:", maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), "=> 5");
console.log("11:", maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), "=> 5");

console.log("12:", maxSubarraySum([2, 3], 2), "=> 5");
console.log("13:", maxSubarraySum([2, 3], 1), "=> 3");

console.log("14:", maxSubarraySum([1, 1, 1, 1, 1, 1], 3), "=> 3");
console.log("15:", maxSubarraySum([0, 0, 0, 0], 2), "=> 0");

console.log("16:", maxSubarraySum([-1, -2, -3, -4], 2), "=> -3");
console.log("17:", maxSubarraySum([-5, -2, -1, -7], 1), "=> -1");

console.log("18:", maxSubarraySum([5], 1), "=> 5");
console.log("19:", maxSubarraySum([5], 2), "=> null");

console.log("20:", maxSubarraySum([1, 2, 3, 4, 5], 5), "=> 15");
console.log("21:", maxSubarraySum([1, 2, 3, 4, 5], 4), "=> 14");

console.log("22:", maxSubarraySum([10, -2, 3, 1, -1, 5], 3), "=> 11");
console.log("23:", maxSubarraySum([1, -1, 1, -1, 1, -1], 2), "=> 0");

console.log("24:", maxSubarraySum([9, 8, 7, 6, 5, 4, 3, 2, 1], 3), "=> 24");
console.log("25:", maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 2), "=> 17");

console.log("26:", maxSubarraySum([1, 100, 1, 1, 1, 100, 1], 2), "=> 101");
console.log("27:", maxSubarraySum([1, 100, 1, 1, 1, 100, 1], 3), "=> 102");

console.log("28:", maxSubarraySum([2, -1, 2, 3, 4, -5], 4), "=> 8");
console.log("29:", maxSubarraySum([-2, -1, -3, -4, -1, -2], 3), "=> -6");

console.log("30:", maxSubarraySum([50, 50, 50, 50], 2), "=> 100");