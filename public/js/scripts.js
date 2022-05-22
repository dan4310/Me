window.onload = function () {
    var navbar = document.getElementById('navbar')
    window.onscroll = function() {
        "use strict"
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100)
            navbar.classList.add('scroll')
        else
            navbar.classList.remove('scroll')
    }
}