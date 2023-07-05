// Script for my Portfolio
//
// Globla variables
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show menu Mobile
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show_menu')
  })
}

// Hide menu Mobile
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
  })
}

// Remove menu Mobile 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each "nav_link", we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
