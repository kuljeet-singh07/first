
// array method 

const numbers = [4,2,5,8];

// const myFunc= (number ,index )=>{
//     console.log(`index is ${index} and number is ${number}`)
// }

// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// } 

// numbers.forEach(myFunc);

numbers.forEach(function(number){
    console.log(`${number} * 2 : ${number*2}`)
})



// const usres =[
//     {firstName :"harshit",age :30},
//     {firstName :"mohit",age :20},
//     {firstName :"nitish",age :10},
// ]

// usres.forEach((user,index)=>{
//     console.log(user.firstName,index,user.age)
// })