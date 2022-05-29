
function navbarOnScroll () {
    "use strict"
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('scroll')
    }
    else if (!isNavActive) {
        navbar.classList.remove('scroll')
    }
        
}

function hamburgerOnClick() {
    isNavActive = !isNavActive;
    var sidebar = document.getElementById('nav-sidebar')
    var navbar = document.getElementById('navbar')
    if (isNavActive) {
        sidebar.classList.add('nav-active')
        sidebar.classList.remove('nav-inactive')
        navbar.classList.add('scroll')
    }  
    else {
        sidebar.classList.remove('nav-active')
        sidebar.classList.add('nav-inactive')
        navbarOnScroll();
    }
}