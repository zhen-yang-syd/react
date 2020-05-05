const print = (name)=>`hello, ${name}`
console.log(print('zhen'))

//destructing
const student = {
    name:"zhen",
    age:26,
    school:"uts"
}
const {name, age, school}=student
console.log(`${name} is ${age} years old, comes from ${school}`)

//class
class student1{
    constructor(name){
        this.name=name;
        this.uni='uts';
    }
    greeting(){
        console.log(`Im ${this.name},and i comes from ${this.uni}`)
    }
}
const zhen = new student1("zhen");
zhen.greeting();