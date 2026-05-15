// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in.
//   You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)


// function areThereDuplicates(...arr: (number | string)[]): boolean {

//     const obj: Record<string | number | symbol, number> = {};

//     for (const c of arr) {
//         obj[c] = (obj[c] || 0) + 1;
//         if (obj[c] == 2)
//             return true;
//     }

//     return false;
// }

function areThereDuplicates(...arr: (number | string)[]): boolean {

    const obj: Record<string | number | symbol, number> = {};

    for (const c of arr) {
        obj[c] = (obj[c] || 0) + 1;
        if (obj[c] == 2)
            return true;
    }

    return false;
}

// ✅ Numbers — no duplicates
console.log("1:", areThereDuplicates(1, 2, 3), "=> false");
console.log("2:", areThereDuplicates(1, 2, 3, 4, 5), "=> false");

// ❌ Numbers — has duplicates
console.log("3:", areThereDuplicates(1, 2, 2), "=> true");
console.log("4:", areThereDuplicates(1, 1, 2, 3), "=> true");
console.log("5:", areThereDuplicates(1, 2, 3, 3), "=> true");
console.log("6:", areThereDuplicates(1, 1, 1, 1), "=> true");

// ✅ Strings — no duplicates
console.log("7:", areThereDuplicates('a', 'b', 'c'), "=> false");
console.log("8:", areThereDuplicates('x', 'y', 'z'), "=> false");

// ❌ Strings — has duplicates
console.log("9:", areThereDuplicates('a', 'b', 'c', 'a'), "=> true");
console.log("10:", areThereDuplicates('a', 'a'), "=> true");
console.log("11:", areThereDuplicates('z', 'y', 'z'), "=> true");
console.log("12:", areThereDuplicates('a', 'a', 'a'), "=> true");

// ✅ Mixed — no duplicates
console.log("13:", areThereDuplicates(1, 'a', 2, 'b'), "=> false");
console.log("14:", areThereDuplicates(1, '1', 2, '2'), "=> false");

// ❌ Mixed — has duplicates
console.log("15:", areThereDuplicates(1, 'a', 1), "=> true");
console.log("16:", areThereDuplicates('a', 1, 'b', 'a'), "=> true");

// 🔢 Edge — single argument
console.log("17:", areThereDuplicates(1), "=> false");
console.log("18:", areThereDuplicates('a'), "=> false");

// 🔢 Edge — two arguments
console.log("19:", areThereDuplicates(1, 1), "=> true");
console.log("20:", areThereDuplicates(1, 2), "=> false");

// 🔢 Edge — large input
console.log("21:", areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 1), "=> true");
console.log("22:", areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), "=> false");