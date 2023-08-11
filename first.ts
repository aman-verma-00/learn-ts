export{};

// variables - data
//automatically infer the data type of this variable based on value that u assign(string)
let name = 'aman'; // scope will be block scopeed. --> JS
const newname = 'constant'; //cannot reassign this variable
//name = 5 //will give also error

//explicitly give data type

let message: string ='good morning';

//message = 1; //will give error because of explicitly string type

message = 'Hello world';

let age : number = 35;
let bool : boolean;
bool = true; // can initialize later also 

console.log(name);


//arrays
const marks = [10, 10, 5, 6]; //automativ inference number[]
//marks = [2,4,5]; //cannot assign to const
marks[6]=5;
const cars : string[] = [];

cars.push('car1');
cars.push('car2');
//cars.push(5); // will give error because inferd as string and work if infered as any


console.log(marks);
console.log(cars);

//tuple --> to store hetrogenous type of data in arrays
const tupleData : [string,number,string,number] = ['a',1,'b',2];
//destructuring or arrays and tuple
const[a,b,c,d]=tupleData;
