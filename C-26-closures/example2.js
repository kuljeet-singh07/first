function func(){
    let count =0;
    return ()=>{
        if(count <1){
            console.log("Hi you called me ");
            count++;
        }
        else{
            console.log("Mai already ek bar call ho chuka hu")
        }
    }
}

const myFunc = func()
myFunc();
myFunc();
myFunc();