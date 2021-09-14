$(document).ready(function (){
    filter_range = $(".filter-range-slider")
    filter_range.ionRangeSlider({
        skin: 'round',
        hide_from_to: true,
        hide_min_max: true,
    });

    $max = $('.filter-max-range')
    $min = $('.filter-min-range')

    filter_range.on('change', function (){
        data = $(this)
        $max.val(data.data('to'))
        $min.val(data.data('from'))
    })

    $max.keyup(function (){
        val = $max.val()
        filter_range.data('ionRangeSlider').update({
            to: val
        })
    })

    $min.keyup(function (){
        val = $min.val()
        filter_range.data('ionRangeSlider').update({
            from: val
        })
    })


    $('.filter-clear').click(function (){
        $('.filter_option-list input').prop('checked', false)
    })
    $('.filter-wrap').hide()
    $('.filter-close').click(function () {
        $('.filter-wrap').fadeOut()
    })

    $('.open-filter').click(function () {
        $('.filter-wrap').fadeIn()
    })

})