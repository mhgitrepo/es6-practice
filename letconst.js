//constant = const
const name = "James";
// name = "Willliam";(you can't put it here)
console.log(name);

const numbers = [14, 15, 17];
numbers[2] = 52;
numbers.push(50);
numbers.pop();
numbers.shift();
numbers.unshift(42);
// numbers = ["James", "William", "John"];//you can't set a whole new array here.
console.log(numbers);

const list = {name: "Larry Page", phone: 54845451, company: "Google"};
list.phone = 452121255;
list.name = "Sergey Brin";
console.log(list);

//let
let player = "Ronaldo";
player = "Messi"; //you can change value anytime. (use case : scope variable);
console.log(player);

//"i" is accessible from outside of the loop becasue of "var"
// var sum = 0;
// for(var i = 0; i < 10; i++){
//     sum = sum + i;
// }
// console.log(i);

//"i" isn't accessible from outside of the loop becasue of "let" ==> let dosn't lick anything.
let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);