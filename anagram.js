// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const sortStr = (str) => str.toLowerCase().split('').sort().join('');
const isAnagram = (test, original) => sortStr(test) === sortStr(original);
