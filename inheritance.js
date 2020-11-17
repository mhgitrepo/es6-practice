class Parent {
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    //you can add function here. but don't need to write "function" title. just put the function name, that's it..
    getFullName(){
        return this.name + " " +  this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
// console.log(baby);
console.log(baby.getFullName());
console.log(baby2);