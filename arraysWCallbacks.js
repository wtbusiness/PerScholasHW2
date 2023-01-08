const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
  "perscholas",
  "a",
];

//Determine if every number is greater than or equal to 0

const isGreaterThanZero = (currentValue) => currentValue >= 0;
console.log(nums.every(isGreaterThanZero));

// determine if every word shorter than 8 characters
const isShorterThan8 = (currentValue) => currentValue.length < 8;
console.log(panagram.every(isShorterThan8));

const numsLessThanFour = (currentValue) => currentValue < 4;

console.log(nums.filter(numsLessThanFour));

const divisibleByFive = (currentValue) => currentValue % 5;
console.log(nums.find(divisibleByFive));

// find the first word longer than 5

const longerThanFive = (arr) => {
  return arr.find((element) => element.length > 5);
};

console.log(longerThanFive(panagram));

//find the index of the first number that is divisible by 3
const findIndex = nums.findIndex((num) => num % 3 === 0);
console.log(findIndex);

const findIndexOf = panagram.findIndex((element) => element.length < 2);
console.log(findIndexOf);

nums.forEach((num) => console.log(num * 3));

panagram.forEach((element) => console.log(element.concat("!")));

console.log(nums);
console.log(panagram);

//Thought Questions

//What happened to the original array?
//Didn't change

//Can you store the values from a forEach method in a new array?

//No

///////////////////////////////////////////////////

//make a new array of each number multiplied by 100

const map1 = nums.map((num) => num * 100);
console.log(map1);

// make a new array of all the words in all uppercase

const map2 = panagram.map((element) => element.toUpperCase());
console.log(map2);

//What happened to the original array?

//Can you store the values from a map method in a new array?

nums.some((num) => console.log(num % 7));
console.log(panagram.some((word) => word.includes("a")));

//console.log(panagram.some((word) => word.includes('a')));
const initialValue  = 0
const numsEqual = nums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 
console.log(numsEqual);

const initialWord = "";
const wordsEqual = panagram.reduce((accumulator, currentValue) => accumulator + currentValue, initialWord);
console.log(wordsEqual);

console.log(nums.sort());

console.log(panagram.sort());




console.log(nums.sort(function(a, b){
  return a - b;
}));
console.log(nums.sort(function(a, b){
  return b - a;
}));

console.log(panagram.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1));

console.log(
  panagram.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1))
);

console.log(panagram);

// it changed the original array
let concatenatedWords = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const concatenator = panagram.reduce((accumulator, currentValue) => accumulator + currentValue, concatenatedWords).toLowerCase().split("");
//console.log(concatenator);
concatenator.sort();
console.log(concatenator);

let noDuplicatesConcatenator = removeDuplicates(concatenator);
console.log(noDuplicatesConcatenator);

noDuplicatesConcatenator.forEach((letter, idx) => {
  if(letter === alphabet[idx]){
    console.log(`${letter} is equal to ${alphabet[idx]}`);
  } else {
    console.log(`${letter} is not equal to ${alphabet[idx]}`);
  }
})
function removeDuplicates(arr){
  let uniqueLetters = [];
  arr.forEach((element) => {
    if(!uniqueLetters.includes(element)){
      uniqueLetters.push(element);
    }
  })
  return uniqueLetters;

}

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];
console.log(products.filter((product) => product.price < 10));

console.log(
  products.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  )
);













