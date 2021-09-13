new Swiper('.catalogproduct__block1-slider',{
    
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    // pagination:{
    //     el:'.swiper-pagination ',
    //     clickable: true,
    // },
    simulateTouch: true,
    slidesPerView: 1,
    watchOverflow: true,
    effect:'fade',
    thumbs:{
        swiper:{
            el:'.catalogproduct__block1-slider-mini',
            slidesPerView: 4,
            spaceBetween: 16,
        }
    },
    pagination: {
        el: ".swiper-pagination"
    }
});


$( document ).ready(function() {
    if ($('.catalogproduct__wrapp').length != 0){
        $('.catalogproduct__block2-info-element').click(function (){
            $(this).next().slideToggle()
            $(this).toggleClass('toggled')
        })
    }
});
