var getDirection = $('body').css('direction');
window.onload = function () {


    $(function () {

        'use strict';


        // BS Tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Owl Sliders
        $('.prod-type-slider.slider-1').owlCarousel({
            rtl: getDirection === 'rtl' ? true : false,
            loop: false,
            margin: 15,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: getDirection === 'rtl' ? ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'] : ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            navSpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 7
                }
            }
        });

        $('.prod-type-slider.slider-2').owlCarousel({
            rtl: getDirection === 'rtl' ? true : false,
            loop: false,
            margin: 15,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: getDirection === 'rtl' ? ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'] : ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            navSpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 9
                }
            }
        });

        // select slide
        $("#categorySlider .item").click(function () {
            // bg blue
            $(".owl-carousel .item .image").removeClass('current');
            $(this).find('.image').addClass('current');

            // partial slider
            var proType = $(this).find('.current').parent();

            if (proType.hasClass('pro-1')) {
                $('.owl-carousel.milk').removeClass('d-none');
            } else if (proType.hasClass('pro-2')) {
                $('.owl-carousel.water').removeClass('d-none');
            } else if (proType.hasClass('pro-3')) {
                $('.owl-carousel.kids').removeClass('d-none');
            } else if (proType.hasClass('pro-4')) {
                $('.owl-carousel.power').removeClass('d-none');
            } else if (proType.hasClass('pro-5')) {
                $('.owl-carousel.sport').removeClass('d-none');
            }
        });

        // Scroll to top button appear
        $('.scroll-to-top').hide();
        $(document).on('scroll', function () {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function (e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            e.preventDefault();
        });

        // product form file upload
        $('.upload.btn-group .btn').click(function () {
            debugger;
            //var input = $(this).parent().parent().find('.file-upload');
            $(this).parent().parent().find('.file-upload')[0].click();
            //input[0].click();
        });

        // countdown 
        $('.btn[data-target="#confirmEmailModal"], .modal .resend').click(function () {
            var interval,
                timer = 120,
                minutes,
                seconds;

            interval = setInterval(function countdown() {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $('#countdown').text(minutes + ":" + seconds);

                if (--timer < 0) {
                    clearInterval(interval);

                    $('#countdown').addClass('d-none');
                    $('.resend').addClass('text-blue');
                    $('.resend').attr('disabled', false);
                } else {
                    $('#countdown').removeClass('d-none');
                    $('.resend').removeClass('text-blue');
                    $('.resend').attr('disabled', true);
                }
            }, 1000);
        })
        // startTimer(5, $('#countdown'));

        // jQuery(function ($) {
        //   var twoMinutes = 120,
        //     display = $('#countdown');
        //   startTimer(twoMinutes, display);
        // });



        // manufacture page 
        $(function () {
            $('.case').hide()
            $('.manu-1').show();
            $(document).on('change', '#manufactureCase', function () {
                switch ($(this).val()) {
                    case "1":
                        $('.case').hide()
                        $('.manu-1').show();
                        break;
                    case "2":
                        $('.case').hide()
                        $('.manu-2').show();
                        break;
                    case "3":
                        $('.case').hide()
                        $('.manu-3').show();
                        break;
                    case "4":
                        $('.case').hide()
                        $('.manu-4').show();
                        break;
                    default:
                        break;
                }
            });
        })

        // attachments page 
        // $(function () {
        //   $('.case').hide()
        //   $('.att-1').show();
        //   $("#attachmentCase").change(function () {
        //     switch ($(this).val()) {
        //       case "1":
        //         $('.case').hide()
        //         $('.att-1').show();
        //         break;
        //       case "2":
        //         $('.case').hide()
        //         $('.att-2').show();
        //         break;
        //       case "3":
        //         $('.case').hide()
        //         $('.att-3').show();
        //         break;
        //       case "4":
        //         $('.case').hide()
        //         $('.att-4').show();
        //         break;
        //       default:
        //         break;
        //     }
        //   });
        // })

        // section of steps-img animation
        $(window).scroll(function () {
            var wH1 = $(window).height(),
                wH2 = $(window).height(),
                wS = $(this).scrollTop();

            // first type
            if ($(".simple-steps1")[0]) {
                var hT1 = $('.simple-steps1').offset().top;

                if (wS > (hT1 - wH1)) {
                    $('.simple-steps1 .steps-item').addClass('active')
                } else {
                    $('.simple-steps1 .steps-item').removeClass('active')
                }
            }

            // second type
            if ($(".simple-steps2")[0]) {
                var hT2 = $('.simple-steps2').offset().top;

                if (wS > (hT2 - wH2)) {
                    $('.simple-steps2 .steps-item').addClass('active')
                } else {
                    $('.simple-steps2 .steps-item').removeClass('active')
                }
            }
        });

        // tabs
        $('a[data-toggle="tab"]').click(function (e) {
            window.scrollTo(0, 300);
            var href = $(this).attr('href');
            $('a[data-toggle="tab"]').removeClass('active');
            $('a[href="' + href + '"]').addClass('active');
            $('.tab-pane').removeClass('show active');
            $('.tab-pane' + href).addClass('show active');
        })

        // read only inputs
        $(".normal .form-control, .normal select").attr('readonly', true);
        $(".normal").next(".concentration").attr('readonly', true);
        $(".edit-data-btn").click(function () {
            window.scrollTo(0, 300);
            //$(this).text("إرسال طلب تحديث");
            $(".editable, input.file-upload, .concentration").removeAttr("readonly");
            $('.editable').nextAll(".upload.btn-group, .uploaded-files, .progress-details, .not-valid, .file-wrapper").removeClass('d-none');
            $(".editable").parent().removeClass('normal');
            $(".editable.expired").removeClass("bg-danger-op border-danger");
            $('.editable').nextAll('.download-wrapper').removeClass('d-flex');
            $('.editable').nextAll('.download-wrapper').addClass('d-none');
            $(".cancel-edit").removeClass('d-none');
            $(this).addClass("d-none");
            $('#ubdateBtn').removeClass("d-none");
            $('#itemsAccordion .product-item').removeClass('noteditable');
            $('#namesAccordion .product-item').parent().removeClass('noteditable');
            $('.add-new-item').removeAttr('disabled');
        });

        $(".cancel-edit").click(function () {
            window.scrollTo(0, 300);
            //$(".edit-data-btn").text("تحديث البيانات");
            $(".form-group .editable, .concentration").attr('readonly', true);
            $('.editable').nextAll(".upload.btn-group, .uploaded-files, .progress-details, .not-valid, .file-wrapper").addClass('d-none');
            $(".editable.expired").addClass("bg-danger-op border-danger");
            $(".form-group").addClass('normal');
            $('.editable').nextAll('.download-wrapper').removeClass('d-none');
            $('.editable').nextAll('.download-wrapper').addClass('d-flex');
            $(".cancel-edit,#ubdateBtn").addClass('d-none');
            $('.edit-data-btn').removeClass("d-none");
            $('#itemsAccordion .product-item').addClass('noteditable');
            $('#namesAccordion .product-item').parent().addClass('noteditable');
            $('.add-new-item').attr('disabled', true);
        })

        // dropdown on click inside 
        $('.notifications .dropdown-menu').on("click.bs.dropdown", function (e) {
            e.stopPropagation();
            e.preventDefault();
        });

        // datalist chevron on click
        $('.datalist .icon').click(function () {
            $(this).parent().toggleClass('show');
            $(this).parent().find('.dropdown-menu').toggleClass('show');
        })

        // side steps
        // $('.req-list li').click(function () {
        // $('.req-list li').removeClass('active');
        // $(this).addClass('active');
        // })

        // order change modal
        $(".list-modal .item").click(function () {
            $('.list-modal .item').removeClass('bg-blue-op border-info');
            $('.list-modal .item').addClass('bg-light');
            $(this).toggleClass('bg-light bg-blue-op border-info');
        })

        // list modals
        $(".list-modal .item").each(function () {
            $(this).click(function () {
                $('.list-modal .confirm-link').attr("href", $(this).data('link'));
                $('.list-modal .confirm-target').attr("data-target", $(this).data('target'));
            })
        });

        // expired inputs
        $('.expire-date').each(function () {
            var start = new Date($(this).val()),
                end = new Date(),
                diff = new Date(end - start),
                day = Math.floor(diff / 1000 / 60 / 60 / 24);
            if (day > 30) {
                var months = Math.floor(day / 31);
                var days = Math.floor(day - (months * 30));
                $(this).addClass('expired');
                $(this).parent().find('.expire-details').text("انتهى منذ " + months + " شهر و " + days + " يوم ");
            }
        });

        // topbar date
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var minutes = minutes < 10 ? '0' + minutes : minutes;
        var ampm = hours >= 12 ? 'م' : 'ص';

        hours >= 12 ? 'pm' : 'am';


        var month = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        var day = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

        var time = d.getHours() + ":" + minutes;
        var date = day[d.getDay() + 1] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + '  |   بتوقيت القاهرة  ' + " " + time + " " + ampm;

        $('.top-bar .date p').text(date);


        // filter factories
        $('.filter-facs').on('input', function () {
            var value = $(this).val();

            $('.datalist .form-check-label').filter(function () {
                if ($(this).text().indexOf(value) >= 0) {
                    $(this).parent().removeClass('d-none');
                    $(this).parent().addClass('d-block');
                } else {
                    $(this).parent().removeClass('d-block');
                    $(this).parent().addClass('d-none');
                }
            })
        });


        // filter subject names
        $('#local').click(function (e) {
            $('#subjectList').val('');
            $('#local, #all').removeClass('active');
            $('#local').addClass('active');
            $('#allDropdown').removeClass('show w-100 d-block');
            $('#localDropdown').addClass('show w-100');
            $('.local').removeClass('d-none');
            $('#noAllItems, #noLocalItems').removeClass('d-flex');
            $('#noAllItems, #noLocalItems').addClass('d-none');
            e.stopPropagation();
            e.preventDefault();
        });

        // if no items on search
        $('#all, #all1').click(function (e) {
            $('#subjectList').val('');
            $('#local, #all').removeClass('active');
            $(this).addClass('active');
            $('#localDropdown').removeClass('show w-100 d-block');
            $('#allDropdown').addClass('show w-100');
            $('.all').removeClass('d-none');
            $('#noAllItems, #noLocalItems').removeClass('d-flex');
            $('#noAllItems, #noLocalItems').addClass('d-none');
            e.stopPropagation();
            e.preventDefault();
        });

        $('.filter-names').on('input', function () {
            var value = $(this).val();
            $(this).dropdown('show');

            if ($('#localDropdown').hasClass('show')) {
                $('.dropdown-menu .local').filter(function () {
                    if ($(this).text().indexOf(value) >= 0) {
                        $(this).removeClass('d-none');
                        $(this).addClass('d-block');
                    } else {
                        $(this).removeClass('d-block');
                        $(this).addClass('d-none');
                    }
                })

                if ($('.local.d-block').length == 0) {
                    $('#noLocalItems').removeClass('d-none');
                    $('#noLocalItems').addClass('d-flex');
                } else {
                    $('#noLocalItems').removeClass('d-flex');
                    $('#noLocalItems').addClass('d-none');
                }

            } else if ($('#allDropdown').hasClass('show')) {
                $('.dropdown-menu .all').filter(function () {
                    if ($(this).text().indexOf(value) >= 0) {
                        $(this).removeClass('d-none');
                        $(this).addClass('d-block');
                    } else {
                        $(this).removeClass('d-block');
                        $(this).addClass('d-none');
                    }
                })

                if ($('.all.d-block').length == 0) {
                    $('#noAllItems').removeClass('d-none');
                    $('#noAllItems').addClass('d-flex');
                } else {
                    $('#noAllItems').removeClass('d-flex');
                    $('#noAllItems').addClass('d-none');
                }
            }
        });

        // remove validation msg
        $('.modal').on('hidden.bs.modal', function () {
            $(this).find('input').val('');
            $(this).find('.not-valid').html('');
        });

        $('#subCategoriesSlider .owl-next').click(function () {
            $('#subCategoriesSlider .owl-prev').show();
        });

        (jQuery);
    });
}

function goToStep(stepID) {
    window.scrollTo(0, 300);
    $('.active').removeClass('fade show active');
    $('#' + stepID + 'Link').addClass('active');
    $('#' + stepID).addClass('fade show active');
}

function subCategoriesSlider() {
    $('#subCategoriesSlider').owlCarousel({
        rtl: getDirection === 'rtl' ? true : false,
        loop: false,
        margin: 15,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: getDirection === 'rtl' ? ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'] : ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        navSpeed: 700,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

}