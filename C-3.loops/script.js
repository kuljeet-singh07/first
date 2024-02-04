//count sum

// let sum=0;
// for(let i=0; i<=5; i++){
//     sum+=i;
// }
// console.log(sum);


// for - of loop

// let str = 'kuljeetSingh';
// for(let i of str){
//     console.log('i'=i);
// }

//for in loop

// let student = {
//     name : "kuljeet singh ",
//     age: 20,
//     cgpa : 7,
//     isPass:true,
// };

// for(let kye in student){
//     console.log("kye = ",kye,"value =",student[kye]);
// }

// practice Q-1;
// print all even number from 0 to 100;

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
//practice Q-2; 
// let gameNum = 20;
// let userNum= prompt("Guess the game number ");

// while(userNum != gameNum){
//     userNum= prompt(" you enter wrong number . Guess again : ");
// }
// console.log("congratulation , you enter the right number : ");


//practice Q-1;

let fullName = prompt("enter your name");

let userName= ` User name :@ ${fullName} ${fullName.length}`;
console.log(userName);