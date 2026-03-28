console.log("Script loaded successfully!");
function validateForm() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let message = document.getElementById("message");


message.textContent = "";


if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message.textContent = "Error: All fields are required!";
    message.style.color = "red";
    return false;
}

if (!email.includes("@")) {
    message.textContent = "Error: Invalid email format!";
    message.style.color = "red";
    return false;
}

if (password.length < 6) {
    message.textContent = "Error: Password must be at least 6 characters!";
    message.style.color = "red";
    return false;
}

if (password !== confirmPassword) {
    message.textContent = "Error: Passwords do not match!";
    message.style.color = "red";
    return false;
}


message.textContent = "Success: Form submitted successfully!";
message.style.color = "green";

return false;
}