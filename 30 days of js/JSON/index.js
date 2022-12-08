const usersText = `{
  "users": [
    {
      "firstName": "Njonge",
      "lastName": "Fred",
      "age": 22,
      "email": "frednjonge9@gmail.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 26,
      "email": "example1@gmail.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 34,
      "email": "example2@gmail.com"
    },
    {
      "firstName": "James",
      "lastName": "Kim",
      "age": 12,
      "email": "example3@gmail.com"
    }
  ]
}`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON- because json is a string form of an object.

//Using a filter array with JSON.stringfy
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const t = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(t);
