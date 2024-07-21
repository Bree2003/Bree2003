var typed = new Typed(".input", {
  strings: ["Fullstack Developer.", "Web Developer.", "Photographer."],
  typeSpeed: 80,
  backSpeed: 70,
  loop: true,
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

let options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  };
});
