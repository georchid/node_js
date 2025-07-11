const myName = "George"
const myHobbies = ['swimming', 'boxing', 'cycling']
const myAge = 25

console.log('Text from the multiple-exports CommonJS module')

module.exports.myName = myName
exports.myHobbies = myHobbies
exports.myAge = myAge