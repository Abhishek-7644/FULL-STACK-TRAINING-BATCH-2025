const url = "https://jsonplaceholder.typicode.com/users";

let allUsers = [];

const searchInput = document.getElementById("searchInput");
const userTable = document.getElementById("userTable");


fetch(url)
    .then(response => response.json())
    .then(users => {

        allUsers = users;

        createTable(allUsers);
    })
    .catch(error => {

        console.log("Error:", error);
    });


function createTable(users) {

    userTable.innerHTML = "";

    users.forEach(user => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>
                ${user.address.street},
                ${user.address.city},
                ${user.address.zipcode}
            </td>

            <td>${user.phone}</td>

            <td>${user.company.name}</td>
        `;

        userTable.appendChild(row);
    });
}


searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value;

    const regex = new RegExp(searchValue, "i");

    const filteredUsers = allUsers.filter(user => {

        const userData = `
            ${user.name}
            ${user.email}
            ${user.address.street}
            ${user.address.city}
            ${user.address.zipcode}
            ${user.phone}
            ${user.company.name}
        `;

        return regex.test(userData);
    });

    createTable(filteredUsers);
});