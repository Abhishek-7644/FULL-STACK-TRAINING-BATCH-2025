async function getUsers() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Users data fetch nahi ho paya");
        }

        const users = await response.json();

        createUserTable(users);
    }

    catch (error) {
        console.log("Error:", error.message);
    }
}


function createUserTable(users) {

    const tableBody = document.getElementById("userTable");

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

        tableBody.appendChild(row);
    });
}


getUsers();