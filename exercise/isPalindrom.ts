let str1:string ="lol"
let str2:string ="lolgf"

function isPalindrom(str:string):boolean{
 let reverseStr:string= str.split('').reverse().join('');
if(reverseStr===str){
    return true
}
else return false
}

console.log(isPalindrom(str1));
console.log(isPalindrom(str2));
