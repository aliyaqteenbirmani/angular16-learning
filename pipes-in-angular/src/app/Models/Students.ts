
export class Student {
    constructor(id:number, name:string, gender:string, dob:Date, course:string, marks:number, fee:number) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.course = course;
        this.fee = fee;
        this.marks = marks;
    }

    id: number;
    name: string;
    gender: string;
    dob: Date;
    course: string;
    marks: number;
    fee: number;
}