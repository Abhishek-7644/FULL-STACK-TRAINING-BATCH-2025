


const users = [

    {
        id: 101,
        name: "  alex JOHNSON ",
        dob: "1992-06-15",
        salary: "55000",
        skills: ["html", "css", "javascript"]
    },

    {
        id: 102,
        name: "  maria  smith  ",
        dob: "1988-11-03",
        salary: "72000",
        skills: ["react", "node", "css"]
    },

    {
        id: 103,
        name: "john doe",
        dob: "1996-02-25",
        salary: "48000",
        skills: ["vue", "javascript", "html"]
    }

];



const userTable = document.querySelector("#userTable");

const editDialog = document.querySelector("#editDialog");

const userId = document.querySelector("#userId");

const nameInput = document.querySelector("#name");

const dobInput = document.querySelector("#dob");

const salaryInput = document.querySelector("#salary");

const updateBtn = document.querySelector("#updateBtn");

const closeBtn = document.querySelector("#closeBtn");

const cancelBtn = document.querySelector("#cancelBtn");

const skillCheckboxes =
    document.querySelectorAll(".skill-checkbox");


function formatName(name) {

    return name
        .trim()
        .split(/\s+/)
        .map(word => {

            return word.charAt(0).toUpperCase() +
                   word.slice(1).toLowerCase();

        })
        .join(" ");

}

function formatSkill(skill) {

    return skill.charAt(0).toUpperCase() +
           skill.slice(1).toLowerCase();

}




function formatDOB(dob) {

    const date = new Date(dob);

    return date.toLocaleDateString("en-GB", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    });

}




function calculateAge(dob) {

    const birthDate = new Date(dob);

    const today = new Date();


    let age =
        today.getFullYear() -
        birthDate.getFullYear();


    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();


    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {

        age--;

    }


    return age;

}




function totalSkills() {

    const count = users.reduce(
        (total, user) => {

            return total + user.skills.length;

        },
        0
    );


    return count;

}




function displayUsers() {

    userTable.innerHTML = "";


    users.forEach(user => {


        const row = document.createElement("tr");



        const skillsHTML = user.skills
            .map(skill => {

                return `
                    <span class="skill">
                        ${formatSkill(skill)}
                    </span>
                `;

            })
            .join("");


       
        row.innerHTML = `

            <td>
                ${formatName(user.name)}
            </td>


            <td>
                ${formatDOB(user.dob)}
            </td>


            <td>
                ${calculateAge(user.dob)}
            </td>


            <td>
                ${Number(user.salary)}
            </td>


            <td>

                <div class="skills">

                    ${skillsHTML}

                </div>

            </td>


            <td>

                <div class="action">

                    <button
                        class="edit-btn"
                        data-id="${user.id}"
                    >
                        Edit
                    </button>


                    <button
                        class="delete-btn"
                        data-id="${user.id}"
                    >
                        Delete
                    </button>

                </div>

            </td>

        `;


        userTable.append(row);

    });


    addButtonEvents();

}



function addButtonEvents() {


    const editButtons =
        document.querySelectorAll(".edit-btn");


    const deleteButtons =
        document.querySelectorAll(".delete-btn");



    editButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            openEditPopup(id);

        });

    });



    deleteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            deleteUser(id);

        });

    });

}




function deleteUser(id) {


    const confirmDelete =
        confirm("Do you want to delete this user?");


    if (!confirmDelete) {

        return;

    }


    
    const updatedUsers =
        users.filter(user => user.id !== id);


   

    users.splice(
        0,
        users.length,
        ...updatedUsers
    );


    displayUsers();

}



function openEditPopup(id) {


    const user =
        users.find(user => user.id === id);


    if (!user) {

        return;

    }




    userId.value = user.id;

    nameInput.value = user.name.trim();

    dobInput.value = user.dob;

    salaryInput.value = user.salary;


    
    skillCheckboxes.forEach(checkbox => {

        checkbox.checked =
            user.skills.includes(
                checkbox.value
            );

    });


    editDialog.showModal();

}



updateBtn.addEventListener("click", () => {


    const id =
        Number(userId.value);


    

    const user =
        users.find(user => user.id === id);


    if (!user) {

        return;

    }


    
    const selectedSkills = [];


    skillCheckboxes.forEach(checkbox => {

        if (checkbox.checked) {

            selectedSkills.push(
                checkbox.value
            );

        }

    });



    user.name =
        nameInput.value;


    user.dob =
        dobInput.value;


    user.salary =
        salaryInput.value;


    user.skills =
        selectedSkills;


    

    displayUsers();


    // Popup close

    editDialog.close();

});


closeBtn.addEventListener("click", () => {

    editDialog.close();

});


cancelBtn.addEventListener("click", () => {

    editDialog.close();

});



displayUsers();



console.log(
    "Total Skills:",
    totalSkills()
);