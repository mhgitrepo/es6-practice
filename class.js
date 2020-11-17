//empty class
// class student{
    
// }
// const student1 = new student()
// const student2 = new student()


//property parameter, value set in the class function
class ElonMusk{
    constructor(cName, tCompany, designation){
        this.companyName = cName;
        this.totalCompany = tCompany;
        this.companyDesignation = designation;
        this.title = "Engineer, Programmer, Scientist"
    }
}

const company1 = new ElonMusk("Tesla", 5, "CEO");
const company2 = new ElonMusk("SpaceX", 5, "CEO");
// console.log(company1, company2);
// Property Access
console.log(company1, company2.title);