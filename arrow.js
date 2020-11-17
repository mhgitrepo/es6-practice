//Function Declaration
// function doubleIt(numder){
//     return numder*2;
// }
//Function Expression
// const doubleIt = function(num){
//     return num * 2;
// }
// const doubleIt = function myNum (num){
//     return num * 2;
// }
// const sum = function (num1, num2){
//     return num1 + num2;
// }
// function empty(){
//     return 10;
// }
// function doMath (x ,y){
//     const sum = x + y;
//     const diff = x - y;
//     const result = sum * diff;
//     return result;
// }
//ES6 Version => arrow function;
// const doubleIt = num => num * 2;//(ES6)//SIngle Parameter
// const sum = (num1, num2) => num1 + num2;//multiple input parameter;//(ES6)
// const result = doubleIt(50);
// const resultSum = sum(50,40);
// const empty = () => 10;
// const resultEmpty = empty();
// const resultEmpty = empty();//Empty Parameter//(ES6)
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}//large function
const resultDoMath = doMath(25, 15);
console.log(resultDoMath);
