
// Navbar Menu 
const openMenu = document.querySelector('#openMenu');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const closeMenu = document.querySelector('#closeMenu');


openMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
    navbarMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.add('active');
    navbarMenu.classList.remove('active');
});


// Search Bar 

const searchBar = document.querySelector('.search-bar');
const search = document.querySelector('#search');
const searchExit = document.querySelector('#search-exit');

search.addEventListener('click', () => {
    searchBar.classList.add('active');
});

searchExit.addEventListener('click', () => {
    searchBar.classList.remove('active');
});



// Language Block 

const languageBlock = document.querySelector('.language-block');
const language = document.querySelector('#language');
const exitLanguage = document.querySelector('#language-exit');


language.addEventListener('click', () => {
    languageBlock.classList.toggle('active');
});


// testimonies

var user1 = document.querySelector('#user1');
var user2 = document.querySelector('#user2');
var user3 = document.querySelector('#user3');
var user4 = document.querySelector('#user4');
var user5 = document.querySelector('#user5');
var user6 = document.querySelector('#user6');

var userActive1 = document.querySelector('.user-1');
var userActive2 = document.querySelector('.user-2');
var userActive3 = document.querySelector('.user-3');
var userActive4 = document.querySelector('.user-4');
var userActive5 = document.querySelector('.user-5');
var userActive6 = document.querySelector('.user-6');

var line = document.querySelector('.line');


user1.addEventListener('click', () => {
    userActive1.classList.add('user-active');
    line.style.left = '205px';
    userActive2.classList.remove('user-active');
    userActive3.classList.remove('user-active');
    userActive4.classList.remove('user-active');
    userActive5.classList.remove('user-active');
    userActive6.classList.remove('user-active');
});

user2.addEventListener('click', () => {
    userActive2.classList.add('user-active');
    line.style.left = '306px';
    userActive1.classList.remove('user-active');
    userActive3.classList.remove('user-active');
    userActive4.classList.remove('user-active');
    userActive5.classList.remove('user-active');
    userActive6.classList.remove('user-active');
});

user3.addEventListener('click', () => {
    userActive3.classList.add('user-active');
    line.style.left = '407px';
    userActive1.classList.remove('user-active');
    userActive2.classList.remove('user-active');
    userActive4.classList.remove('user-active');
    userActive5.classList.remove('user-active');
    userActive6.classList.remove('user-active');
});

user4.addEventListener('click', () => {
    userActive4.classList.add('user-active');
    line.style.left = '509px';
    userActive1.classList.remove('user-active');
    userActive2.classList.remove('user-active');
    userActive3.classList.remove('user-active');
    userActive5.classList.remove('user-active');
    userActive6.classList.remove('user-active');
});

user5.addEventListener('click', () => {
    userActive5.classList.add('user-active');
    line.style.left = '608px';
    userActive1.classList.remove('user-active');
    userActive2.classList.remove('user-active');
    userActive3.classList.remove('user-active');
    userActive4.classList.remove('user-active');
    userActive6.classList.remove('user-active');
});

user6.addEventListener('click', () => {
    userActive6.classList.add('user-active');
    line.style.left = '710px';
    userActive1.classList.remove('user-active');
    userActive2.classList.remove('user-active');
    userActive3.classList.remove('user-active');
    userActive4.classList.remove('user-active');
    userActive5.classList.remove('user-active');
});




