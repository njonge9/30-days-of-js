/* 
Higher order functions are functions that other
functions as a parameter or return  a function as a value.
The function passed is csalled a callback
*/

//Callback
const callback = (n) => {
  return n ** 2;
};

//function that takes another function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

//Returning function
//Higher order function returning other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhaEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhaEver;
  };
  return doSomething;
};

console.log(higherOrder(2)(4)(2));

//for Each
const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));

//setInterval- do some activity continuosly with in some interval of time
function sayHello() {
  console.log("Hello Njonge");
}

setTimeout(sayHello, 5000);

//Settimeout-execute some action at some time in future

//Functional Programming
//forEach, map,filter, reduce, find, every, some, sort

//1. forEach- itterate an array elements. used only with arrays
let add = 0;
const digits = [1, 2, 3, 4, 5];
digits.forEach((num) => console.log(num));

console.log(add);

// const countries = ["Kenya", "Tanzania", "Uganda", "Somalia", "Ethiopia"];
// countries.forEach((country) => {
//   console.log(country.toUpperCase());
// });

//2.Map-iterate an array elements and modify the array elements
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());

console.log(namesToUpperCase);

//Filter-filter out items which full fill filtering conditions and return a new array
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const contriesContainingLand = countries.filter(
  (country) =>
    //country.includes("land")
    //country.endsWith("y")
    country.length === 5
);

const scores = [
  { name: "Njonge", score: 95 },
  { name: "Fred", score: 98 },
  { name: "Miriam", score: 67 },
  { name: "Kinus", score: 50 },
  { name: "Ian", score: 20 },
  { name: "Ricky", score: 87 },
  { name: "Tom", score: 75 },
  { name: "John", score: 80 },
];

const scoresGreaterEighty = scores.filter((score) => score.score < 80);

console.log(scoresGreaterEighty);
console.log(contriesContainingLand);

//Reduce
/*Takes a callback function
The callback function takes accumulator, current, and optional initial value as 
a parameter and returns a single value
It is a good practice to define an initial value for the accumalator value
If we do not specify this parameter
by default accumalator will get array first value
if array is empty array will throw an error.
*/

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//every- check if all the elements are similar in one aspect.
// it returns boolean
const areAllNumbers = number.every((name) => typeof name === "number");
console.log(areAllNumbers);

//find- Return the first element which satisfies the condition
const ages = [18, 22, 24, 20, 25];
const age = ages.find((age) => age > 20);
console.log(age);

const shoes = ["AirForce", "Timberland", "gucci", "air max", "sneakers"];
const result = shoes.find((name) => name.length > 9);

console.log(result);

//findIndex- Returns the position of the first element which satisfies the condition
const mbogi = ["Ian", "Steve", "Captain", "Chela"];
const mbogiAges = [22, 45, 20, 10, 18];

const mbogiResults = mbogi.findIndex((name) => name.length > 2);
console.log(mbogiResults);

//some- check if some of the elements are similar in one aspect.
//returns boolean
const areAllStr = names.some((name) => typeof name === "string");
console.log(areAllStr);

//sort- arranges the array element either as ascending or
//descending order. By default sort() method sorts values as strings.
//This works well for strings but not for numbers
// if a number values are sorted as strings and it gives us a wrong result
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

//sorting numbers
const sortNumbers = [9.81, 3.14, 100, 37];
console.log(
  sortNumbers.sort((a, b) => {
    return a - b;
  })
);

//sorting object arrays
const users = [
  { name: "Njonge", age: 22 },
  { name: "Miriam", age: 20 },
  { name: "Steve", age: 21 },
  { name: "John", age: 16 },
  { name: "James", age: 10 },
];

users.sort((a, b) => {
  if (a.age < b.age) return 1;
  if (b.age > a.age) return -1;
  return 0;
});

console.log(users);
