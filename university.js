export default class University {
    constructor(name) {
        this.name = name;
        this.idCounter = 1;
        this.totalStudents = [];
        this.colleges = [];
        this.NonTeachingFaculty = [];
    }

    addCollege(collegeName) {
        let college = new College(collegeName);
        this.colleges.push(college);
    }

    addNonTeachingFaculty(name) {
        let nonTeachingFaculty = new NonTeachingFaculty(name);
        this.NonTeachingFaculty.push(nonTeachingFaculty);
        console.log(`${name} is a Non Teaching Faculty at ${this.name}`)
    }

    generateStudentID(name) {
        let studentID = `STU-NO-${this.idCounter}`;
        this.idCounter++;
        let student = new Student(name, studentID);
        this.totalStudents.push(student);
        return student;
    }

    assignCollegeToStudent(student, collegeName) {
        let college = this.colleges.find(c => c.collegeName === collegeName);
        if (college) {
            student.college = college;
            console.log(`${student.studentName} has been assigned to ${collegeName} college with ID ${student.studentID}.`);
        } else {
            console.log(`College ${collegeName} not found.`);
        }
    }

    issueHallTickets() {
        this.totalStudents.forEach(student => {
            let attendancePercentage = (student.attendance / student.totalClasses) * 100;
            if (attendancePercentage >= 75) {
                student.hallTicketIssued = true;
                console.log(`${student.studentName} has been issued a hall ticket.`);
            } else {
                student.hallTicketIssued = false;
                console.log(`${student.studentName} cannot be issued a hall ticket due to low attendance.`);
            }
        });
    }
}