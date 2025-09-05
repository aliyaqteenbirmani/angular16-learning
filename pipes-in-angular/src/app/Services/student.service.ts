import { Student } from "../Models/Students";

export class StudentService {
    students: Student[] = [
        new Student(1, "John Doe", "Male", new Date("2000-01-01"), "Computer Science", 85, 1500),
        new Student(2, "Jane Smith", "Female", new Date("2001-02-02"), "Information Technology", 90, 1600),
        new Student(3, "Alice Johnson", "Female", new Date("2002-03-03"), "Mathematics", 95, 1700),
        new Student(4, "Bob Brown", "Male", new Date("2003-04-04"), "Physics", 80, 1400),
        new Student(5, "Charlie Davis", "Male", new Date("2004-05-05"), "Chemistry", 88, 1550),
        new Student(6, "David Wilson", "Male", new Date("2005-06-06"), "Biology", 92, 1650),
        new Student(7, "Emma Thompson", "Female", new Date("2006-07-07"), "English Literature", 89, 1580),
        new Student(8, "Frank Miller", "Male", new Date("2007-08-08"), "History", 91, 1620),
        new Student(9, "Grace Lee", "Female", new Date("2008-09-09"), "Art History", 87, 1560),
        new Student(10, "Henry Adams", "Male", new Date("2009-10-10"), "Philosophy", 93, 1680)
    ];

    totalMarks: number = 600;

    CreateStudent(name:string, gender:string, dob:Date, course:string, marks:number, fee:number)
    {
        let id = this.students.length + 1;
        let newStudent = new Student(id, name, gender, dob, course, marks, fee);
        this.students.push(newStudent);

        // let studentCopy = [...this.students];
        // studentCopy.push(newStudent);
        // this.students = studentCopy;
    }

    filterStudentsByGender(filterBy:string)
    {
        if(filterBy.toLowerCase() === 'all' || filterBy === '' || this.students.length === 0)
        {
            return this.students;
        }
        else
        {
            return this.students.filter((std) => {
                return std.gender.toLowerCase() === filterBy.toLowerCase();
            });
        }
    }


    // addStudent(student: Student) {
    //     this.students.push(student);
    // }

    // getStudents() {
    //     return this.students;
    // }
}