const button = document.getElementById("button-password");
const password = document.getElementById("password");
const box = document.getElementById("box-surprise");
const boxError = document.getElementById("box-surprise-error");

box.style.display = "none";
boxError.style.display = "none";

button.addEventListener("click", () => {
    if (password.value === "Starfoulah") {
        box.style.display = "block";
        boxError.style.display = "none";
    }else{
        boxError.style.display = "block";
        box.style.display = "none";
    }
});