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
    scrollTopCheacker();
}

// Start Animation
window.onload = function () {
    let smartPhone = document.getElementById("smart-phone");
    console.log(smartPhone);
    smartPhone.style.animationPlayState = 'running';
    scrollTopCheacker();
}
//End Animation

function scrollTopCheacker() {
    var a = $('.about-us').offset().top,
        b = $(window).scrollTop();

    if((b + 100) >= a){
        $('.card-box').css({
            animationPlayState : 'running'
        })
    }
}