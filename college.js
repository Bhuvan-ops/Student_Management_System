export default class College {
    constructor(name) {
        this.collegeName = name;
        this.idCounter = 1;
        this.collegeFaculty = [];
        this.branches = [];
    }

    addBranch(name) {
        let branch = new Branch(name);
        this.branches.push(branch);
    }

    generateFacultyID(name) {
        let facultyID = `PROF-NO-${this.idCounter}`;
        this.idCounter++;
        let collegeFaculty = new TeachingFaculty(name, facultyID, this.branches);
        this.collegeFaculty.push(collegeFaculty);
        return collegeFaculty;
    }

    allocateBranchForStudent(student, branchName) {
        if (student.college && student.college.collegeName === this.collegeName) {
            let branch = this.branches.find(b => b.branchName === branchName);
            if (branch) {
                student.branch = branch;
                branch.addStudent(student);
                console.log(`${student.studentName} has been allocated to the ${branchName} branch at ${this.collegeName}.`);
            } else {
                console.log(`Branch ${branchName} not found in college ${this.collegeName}.`);
            }
        } else {
            console.log(`${student.studentName} is not assigned to this college.`);
        }
    }
}