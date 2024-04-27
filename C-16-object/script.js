
// const key = "email";
// const person={
//     name: "kuljeet",
//     age : 20,
//     hobbies : ["guitar","music","sleeping"]

// }

// // person.gender= "male";
// // console.log(person)

// person[key]="kuljeet@gmail.com";
// console.log(person)


//how to iterate object

const person={
    name: "kuljeet",
    age : 20,
    hobbies : ["guitar","music","sleeping"]
}
// for in loop

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}