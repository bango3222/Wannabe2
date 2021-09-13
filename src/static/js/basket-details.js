$(document).ready(function (){
    if($('.basket-details').length != 0){
        $('.basket-details-wrapp').click(function (){
            $(this).next().slideToggle()
        })
    }
});
$(document).ready(function (){
    if($('.basket-price-promo-drop').length != 0){
        $('.basket-price-promo-input').click(function (){
            $(this).next().slideToggle()
        })
    }
})