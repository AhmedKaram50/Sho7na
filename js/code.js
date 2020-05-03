// Changing Brand-Logo When The Navigation is Fixed
window.onscroll = function () {
    let nav = document.querySelector('.navbar'),
        logo = document.getElementById('logo');

    if (window.scrollY >= 200) {
        nav.classList.add('nav-fixed');
        logo.setAttribute('src', 'images/logo.png');
    } else{
        nav.classList.remove('nav-fixed');
        logo.setAttribute('src', 'images/logo.png');
    }   
}