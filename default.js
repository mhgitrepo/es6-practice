// function add (num1, num2){
//     return num1 + num2;
// }
// const total = add(15, 17);
// console.log(total);

// function add (num1, num2){
//     return num1 + num2;
// }
// const total = add(15);//result will be "NaN"..
// console.log(total);

// function add (num1, num2){
//     //old way
//     // if(num2 == undefined){
//     //     num2 = 20;
//     // }
//     //shortcut way 
//     num2 = num2 || 20;
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);

//modern way - default parameter -- useful for fucntion; (ES6)
function add (num1, num2 = 10){
    return num1 + num2;
}
// const total = add(15, 1);
const total = add(15);
console.log(typeof total);