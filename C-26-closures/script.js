
// function myfunction(power){
//     return function(number){
//         return `${number} is ${number ** power}`
//     }
// }

// const spuare = myfunction(2);
// const ans = spuare(8);
// console.log(` spuare of ${ans}`);

// const cube = myfunction(3);
// const ans2 = cube(2);
// console.log(` cube of ${ans2}`);


// by using arrow function 


const myfunction =(power) => (number) =>`${number} is ${number ** power}`


const spuare = myfunction(2);
const ans = spuare(2);
console.log(` spuare of ${ans}`);

const cube = myfunction(3);
const ans2 = cube(2);
console.log(` cube of ${ans2}`);

