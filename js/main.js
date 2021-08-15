$(function () {


    var $status = $('.rent__slider-counter');
    var $slickElement = $('.rent__slider-list');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });


    $slickElement.slick({
        autoplay:true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        speed:500,
        prevArrow: '<button class="rent__btn-arrow rent__btn-prev"><img src="images/rent/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="rent__btn-arrow rent__btn-next"><img src="images/rent/arrow-right.svg" alt="arrow right"></button>',
    });


    $('.technic__list-slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: '<button class="technic__btn-arrow technic__btn-prev"><img src="images/technic/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="technic__btn-arrow technic__btn-next"><img src="images/technic/arrow-right.svg" alt="arrow right"></button>',
    });


});



var swiper = new Swiper(".mySwiper", {
  breakpoints:{
    1200:  {
      slidesPerView: 3,
    },
    768:  {
      slidesPerView: 2,
    },
    320:  {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var btnMenu = document.querySelector('.menu__btn');

btnMenu.onclick = () => {
  btnMenu.classList.toggle('active');
};