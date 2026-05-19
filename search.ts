// Native String Searh

function nativeStringSearch(str: string, subStr: string): number {

    for (let i = 0; i <= (str.length - subStr.length); i++) {
        const char = str[i];
        if (char === subStr[0]) {
            let k = i;
            for (const ch of subStr) {
                if (ch !== str[k])
                    break;
                k++;
            }
            return i;
        }
    }


    return -1;
}

console.log(nativeStringSearch('helbham', 'bham'))



//bubble sort

function bubbleSort(arr: number[]): number[] {

    for (let o = 0; o < arr.length; o++) {
        let swap = false;
        for (let j = 1; j < arr.length; j++) {
            let i = j - 1;
            if (arr[i]! > arr[j]!) {
                const temp = arr[j];
                arr[j] = arr[i]!;
                arr[i] = temp!
                swap = true;
            }

        }
        if (!swap) return arr;
    }

    return arr;
}

function SelectionSort(arr: number[]): number[] {

    for (let o = 0; o < arr.length; o++) {
        let minIndex = o;

        for (let j = o + 1; j < arr.length; j++) {
            if (arr[minIndex]! > arr[j]!) {
                minIndex = j;
            }
        }

        if (minIndex !== o) {
            const temp = arr[o]!;
            arr[o] = arr[minIndex]!;
            arr[minIndex] = temp;
        }

    }

    return arr;
}


function inserctionSort(arr: number[]): number[] {//[0,1,3,5,4,8,2]

    for (let o = 1; o < arr.length; o++) {
        const insertNumber = arr[o]!;
        for (var j = o - 1; j >= 0 && arr[j]! > insertNumber; j--) {
            arr[j + 1] = arr[j]!;
        }
        arr[j + 1] = insertNumber;
    }

    return arr;
}


function mergeSort(arr: number[]): number[] {



    return arr;
}


// ✅ Basic cases
console.log("2:", inserctionSort([1, 2, 3, 4, 5]), "=> [1,2,3,4,5]");        // already sorted
console.log("3:", inserctionSort([5, 4, 3, 2, 1]), "=> [1,2,3,4,5]");        // reverse sorted

// 🔢 Edge — duplicates
console.log("4:", inserctionSort([3, 3, 3, 3]), "=> [3,3,3,3]");            // all same
console.log("5:", inserctionSort([2, 1, 2, 1]), "=> [1,1,2,2]");            // mixed duplicates
console.log("6:", inserctionSort([1, 1, 2, 3]), "=> [1,1,2,3]");            // dup at start
console.log("7:", inserctionSort([1, 2, 3, 3]), "=> [1,2,3,3]");            // dup at end

// 🔢 Edge — negatives
console.log("8:", inserctionSort([-3, -1, -2]), "=> [-3,-2,-1]");
console.log("9:", inserctionSort([-1, 0, 1]), "=> [-1,0,1]");
console.log("10:", inserctionSort([3, -1, 2, -2]), "=> [-2,-1,2,3]");       // mixed

// 🔢 Edge — single and empty
console.log("11:", inserctionSort([]), "=> []");                          // empty
console.log("12:", inserctionSort([1]), "=> [1]");                        // single element
console.log("13:", inserctionSort([2, 1]), "=> [1,2]");                    // two elements

// 🔢 Edge — large numbers
console.log("14:", inserctionSort([1000, 500, 100, 999]), "=> [100,500,999,1000]");

// 🔢 Edge — zeros
console.log("15:", inserctionSort([0, 0, 0]), "=> [0,0,0]");
console.log("16:", inserctionSort([3, 0, 1, 0, 2]), "=> [0,0,1,2,3]");