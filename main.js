const burgers = document.querySelector('.burger');
const navLink = document.querySelector('.nav--link');
const navBox = document.querySelector('.box');



burgers.addEventListener('click', () => {
    navLink.classList.toggle('active');
    navBox.classList.toggle('active-box');
});