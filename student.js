export default class Student {
    constructor(name, studentID) {
        this.studentName = name;
        this.studentID = studentID;
        this.branch = null;
        this.attendance = 0;
        this.subjects = [];
        this.marks = [];
        this.college = null;
        this.totalClasses = 0;
        this.hallTicketIssued = false;
    }

    viewAttendance() {
        return this.attendance;
    }

    viewMarks() {
        return this.marks;
    }

    submitAssignment(assignment, teachingFaculty) {
        const validFormats = ['.txt', '.docx', '.ppt', '.pdf'];
        if (validFormats.includes(assignment.fileExtension)) {
            console.log(`${this.studentName} has submitted the assignment to ${teachingFaculty.facultyName}.`);
            teachingFaculty.gradeAssignment(assignment, this);
        } else {
            console.log("Invalid file format for assignment.");
        }
    }
}