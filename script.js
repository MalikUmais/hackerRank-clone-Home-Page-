document.getElementById("menu-icon").addEventListener("click", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");

    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});


window.addEventListener("click", function (event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (!event.target.matches('#menu-icon') && dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    }
});
