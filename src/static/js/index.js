new Swiper('.index__slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination ',
        clickable: true,
    },
    simulateTouch: false,
    slidesPerView: 1,
    watchOverflow: true,
    autoplay:{
        delay:4000
    },
    speed:800,
});

$(document).ready(function() {
    $('select').niceSelect();
});

$('.switch').click(function(){
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

$(document).on('click','.quantity__btn',function (){
    let quant = $(this).parents('.btn__quantity'),
        input = quant.find('.quantity__pole');
    if ($(this).hasClass('quantity__btnplas')){
        input.val(Number(input.val()) + 1)
    }else{
        if(Number(input.val()) > 1){
            input.val(Number(input.val()) - 1)
        }
    }
});