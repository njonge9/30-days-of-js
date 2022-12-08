//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getColor() {
    return this.color;
  }
}

const dog = new Animal("Tom", 4, "white", 4);
console.log(dog.getAge());

//====LEVEL 2====
//Overrride the method you create in Animal class

class Mammal extends Animal {
  saySomething() {
    console.log("Mammal says something");
  }
}
