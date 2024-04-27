
// const person= new Map();
// person.set('firstName','Kuljeet');
// person.set('age',20);
// person.set(1,'one');
// console.log(person);

// console.log(person.get('firstName'));

// console.log(person.keys());

// for(let key of person.keys()){
//    console.log(key);
// }


const person1 = {
    id:1,
    firstName: "harshit"
}

const extraInfo = new Map();
extraInfo.set(person1,{age:20, gender:"male"});
console.log(person1.id);
console.log(extraInfo.get(person1).age)