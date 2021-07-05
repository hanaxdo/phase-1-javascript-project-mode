fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log("data>>>", data)
        data = data.slice(0, 9);
        for (let i = 0; i < data.length; i++) {
            var item = document.createElement("div")
            item.innerHTML = `
            <h4>Name: ${data[i].name}</h4>
            <p>Username: ${data[i].username}</p>
            <p>Email: ${data[i].email}</p>
            <p>Phone: ${data[i].phone}
            <div>
            <button id="favorite" onclick="favorite(this)">Favorite</button>
            <button id="delete" onclick="deleteUser(this)">Delete User</button>
            </div>
        `;
            item.className = "user";

            document.getElementById("container").appendChild(item)
        }
    })


document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var newItem = document.createElement("div")
    newItem.innerHTML = `
            <h4>Name: ${name}</h4>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}
            <div>
            <button id="favorite" onclick="favorite(this)">Favorite</button>
            <button id="delete" onclick="deleteUser(this)">Delete User</button>
            </div>
            `;

    newItem.className = "user";

    document.getElementById("container").appendChild(newItem)
})

function deleteUser(item) {
    item.parentElement.parentElement.style.display = "none";
}

function favorite(item) {
    if(item.style.backgroundColor !== "green"){
        item.style.backgroundColor = "green";
    }else{
        item.style.backgroundColor = "gray";
    }
}

let names = ["ronnie", "hana", "grampa", "goblin", "john", "jane", "spot", "amber"]
const newNames = names.map(function(names) {
    return names.charAt(0).toUpperCase() + names.slice(1);
})
console.log(newNames);