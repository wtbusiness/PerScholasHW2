// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function same(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {};
  for (let firstEl of arr1) {
    //console.log(firstEl);
    obj[firstEl * firstEl] = (obj[firstEl * firstEl] || 0) + 1;
  }
  console.log(obj); // {1:1,4:2,9:1}
  for (secondEl of arr2) {
    if (!obj[secondEl]) {
      return false;
    } else {
      obj[secondEl] -= 1;
    }
  }
  return true;
}
