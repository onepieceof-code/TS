function same(aNumber: number[], aSquare: number[]): boolean {
    if (aNumber.length != aSquare.length) return false;

    const fequencyMap = new Map<number, number>();

    for (const sq of aSquare) {
        if (isNaN(sq)) return false;
        fequencyMap.set(sq, (fequencyMap.get(sq) || 0) + 1);
    }

    for (const num of aNumber) {
        if (isNaN(num)) return false;

        const sq = num * num;
        const count = fequencyMap.get(sq);
        if (!count)
            return false;
        else {
            fequencyMap.set(sq, count - 1);
            if ((count - 1) <= 0)
                fequencyMap.delete(sq);
        }

    }


    return true;

}

console.log("1:", same([1, 2, 3], [1, 4, 9]), "=> true");
console.log("2:", same([1, 2, 3], [9, 1, 4]), "=> true");
console.log("3:", same([2, 3, 1], [1, 4, 9]), "=> true");

console.log("4:", same([1, 2, 3], [1, 4, 9, 16]), "=> false");
console.log("5:", same([1, 2, 3, 4], [1, 4, 9]), "=> false");
console.log("6:", same([], [1]), "=> false");

console.log("7:", same([1, 2, 3], [1, 4, 8]), "=> false");
console.log("8:", same([1, 2, 5], [1, 4, 9]), "=> false");

console.log("9:", same([1, 2, 2], [1, 4, 9]), "=> false");
console.log("10:", same([1, 2, 3], [1, 4, 4]), "=> false");
console.log("11:", same([1, 1, 2], [1, 4, 4]), "=> false");
console.log("12:", same([2, 2, 3], [4, 9, 9]), "=> false");

console.log("13:", same([1, 2, 2], [1, 4, 4]), "=> true");
console.log("14:", same([2, 2, 3, 3], [4, 4, 9, 9]), "=> true");

console.log("15:", same([0, 1, 2], [0, 1, 4]), "=> true");
console.log("16:", same([0, 0, 2], [0, 0, 4]), "=> true");
console.log("17:", same([0, 2], [4, 4]), "=> false");

console.log("18:", same([-1, -2, 3], [1, 4, 9]), "=> true");
console.log("19:", same([-1, 2], [1, 4]), "=> true");
console.log("20:", same([-1, -2], [1, 1]), "=> false");
console.log("21:", same([-2, -2], [4, 4]), "=> true");

console.log("22:", same([-1, 0, 2], [1, 0, 4]), "=> true");
console.log("23:", same([-1, 0, 2], [1, 4, 4]), "=> false");

console.log("24:", same([], []), "=> true");

console.log("25:", same([1, 2, 3], [1, 4, 9, 9]), "=> false");
console.log("26:", same([1, 2, 3, 1], [1, 4, 9]), "=> false");
console.log("27:", same([1, 2, 3], [1, 4, 9, 1]), "=> false");

console.log("28:", same([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]), "=> true");
console.log("29:", same([1, 2, 3, 4, 5], [1, 4, 9, 16, 26]), "=> false");