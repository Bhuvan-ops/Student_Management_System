import University from "university.js"
import College from "college.js"
import Faculty from "faculty.js"
import Branch from "branch.js"
import student from "student.js"

// Create University
let university = new University('Visveswaraya Technological University');

// Add College to University
university.addCollege('VVCE');

// Add Non-Teaching Faculty to University
university.addNonTeachingFaculty('Kavitha');
university.addNonTeachingFaculty('Divya');

// Add Non-Teaching Faculty to College
let vvce = university.colleges[0];
let profSannidhi = vvce.generateFacultyID('Prof Sannidhi');
let profMeghana = vvce.generateFacultyID('Prof Meghana');

// Create Students
let bhuvan = university.generateStudentID('Bhuvan');
let chethan = university.generateStudentID('Chethan');
let veena = university.generateStudentID('Veena');
let darshan = university.generateStudentID('Darshan');
let dheeraj = university.generateStudentID('Dheeraj');
let shraddha = university.generateStudentID('Shraddha');
let shreya = university.generateStudentID('Shreya');
let aadhya = university.generateStudentID('Aadhya');
let anagha = university.generateStudentID('Anagha');

// Assign Colleges to Students
university.assignCollegeToStudent(bhuvan, 'VVCE');
university.assignCollegeToStudent(chethan, 'VVCE');
university.assignCollegeToStudent(veena, 'VVCE');
university.assignCollegeToStudent(darshan, 'VVCE');
university.assignCollegeToStudent(dheeraj, 'VVCE');
university.assignCollegeToStudent(shraddha, 'VVCE');
university.assignCollegeToStudent(shreya, 'VVCE');
university.assignCollegeToStudent(aadhya, 'VVCE');
university.assignCollegeToStudent(anagha, 'VVCE');

// Create Branches and Assign to Students
let ece = new Branch('ECE');
let bba = new Branch('BBA');
let bcom = new Branch('BCOM');

vvce.addBranch('ECE');
vvce.addBranch('BBA');
vvce.addBranch('BCOM');

// Assign Students to Branches
vvce.allocateBranchForStudent(bhuvan, 'ECE');
vvce.allocateBranchForStudent(chethan, 'BBA');
vvce.allocateBranchForStudent(veena, 'BCOM');
vvce.allocateBranchForStudent(darshan, 'ECE');
vvce.allocateBranchForStudent(dheeraj, 'ECE');
vvce.allocateBranchForStudent(shraddha, 'BBA');
vvce.allocateBranchForStudent(shreya, 'BBA');
vvce.allocateBranchForStudent(aadhya, 'BCOM');
vvce.allocateBranchForStudent(anagha, 'BCOM');

// Assign Subjects to Branches
ece.assignSubjectToStudent(bhuvan, 'Power Electronics');
ece.assignSubjectToStudent(bhuvan, 'DSD');
ece.assignSubjectToStudent(bhuvan, 'VERILOG');

ece.assignSubjectToStudent(darshan, 'Power Electronics');
ece.assignSubjectToStudent(darshan, 'DSD');
ece.assignSubjectToStudent(darshan, 'VERILOG');

ece.assignSubjectToStudent(dheeraj, 'Power Electronics');
ece.assignSubjectToStudent(dheeraj, 'DSD');
ece.assignSubjectToStudent(dheeraj, 'VERILOG');

bba.assignSubjectToStudent(chethan, 'SOCIAL SCIENCE');
bba.assignSubjectToStudent(chethan, 'BUSINESS STUDIES');
bba.assignSubjectToStudent(chethan, 'ACCOUNTANCY');

bba.assignSubjectToStudent(shraddha, 'SOCIAL SCIENCE');
bba.assignSubjectToStudent(shraddha, 'BUSINESS STUDIES');
bba.assignSubjectToStudent(shraddha, 'ACCOUNTANCY');

bba.assignSubjectToStudent(shreya, 'SOCIAL SCIENCE');
bba.assignSubjectToStudent(shreya, 'BUSINESS STUDIES');
bba.assignSubjectToStudent(shreya, 'ACCOUNTANCY');

bcom.assignSubjectToStudent(veena, 'STATISTICS');
bcom.assignSubjectToStudent(veena, 'BUSINESS STUDIES');
bcom.assignSubjectToStudent(veena, 'ECONOMICS');

bcom.assignSubjectToStudent(aadhya, 'STATISTICS');
bcom.assignSubjectToStudent(aadhya, 'BUSINESS STUDIES');
bcom.assignSubjectToStudent(aadhya, 'ECONOMICS');

bcom.assignSubjectToStudent(anagha, 'STATISTICS');
bcom.assignSubjectToStudent(anagha, 'BUSINESS STUDIES');
bcom.assignSubjectToStudent(anagha, 'ECONOMICS');

// Add Teaching Faculty to College
let profKarthik = vvce.generateFacultyID('Prof Karthik K');
let profHemaraj = vvce.generateFacultyID('Prof Hemaraj');
let profVineeth = vvce.generateFacultyID('Prof Vineeth');

// Mark Attendance for Students
profKarthik.markAttendance(ece, bhuvan);
profKarthik.markAttendance(ece, bhuvan);
profKarthik.markAttendance(ece, bhuvan);
profKarthik.markAttendance(ece, darshan);
profKarthik.markAttendance(ece, darshan);
profKarthik.markAttendance(ece, dheeraj);
profHemaraj.markAttendance(bba, chethan);
profHemaraj.markAttendance(bba, chethan);
profHemaraj.markAttendance(bba, shraddha);
profHemaraj.markAttendance(bba, shraddha);
profHemaraj.markAttendance(bba, shreya);
profVineeth.markAttendance(bcom, veena);
profVineeth.markAttendance(bcom, veena);
profVineeth.markAttendance(bcom, veena);
profVineeth.markAttendance(bcom, aadhya);
profVineeth.markAttendance(bcom, aadhya);
profVineeth.markAttendance(bcom, anagha);

// Submit Assignments
let bhuvanAssignment = { title: 'Power Electronics Assignment', fileExtension: '.jpeg' }; // Invalid format
let chethanAssignment = { title: 'Social Science Assignment', fileExtension: '.pdf' }; // Valid
let veenaAssignment = { title: 'Economics Assignment', fileExtension: '.ppt' }; // Valid
let darshanAssignment = { title: 'VERILOG Assignment', fileExtension: '.pdf' }; // Valid
let dheerajAssignment = { title: 'DSD Assignment', fileExtension: '.docx' }; // Valid
let shraddhaAssignment = { title: 'Accountancy Assignment', fileExtension: '.txt' }; // Valid
let shreyaAssignment = { title: 'Business Studies Assignment', fileExtension: '.pdf' }; // Valid
let aadhyaAssignment = { title: 'Economics Assignment', fileExtension: '.pdf' }; // Valid
let anaghaAssignment = { title: 'Statistics Assignment', fileExtension: '.jpg' }; // Invalid format

bhuvan.submitAssignment(bhuvanAssignment, profKarthik); // Invalid format
chethan.submitAssignment(chethanAssignment, profHemaraj); // Valid
veena.submitAssignment(veenaAssignment, profVineeth); // Valid
darshan.submitAssignment(darshanAssignment, profKarthik); // Valid
dheeraj.submitAssignment(dheerajAssignment, profKarthik); // Valid
shraddha.submitAssignment(shraddhaAssignment, profHemaraj); // Valid
shreya.submitAssignment(shreyaAssignment, profHemaraj); // Valid
aadhya.submitAssignment(aadhyaAssignment, profVineeth); // Valid
anagha.submitAssignment(anaghaAssignment, profVineeth); // Invalid format

// Issue Hall Tickets based on Attendance
university.issueHallTickets();

// Branch Attendance and Report
ece.calculateAttendance();
bba.calculateAttendance();
bcom.calculateAttendance();

// Get Top Scorers in Branches
ece.getTopScorers();
bba.getTopScorers();
bcom.getTopScorers();