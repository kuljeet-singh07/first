//****** select element using get element by id ********

/* const mainHeading = document.getElementById("main-heading");
console.log(mainHeading) */

//*************select element using query selector *********


/*  const  mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);  */



//*******change text ,textContent and innerText**********


 /* const mainHeading = document.querySelector("#main-heading");
 console.log(mainHeading.textContent);
  mainHeading.textContent= "change text ";
  console.log(mainHeading.textContent) */



  // *******change the style of  element *********
   
 /*  const mainHeading = document.querySelector("#main-heading");
  mainHeading.style.backgroundColor = "blue" */


  //*******  get and set attrubutes ************

  /*const link = document.querySelector("a");
  console.log(link.getAttribute("href"));
  link.setAttribute("href","https://www.google.co.in/")
  console.log(link.getAttribute("href"))

const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"))*/


//******** loop ***********

const navItems = document.getElementsByTagName("a"); // HTMLCollection
console.log(navItems);
//we cant use forEach method to iterate through HTMLCollection
//simple for loop 
//for of loop
//forEach 

 /*for(let i=0; i<navItems.length;i++){
    console.log(navItems[i])
    const navItem= navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color= "green";

} */

// **** for of loop ***

for(let navItem of navItems){
    navItem.style.backgroundColor= "#fff";
    navItem.style.color = "green";
    
}

