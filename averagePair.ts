/*


Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average,
 determine if there is a pair of values in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

soted array intger [1,3,3,5,6,7,10,12,19],8
lowee is down side higher is uppwe side
20.   8

20 >16 move right pointer

(1,12) 13 < 16 move the left pointer 

(3,12) 15 <16 move the left pointer

(3,12) 15 <16 move the left pointer

(5,12) 17 > 16 move the right  pointer

(5,10) 15 < 16 move the left   pointer

(6,10) 



*/

function averagePair(arr: number[], target: number): boolean {

    let right = arr.length - 1;
    let left = 0;

    if (arr.length < 2) return false;

    while (left < right) {
        const avg = (arr[left]! + arr[right]!) / 2;

        if (avg === target)
            return true;
        else if (avg < target) {
            left++;
        }
        else if (avg > target) {
            right--;
        }
    }


    return false;
}


// ✅ Basic TRUE cases
console.log("1:", averagePair([1, 2, 3], 2.5), "=> true");
console.log("2:", averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), "=> true");
console.log("3:", averagePair([1, 3], 2), "=> true");                  // exact two elements
console.log("4:", averagePair([0, 4], 2), "=> true");                  // simple pair
console.log("5:", averagePair([-5, 5], 0), "=> true");                 // negative + positive
console.log("6:", averagePair([2, 2], 2), "=> true");                  // same elements

// ❌ Basic FALSE cases
console.log("7:", averagePair([-1, 0, 3, 4, 5, 6], 4.1), "=> false");
console.log("8:", averagePair([1, 2, 3], 10), "=> false");              // target too high
console.log("9:", averagePair([1, 2, 3], 0), "=> false");               // target too low
console.log("10:", averagePair([1, 3, 5, 7], 4.1), "=> false");          // decimal no match

// 🔢 Edge — empty and single
console.log("11:", averagePair([], 4), "=> false");                   // empty array
console.log("12:", averagePair([3], 3), "=> false");                  // single element

// 🔢 Edge — negatives
console.log("13:", averagePair([-3, -1, 0, 2, 4], 0), "=> true");
console.log("14:", averagePair([-5, -3, -1], -2), "=> true");
console.log("15:", averagePair([-5, -3, -1], 0), "=> false");

// 🔢 Edge — decimal targets
console.log("16:", averagePair([1, 2, 3, 4], 2.5), "=> true");
console.log("17:", averagePair([1, 2, 3, 4], 3.5), "=> true");
console.log("18:", averagePair([1, 2, 3, 4], 1.2), "=> false");

// 🔢 Edge — duplicates in array
console.log("19:", averagePair([1, 1, 1, 1], 1), "=> true");
console.log("20:", averagePair([2, 2, 2, 2], 3), "=> false");

// 🔢 Edge — large array
console.log("21:", averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5), "=> true");
console.log("22:", averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10.5), "=> false");