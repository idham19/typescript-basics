//object
let person:{name:string;age:number}={
 name:"john",
 age:15
}

console.log(person.name);
console.log(person.age);

person.name="tony";
person.age=35;

console.log(person);

//object with optional properties 
let car :{name:string, year:number,brand?:string}={
    name:"highlander",
    year:2025
}
console.log(car);
car.brand="toyota"

console.log(car);
