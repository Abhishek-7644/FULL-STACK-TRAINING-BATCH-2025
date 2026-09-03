// ========================================
// STUDENT ARRAY
// ========================================

let students = [];


// ========================================
// ADD STUDENT BUTTON
// ========================================

document
    .getElementById("addStudent")
    .addEventListener("click", addStudent);


// ========================================
// ADD STUDENT
// ========================================

function addStudent() {

    let name =
        document
            .getElementById("studentName")
            .value
            .trim();


    let mark1 =
        Number(document.getElementById("subject1").value);

    let mark2 =
        Number(document.getElementById("subject2").value);

    let mark3 =
        Number(document.getElementById("subject3").value);

    let mark4 =
        Number(document.getElementById("subject4").value);

    let mark5 =
        Number(document.getElementById("subject5").value);


    // ====================================
    // NAME VALIDATION
    // ====================================

    if (name === "") {

        alert("Please enter student name");

        return;

    }


    // ====================================
    // MARKS VALIDATION
    // 0 TO 100 ONLY
    // ====================================

    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ||
        mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100
    ) {

        alert("Marks must be between 0 and 100");

        return;

    }


    // ====================================
    // CREATE STUDENT OBJECT
    // ====================================

    let student = {

        name: name,

        marks: [
            mark1,
            mark2,
            mark3,
            mark4,
            mark5
        ]

    };


    // ====================================
    // ADD STUDENT TO ARRAY
    // ====================================

    students.push(student);


    console.log("Student Added:");

    console.log(student);


    // ====================================
    // CLEAR INPUT
    // ====================================

    document.getElementById("studentName").value = "";

    document.getElementById("subject1").value = "";

    document.getElementById("subject2").value = "";

    document.getElementById("subject3").value = "";

    document.getElementById("subject4").value = "";

    document.getElementById("subject5").value = "";


    // ====================================
    // DISPLAY ALL STUDENTS AGAIN
    // ====================================

    showResult();

}


// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    if (students.length === 0) {

        return;

    }


    // ====================================
    // CREATE RESULT ARRAY
    // ====================================

    let result = students.map((student) => {


        // TOTAL

        let total =
            student.marks.reduce(
                (sum, mark) => {

                    return sum + mark;

                },
                0
            );


        // AVERAGE

        let average =
            total / student.marks.length;


        // GRADE

        let grade;


        if (average >= 90) {

            grade = "A";

        }
        else if (average >= 80) {

            grade = "B";

        }
        else if (average >= 70) {

            grade = "C";

        }
        else if (average >= 50) {

            grade = "D";

        }
        else {

            grade = "Fail";

        }


        return {

            name: student.name,

            marks: student.marks,

            total: total,

            average: average,

            grade: grade

        };

    });


    // ====================================
    // DISPLAY ALL STUDENTS
    // ====================================

    let studentResult =
        document.getElementById(
            "studentResult"
        );


    // Purana display clear karo
    studentResult.innerHTML = "";


    // Phir saare students display karo
    result.forEach((student) => {

        studentResult.innerHTML += `

            <div>

                <h3>
                    Student: ${student.name}
                </h3>

                <p>
                    Marks:
                    ${student.marks.join(", ")}
                </p>

                <p>
                    Total:
                    ${student.total}
                </p>

                <p>
                    Average:
                    ${student.average}
                </p>

                <p>
                    Grade:
                    ${student.grade}
                </p>

                <hr>

            </div>

        `;

    });


    // ====================================
    // CONSOLE RESULT
    // ====================================

    console.log(
        "========== ALL STUDENTS =========="
    );

    console.table(result);


    // ====================================
    // ALL STUDENTS PASSED
    // ====================================

    let allPassed =
        result.every((student) => {

            return student.average >= 50;

        });


    document.getElementById(
        "allPassed"
    ).innerText = allPassed;


    console.log(
        "All Students Passed:",
        allPassed
    );


    // ====================================
    // HIGHEST
    // ====================================

    let highest = result[0];


    result.forEach((student) => {

        if (student.total > highest.total) {

            highest = student;

        }

    });


    document.getElementById(
        "highest"
    ).innerHTML = `

        Name: ${highest.name}<br>

        Total: ${highest.total}<br>

        Average: ${highest.average}<br>

        Grade: ${highest.grade}

    `;


    console.log(
        "Highest Student:",
        highest
    );


    // ====================================
    // LOWEST
    // ====================================

    let lowest = result[0];


    result.forEach((student) => {

        if (student.total < lowest.total) {

            lowest = student;

        }

    });


    document.getElementById(
        "lowest"
    ).innerHTML = `

        Name: ${lowest.name}<br>

        Total: ${lowest.total}<br>

        Average: ${lowest.average}<br>

        Grade: ${lowest.grade}

    `;


    console.log(
        "Lowest Student:",
        lowest
    );


    // ====================================
    // OVERALL AVERAGE
    // ====================================

    let totalMarks =
        result.reduce(
            (sum, student) => {

                return sum + student.total;

            },
            0
        );


    let overallAverage =
        totalMarks / result.length;


    document.getElementById(
        "overallAverage"
    ).innerText =
        overallAverage;


    console.log(
        "Overall Average:",
        overallAverage
    );


    // ====================================
    // GRADE COUNT
    // ====================================

    let gradeCount = {

        A: 0,

        B: 0,

        C: 0,

        D: 0,

        Fail: 0

    };


    result.forEach((student) => {

        gradeCount[student.grade]++;

    });


    document.getElementById(
        "gradeCount"
    ).innerHTML = `

        A: ${gradeCount.A} Student<br>

        B: ${gradeCount.B} Student<br>

        C: ${gradeCount.C} Student<br>

        D: ${gradeCount.D} Student<br>

        Fail: ${gradeCount.Fail} Student

    `;


    console.log(
        "Grade Count:",
        gradeCount
    );

}


// ========================================
// SEARCH BUTTON
// ========================================

document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        searchStudent
    );


// ========================================
// SEARCH STUDENT
// ========================================

function searchStudent() {

    let searchName =
        document
            .getElementById("searchName")
            .value
            .trim();


    let searchResult =
        document.getElementById(
            "searchResult"
        );


    if (searchName === "") {

        searchResult.innerText =
            "Please enter student name";

        console.log(
            "Please enter student name"
        );

        return;

    }


    // ====================================
    // RESULT ARRAY
    // ====================================

    let result = students.map((student) => {


        let total =
            student.marks.reduce(
                (sum, mark) => {

                    return sum + mark;

                },
                0
            );


        let average =
            total / student.marks.length;


        let grade;


        if (average >= 90) {

            grade = "A";

        }
        else if (average >= 80) {

            grade = "B";

        }
        else if (average >= 70) {

            grade = "C";

        }
        else if (average >= 50) {

            grade = "D";

        }
        else {

            grade = "Fail";

        }


        return {

            name: student.name,

            marks: student.marks,

            total: total,

            average: average,

            grade: grade

        };

    });


    // ====================================
    // FIND
    // ====================================

    let student =
        result.find((student) => {

            return student.name
                .toLowerCase() ===
                searchName.toLowerCase();

        });


    // ====================================
    // FOUND
    // ====================================

    if (student) {

        searchResult.innerHTML = `

            <h3>
                Student Found
            </h3>

            Name:
            ${student.name}

            <br>

            Marks:
            ${student.marks.join(", ")}

            <br>

            Total:
            ${student.total}

            <br>

            Average:
            ${student.average}

            <br>

            Grade:
            ${student.grade}

        `;


        console.log(
            "========== SEARCH RESULT =========="
        );

        console.log(
            "Name:",
            student.name
        );

        console.log(
            "Marks:",
            student.marks
        );

        console.log(
            "Total:",
            student.total
        );

        console.log(
            "Average:",
            student.average
        );

        console.log(
            "Grade:",
            student.grade
        );

    }

    else {

        searchResult.innerText =
            "Student Not Found";


        console.log(
            "Student Not Found"
        );

    }

}