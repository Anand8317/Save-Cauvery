const menuButton = document.querySelector('.nav-ham-icon');
const bar = document.getElementsByClassName('bar');
const navSocial = document.querySelector('.nav-social');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('.nav');
const headerItems = document.getElementsByClassName('toggle1');
console.log(headerItems);

menuButton.addEventListener('click', () => {
  Array.from(bar).forEach((element) => {
    element.classList.toggle('pressed');
  })
  navSocial.classList.toggle('active');
  navBar.classList.toggle('active');
  menuButton.classList.toggle('pressed');
  header.classList.toggle('pressed');
})

Array.from(headerItems).forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(bar).forEach((element) => {
      element.classList.toggle('pressed');
    })
    navSocial.classList.toggle('active');
    navBar.classList.toggle('active');
    menuButton.classList.toggle('pressed');
    header.classList.toggle('pressed');
  })
})