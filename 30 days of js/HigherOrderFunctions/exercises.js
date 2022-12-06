const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

countries.forEach((country) => console.log(country));
numbers.forEach((number) => console.log(number));

let array2 = countries.map((country) => {
  return country.toUpperCase();
});

console.log(array2);

let countriesLength = countries.map((country) => {
  return country.length;
});

console.log(countriesLength);

let squareNumber = numbers.map((number) => {
  return number * number;
});

console.log(squareNumber);

names.map((name) => console.log(name.toUpperCase()));

products.map((product) => console.log(`${product.product}: ${product.price}`));

let countriesWithLand = countries.filter((country) => country.includes("land"));
console.log(countriesWithLand);

let countriesWithSixChar = countries.filter((country) =>
  //country.length === 6
  //country.length >= 6
  country.startsWith("E")
);
console.log(countriesWithSixChar);

let pricesWithValue = products.filter(
  (product) => typeof product.price === "number"
);

console.log(pricesWithValue);

function getStringLists(arr) {
  return arr.filter((array) => typeof array === "string");
}

console.log(getStringLists(countries));

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const conctContries = countries.reduce((acc, cur) => (acc + cur).split(","));
console.log(conctContries);

const someNumbers = names.some((number) => number.length > 7);
console.log(someNumbers);

const everyCountry = countries.every((country) => country.includes("land"));
console.log(everyCountry);

const findCountry = countries.find((country) => country.length === 6);
console.log(findCountry);

const findIndexCountry = countries.findIndex((country) => country.length === 6);
console.log(findIndexCountry);

const findNorway = countries.findIndex((country) => country === "Norway");
console.log(findNorway);

const findRussia = countries.findIndex((russia) => russia === "Russia");
console.log(findRussia);

//Level2
const arrayProducts = products
  .map((product) => product)
  .filter((product) => typeof product.price === "number")
  .reduce((acc, cur) => cur.price + acc, 0);
console.log(arrayProducts);

function categorizeCountries(country) {
  return country.filter((cou) => cou.match(/way/, /land/));
}

console.log(categorizeCountries(countries));
