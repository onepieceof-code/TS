// function countUniqueValues(arr: number[]): number { // using frequency

//     const obj: { [key: number]: number } = {};

//     for (const num of arr) {
//         obj[num] = (obj[num] || 0) + 1;
//     }

//     return Object.keys(obj).length;
// }

function countUniqueValues(arr: number[]): number { // using 2 pointer

    let count = 0, left = 0, right = left + 1;

    if (arr.length) count++;

    while (right < arr.length) {
        if(arr[left] !== arr[right])
            count++;

        left = right;
        right++;
    }


    return count;
}

console.log("1:", countUniqueValues([1, 1, 1, 1, 1, 2]), "=> 2");
console.log("2:", countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), "=> 7");
console.log("3:", countUniqueValues([]), "=> 0");

console.log("4:", countUniqueValues([-2, -1, -1, 0, 1]), "=> 4");
console.log("5:", countUniqueValues([1, 1, 1, 1]), "=> 1");

console.log("6:", countUniqueValues([1, 2, 3, 4, 5]), "=> 5");
console.log("7:", countUniqueValues([0, 0, 0, 0]), "=> 1");

console.log("8:", countUniqueValues([-3, -2, -1, 0, 1, 2, 3]), "=> 7");
console.log("9:", countUniqueValues([-1, -1, -1, -1, -1]), "=> 1");

console.log("10:", countUniqueValues([-5, -4, -4, -3, -2, -2, -1]), "=> 5");
console.log("11:", countUniqueValues([1, 1, 2, 2, 3, 3, 4, 4]), "=> 4");

console.log("12:", countUniqueValues([1]), "=> 1");
console.log("13:", countUniqueValues([-1]), "=> 1");

console.log("14:", countUniqueValues([1, 2, 2, 2, 2, 2]), "=> 2");
console.log("15:", countUniqueValues([1, 1, 1, 2, 3, 4, 5]), "=> 5");

console.log("16:", countUniqueValues([-2, -1, 0, 1, 2]), "=> 5");
console.log("17:", countUniqueValues([-2, -2, -1, -1, 0, 0, 1, 1, 2, 2]), "=> 5");

console.log("18:", countUniqueValues([100, 100, 101, 102, 102, 103]), "=> 4");
console.log("19:", countUniqueValues([-100, -100, -50, 0, 50, 100]), "=> 5");

console.log("20:", countUniqueValues([1, 1, 1, 1, 2, 2, 2, 3, 3, 4]), "=> 4");
console.log("21:", countUniqueValues([5, 5, 5, 5, 5, 5, 5]), "=> 1");

console.log("22:", countUniqueValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), "=> 10");
console.log("23:", countUniqueValues([-9, -8, -7, -6, -5, -4, -3, -2, -1]), "=> 9");

console.log("24:", countUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), "=> 4");
console.log("25:", countUniqueValues([-3, -3, -2, -1, -1, 0, 1, 1, 2, 3, 3]), "=> 7");

console.log("26:", countUniqueValues([999]), "=> 1");
console.log("27:", countUniqueValues([-999, -999, 999, 999]), "=> 2");

console.log("28:", countUniqueValues([1, 1, 2, 3, 4, 5, 5, 5, 6]), "=> 6");
console.log("29:", countUniqueValues([-10, -10, -5, -5, 0, 5, 10, 10]), "=> 5");

console.log("30:", countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "=> 10");