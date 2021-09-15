$(document).ready(function () {
    filter_range = $(".filter-range-slider")
    filter_range.ionRangeSlider({
        skin: 'round',
        hide_from_to: true,
        hide_min_max: true,
    });

    $max = $('.filter-max-range')
    $min = $('.filter-min-range')

    filter_range.on('change', function () {
        data = $(this)
        $max.val(data.data('to'))
        $min.val(data.data('from'))
    })

    $max.keyup(function () {
        val = $max.val()
        filter_range.data('ionRangeSlider').update({
            to: val
        })
    })

    $min.keyup(function () {
        val = $min.val()
        filter_range.data('ionRangeSlider').update({
            from: val
        })
    })


    $('.filter-clear').click(function () {
        $('.filter_option-list input').prop('checked', false)
    })
    $('.filter-close').click(function () {
        $('.filter-wrap').removeClass('visible')
        if ($(document).outerWidth() < 816) {
            resetPositions()
        }

    })

    $('.open-filter').click(function () {
        $('.filter-wrap').addClass('visible')
    })

    $('.filter_col h4').click(function () {
        if ($(document).outerWidth() < 816) {
            $(this).next().slideToggle()

            $('.filter-content').css({
                left: '-100%',
                right: '100%',
            })
            $(this).parent().css({
                left: '100%',
                right: '-100%',
                position: 'absolute',
                top: 0
            })

            $('.filter-back').show()
        }
    })

    $('.filter-back').click(function () {
        if ($(document).outerWidth() < 816) {
            resetPositions()
            $('.filter-back').hide()
        }
    })

    function resetPositions() {
        $('.filter-content').css({
            left: 0,
            right: 0,
        })

        $('.filter_col').css({
            left: 0,
            right: 0,
            position: 'relative',
            top: 0
        })

        $('.filter_option-lists').css('display', 'none')
    }

})