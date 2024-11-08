export default class Branch {
    constructor(name) {
        this.branchName = name;
        this.students = [];
        this.totalClassesHeld = 0;
        this.subjects = [];
    }

    viewStudents() {
        return this.students;
    }

    assignSubjectToStudent(student, subject) {
        if (this.students.includes(student)) {
            student.subjects.push(subject);
            console.log(`${subject} has been assigned to ${student.studentName}.`);
        }
    }

    addStudent(student) {
        this.students.push(student);
        console.log(`${student.studentName} has been added to the ${this.branchName} branch.`);
    }

    calculateAttendance() {
        this.students.forEach(student => {
            let attendancePercentage = (student.attendance / student.totalClasses) * 100;
            console.log(`${student.studentName}'s Attendance: ${attendancePercentage.toFixed(2)}%`);
        });
    }

    sendMonthlyReport() {
        this.students.forEach(student => {
            const attendancePercentage = (student.attendance / student.totalClasses) * 100;
            console.log(`${student.studentName}'s Attendance for this month: ${attendancePercentage.toFixed(2)}%`);
            console.log(`${student.studentName}'s Internal Marks: ${JSON.stringify(student.marks)}`);
        });
    }    

    getTopScorers() {
        let studentsWithMarks = this.students.map(student => {
            let totalMarks = 0;
            student.marks.forEach(mark => totalMarks += mark.grade);
            return { name: student.studentName, marks: totalMarks };
        });
        studentsWithMarks.sort((a, b) => b.marks - a.marks);
        let topStudents = studentsWithMarks.slice(0, 3);
        console.log("Top 3 Scorers in " + this.branchName + " branch:");
        topStudents.forEach((student, index) => {
            console.log(`${index + 1}. ${student.name} - Total Marks: ${student.marks}`);
        });
    }
}