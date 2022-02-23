var getDirection = $('body').css('direction');
window.onload = function () {

    $(function () {

        'use strict';


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

        // phone inputs
        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
            initialCountry: "eg",
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

        (jQuery);
    });
}