$(document).ready(function (){
    $sort_modal = $('.catalog__sort-modal')
    $filter_modal = $('.catalog__filter-modal')

    $('.catalog__mobile-sort').click(function (){
        $sort_modal.show()
    })

    $('.catalog__modal-close-btn').click(function (){
        $sort_modal.hide()
        $filter_modal.hide()
    })

    $('.catalog__mobile-filter').click(function (){
        $filter_modal.show()
    })

    $('.catalog__modal-option-group-title').click(function (){
        $(this).toggleClass('toggled')
        $(this).next().slideToggle()
    })

    $('.catalog__modal-reset-btn').click(function (){
        $(this).parent().parent().find('input').each(function (){
            $(this).prop('checked', false);
        })
    })
})