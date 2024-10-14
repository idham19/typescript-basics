interface Person{
 name:string,
 age:number,
 address?:string
}

const tom:Person={
name:"tom",
age:33
}

const julia:Person={
    name:"Julia",
    age:23,
    address:"lansdal,Pa"
}

console.log(julia);
console.log(tom);
