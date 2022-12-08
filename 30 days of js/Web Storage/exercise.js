//====LEVEL ONE ====
//Store your first name, last name, age, country, city in your browser localStorage.
const me = {
  firstName: "Fred",
  lastName: "Flintstone",
  age: 22,
  country: "Kenya",
  city: "Nairobi",
};

const meInfo = JSON.stringify(me);

localStorage.setItem("meInfo", meInfo);
console.log(localStorage.getItem("meInfo"));

//Create a student object.
//The student object will have first name, last name, age, skills, country, enrolled keys and values for keys.
// Store the student object in your browser localStorage
const student = {
  firstName: "Fred",
  lastName: "Flintstone",
  age: 22,
  skills: ["HTML", "CSS", "JS", "React", "Node"],
  country: "Kenya",
  enrolled: true,
};

const studentJSON = JSON.stringify(student);
localStorage.setItem("student", studentJSON);

console.log(localStorage.getItem("student"));

//===LEVEL 3===
