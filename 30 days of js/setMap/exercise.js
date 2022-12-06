//create an empty set
const emptySet = new Set();

console.log(emptySet);

//Create a set containing 0 to 10 using loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

setOfNumbers = new Set();
for (const num of numbers) {
  setOfNumbers.add(num);
}

console.log(setOfNumbers);

//Remove an element from a set
const removeElement = [1, 2, 3, 4, 5];
const newRemoveElementSet = new Set(removeElement);

newRemoveElementSet.delete(3);
console.log(newRemoveElementSet);

//clear a set

const clearSet = ["Njonge", "Miriam", "John"];
const newClearSet = new Set(clearSet);

newClearSet.clear();

console.log(newClearSet);

//Create a set of 5 string elements from an array
const setOfStrings = ["Njonge", "Fred", "Kamau", "Irungu", "Kinus"];
const newSetOfStrings = new Set(setOfStrings);

console.log(newSetOfStrings);

//Create a map of countries and number of chacters of a country
const countriesMap = new Map();

countriesMap.set("Kenya", 5);
countriesMap.set("Uganda", 6);
countriesMap.set("Tanzania", 8);
countriesMap.set("Somalia", 7);
countriesMap.set("DRC", 3);

console.log(countriesMap);

//Find a union b
let a = [1, 2, 3, 4, 5, 6];
let b = [3, 5, 8, 9];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

//Find a intersection b
let a1 = [1, 2, 3, 4, 5, 6];
let b1 = [3, 5, 8, 9];

let A1 = new Set(a1);
let B1 = new Set(b1);
let c1 = a1.filter((num) => B1.has(num));

let C1 = new Set(c1);

console.log(C1);

//
