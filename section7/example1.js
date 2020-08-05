let person1 ={
    name: "p1"
}
let person2 ={
    name: "p2"
}
function namer() {
    return this.name;
}

console.log(person1.name); //p1
console.log(person2.name); //p2
console.log(namer()); //empty
console.log(namer.bind(person1)()); //giving context using bind -> p1
let person2namer = namer.bind(person2);
console.log(person2namer()); //using variable -> p2