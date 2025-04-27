const name = "Maiz"
const repocount = 5

// console.log(name + repocount + " Value");

console.log(`My name is ${name} and my Repo Count is ${repocount}`);

const GameName = new String(`petabyte1`)

console.log(GameName[0]);
console.log(GameName.__proto__);

// console.log(GameName.length)
// console.log(GameName.toUpperCase())

console.log(GameName.charAt(2));
console.log(GameName.indexOf('t'));

const newString = GameName.substring(0,4)

console.log(newString);

const anotherString = GameName.slice(-8, 4)

console.log(anotherString);

