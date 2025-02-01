const error = document.querySelector("#error-msg");
const btn = document.getElementById("btn"); 
const input = document.querySelector("#input-field");

const UserLogin = () => {
    if (input.value.trim() === "") {
        error.style.display="block";
        error.classList.add("show-error");
        input.classList.add("error-border");
    } else {
        error.style.display="none";
        error.classList.remove("show-error");
        input.classList.remove("error-border");
    }
};

btn.addEventListener("click", UserLogin);
