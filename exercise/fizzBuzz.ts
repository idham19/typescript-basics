const result :(any)[]=[]
function fizzBuzz(numb:number){
 for(let i=1;i<=numb;i++){
  if(i%3==0 && i%5==0){
   result.push("fizzBuzz")
  }
  else if (i%3==0){
   result.push("fizz")
  }
  else if (i%5==0){
  result.push("buzz")
  }
  else result.push(i)
 }
 return result
}
console.log(fizzBuzz(100));
