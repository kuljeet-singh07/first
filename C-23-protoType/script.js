

// const userMethod = {
//     about: function(){
//         return `${this.firstName} is ${this.age} year old`
//     },

//     is18 : function(){
//         return this.age>=18;
//     }
// }

function creatUser( firstName, lastName, email,age){
    const user = Object.create(creatUser.prototype);
    user.firstName=firstName;
    user.lastName= lastName;
    user.email=email;
    user.age= age;
  
    return user;
}

creatUser.prototype.about= function(){
             return `${this.firstName} is ${this.age} year old`
 }

 creatUser.prototype.is18=function(){
             return this.age>=18;
       }


         


const user1 =creatUser("kuljeet" ,"singh" ,"kuljeetsingh@gmail.com","20")
const user2 =creatUser("ricky" ,"singh" ,"kuljeetsingh@gmail.com","10")
const user3 =creatUser("raj" ,"singh" ,"kuljeetsingh@gmail.com","9")
const about1  = user1.about();
console.log(about1);
console.log(user1.is18())

const about2  = user2.about();
console.log(about2);

const about3  = user3.about();
console.log(about3);