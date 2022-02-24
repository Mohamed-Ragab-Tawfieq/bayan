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
        $(".trigger").mouseenter(function () {
            $(this).next('.sub-menu').addClass('show');
        });

        $(".sub-menu").mouseenter(function () {
            $(this).addClass('show');
        });

        $(".trigger").mouseleave(function () {
            $(this).next('.sub-menu').removeClass('show');
        });

        (jQuery);
    });
}