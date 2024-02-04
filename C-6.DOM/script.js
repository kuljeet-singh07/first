// let firstEL = document.querySelector("p");  // 1st element
// console.dir(firstEL);

// let allEL = document.querySelectorAll("p");  // All element
// console.dir(allEL);

// let class1 = document.querySelector(".myClass");  
// console.dir(class1);

// let classALL = document.querySelectorAll(".myClass"); 
// console.dir(classALL);

// let button = document.querySelector("#myButton");  // 1st element
// console.dir(button);




// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);

//  h2.innerText = h2.innerText + " from CGC"



let divs = document.querySelectorAll(".box");
  let idx =1;
  for(div of divs){
    div.innerText= `new  unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1 ";
// divs[1].innerText = "new unique value 2 ";
// divs[2].innerText = "new unique value 3 ";