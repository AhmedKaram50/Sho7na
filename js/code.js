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

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items: 4
            }
        }
    });
  });
