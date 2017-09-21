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

    /*header submenu*/
    $(document).on('click', '.header__nav li a', function (event) {
        event.preventDefault();
        var HeadSubmenu = $(this).next('.header__catalog');
        if ($(this).hasClass('show-head-submenu') && HeadSubmenu.length > 0) {
            $(this).removeClass('show-head-submenu');
            HeadSubmenu.slideUp(400);
        } else {
            $('.header__nav li a').removeClass('show-head-submenu');
            $('.header__catalog').slideUp(400);
            $(this).addClass('show-head-submenu');
            HeadSubmenu.slideDown(400);
        }
    });
    /*close*/

    /*cabinet submenu*/
    $(document).on('click', '.header__top-links--enter', function () {
        if ($(this).next('.header__top-links--cabinet-submenu').length > 0) {
            event.preventDefault();
            var submenu = $(this).next('.header__top-links--cabinet-submenu');
            $(this).toggleClass('show-cabinet-menu');
            submenu.slideToggle(400);
            return false;
        }
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
    $(document).on('click', '#mobile-menu', function () {
        event.preventDefault();
        var userMenu = $(this).next('.header__cabinet-nav');
        $(this).toggleClass('header__trigger--active');
        userMenu.slideToggle('slow');
        return false;
    });
    /*close*/

    /*product slider*/
    $('.product-slider__carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    /*close*/

    /*single product slider*/
    $('.product__views--slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__views--carousel'
    });
    $('.product__views--carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__views--slider',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*close*/

    /*product counter*/
    $(document).on('click', '.plus', function () {
        event.preventDefault();
        var count = $('.product__views--counter').find('.number'),
            val = parseInt($('.product__views--counter').find('.number').val());
        if (val == 999) {
            return false;
        } else {
            count.val(val + 1);
            $('.js-single-addtocart').attr('data-quantity', count.val());
            $('.js-single-favorites').attr('data-quantity', count.val());
        }
        return false;
    });

    $(document).on('click', '.minus', function () {
        event.preventDefault();
        var count = $('.product__views--counter').find('.number');
        var counter = parseInt(count.val()) - 1;
        counter = counter < 1 ? 1 : counter;
        count.val(counter);
        count.change();
        $('.js-single-addtocart').attr('data-quantity', counter);
        $('.js-single-favorites').attr('data-quantity', counter);
        return false;
    });
    /*close*/

    /*product tabs*/
    $('.product__descr--box').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.product__descr--tabs a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.product__descr--tabs a').removeClass('active');
        $(this).addClass('active');
        $('.product__descr--box').hide(0);
        $(tabId).fadeIn();
    });
    /*close*/

    /*coins tabs*/
    $('.coins__tabs-container--box').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.coins__tabs a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.coins__tabs a').removeClass('active');
        $(this).addClass('active');
        $('.coins__tabs-container--box').hide(0);
        $(tabId).fadeIn();
    });
    /*close*/

    /*registration tabs*/
    /*$('.regist__tabs-contant--wrapper').each(function (i) {
     if (i != 0) {
     $(this).hide(0)
     }
     });
     $(document).on('click', '.regist__tabs a', function (e) {
     e.preventDefault();
     var tabId = $(this).attr('href');
     $('.regist__tabs a').removeClass('active');
     $(this).addClass('active');
     $('.regist__tabs-contant--wrapper').hide(0);
     $(tabId).fadeIn();
     });*/
    /*close*/

    /*main page stock line*/
    if ($('.product__stock--quantity').length > 0) {
        var number = parseInt($('.product__stock--quantity-number').find('.val').html()),//находим цифру остатка товаров
            total = parseInt($('.product__stock--quantity-number:nth-last-of-type(2)').find('.val').html()),//находим сколько всего продано
            width = ((number / (number + total)) * 100);//вычисляем процент
        $('.product__stock--quantity').find('.product__stock--quantity-fillline').css({width: width + '%'});//задаем линии длину, раную количеству процентов
    }
    /*close*/

    /*main page countdown*/
    if (('#countdown').length > 0) {
        /*var date = $('#countdown').attr('data-date');*/
        $('#countdown').countdown({
            date: '16 november 2017 12:00:00',
            format: "on",
            languge: 'ru'
        });
    }
    /*close single afisha countdown*/

    /*reistration mobile forms*/
    $(document).on('click', '.regist__column .title .mobile-trigger', function () {
        var hoverbox = $(this).closest('.regist__column').find('.regist__column--wrapper');
        $(this).toggleClass('show-form');
        hoverbox.slideToggle(400);
        return false;
    });
    /*close*/

    /*----------modals----------*/
    /*city modal*/
    $(document).on('click', '.city-select', function () {
        event.preventDefault();
        $('#black-overlay').fadeIn(400,
            function () {
                $('#city-selection').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '.modal-city__close, #black-overlay', function () {
        $('#city-selection').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#black-overlay').fadeOut(400);
            }
        );
    });
    /*close*/
    /*1 click buy modal*/
    $(document).on('click', '.product__views--click', function () {
        event.preventDefault();
        $('#black-overlay').fadeIn(400,
            function () {
                $('#one-click-buy').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '.modal-city__close, #black-overlay', function () {
        $('#one-click-buy').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#black-overlay').fadeOut(400);
            }
        );
    });
    /*close*/
    /*offer modal*/
    $(document).on('click', '.offer-doc', function () {
        event.preventDefault();
        $('#black-overlay').fadeIn(400,
            function () {
                $('#offer-modal').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '.offer-modal__close, #black-overlay', function () {
        $('#offer-modal').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#black-overlay').fadeOut(400);
            }
        );
    });
    /*close*/
    /*----------close-----------*/

});