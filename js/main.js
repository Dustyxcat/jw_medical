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
      slidesPerView: 1.5,
      spaceBetween: 15,
      freeMode: true,
    });

    var swiper = new Swiper(".story_wrap", {
      slidesPerView: 1.5,
      spaceBetween: 15,
      freeMode: true,
    });

    var swiper = new Swiper(".con_wrap_r", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    $('.title_news').click(function(){

      $('.title_5 h6').addClass('active_color')
      $('.under_bar').addClass('active_bar')

      $('.story_wrap').addClass('active_none')

      $('.title_story h6').removeClass('active_color')
      $('.title_story .under_bar').removeClass('active_bar')

      $('.news_wrap').removeClass('active_none')

    });

    $('.title_story').click(function(){

      $('.title_5 h6').addClass('active_color')
      $('.under_bar').addClass('active_bar')

      $('.news_wrap').addClass('active_none')

      $('.title_news h6').removeClass('active_color')
      $('.title_news .under_bar').removeClass('active_bar')

      $('.story_wrap').removeClass('active_none')

    });

    $('.menu_tab').click(function(){
      $('.ham').css({
        left: 0,
        top: 0
      })

      // $('.ham').removeClass('right_active')
      // $('.ham').addClass('origin_active')

    });

     $('.exit').click(function(){
      console.log('클릭')
      $('.ham').css({
        left: '-100%',
        top: 0
      })

      // $('.ham').removeClass('origin_active')
      // $('.ham').addClass('right_active')
    });



    $(".ham_title ul").each(function (index) {

        $(this).attr("data-index", index);
      }).click(function () {

          var clicked = $(this).attr("data-index");

          $(".ham_title ul").removeClass("active_ul");

          $(".ham_title ul").eq(clicked).addClass("active_ul");
        });


}); //end

