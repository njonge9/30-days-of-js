//A regular expression is  a small programming language that helps to find pattern in data
//can be used to check if SOME PATTERN EXISTS IN DIFFERENT DATA TYPES.

//REGEXP parameters
//Takes two parameter. One required search pattern and an optional flag.

//Pattern-could be a text or any form pattern which some sort of similarity
//Flags- are optional parameters in geg which  determine the type of seraching
//g-a global flag which means looking for a parttern in whole text
//i-case insensitive flag(it searchs for both lowercase and uppercase)
//m-multiline

//Creating a pattern with RegExp constructor
//Declaring regular expression without tglobal flag and case insensitive flag

let pattern = "love";
let regEx = new RegExp(pattern);

//console.log(regEx.test("love"));

//Declaring with global flag and case insensitive flag
let expression = "love";
let flag = "gi";
let newReg = new RegExp(expression, flag);

//Declaring regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let objectReg = new RegExp("njonge", "gi");

//Creating a pattern without RegExp constructor
let pat = /love/gi;
//====OR ====
let reg = new RegExp("love", "gi");

//=====REGEXPP OBJECT METHODS ======
//testing for a match
//test()- returns true or false
const str = "I love JavaScript";
const matching = /love/;
const result = matching.test(str);
console.log(result);

//Array containing all of the match
//match() - Returns an array containing all of the matches, including capturing
//groups, null if no match is found
//If we do not use a global flag, match() returns an array conatining the pattern, index, input and group
const strng = "I love JavaScript";
const matc = /love/g;
const sult = strng.match(matc);
console.log(sult);

//Search()-tests for amatch in a string. Returns the indexof the match , or -1 if the search fails
const seraching = strng.search(matc);
console.log(seraching);

//====REPLACING A SUBSTRING====
//replace()-Executes a search for a match in astring , and replaces the mtched substring with a replacement substring
const txt =
  "Python is the most beutiful language that a humen being has ever created. I recommend python for first programming language.";
matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

//[]:A set of characters
//[a-z] means any letter a to z
//[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

//\: uses to escape special characters
// \d means: match where the string contains digits(numbers from 0-9);
//\D mean: match where the string does not contain digits
//.: any character except new line character(\n)
//^:starts with
//r'^substring' eg r'^love', a sentence which starts with a word love
//r'[^abc] means not a,b or c.
//$:ends with
//r'substring$' egr'love$',sentence ends with a word love
//*:zero or more times
//r'[a]*' means an optional or it can occur many times
//+:one or more times
//r'[a]+' means at least once or more times
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group

//===SQUARE BRACKETS===

const tern = /[Aa]pple/g; // this square bracket means either A or a
const txt1 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt1.match(tern);

console.log(matches);

//===ESCAPE CHARACTER(\) IN REGEXP===
const patt = /\d+/g; // d is a special character which means digits
const txt3 = "This regular expression example was made in January 12,  2020.";
const matche = txt3.match(patt);

console.log(matche); // ["12", "2020"], this is not what we want

//===PERIOD(.)===
const patt1 = /[a]./g; // this square bracket means a and . means any character except new line
const txt4 = "Apple and banana are fruits";
const matches1 = txt4.match(patt1);

console.log(matches1); // ["an", "an", "an", "a ", "ar"]

const patt2 = /[a].+/g; // . any character, + any character one or more times
const txt5 = "Apple and banana are fruits";
const matches2 = txt5.match(patt2);

console.log(matches2); // ['and banana are fruits']

//===ZERO OR MORE TIMES(*)===
//may not occur or it can occur many times

const patt3 = /[a].*/g; //. any character, + any character one or more times
const txt6 = "Apple and banana are fruits";
const matches3 = txt6.match(patt3);

console.log(matches3); // ['and banana are fruits']

//=== ZERO OR ONE TIMES(?)================================================================
//Zero or one times. The pattern may occur or it may occur once
const txt7 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const patt4 = /[Ee]-?mail/g; // ? means optional
matches4 = txt6.match(patt4);

console.log(matches4); // ["e-mail", "email", "Email", "E-mail"]
