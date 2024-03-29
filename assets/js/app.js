let menu = document.querySelector("#menu-icon");
let nav = document.querySelector('.nav');

menu.onclick = () =>{
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

let header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
  header.classList.toggle('sticky', window.scrollY > 60);
});