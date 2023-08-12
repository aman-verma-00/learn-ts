import Student from "./models/student";

//autoinfered
const s1 = new Student('aman',10,'m',20);
// s1.name = 'aman';
// s1.roll = 10;
// s1.gender = 'm';
// s1.marks = 10;


//explicitly infered
const s2 : Student = new Student();

console.log(s1,s2);

const s3 = Student.newInstance('aman',10,'m',20);
s3.marks=1000;