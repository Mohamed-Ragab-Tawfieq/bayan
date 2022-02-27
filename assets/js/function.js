var getDirection = $('body').css('direction');
window.onload = function () {

    $(function () {

        'use strict';

        // loader
        $('.loader').delay(200).fadeOut(500);

        // BS Tooltip
        $('[data-toggle="tooltip"]').tooltip({
            boundary: 'window'
        });
        $('.qmark i').hover(function () {
            $(this).parent().find('.triangle').removeClass("d-none");
        })
        $('.qmark i').mouseout(function () {
            $(this).parent().find('.triangle').addClass("d-none");
        })

        // file upload
        $('.upload .btn-upload').click(function () {
            $(this).parent().find('.file-upload').click();
        });

        // show hide textarea
        $('#typeText').click(function () {
            $('#areaTypeTxt').removeClass('d-none')
        })


        // navbar submenu
        if (window.outerWidth >= 992) {
            // on lg
            $(".trigger").mouseenter(function () {
                $(this).next('.sub-menu').addClass('show');
            });

            $(".sub-menu").mouseenter(function () {
                $(this).addClass('show');
            });

            $(".trigger").mouseleave(function () {
                $(this).next('.sub-menu').removeClass('show');
            });
        } else {
            // on mobile
            $('.dropdown.my-auto').find('a').click(function (e) {
                $('.dropdown-menu').removeClass('show');
                $(this).next('.dropdown-menu').toggleClass('show');
                e.stopPropagation();
                e.preventDefault();
            })

            $(".trigger").click(function () {
                // $(".navbar-nav a").removeClass("active focus");
                $(this).parent().find('.sub-menu').toggleClass('shown');
                // $(this).parent().parent().toggleClass('show');
                // $(this).parent().parent().parent().addClass('show');
                // $(this).parent().parent().parent().find('a[data-toggle]').dropdown('show');
            });

            // $(".sub-menu").click(function () {
            //     $(this).toggleClass('show');
            // });

        }

        (jQuery);
    });
}