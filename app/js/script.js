$(document).ready(function () {

   /*show search form categories list*/    
    $(document).on('click', '.search__form--trigger', function () {
        var list = $(this).next('.search__form--list');
        list.slideToggle('fast');
    });
    $(document).on('click', '.search__form--list li', function () {
        var listText = $(this).html(),
            listAttr = $(this).attr('data-id'),
            list = $(this).parent();

        list.slideUp('fast');
        $('.search__form--trigger .search__form--title').html(listText).attr('data-id', listAttr);
    });   
    /*close*/
    
    /*mobile menu*/
    $(document).on('click', '#mobile-menu', function () {
       event.preventDefault();       
       var menu = $(this).next('.header__nav');
       $(this).toggleClass('header__trigger--active'); 
       menu.slideToggle('slow');
        return false;
    });
    /*close*/
});