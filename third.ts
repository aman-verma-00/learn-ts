export{};

// const name = 'aman';
// const gender = 'm';
const roll = 10;
const marks = 90;


//custom data type that describes the structure that need to be followed by every object
type Student = {
    name: string,
    // name : 10 //name can only get value 10 in student type objects
    gender: string
}
//objects

const s1:Student = {
    name : 'aman',
    gender : 'm'
};
const s2:Student = {
    name : 'ashish',
    gender : 'm'
};
const s3:Student = {
    name : 'ashish',
    gender : 'm',
//    roll : 10  // will give error because of not same type of student
};

//object destructuring
const{name,gender} = s1;

console.log(s1,s2);