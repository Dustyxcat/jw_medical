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
        right: 0,
        zIndex: 20,
        opacity: 1
      })
    });

     $('.exit').click(function(){
      console.log('클릭')
      $('.ham').css({
        right: '-100%',
        zIndex: 0,
        opacity: 0
      })
    });


  $(".ham_title").click(function(){
        
        var clicked = $(this).index();

        $(".ham_title ul").removeClass("active_ul").eq(clicked).addClass("active_ul");
        $(".ham_arrow").removeClass("active_arrow").eq(clicked).addClass("active_arrow");

    }); //click event end



}); //end

