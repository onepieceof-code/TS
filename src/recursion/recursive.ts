// ============================================================
// HELPERS
// ============================================================

function isPlainObject(val: unknown): boolean {
    return typeof val === 'object' &&
        val !== null &&
        !Array.isArray(val);
}


// ============================================================
// sumRange
// ============================================================

function sumRange(num: number): number {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log("sumRange(100):", sumRange(100)); // 5050


// ============================================================
// factorial
// ============================================================

function factorial(num: number): number {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log("factorial(3):", factorial(3)); // 6


// ============================================================
// collectOddValue
// ============================================================

function collectOddValue(arr: number[]): number[] {
    let newArr: number[] = [];

    if (arr.length === 0) return [];

    if (arr[0]! % 2 !== 0)
        newArr.push(arr[0]!);

    newArr = newArr.concat(collectOddValue(arr.slice(1)));

    return newArr;
}

console.log("collectOddValue([1,2,3,4,5]):", collectOddValue([1, 2, 3, 4, 5])); // [1,3,5]


// ============================================================
// fib
// ============================================================

function fib(n: number): number {
    if (n === 1) return 1;
    if (n === 0) return 0;
    return fib(n - 1) + fib(n - 2);
}

console.log("1:", fib(1), "=> 1");
console.log("2:", fib(2), "=> 1");
console.log("3:", fib(3), "=> 2");
console.log("4:", fib(4), "=> 3");
console.log("5:", fib(5), "=> 5");
console.log("6:", fib(6), "=> 8");
console.log("7:", fib(7), "=> 13");
console.log("8:", fib(8), "=> 21");
console.log("9:", fib(9), "=> 34");
console.log("10:", fib(10), "=> 55");


// ============================================================
// reverse
// ============================================================

function reverse(s: string): string {
    if (s.length <= 1) return s;
    return reverse(s.slice(1)) + s[0];
}

console.log("reverse('subham'):", reverse("subham")); // mahdus


// ============================================================
// someRecursive
// ============================================================

function someRecursive(arr: number[], cb: (n: number) => boolean): boolean {
    if (arr.length === 0) return false;
    return cb(arr[0]!) || someRecursive(arr.slice(1), cb);
}

const isOdd = (val: number) => val % 2 !== 0;
const isEven = (val: number) => val % 2 === 0;
const greaterThan10 = (val: number) => val > 10;

console.log("1:", someRecursive([1, 2, 3, 4], isOdd), "=> true");
console.log("2:", someRecursive([4, 6, 8, 9], isOdd), "=> true");
console.log("3:", someRecursive([2, 4, 6, 7], isOdd), "=> true");
console.log("4:", someRecursive([1, 2, 4, 6], isOdd), "=> true");
console.log("5:", someRecursive([4, 6, 8], isEven), "=> true");
console.log("6:", someRecursive([1, 2, 3], greaterThan10), "=> false");
console.log("7:", someRecursive([1, 11, 3], greaterThan10), "=> true");
console.log("8:", someRecursive([4, 6, 8], isOdd), "=> false");
console.log("9:", someRecursive([4, 6, 8], greaterThan10), "=> false");
console.log("10:", someRecursive([2, 4, 6], isOdd), "=> false");
console.log("11:", someRecursive([1, 3, 5], isEven), "=> false");
console.log("12:", someRecursive([1], isOdd), "=> true");
console.log("13:", someRecursive([2], isOdd), "=> false");
console.log("14:", someRecursive([11], greaterThan10), "=> true");
console.log("15:", someRecursive([1], greaterThan10), "=> false");
console.log("16:", someRecursive([], isOdd), "=> false");
console.log("17:", someRecursive([], greaterThan10), "=> false");
console.log("18:", someRecursive([1, 3, 5, 7], isOdd), "=> true");
console.log("19:", someRecursive([11, 12, 13], greaterThan10), "=> true");
console.log("20:", someRecursive([2, 4, 6, 1], isOdd), "=> true");
console.log("21:", someRecursive([1, 2, 4, 11], greaterThan10), "=> true");


// ============================================================
// flatten
// ============================================================

type NestArray = (number | NestArray)[]

function flatten(nestedArray: NestArray): number[] {
    let flatArr: number[] = [];

    if (nestedArray.length === 0) return [];

    const first = nestedArray[0];

    if (first === undefined) return [];

    if (Array.isArray(first))
        flatArr.push(...flatten(first));
    else if (!isNaN(first))
        flatArr.push(first);

    flatArr.push(...flatten(nestedArray.slice(1)));

    return flatArr;
}

console.log("1:", flatten([1, 2, 3, [4, 5]]));                         // [1,2,3,4,5]
console.log("2:", flatten([1, [2, [3, 4], [[5]]]]));                    // [1,2,3,4,5]
console.log("3:", flatten([[1], [2], [3]]));                            // [1,2,3]
console.log("4:", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));         // [1,2,3]
console.log("5:", flatten([]));                                         // []
console.log("6:", flatten([[]]));                                       // []
console.log("7:", flatten([[], [], []]));                               // []
console.log("8:", flatten([1]));                                        // [1]
console.log("9:", flatten([[1]]));                                      // [1]
console.log("10:", flatten([[[1]]]));                                   // [1]
console.log("11:", flatten([1, 2, 3, 4, 5]));                           // [1,2,3,4,5]
console.log("12:", flatten([[1], [2], [3], [4], [5]]));                 // [1,2,3,4,5]
console.log("13:", flatten([1, [2, 3], 4, [5, [6, 7]]]));               // [1,2,3,4,5,6,7]
console.log("14:", flatten([[1, 2], [3, [4, 5]]]));                     // [1,2,3,4,5]
console.log("15:", flatten([[[[[1]]]]]));                               // [1]
console.log("16:", flatten([[[[[1]]], [[2]]]]));                        // [1,2]


// ============================================================
// capitalizeFirst
// ============================================================

function capitalizeFirst(sArray: string[]): string[] {
    let capArray: string[] = [];

    let firstString = sArray[0]![0]?.toLocaleUpperCase();

    capArray = [firstString + sArray[0]!.slice(1)];

    if (sArray.length === 1) return capArray;

    capArray.push(...capitalizeFirst(sArray.slice(1)));

    return capArray;
}

console.log("capitalizeFirst:", capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


// ============================================================
// nestedEvenSum
// ============================================================

type AT = number | string | boolean;

interface NestedObject {
    [k: string]: AT | NestedObject
}

function nestedEvenSum(obj: NestedObject): number {
    const keys = Object.keys(obj);
    let sum = 0;
    for (const key of keys) {
        const val = obj[key];
        if (isPlainObject(val)) {
            sum += nestedEvenSum(val as NestedObject);
        }
        if (typeof val === 'number' && (val % 2) === 0)
            sum += val;
    }
    return sum;
}

const nestedEvenObj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const nestedEvenObj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log("nestedEvenSum(obj1):", nestedEvenSum(nestedEvenObj1)); // 6
console.log("nestedEvenSum(obj2):", nestedEvenSum(nestedEvenObj2)); // 10


// ============================================================
// capitalizeWords
// ============================================================

function capitalizeWords(sArray: string[]): string[] {
    let capWordsArray: string[] = [];

    let firstString = sArray[0]!.toLocaleUpperCase();

    capWordsArray = [firstString];

    if (sArray.length === 1) return capWordsArray;

    capWordsArray.push(...capitalizeWords(sArray.slice(1)));

    return capWordsArray;
}

console.log("capitalizeWords:", capitalizeWords(['dytrdyr', 'hej', 'dytrdyr'])); // ['DYTRDYR','HEJ','DYTRDYR']


// ============================================================
// stringifyNumbers
// ============================================================

type ATExtend = string | boolean;

interface StringifiedObject {
    [k: string]: ATExtend | NestedObject
}

function stringifyNumbers(obj: NestedObject): StringifiedObject {
    const keys = Object.keys(obj);
    const output: StringifiedObject = {};

    for (const key of keys) {
        const val = obj[key];
        if (isPlainObject(val)) {
            output[key] = stringifyNumbers(val as NestedObject);
        }
        else if (typeof val === 'number')
            output[key] = String(val);
        else {
            output[key] = val as ATExtend;
        }
    }

    return output;
}

const stringifyObj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const stringifyObj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log("stringifyNumbers(obj1):", stringifyNumbers(stringifyObj1));
console.log("stringifyNumbers(obj2):", stringifyNumbers(stringifyObj2));


// ============================================================
// collectStrings
// ============================================================

function collectStrings(obj: NestedObject): string[] {
    const keys = Object.keys(obj);
    let aArray: string[] = [];
    for (const key of keys) {
        const val = obj[key];
        if (isPlainObject(val)) {
            aArray.push(...collectStrings(val as NestedObject));
        }
        else if (typeof val === 'string')
            aArray.push(val);
    }
    return aArray;
}

const collectStringsObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log("collectStrings:", collectStrings(collectStringsObj)); // ["foo", "bar", "baz"]
