//Destructuring is a way to unpack arrays and objects and assigning to distict variable
//destructuring arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

const names = ["Njonge", "Fred", "Mutuuri", "Tom", "Wanjiru"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack = [
  ["HTML", "CSS", "JS", "REACT"],
  ["NODE", "EXPRESS", "MONGODB"],
];

let [frontend, backend] = fullStack;

console.log(frontend, backend);

//skipping a value
const shoppingList = ["Bananas", "Mangoes", "Unga", "Sugar", "salt"];

const [, , fl, , suka] = shoppingList;
console.log(fl, suka);

//We can use default value in case the value of array for that index is undefied e.g
const list = [undefined, "Brook", "David"];
let [firPerson = "Njonge", secPerson, thirPerson, fourPerson = "Irungu"] = list;

console.log(firPerson, secPerson, thirPerson, fourPerson);

/*
    We cannot assign variable to all the elements in the array
    We can destructure few of the first and we can get the remaining array
    using the spread operator(...)
*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest); //returns an array

//Destructuring during iteration
const countries = [
  ["Finland", "Kenya"],
  ["Uganda", "Somalia"],
];
for (const [country, city] of countries) {
  console.log(`${country}: ${city}`);
}

//DESTRUCTURING OBJECTS
//When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area } = rectangle;
console.log(width, height, area);

//Rename during structuring
let { width: w, height: h, area: a } = rectangle;
console.log(w, h, a);

//Object parameter without destructuring
const rect = {
  width: 30,
  height: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));

//Another example
const person = {
  firstName: "Fred",
  lastName: "Njonge",
  age: 21,
  country: "Kenya",
  job: "FullStack Developer",
  skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE", "MONGODB", "D3.JS"],
  languages: ["Sheng", "English", "Kikuyu", "Swahili"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(",");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(",");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
  return personInfo;
};

console.log(getPersonInfo(person));

//object parameter with destructuring
const calcPerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calcPerimeter(rect));

//Destructuring object during iteration
const todoList = [
  {
    task: "Prepare Js Test",
    time: "04/12/2022 8:30",
    completed: true,
  },
  {
    task: "Give Js Test",
    time: "04/12/2022 10:30",
    completed: false,
  },
  {
    task: "Prepare Js Test",
    time: "04/12/2022 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

//Spread or Rest Operator
//When we destructure an array we use the spread operator(...) to get the rest of the elements as array
//In addition to that we use spread operator to spread array elements to another array

//Spread operator to get the rest of array elements
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [numb1, numb2, numb3, ...rests] = num;

console.log(numb1, numb2, numb3);
console.log(rests);

//Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];
const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

//Spread operator to copy object
const user = {
  name: "Njonge",
  title: "Programmer",
  country: "Kenya",
  city: "Nairobi",
};

const copiedUser = { ...user };
console.log(copiedUser);

//Modifying or changing the object while copying
const changedUser = { ...user, title: "Fullstack Developer" };
console.log(changedUser);

//Spread operator with arrow functions
/*
  Whenever we like to write an arrow function which takes unlimited 
  number of arguments we use the spread operator.
  If we use a spread operator as a parameter, the argument passed
  when we invoke a function will change to an array.
*/

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5, 6);

const sumNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumNums(1, 2, 3, 4, 5));
