var isNavActive = false;

window.onload = function () {
    var navbar = document.getElementById('navbar')
    window.onscroll = function() {
        "use strict"
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100)
            navbar.classList.add('scroll')
        else
            navbar.classList.remove('scroll')
    }

    var btnnav = document.getElementById('btn-nav')
    btnnav.onclick = function() {
        isNavActive = !isNavActive;
        var sidebar = document.getElementById('nav-sidebar')
        if (isNavActive) {
            sidebar.classList.add('nav-active')
            sidebar.classList.remove('nav-inactive')
        }  
        else {
            sidebar.classList.remove('nav-active')
            sidebar.classList.add('nav-inactive')
        }
    }

    var btnemail = document.getElementById('btn-email')
    btnemail.onclick = function() {
        var email = 'dan4310@gmail.com'
        var subject = 'Some subject'.replace(' ', '%20')
        var body = 'message goes here'.replace(' ', '%20')

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
}