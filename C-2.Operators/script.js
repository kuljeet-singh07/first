//Artimetic Operators
let a=5;
let b = 2;
let c= a+b;
console.log(a,"+",b,"=",a+b);
console.log(a,"%",b,"=",a%b);
console.log(a,"**",b,"=",a**b);//a^b : 5^2=25

//odd or  even 

let num =11;
 if( num % 2 === 0){
    console.log(num," is even");
 }
 else{
    console.log(num ,"is odd ");
 }


// Ternary Operators

let age = 2;

let result = age >= 18 ? "adult ":"not adult";
console.log(result);

// alert("hello!");//one time popup 

//  let name = prompt(" enter name ");
//  console.log(name);

// let number = prompt("enter no ");
//  if(number%5===0){
//     console.log(number, "is a multiple of 5 ")
//  }
//  else{
//     console.log(number ,"is not a multiple of 5")
//  }

let number = prompt("enter your score ");
if(number >=90 && number<=100){
    console.log("youre grade is A");
}
else if(number>=70 && number<=89){
    console.log("youre grade is B");
}
else if(number>=60 && number<=69){
    console.log("youre grade is C");
}
else if(number>=50 && number<=59){
    console.log("youre grade is D");
}
else if(number>=0 && number<=49){
    console.log("youre grade is F");
}


