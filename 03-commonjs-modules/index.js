const { myName, myHobbies, myAge } = require('./multiple-exports')
const greetingFn = require('./my-modules/single-export')
const { myName: myOtherName, myFriendName, myGreatHobbies } = require('./export-and-import')
// DONT USE ABSOLUTE PATH
//const greetingFn = require("/home/georchid/Projects/node_projects/03-commonjs-modules/single-export.js");

console.log(myName);
console.log(myHobbies);
console.log(myAge);

myHobbies.push('climbing')


console.log(greetingFn)
greetingFn(myName)

console.log(myOtherName)
console.log(myFriendName)

// myHobbies and myGreatHobbies refferenses to one object in memory
console.log(myGreatHobbies)