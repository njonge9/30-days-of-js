//set- is a collection of elements
//can only contain unique elements

//creating an empty set
const companies = new Set();
console.log(companies);




//Creatin set from array
// const languanges = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const setOfLanguanges = new Set(languanges);
// console.log(setOfLanguanges);

//Iterate through a set
// for (const language of setOfLanguanges) {
//   console.log(language);
// }

//Adding an element to a set
console.log(companies.size);

companies.add("Google");
companies.add("Microsoft");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Facebook");

console.log(companies.size);
console.log(companies);

//delete an element from a set
console.log(companies.delete("Facebook"));
console.log(companies);

//Checking an element in a set
console.log(companies.has("Amazon"));
console.log(companies.has("Facebook"));

//Clearing the set
//it removes all the elements from a set

companies.clear();
console.log(companies);

//example
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang)
  counts.push({lang: l, count: filteredLang.length})
}

console.log(counts)

//set can be used to count unique item in an arrray

const items = [5,3,2,5,5,9,4,5];
const setOfNewItems = new Set(items)

console.log(setOfNewItems)

//Union of sets
//to find the union to two sets can be achieved using spread operator
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Intersection of sets
// To find an intersection of two sets can be achieved usin filter
let d = [1, 2, 3, 4, 5];
let e = [3, 4, 5, 6];

let D = new Set(d);
let E = new Set(e);

let f = d.filter((num) => E.has(num));
let F = new Set(f);

console.log(F)

//Differences of sets 
//To find the differences between two sets can be achieved using filter.
let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a1.filter((num) => !B1.has(num))
let C1 = new Set(c1)

console.log(C1)

//MAP
//creating an empty map
const map = new Map()
console.log(map)

//creating a map from a n array
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

const newMap = new Map(countries)

console.log(newMap)

//Adding values to the Map
console.log(newMap.size)

newMap.set('Kenya', 'Tanzania')
newMap.set('Uganda', 'Morocco')
newMap.set('Somalia', 'Tunisia')
newMap.set('Nigeria', 'Malawi')
newMap.set('Zambia', 'Ghana')

console.log(newMap.size);
console.log(newMap)

//Getting a value from Map
console.log(newMap.get('Zambia'))

//Checking key in Map
console.log(newMap.has('Kenya'))

//getting all the values
for (const all of newMap) {
  console.log(all)
}

for (const [country, city] of newMap){
  console.log(`${country}: ${city}`)
}