// string array 
let stringArray:string []=["ab","cd"]
stringArray.push("ef")
console.log(stringArray);
stringArray.pop()
console.log(stringArray);
stringArray.shift()
console.log(stringArray);

//Array of numbers
let arrayNumber:number[]=[1,2,3,4] 
console.log(arrayNumber);

//Array of Boolean 
let arrayBoolean :boolean[]=[true,false,true]
arrayBoolean[0]=false
console.log(arrayBoolean);

//Array tuple mixed :
let arrayMixed :[string,number,boolean]=["hello",12,true]
console.log(arrayMixed);

//Array Any:
let arrayAny :any[]=["yes","No",1,2,3,true ,false] 
console.log(arrayAny);

// Array with read only: 
let arrayReadOnly : readonly number[]=[1,2,3,45,6]
console.log(arrayReadOnly);

