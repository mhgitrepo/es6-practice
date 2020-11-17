const firstName = "James";
const lastName = "William";
const fullName = firstName + " " + lastName + " " + "is a good human being";
// const fullName2 = `${firstName} ${lastName} is a good boy.`;//(ES6 -Template)
const fullName2 = `${firstName} ${lastName} ${51+1+231} is a good boy.`;
// console.log(fullName);
//multiline old way
const multiline1 = "He is ia good human being.\n"
+ "He love programming.\n"
+ "He is sleepy."
//multiline new way(ES6-Template)
const multiline2 = `He is ia good human being.
He love programming.
He is sleepy.`
console.log(multiline1);

const name = "Adam Sandler";
const greeting = 'Hello ' + name + ' Welcome to the club.'
console.log(greeting);