
function about (hobby , favMusician){
    console.log(this.firstName,this.age ,hobby,favMusician)
}
const user1 ={
    firstName: "kuljeet",
    age: 20,
    // about : function(){
    //     console.log(this.firstName,this.age)
    // }
}

const user2 ={
    firstName: "ricky",
    age: 20,
    
}

const user3 ={
    firstName: "raju",
    age: 20,
    
}


// call
// user1.about.call(user3);
about.call(user2,"guitar","moazrt")

// apply

about.apply(user3,["guitar","bach"])

// bind

const func = about.bind(user1,"guitar","bach")
func();