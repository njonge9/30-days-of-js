//Classes are created to create an object
//is a blueprint for creating an object
//We instantiate a class to create an object
//class defines attributes and behaviour of the object , while the object , on the other hand represents the class
//Once we create a class we can create object from it whenever we want.
//Creating an object from class called instatiation

//=====DEFINING A CLASS====
//To define a class in js we need the keyword class, name of the class in CAmelCAse and block code.
//====CLASS INSTATIATION====
//instatiation means creating an object from a class.
//We need the keyword new and we call the class after the new

//====CLASS CONSTRUCTOR ====
//it allows as to create a blueprint for objects

//===DEFAULT VALUES WITH CONSTRUCTOR ===
//The constructor function properties may have a default value like other regular functions

//===CLASS METHODS===
//The constructor inside a class in a builtin function which allow us to create a blueprint for objects
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person = new Person("Njonge", "Fred", 22, "Kenya", "Nairobi");
const person1 = new Person("Asabeneh", "Yetayeh");
const person2 = new Person("Lidiya", "Tekle");
const person3 = new Person("Abraham", "Yetayeh");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person);
console.log(person.getFullName());

//Getter-allow us to access value from the object.
//We write using keyword get followed by a function
//Instead of accesing properties directly from the object we use getter to get the value.
class Getting {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }

  getfullName() {
    this.firstName + " " + this.lastName;
  }
  get getAge() {
    return this.age;
  }

  get fullNames() {
    return `${this.firstName} ${this.lastName}`;
  }
  set setAge(age) {
    this.age += age;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

const njonge = new Getting("Njonge", "Fred", 22, "Nairobi");

console.log(njonge.getAge);
console.log(njonge.fullNames);

//====SETTERS====
//The setter method allow us to modify the value of certain properties
njonge.setAge = 5;
console.log(njonge.getAge);

//==== STATIC METHOD ====
//The static keywordd defines a static method for a class
//Are not called on instances of the class.
//Instead they are called on the class itself
console.log(Getting.showDateTime());
console.log(Getting.favoriteSkill());

//==== INHERITANCE ====
//Using inheritance we can access all the properties and methods of the parent class
class Student extends Getting {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getAge);
