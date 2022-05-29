var isNavActive = false;

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

    var projectList = document.getElementById('project-list')
    if (projectList) fillProjectList();
}