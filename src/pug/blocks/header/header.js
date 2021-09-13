$(document).ready(function () {
    //мобильное меню
    $('.header__mobile-menu-button, .header__mobile-menu-close').click(function () {
        $('.header__mobile-menu-wrap').toggleClass('active');
        $("body").toggleClass('body-lock');
    })

    //Десктопное меню

    $('.header__navs .header__nav-dropdown').hide()
    $(' .header__navs .header__nav').hover(function () {
        $this_nav = $(this)

        $mark = $('.header__navs-mark')
        $mark.show()

        $mark.css({
            left: $this_nav.offset().left,
            width: $this_nav.outerWidth()
        })
        $('.header__nav-dropdown').hide()
        $this_nav.find('.header__nav-dropdown').show()
    })

    $(' .header__navs .header__subcat,  .header__navs .header__cat-header, .header__navs  .header__nav-title').mouseenter(function () {
        console.log('hovered')
        $img = $(this).parents('.header__nav').find('.header__cat-images img')
        $this_subcat = $(this)
        $img.css('opacity', 0)
        setTimeout(function () {
            $img.attr('src', $this_subcat.attr('slider-img'))
            $img.css('opacity', 1)
        }, 300)


    })

    $('.header__navs').mouseleave(function () {
        $('.header__nav-dropdown').hide()
        $('.header__navs-mark').hide()
    })


})

$(document).ready(function () {
    $('.header__mobile-menu-wrap .header__nav-element').click(function () {
        $(this).next().slideToggle()
    })


    $searchbg = $('.header__mobile-menu-searchbar-back')
    $searchbar = $('.header__mobile-menu-searchbar')
    $searchbtn = $('.header__mobile-menu-button-search')

    $searchbtn.click(function () {
        $searchbg.show()
        $searchbtn.hide()
        $searchbar.show()
    })
    $searchbg.click(function () {
        $searchbg.hide()
        $searchbtn.show()
        $searchbar.hide()
    })
})