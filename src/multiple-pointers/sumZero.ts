
function sumZero(arr: number[]): number[] | undefined {
    if (!(arr.length >= 2)) return undefined;
    let sum = -1;
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        sum = arr[i]! + arr[j]!;
        if (sum === 0)
            return [arr[i]!, arr[j]!];

        if (sum > 0)
            j -= 1;

        else if (sum < 0)
            i += 1;


    }

    return undefined;
}


console.log("1:", sumZero([-3, -2, -1, 0, 1, 2, 3]), "=> [-3,3]");
console.log("2:", sumZero([-2, 0, 1, 3]), "=> undefined");
console.log("3:", sumZero([1, 2, 3]), "=> undefined");

console.log("4:", sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), "=> [-5,5]");
console.log("5:", sumZero([-10, -5, -2, 0, 2, 4, 5, 10]), "=> [-10,10]");

console.log("6:", sumZero([-2, -1, 0, 1, 2]), "=> [-2,2]");
console.log("7:", sumZero([-1, 0, 1]), "=> [-1,1]");
console.log("8:", sumZero([-1, 1]), "=> [-1,1]");

console.log("9:", sumZero([0]), "=> undefined");
console.log("10:", sumZero([]), "=> undefined");

console.log("11:", sumZero([-5, -4, -3, -2, -1]), "=> undefined");
console.log("12:", sumZero([1, 2, 3, 4, 5]), "=> undefined");

console.log("13:", sumZero([-3, -2, -1, 1, 2, 3]), "=> [-3,3]");
console.log("14:", sumZero([-7, -6, -5, -4, 4, 5, 6, 7]), "=> [-7,7]");

console.log("15:", sumZero([-4, -3, -2, -1, 0]), "=> undefined");
console.log("16:", sumZero([0, 1, 2, 3, 4]), "=> undefined");

console.log("17:", sumZero([-100, -50, -25, 0, 25, 50, 100]), "=> [-100,100]");
console.log("18:", sumZero([-8, -6, -4, -2, 0, 2, 4, 6, 8]), "=> [-8,8]");

console.log("19:", sumZero([-5, -3, -1, 0, 2, 4, 6]), "=> undefined");
console.log("20:", sumZero([-9, -7, -5, -3, 1, 2, 4, 6]), "=> undefined");

console.log("21:", sumZero([-2, -2, 0, 2, 2]), "=> [-2,2]");
console.log("22:", sumZero([-1, -1, 1, 1]), "=> [-1,1]");

console.log("23:", sumZero([-3, -2, -1, 0, 0, 1, 2, 3]), "=> [-3,3]");
console.log("24:", sumZero([-1, 0, 0, 0, 1]), "=> [-1,1]");

console.log("25:", sumZero([-999999, 999999]), "=> [-999999,999999]");
console.log("26:", sumZero([-1000, -500, -100, 100, 500, 1000]), "=> [-1000,1000]");

console.log("27:", sumZero([-5, -4, -3, -2, -1, 1, 2, 3, 4]), "=> [-4,4]");
console.log("28:", sumZero([-6, -5, -4, -3, 3, 4, 5]), "=> [-5,5]");

console.log("29:", sumZero([-2, 1, 3, 4]), "=> undefined");
console.log("30:", sumZero([-7, -3, -1, 2, 4, 8]), "=> undefined");