const menuIcon = document.getElementById
("menu-icon");
const menuIcon = document.getElementById("menu");

menuIcon.addEventListener("click", () ==> {
    if (menu.className == "hidden") {
        menuIcon.classList.remove("hidden")
    } else {
        menu.classList.add("hidden");
    }
});