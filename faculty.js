export default class Faculty {
    constructor(name, facultyID) {
        this.facultyName = name;
        this.facultyID = facultyID;
    }
}

class TeachingFaculty extends Faculty {
    constructor(name, facultyID, branch) {
        super(name, facultyID);
        this.branch = branch;
    }

    markAttendance(branch, student) {
        if (branch.students.includes(student)) {
            student.attendance++;
            student.totalClasses++;
            console.log(`${this.facultyName} marked attendance for ${student.studentName}.`);
        } else {
            console.log(`${student.studentName} is not in the ${branch.branchName} branch.`);
        }
    }

    assignAssignment(student, assignment) {
        if (student) {
            student.subjects.push(assignment);
            console.log(`${this.facultyName} has assigned the assignment "${assignment.title}" to ${student.studentName}.`);
        } else {
            console.log(`Student ${student.studentName} is not found.`);
        }
    }

    gradeAssignment(assignment, student, addToInternalAssessment = false) {
        const grade = Math.floor(Math.random() * 101);
        student.marks.push({ assignment: assignment.title, grade });
        console.log(`${this.facultyName} has graded the assignment "${assignment.title}" for ${student.studentName}. Grade: ${grade}`);

        if (addToInternalAssessment) {
            student.marks.push({ assessmentType: 'Internal Assessment', marks: grade });
            console.log(`The grade for the assignment is added to internal assessment for ${student.studentName}.`);
        }
    }
}

class NonTeachingFaculty extends Faculty {
    constructor(name, facultyID, college) {
        super(name, facultyID);
        this.college = college;
    }

    collegeNonTeachingFacultyRole() {
        console.log(`${this.facultyName} is a Non-Teaching Faculty at ${this.college.collegeName} and handles administrative tasks.`);
    }
}