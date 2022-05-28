var isNavActive = false;

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
    console.log('hello')
}

window.onload = function () {
    window.onscroll = navbarOnScroll;

    var btnnav = document.getElementById('btn-nav')
    btnnav.onclick = hamburgerOnClick

    var btnemail = document.getElementById('btn-email')
    if (btnemail)
        btnemail.onclick = function() {
            var email = 'dan4310@gmail.com'
            var subject = 'Some subject'.replace(' ', '%20')
            var body = 'message goes here'.replace(' ', '%20')

            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
    var menuLinks = document.getElementsByClassName('nav-link-menu');
    for (let i = 0; i < menuLinks.length; i++)
        menuLinks.item(i).onclick = hamburgerOnClick
}