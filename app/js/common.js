$('.house-slider').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.house-slider__nav',
    appendDots: '.house-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1.99999 14.9999C1.76634 15.0004 1.5399 14.919 1.35999 14.7699C1.25873 14.686 1.17503 14.5829 1.11368 14.4665C1.05233 14.3502 1.01453 14.2229 1.00245 14.0919C0.990378 13.9609 1.00426 13.8289 1.0433 13.7033C1.08235 13.5777 1.14579 13.461 1.22999 13.3599L5.70999 7.99994L1.38999 2.62994C1.30692 2.52765 1.24489 2.40996 1.20746 2.28362C1.17003 2.15728 1.15794 2.02479 1.17187 1.89376C1.18581 1.76273 1.22551 1.63575 1.28868 1.52011C1.35186 1.40447 1.43726 1.30246 1.53999 1.21994C1.64346 1.1289 1.76462 1.06024 1.89588 1.01825C2.02715 0.976258 2.16567 0.961855 2.30276 0.97594C2.43986 0.990024 2.57256 1.03229 2.69254 1.1001C2.81252 1.1679 2.9172 1.25977 2.99999 1.36994L7.82999 7.36994C7.97707 7.54887 8.05748 7.77332 8.05748 8.00494C8.05748 8.23657 7.97707 8.46101 7.82999 8.63994L2.82999 14.6399C2.72967 14.761 2.60224 14.8566 2.45803 14.9192C2.31382 14.9817 2.1569 15.0094 1.99999 14.9999Z"/>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M7.00001 14.9999C7.23366 15.0004 7.4601 14.919 7.64001 14.7699C7.74127 14.686 7.82497 14.5829 7.88632 14.4665C7.94767 14.3502 7.98547 14.2229 7.99755 14.0919C8.00962 13.9609 7.99574 13.8289 7.9567 13.7033C7.91765 13.5777 7.85421 13.461 7.77001 13.3599L3.29001 7.99994L7.61001 2.62994C7.69308 2.52765 7.75511 2.40996 7.79254 2.28362C7.82997 2.15728 7.84206 2.02479 7.82813 1.89376C7.81419 1.76273 7.77449 1.63575 7.71132 1.52011C7.64814 1.40447 7.56274 1.30246 7.46001 1.21994C7.35654 1.1289 7.23538 1.06024 7.10412 1.01825C6.97285 0.976258 6.83433 0.961855 6.69724 0.97594C6.56014 0.990024 6.42744 1.03229 6.30746 1.1001C6.18748 1.1679 6.0828 1.25977 6.00001 1.36994L1.17001 7.36994C1.02293 7.54887 0.942523 7.77332 0.942523 8.00494C0.942523 8.23657 1.02293 8.46101 1.17001 8.63994L6.17001 14.6399C6.27033 14.761 6.39776 14.8566 6.54197 14.9192C6.68618 14.9817 6.8431 15.0094 7.00001 14.9999Z"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

//?????????????? ????????????
$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});
//?????????????? ???????????? end


$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});


// ?????????????????? ???????? (??????????????????)
$(function () {
    var overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// mail
$(".form").submit(function (e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("?????????????? ???? ????????????! ?????????? ???? ?? ???????? ????????????????.");
        $(".form").trigger("reset");
    });
    return false;
});