//We use console objects methods to show output on the browser console
//We use document.write ro show output on the browser
//Both methods are used only for testing and debugging purposes

//Console.log()-shows output on the browser console.
console.log("30 days of JavaScript");

//Substitution
console.log("%d %s of JavaScript", 30, "Days");

//CSS
//We can style logging message using CSS.
console.log("%c30 Days of JavaScript", "color:green");

//console.warn()
//we use it to give warning on browser.
//For instance to inform or warn deprecation of version of package or bad practices.
console.warn("This iis a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of everthing"
);

//consoel.error()-shows an error message
console.error("This is an error message");

//console.table()-display data as a table on the console.
const names = ["Tom", "Miriam", "Njonge", "Fred"];
console.table(names);

const user = {
  name: "Njonge",
  title: "Programmer",
  country: "Kenya",
  city: "Nairobi",
  age: 22,
};

console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

//console.time()-starts a timer you can use to track hoew long an operation takes.
//You give each timer a unique name, and have up to 10,000 timers running on a given page
//When you call console.timeEnd( with the same name the browser will output the time in milliseconds that elapsed sinsce the timer started)
const countrie = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countrie.length; i++) {
  console.log(countrie[i][0], countrie[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countrie) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

//console.info()- displays information message on the browser console
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

//console.assert()-writes an error message to the consoel if the assertion is false.
console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4");

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

//console.group()- helps to group different groups
const name = ["Asabeneh", "Brook", "David", "John"];
const country = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const use = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const userss = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(name);
console.groupEnd();

console.group("Countries");
console.log(country);
console.groupEnd();

console.group("Users");
console.log(use);
console.log(userss);
console.groupEnd();

//console.count()-prints the number of times the console.count is called.
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();

//console.clear()- cleans the browser console
