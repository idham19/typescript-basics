//calculator function returnin number:
function calculator(num1:number,num2:number,num3?:number):number{
    return num1+num2+(num3||0)
} 
console.log(calculator(1,2,10));
 
//void function
function printFunction(name:string,age:number):void{
 console.log(`My name is ${name} and I'm ${age} years old`);
}
printFunction("juba",98)

function returnString(name:string,age:number){
 return `My name is ${name} and I'm ${age} years old`
}

console.log(returnString("tulsa",65));
