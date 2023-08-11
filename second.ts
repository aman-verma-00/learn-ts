export{};

function perimeterRectangle(length :number, breadth:number=2, height?:number){ 
    // breadth default value of 2
    //height is optional parameter if not provided tereated as undefined
    const p=2 * (length + breadth);
    return p;
}

const p1 = perimeterRectangle(10,20);
console.log(p1);
const p2 = perimeterRectangle(10);  

console.log(p1+p2);
console.log(`p1 : ${p1}\np2 : ${p2}`);//string interpolation of JS


//defining a function that can take variable number of parameters (n)
//REST parameters
function nextGenAdd(...args : any[]):number{
    console.log(args);
    return 1;
}

nextGenAdd();
nextGenAdd(1);
nextGenAdd(1,2,3);
nextGenAdd(1,2,3,4,5,6,7,8,9);

//REST arguments
const stats:[number,number] =[5,4];//tuple
console.log(perimeterRectangle(...stats));//order of tuple should be same as of function parameters

// ... --> spread operator

const c1:string[] = ['c1','c2'];
const c2:string[] = ['c3','c4'];
const c3 = [...c1,...c2];

console.log(c3);