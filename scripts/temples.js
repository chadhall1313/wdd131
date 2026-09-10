document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear()

const button = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

button.addEventListener("click", function () {
    navigation.classList.toggle("show")
    button.classList.toggle("show")
})