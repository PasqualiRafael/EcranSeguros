// function dropdown_menu(a) {
//     a.parentNode
//         .getElementsByClassName("dropdown-content")[0]
//         .classList.toggle("show");
// }

// window.onclick = function (event) {
//     if (!event.target.matches(".dropbtn")) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains("show")) {
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// };

let menuOpenBtn = document.querySelector(".bx-menu");
let menuCloseBtn = document.querySelector(".bx-x");
let navLinks = document.querySelector(".nav-list");

menuOpenBtn.addEventListener("click", function () {
    navLinks.style.left = "0";
    menuOpenBtn.classList.add("hidden");
    menuCloseBtn.classList.add("show");
});

menuCloseBtn.addEventListener("click", function () {
    navLinks.style.left = "-100%";
    menuOpenBtn.classList.remove("hidden");
    menuCloseBtn.classList.remove("show");
});
