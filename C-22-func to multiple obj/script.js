

// const user1 = {
//     firstName : "kuljeet",
//     lastName: "singh",
//     email: "kuljeetsingh@gmail.com",
//     age : 20,
//     about : function (){
//         return `${this.firstName} is ${this.age} year old`
//     },
//     is18: function (){
//         return this.age>=18;
//     }
// }

// const age = user1.is18();
// console.log(age)

// const user = user1.about();
// console.log(user)




const userMethod = {
    about: function(){
        return `${this.firstName} is ${this.age} year old`
    },

    is18 : function(){
        return this.age>=18;
    }
}
function creatUser( firstName, lastName, email,age){
    const user = Object.create(userMethod);
    user.firstName=firstName;
    user.lastName= lastName;
    user.email=email;
    user.age= age;
    // user.about= function(){
    //     return `${this.firstName} is ${this.age} year old`
    // },
    // user.is18= function(){
    //     return this.age>=18;
    // }
    // user.about=userMethod.about;
    // user.is18=userMethod.is18;
    return user;
}

// const user1 =creatUser("kuljeet" ,"singh" ,"kuljeetsingh@gmail.com","0")
// console.log(user1)

// const about = user1.about();
// console.log(about)

// const is18=user1.is18();
// console.log(is18)

// console.log(user1.age)

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