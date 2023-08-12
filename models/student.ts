export default class Student {
    static count=0;
    //object attributes
    name :string = '';
    roll :number = 0;
    gender:string = 'm';
    private _marks:number = 0; //soft private --> can accessible in js file
    #_marks:number =0; //hard private
    constructor(name?:string,roll:number=0,gender:string='',marks:number=0){
        //either provide guard or make it default value
        this.name = name!=undefined?name:'';
        this.gender = gender;
        this.roll = roll;
        this.marks = marks;
    }
    static newInstance(name:string,roll:number,gender:string,marks:number):Student{
        return new Student(name, roll, gender, marks);
    }
    //getter and setters
    set marks(m:number){
        if(m<0 || m>100){
            console.log("Error in assigning marks");
        }
        else{
            this._marks=m;
        }
    }
    get marks():number{
        return this._marks;
    }
}