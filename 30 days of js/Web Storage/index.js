//Web Strorage(sessionStorage and localStorage) is a new HTML API offereing benefits over traditional web
//is more secure, and large amounts of data can be stored locally , without affecting the website performance
//Data being stored can be acccessed using JS, which gives you the ability to leverage client-side scripting
//to do many things that have traditionally involved server-side programming and relational databases
//There are two Web Storage objects: sessionStorage and localStorage
/*
    localStorage is similar to sessionStorage, except that while data stored in
    localStorage has no expiration time, data stored in sessionStorage gets cleared
    when the page session ends i.e when the page is closed
 */

//Methods to work on local Storage: setItem(), getItem(), removeItem(), clear(), key()

// ===WEB STORAGE OBJECTS ===
//localStorage-to display the localStorage object
//localStorage.clear()-to remove everthing in the local storage
//localStorage.setItem()-to store data in the localStorage.It takes a key and a value parameters.
//localStorage.removeItem()-to remove stored item from a localStorage. it takes key as a parameter
//localStorage.key()- to display a data in localStorage.it takes index as a parameter

localStorage.setItem("firstName", "Njonge");
console.log(localStorage.getItem("firstName"));

const skills = ["HTML", "CSS", "JS", "React", "Node"];
const skillsJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage.getItem("skills"));

//Setting item to localStorage
//When we set data to be stored in localStorage, it will be stored as astring
//if we are storing an array or an object, we should stringify it first to keep the
//format unless we lose the array structure or the object structure of the original data
console.log(localStorage);

//Getting item from localStorage
//We get data from the local storage using localStorage.getItem() method.

//Clearing the localStorage
//This method clears everting in local storage
localStorage.clear();
console.log(localStorage);
