
class Animal{
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
    eat(){
        return`${this.name} is eating`
    }
    iscute(){
        return this.age<=1;
    }
}


class Dog extends Animal{
    constructor(name,age ,speed){
        super(name,age);
        this.speed=speed;
    }
isolde(){
    return this.age>=30;
}
Dogspeed(){
    return `${this.name} speed is ${this.speed} kmph
    `
}
}
const tom  =new Dog("tom",30,200)
console.log(tom)
console.log(tom.eat());
console.log(tom.iscute())
console.log(tom.isolde())
console.log(tom.Dogspeed())