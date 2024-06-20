let username = document.getElementById("Username");
let password = document.getElementById("password");
let flag = true;
function validatForm() {
    if (username.value == "") {
        document.getElementById("UserError").innerHTML = "User Name is empty";
        flag = false;
    } else if (username.value.length < 3) {
        document.getElementById("UserError").innerHTML = "User Name require min 3 charter"
        flag = false;
    } else {
        document.getElementById("UserError").innerHTML = "";
        flag = true;
    }

    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Password is empty"
        flag = false;
    } else {
        document.getElementById("passError").innerHTML = "";
        flag = true;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }

}