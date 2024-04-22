const users=[];
function addUser() {
    var user_name = document.getElementById("username");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");

    var user_name_value = user_name.value.trim();
    var email_value = email.value.trim();
    var pass_value = pass.value.trim();

    if (user_name_value === "" || email_value === "" || pass_value === "") {
        user_name.style.borderColor = "red";
        email.style.borderColor = "red";
        pass.style.borderColor = "red";
        return;

    }

    var user = {
        username: user_name_value,
        email: email_value,
        password: pass_value,
    };
    users.push(user);
    alert("Registered");
    localStorage.setItem('users', JSON.stringify(users));
    console.log("=================================");
    console.log(users);
    console.log("================================");

    user_name.style.borderColor = "black";
    email.style.borderColor = "black";
    pass.style.borderColor = "black";
}

function login() {
    var user_name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    ar users = JSON.parse(localStorage.getItem('users')) || [];
    for (var i = 0; i < users.length; i++) {
        var userInfo = users[i];
        if (userInfo.username === user_name && userInfo.email === email && userInfo.password === pass) {
            alert("Logged In")
            return;
        }
    }
    alert("Invalid Credentials");
}
