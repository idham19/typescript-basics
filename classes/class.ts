class Animals{
    name:string;
    age:number;
    color?:string

    constructor(name:string,age:number,color?:string) {
        this.name=name;
        this.age=age;
        this.color=color
    }

    sound(){
      console.log(`this animal ${this.name} which is ${this.age} years old is making this sound wooo`);
      
    }
    
}
const cat = new Animals("catkaty",2)
const dog= new Animals("doggy",3,"white")

console.log(cat);
console.log(dog);

