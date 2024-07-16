$(function(){
    $(".wrap-1 .btnmob").click(function(){
        $(this).toggleClass("active");
        $(".wrap-2 .collapse").slideToggle();
    });
    if(screen.width<980){
        $(".wrap-2 .collapse a").click(function(e){
            $(".wrap-2 .collapse").slideUp();
            $(".wrap-1 .btnmob").removeClass("active");

        });
    }

    $(".wrap-5 .readmore").click(function(){
        $(".wrap-5 .p-1").toggle(1000);
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".wrap-5 .readmore").text("READ LESS");
        }
        else{
            $(".wrap-5 .readmore").text("READ MORE")
        }
    })


    // Carousel add 
    const swiper = new Swiper('.carousel', {
        spaceBetween:30,

        breakpoints:{
            767:{
                slidesPerView: 2
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})