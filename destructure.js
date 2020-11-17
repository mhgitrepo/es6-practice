const person = { name: "Jack William", age: 17, job: "facebooking", country: "USA", phone:1513265416, friends: ["Tom Hanks","Tom Cruise", "James Henry"]};
 
// const country = person.country;
// const phone = person.phone;

// const {phone} = { name: "Jack William", age: 17, job: "facebooking", country: "USA", phone:1513265416, friends: ["Tom Hanks","Tom Cruise", "James Henry"]};
// const {phone, country, age} = { name: "Jack William", age: 17, job: "facebooking", country: "USA", phone:1513265416, friends: ["Tom Hanks","Tom Cruise", "James Henry"]};
// const {phone, country, salary, age} = person;
const {phone} = person;
const complexObject = {
    name: 'abc',
    info: {
        address : 'Huston',
        occupation: 'Teacher'
    }
}

// const { occupation } = {address: 'Huston', occupation: 'Teacher'};
const { occupation } = complexObject.info;
console.log(occupation);

// console.log(country, phone, salary, age);//salaary undefined
// console.log(country, phone, salary, age);


//Array Destructuring
// const friends = ['James William', 'Larry Page', 'Sergey Brin', 'Elon Musk'];
// const [firstFriend, secondFriend, ...remainingFriends] = friends;
// console.log(firstFriend, secondFriend, remainingFriends);