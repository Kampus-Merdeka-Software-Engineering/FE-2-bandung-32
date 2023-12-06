const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
})

const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');

// menu.onclick = () => {
//   menu.classList.toggle('bx-x');
//   navmenu.classList.toggle('open');
// }

// ketika menu di klik
document.querySelector("#menu-icon").onclick = () => {
  navmenu.classList.toggle("active");
  menu.classList.toggle("bx-x");
}

// supaya bisa ditutup menunya kalo diklik diluar sidebar
document.addEventListener("click", function (e) {
  if(!menu.contains(e.target) && !navmenu.contains(e.target)) {
    navmenu.classList.remove("active") 
  }
})
