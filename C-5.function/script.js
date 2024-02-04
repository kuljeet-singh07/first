

// function countVowels(str){
//     let count =0;
//     for (const char of str){
//         if(char ==="a" || char=="e" || char =="i" || char==="o" || char ==="u"){
//             count++;
//         }
//     }
//      console.log("count of vowels : ",count);
// }

// countVowels("kuljeetSingh");
// countVowels("ricky");

// const countvow = (str)=>{
//     let count =0;
//     for (const char of str){
//         if(char ==="a" || char=="e" || char =="i" || char==="o" || char ==="u"){
//             count++;
//         }
//     }
//      console.log("count of vowels : ",count);
// }

// countvow("kuljeetSingh");
//  countvow("ricky");


// let number =[ 2,3,4,5,6];

// number.forEach( (num)=>{
//     console.log(num*num)

// })


// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val)=>{
//     return val% 2 ===0;
// });

// console.log(evenArr);

// let arr = [5,6,2,8,9];
// const output = arr.reduce((prev,curr)=>{
//     return prev>curr? prev:curr;
// });

// console.log(output);



let n =prompt("enter any number");
let arr=[];
for(let i=1;i<=n;i++){
   arr[i-1]=i;
}
console.log(arr)

let sum = arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log("sum = ",sum);

let product = arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("factorial = ",product);

