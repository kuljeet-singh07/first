// practice Q-1;

//let mark= [85,97,44,37,76,60];
// let sum=0;
// for(let i=0; i<mark.length;i++){
//     sum=sum+mark[i];
// }
// console.log("the sum of array is : ",sum);

// console.log("average markes is : ",sum/(mark.length));


//practice Q-2;

let item = [250,645,300,900,50];

let i=0;

// for(let val of item ){
//     console.log(val)
//     let offer= val/10;
//     item[i]=item[i]-offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }

for(let i=0; i<item.length;i++){
    let offer = item[i]/10;
    item[i]-=offer;
}
console.log(item)