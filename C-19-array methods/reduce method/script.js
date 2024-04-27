 // reduce method

 const numbers =[1,2,3,4,5];

 const sum = numbers.reduce((prev,current)=>{
      return prev+current;
 } ,100);

 console.log(sum)

 /* 


 prev   , current  ,  return ;
   1         2           3
   3         3           6
   6         4           10
   10        5           15


 */