// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function validAnagram(str1, str2) {
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();
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
 console.log(validAnagram('RAIL SAFETY!', 'FAIRY TALES!')) 





