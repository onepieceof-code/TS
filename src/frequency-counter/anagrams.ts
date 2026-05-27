
function validAnagram(s1: string, s2: string): boolean {

    interface feqCounter {
        [key: string]: number
    }

    const obj1: feqCounter = {};

    for (const char of s1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (const char of s2) {
        let count = obj1[char];

        if (!count) {
            return false;
        } else {
            count -= 1;
            obj1[char] = count;
        }

    }

    return true;
}

console.log("1:", validAnagram("", ""), "=> true");

console.log("2:", validAnagram("a", "a"), "=> true");
console.log("3:", validAnagram("a", "b"), "=> false");

console.log("4:", validAnagram("ab", "ba"), "=> true");
console.log("5:", validAnagram("ab", "ab"), "=> true");
console.log("6:", validAnagram("ab", "abc"), "=> false");

console.log("7:", validAnagram("listen", "silent"), "=> true");
console.log("8:", validAnagram("triangle", "integral"), "=> true");
console.log("9:", validAnagram("evil", "vile"), "=> true");

console.log("10:", validAnagram("hello", "bello"), "=> false");
console.log("11:", validAnagram("rat", "car"), "=> false");

console.log("12:", validAnagram("aaz", "zza"), "=> false");
console.log("13:", validAnagram("anagram", "nagaram"), "=> true");

console.log("14:", validAnagram("qwerty", "qeywrt"), "=> true");
console.log("15:", validAnagram("texttwisttime", "timetwisttext"), "=> true");

console.log("16:", validAnagram("apple", "papel"), "=> true");
console.log("17:", validAnagram("apple", "applf"), "=> false");

console.log("18:", validAnagram("aa", "bb"), "=> false");
console.log("19:", validAnagram("aabbcc", "abcabc"), "=> true");

console.log("20:", validAnagram("aabbccc", "abccbcc"), "=> false");

console.log("21:", validAnagram("Dormitory", "dirtyroom"), "=> false");
console.log("22:", validAnagram("dormitory", "dirtyroom"), "=> true");

console.log("23:", validAnagram("conversation", "voicesranton"), "=> true");
console.log("24:", validAnagram("conversation", "voicesrantonx"), "=> false");

console.log("25:", validAnagram("123", "321"), "=> true");
console.log("26:", validAnagram("123", "322"), "=> false");

console.log("27:", validAnagram("!@#", "#@!"), "=> true");
console.log("28:", validAnagram("!@#", "#@@"), "=> false");

console.log("29:", validAnagram("abc ", "cab "), "=> true");
console.log("30:", validAnagram("abc ", "cab"), "=> false");

console.log("31:", validAnagram("Astronomer", "Moonstarer"), "=> false");
console.log("32:", validAnagram("astronomer", "moonstarer"), "=> true");

console.log("33:", validAnagram("night", "thing"), "=> true");
console.log("34:", validAnagram("dusty", "study"), "=> true");

console.log("35:", validAnagram("abcd", "dcba"), "=> true");
console.log("36:", validAnagram("abcd", "abce"), "=> false");

console.log("37:", validAnagram("aaaaaaaaaa", "aaaaaaaaaa"), "=> true");
console.log("38:", validAnagram("aaaaaaaaaa", "aaaaaaaaab"), "=> false");