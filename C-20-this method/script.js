
//ex1
// const person ={
//     firstName : "kuljeet",
//     age: 20,
//     about: function(){
//         console.log(`person name is ${this.firstName}and age is${this.age} `)
//     }
// }

// person.about();


//ex2

 function personInfo(){
    console.log(`person name is ${this.firstName}and age is ${this.age} `)
}

const person1 ={
    firstName : "kuljeet",
    age: 20,
    about: personInfo
    
}
const person2 ={
    firstName : "rickye",
    age: 19,
    about: personInfo
    
}
const person3 ={
    firstName : "raju",
    age: 200,
    about: personInfo
    
}

person1.about();
person2.about();




