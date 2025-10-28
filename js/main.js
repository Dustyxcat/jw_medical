$(document).ready(function(){

    var swiper = new Swiper(".sec_1_swiper", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".news_wrap", {
      slidesPerView: 1.2,
      spaceBetween: 15,
      freeMode: true,
    });

    var swiper = new Swiper(".story_wrap", {
      slidesPerView: 1.2,
      spaceBetween: 15,
      freeMode: true,
    });


}); //end

