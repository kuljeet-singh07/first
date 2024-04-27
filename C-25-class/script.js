//class
class CreatUser{
    constructor(firstName,lastName,email,age){
            this.firstName=firstName;
            this.lastName=lastName;
            this.email=email;
            this.age= age;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age>=18;
    }
}

const user1 = new CreatUser("kuljeet","singh","kuljeetsingh@gmail.com" ,"20")
 console.log(user1.about());


 
//function

// function Creatuser (firstName,lastName,email,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age= age;
// }

// Creatuser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// Creatuser.prototype.is18 = function(){
//     return this.age>=18;
// }

// const user1 = new Creatuser("kuljeet","singh","kuljeetsingh@gmail.com" ,"20")
//  console.log(user1.about());
// const about= user1.about();
// console.log(about)