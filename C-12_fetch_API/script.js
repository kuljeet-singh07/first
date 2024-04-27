const URL = "https://cat-fact.herokuapp.com/facts";
const  para = document.querySelector("#para");
const btn = document.querySelector("#btn");

const getFacts = async ()=>{
    console.log("geting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[1].text);
    para.innerText= data[4].text;
};
btn.addEventListener("click",getFacts);