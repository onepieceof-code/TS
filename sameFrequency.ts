/*

Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two
 numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false



*/


function sameFrequency(num1: number, num2: number): boolean {

    if (num1.toString().length !== num2.toString().length) return false;

    const obj1: Record<string, number> = {};
    const obj2: Record<string, number> = {};

    for (const c of num1.toString())
        obj1[c] = (obj1[c] || 0) + 1;

    for (const c of num2.toString())
        obj2[c] = (obj2[c] || 0) + 1;

    for (const keys of Object.keys(obj1))
        if (obj1[keys] !== obj2[keys])
            return false;

    return true;

}

// ✅ Basic TRUE cases
console.log("1:", sameFrequency(182, 281), "=> true");
console.log("2:", sameFrequency(3589578, 5879385), "=> true");
console.log("3:", sameFrequency(11, 11), "=> true");      // same number
console.log("4:", sameFrequency(123, 321), "=> true");
console.log("5:", sameFrequency(1122, 2211), "=> true");  // repeated digits

// ❌ Basic FALSE cases
console.log("6:", sameFrequency(34, 14), "=> false");
console.log("7:", sameFrequency(22, 222), "=> false");    // different lengths
console.log("8:", sameFrequency(123, 332), "=> false");
console.log("9:", sameFrequency(111, 112), "=> false");   // same digits, diff freq

// 🔢 Single digit
console.log("10:", sameFrequency(1, 1), "=> true");
console.log("11:", sameFrequency(1, 2), "=> false");

// 🔢 Different lengths (always false)
console.log("12:", sameFrequency(1, 11), "=> false");
console.log("13:", sameFrequency(999, 99), "=> false");

// 🔢 All same digits
console.log("14:", sameFrequency(1111, 1111), "=> true");
console.log("15:", sameFrequency(1111, 1112), "=> false");




