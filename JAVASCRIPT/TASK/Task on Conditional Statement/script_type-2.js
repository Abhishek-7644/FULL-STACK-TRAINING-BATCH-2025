// ========================================
// STUDENT ARRAY
// ========================================

let students = [

    {
        name: "Rahul",
        marks: [85, 90, 78, 92, 88]
    },

    {
        name: "Aman",
        marks: [75, 80, 72, 68, 78]
    },

    {
        name: "Priya",
        marks: [95, 92, 90, 96, 94]
    },

    {
        name: "Neha",
        marks: [55, 62, 58, 60, 65]
    },

    {
        name: "Rohit",
        marks: [40, 45, 38, 42, 48]
    }

];


// ========================================
// RESULT ARRAY
// ========================================

let result = students.map((student) => {

    // Total
    let total = student.marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);


    // Average
    let average = total / student.marks.length;


    // Grade
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


// ========================================
// 1. STUDENT RESULT
// ========================================

console.log("========== STUDENT RESULT ==========");

console.table(result);


let studentResult = document.getElementById("studentResult");

result.forEach((student) => {

    studentResult.innerHTML += `
    
        <div>

            <h3>${student.name}</h3>

            <p>
                <b>Marks:</b>
                ${student.marks.join(", ")}
            </p>

            <p>
                <b>Total:</b>
                ${student.total}
            </p>

            <p>
                <b>Average:</b>
                ${student.average}
            </p>

            <p>
                <b>Grade:</b>
                ${student.grade}
            </p>

        </div>

        <hr>

    `;

});


// ========================================
// 2. ALL STUDENTS PASSED
// ========================================

let allPassed = result.every((student) => {

    return student.average >= 50;

});


console.log("========== ALL STUDENTS PASSED ==========");

console.log(allPassed);


document.getElementById("allPassed").innerText =
    allPassed;


// ========================================
// 3. HIGHEST SCORE
// ========================================

let highest = result[0];

result.forEach((student) => {

    if (student.total > highest.total) {

        highest = student;

    }

});


console.log("========== HIGHEST SCORE ==========");

console.log(highest);


document.getElementById("highest").innerHTML = `

    <p><b>Name:</b> ${highest.name}</p>

    <p><b>Total:</b> ${highest.total}</p>

    <p><b>Average:</b> ${highest.average}</p>

    <p><b>Grade:</b> ${highest.grade}</p>

`;


// ========================================
// 4. LOWEST SCORE
// ========================================

let lowest = result[0];

result.forEach((student) => {

    if (student.total < lowest.total) {

        lowest = student;

    }

});


console.log("========== LOWEST SCORE ==========");

console.log(lowest);


document.getElementById("lowest").innerHTML = `

    <p><b>Name:</b> ${lowest.name}</p>

    <p><b>Total:</b> ${lowest.total}</p>

    <p><b>Average:</b> ${lowest.average}</p>

    <p><b>Grade:</b> ${lowest.grade}</p>

`;


// ========================================
// 5. OVERALL AVERAGE
// ========================================

let totalMarks = result.reduce((sum, student) => {

    return sum + student.total;

}, 0);


let overallAverage = totalMarks / result.length;


console.log("========== OVERALL AVERAGE ==========");

console.log(overallAverage);


document.getElementById("overallAverage").innerText =
    overallAverage;


// ========================================
// 6. GRADE COUNT
// ========================================

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


console.log("========== GRADE COUNT ==========");

console.log(gradeCount);


document.getElementById("gradeCount").innerHTML = `

    <p>A Grade: ${gradeCount.A} Student</p>

    <p>B Grade: ${gradeCount.B} Student</p>

    <p>C Grade: ${gradeCount.C} Student</p>

    <p>D Grade: ${gradeCount.D} Student</p>

    <p>Fail: ${gradeCount.Fail} Student</p>

`;


// ========================================
// 7. SEARCH STUDENT
// ========================================

document.getElementById("searchBtn").addEventListener("click", searchStudent);


function searchStudent() {

    let searchName =
        document.getElementById("searchName").value.trim();


    let searchResult =
        document.getElementById("searchResult");


    // Empty input
    if (searchName === "") {

        searchResult.innerHTML =
            "<p>Please enter student name.</p>";

        console.log("Please enter student name.");

        return;

    }


    // Find student
    let student = result.find((student) => {

        return student.name.toLowerCase() ===
               searchName.toLowerCase();

    });


    // ========================================
    // STUDENT FOUND
    // ========================================

    if (student) {

        // Console
        console.log("========== SEARCH RESULT ==========");

        console.log("Name:", student.name);

        console.log("Marks:", student.marks);

        console.log("Total:", student.total);

        console.log("Average:", student.average);

        console.log("Grade:", student.grade);


        // Browser
        searchResult.innerHTML = `

            <h3>Student Found</h3>

            <p>
                <b>Name:</b>
                ${student.name}
            </p>

            <p>
                <b>Marks:</b>
                ${student.marks.join(", ")}
            </p>

            <p>
                <b>Total:</b>
                ${student.total}
            </p>

            <p>
                <b>Average:</b>
                ${student.average}
            </p>

            <p>
                <b>Grade:</b>
                ${student.grade}
            </p>

        `;

    }


    // ========================================
    // STUDENT NOT FOUND
    // ========================================

    else {

        // Console
        console.log("========== SEARCH RESULT ==========");

        console.log("Student Not Found");


        // Browser
        searchResult.innerHTML = `

            <p>Student Not Found</p>

        `;

    }

}