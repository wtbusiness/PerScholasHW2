// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function validAnagram(str1, str2) {
if(str1.length !== str2.length){
return false;
}


const counter1 = {};
const counter2 = {};

for(let char of str1){
    counter1[char] = counter1[char]+1 || 1
}
for(let char of str2){
    counter2[char] = counter2[char]+1 || 1
}
for(let key in counter1){
    if(!(key in counter2) || counter2[key] !== counter1[key]) {
        return false;
    }
}
return true;

}
 console.log(validAnagram('rail safety', 'fairy tales')) 






// function maxChar(str) {
//   const charFrequency = {};

//   for (let char of str) {
//     if (!charFrequency[char]) {
//       charFrequency[char] = 1;
//     } else {
//       charFrequency[char]++;
//     }
//   }

//   let maxChar = "";
//   let maxFrequency = 0;

//   for (let char in charFrequency) {
//     if (charFrequency[char] > maxFrequency) {
//       maxChar = char;
//       maxFrequency = charFrequency[char];
//     }
//   }

//   return maxChar;
// }

// console.log(maxChar("abcccccccd"));
