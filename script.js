const button = document.getElementById("button-password");
const password = document.getElementById("password");
const box = document.getElementById("box-surprise");

box.style.display = "none";

button.addEventListener("click", () => {
    if (password.value === "password") {
        box.style.display = "block";
    }
});