const registrationForm =
    document.getElementById("registrationForm");



/* =========================================
   SELECT ELEMENTS
========================================= */

const fname =
    registrationForm.querySelector("#fname");

const lname =
    registrationForm.querySelector("#lname");

const email =
    registrationForm.querySelector("#email");

const phone =
    registrationForm.querySelector("#phone");

const password =
    registrationForm.querySelector("#password");

const dob =
    registrationForm.querySelector("#dob");

const country =
    registrationForm.querySelector("#country");

const city =
    registrationForm.querySelector("#city");



/* =========================================
   SUBMIT EVENT
========================================= */

registrationForm.addEventListener("submit", function (e) {

    e.preventDefault();



    /* =========================================
       GET VALUES
    ========================================= */

    const fnameValue =
        fname.value.trim();

    const lnameValue =
        lname.value.trim();

    const emailValue =
        email.value.trim();

    const phoneValue =
        phone.value.trim();

    const passwordValue =
        password.value.trim();

    const dobValue =
        dob.value;

    const countryValue =
        country.value;

    const cityValue =
        city.value.trim();



    /* =========================================
       GENDER
    ========================================= */

    const gender =
        registrationForm.querySelector(
            "[name='gender']:checked"
        );

    const genderValue =
        gender?.value;



    /* =========================================
       SKILLS
    ========================================= */

    const skills =
        registrationForm.querySelectorAll(
            "[name='skills']:checked"
        );


    const skillsValue =
        Array.from(skills).map(
            skill => skill.value
        );



    /* =========================================
       VALIDATE EVERYTHING
    ========================================= */

    const fnameValid =
        checkfName(fnameValue, fname);


    const lnameValid =
        checklName(lnameValue, lname);


    const emailValid =
        checkEmail(emailValue, email);


    const phoneValid =
        checkPhone(phoneValue, phone);


    const passwordValid =
        checkPassword(passwordValue, password);


    const dobValid =
        checkDOB(dobValue, dob);


    const genderValid =
        checkGender(genderValue);


    const countryValid =
        checkCountry(countryValue, country);


    const cityValid =
        checkCity(cityValue, city);


    const skillsValid =
        checkSkills(skillsValue);



    /* =========================================
       FINAL RESULT
    ========================================= */

    if (
        fnameValid &&
        lnameValid &&
        emailValid &&
        phoneValid &&
        passwordValid &&
        dobValid &&
        genderValid &&
        countryValid &&
        cityValid &&
        skillsValid
    ) {


        const formData = {

            firstName: fnameValue,

            lastName: lnameValue,

            email: emailValue,

            phone: phoneValue,

            password: passwordValue,

            dob: dobValue,

            gender: genderValue,

            country: countryValue,

            city: cityValue,

            skills: skillsValue

        };


        console.log(
            "Form is valid"
        );


        console.log(
            formData
        );


        alert(
            "Form submitted successfully!"
        );


    } else {


        console.log(
            "Please fill the form correctly."
        );

    }

});



/* =========================================
   FIRST NAME VALIDATION
========================================= */

function checkfName(fname, el) {


    const pattern =
        /^[A-Za-z ]{3,100}$/;


    const passed =
        pattern.test(fname);


    const errorEl =
        el.closest("form")
            .querySelector(".fname-error");



    if (!passed) {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


    } else {


        errorEl.classList.remove("show");


        el.classList.remove("is-invalid");


        el.classList.add("is-valid");

    }


    return passed;

}



/* =========================================
   LAST NAME VALIDATION
========================================= */

function checklName(lname, el) {


    const pattern =
        /^[A-Za-z ]{3,100}$/;


    const passed =
        pattern.test(lname);


    const errorEl =
        el.closest("form")
            .querySelector(".lname-error");



    if (!passed) {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


    } else {


        errorEl.classList.remove("show");


        el.classList.remove("is-invalid");


        el.classList.add("is-valid");

    }


    return passed;

}



/* =========================================
   EMAIL VALIDATION
========================================= */

function checkEmail(email, el) {


    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const passed =
        pattern.test(email);


    const errorEl =
        el.closest("form")
            .querySelector(".email-error");



    if (!passed) {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


    } else {


        errorEl.classList.remove("show");


        el.classList.remove("is-invalid");


        el.classList.add("is-valid");

    }


    return passed;

}



/* =========================================
   PHONE VALIDATION
========================================= */

function checkPhone(phone, el) {


    const pattern =
        /^[6-9]\d{9}$/;


    const passed =
        pattern.test(phone);


    const errorEl =
        el.closest("form")
            .querySelector(".phone-error");



    if (!passed) {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


    } else {


        errorEl.classList.remove("show");


        el.classList.remove("is-invalid");


        el.classList.add("is-valid");

    }


    return passed;

}



/* =========================================
   PASSWORD VALIDATION
========================================= */

function checkPassword(password, el) {


    const pattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;


    const passed =
        pattern.test(password);


    const errorEl =
        el.closest("form")
            .querySelector(".password-error");



    if (!passed) {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


    } else {


        errorEl.classList.remove("show");


        el.classList.remove("is-invalid");


        el.classList.add("is-valid");

    }


    return passed;

}



/* =========================================
   DOB VALIDATION
========================================= */

function checkDOB(dobValue, el) {


    const errorEl =
        el.closest("form")
            .querySelector(".dob-error");



    if (dobValue === "") {


        errorEl.textContent =
            "Please select your date of birth.";


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


        return false;

    }



    const selectedDate =
        new Date(dobValue);


    const today =
        new Date();



    if (selectedDate > today) {


        errorEl.textContent =
            "Date of birth cannot be in the future.";


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


        return false;

    }



    errorEl.classList.remove("show");


    el.classList.remove("is-invalid");


    el.classList.add("is-valid");


    return true;

}



/* =========================================
   GENDER VALIDATION
========================================= */

function checkGender(genderValue) {


    const errorEl =
        registrationForm.querySelector(
            ".gender-error"
        );


    const genderInputs =
        registrationForm.querySelectorAll(
            "[name='gender']"
        );



    if (!genderValue) {


        errorEl.classList.add("show");


        genderInputs.forEach(function (input) {

            input.classList.add("is-invalid");

        });


        return false;

    }



    errorEl.classList.remove("show");


    genderInputs.forEach(function (input) {

        input.classList.remove("is-invalid");

    });


    return true;

}



/* =========================================
   COUNTRY VALIDATION
========================================= */

function checkCountry(countryValue, el) {


    const errorEl =
        el.closest("form")
            .querySelector(".country-error");



    if (countryValue === "") {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


        return false;

    }



    errorEl.classList.remove("show");


    el.classList.remove("is-invalid");


    el.classList.add("is-valid");


    return true;

}



/* =========================================
   CITY VALIDATION
========================================= */

function checkCity(cityValue, el) {


    const errorEl =
        el.closest("form")
            .querySelector(".city-error");



    if (cityValue === "") {


        errorEl.classList.add("show");


        el.classList.add("is-invalid");


        el.classList.remove("is-valid");


        return false;

    }



    errorEl.classList.remove("show");


    el.classList.remove("is-invalid");


    el.classList.add("is-valid");


    return true;

}


/* =========================================
   LIVE VALIDATION
========================================= */


/* FIRST NAME */

fname.addEventListener("input", function () {

    checkfName(
        fname.value.trim(),
        fname
    );

});



/* LAST NAME */

lname.addEventListener("input", function () {

    checklName(
        lname.value.trim(),
        lname
    );

});



/* EMAIL */

email.addEventListener("input", function () {

    checkEmail(
        email.value.trim(),
        email
    );

});



/* PHONE */

phone.addEventListener("input", function () {

    checkPhone(
        phone.value.trim(),
        phone
    );

});



/* PASSWORD */

password.addEventListener("input", function () {

    checkPassword(
        password.value.trim(),
        password
    );

});



/* DOB */

dob.addEventListener("change", function () {

    checkDOB(
        dob.value,
        dob
    );

});



/* GENDER */

const genderInputs =
    registrationForm.querySelectorAll(
        "[name='gender']"
    );


genderInputs.forEach(function (genderInput) {


    genderInput.addEventListener(
        "change",
        function () {


            const selectedGender =
                registrationForm.querySelector(
                    "[name='gender']:checked"
                );


            checkGender(
                selectedGender?.value
            );

        }
    );

});



/* COUNTRY */

country.addEventListener("change", function () {


    checkCountry(
        country.value,
        country
    );

});



/* CITY */

city.addEventListener("input", function () {


    checkCity(
        city.value.trim(),
        city
    );

});



/* SKILLS */

const skillInputs =
    registrationForm.querySelectorAll(
        "[name='skills']"
    );


skillInputs.forEach(function (skillInput) {


    skillInput.addEventListener(
        "change",
        function () {


            const selectedSkills =
                registrationForm.querySelectorAll(
                    "[name='skills']:checked"
                );


            const skillsValue =
                Array.from(selectedSkills).map(
                    skill => skill.value
                );


            checkSkills(
                skillsValue
            );

        }
    );

});