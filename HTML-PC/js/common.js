(function($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });
        $("#to_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    }




    //onCLick
    function onCLick() {
        $('#vibeji-ham,.close-menu').off('click').on('click', function () {
            $('.main-left').toggleClass('open');
            $('body').toggleClass('overflow');
        });
        $('.open-comment,.close-comment').off('click').on('click', function () {
            $('.slide-comment').toggleClass('open');
            $('body').toggleClass('overflow');
        });
    }

    function handleToggleClasses() {
        const screenWidth = screen.width; 
        // Gắn sự kiện cho btn-thaoluan
        $('.btn-thaoluan').off('click').on('click', function () {
            if (screenWidth <= 1025) {
                if ($('.main-detail').hasClass('hidden-thaoluan')) {
                    $('.main-detail').removeClass('hidden-thaoluan').addClass('hidden-menu');
                } else {
                    $('.main-detail').addClass('hidden-thaoluan').removeClass('hidden-menu');
                }
            } else {
                $('.main-detail').toggleClass('hidden-thaoluan');
                $('.main-detail').removeClass('hidden-menu');
            }
        });

        // Gắn sự kiện cho btn-menu
        $('.btn-menu').off('click').on('click', function () {
            if (screenWidth <= 1025) {
                if ($('.main-detail').hasClass('hidden-menu')) {
                    $('.main-detail').removeClass('hidden-menu').addClass('hidden-thaoluan');
                } else {
                    $('.main-detail').addClass('hidden-menu').removeClass('hidden-thaoluan');
                }
            } else {
                $('.main-detail').toggleClass('hidden-menu');
                $('.main-detail').removeClass('hidden-thaoluan');
            }
        });
        $('.main-detail').removeClass('hidden-thaoluan hidden-menu');
        if (screenWidth <= 1280) {
            $('.main-detail').addClass('hidden-thaoluan');
        }
    }

    //slide Gallery
    function swiper() {
        var swiperFasca = new Swiper(".box-calendar-live .swiper-container", {
            spaceBetween: 0,
            loop: false,
            navigation: {
                nextEl: ".box-calendar-live .swiper-button-next",
                prevEl: ".box-calendar-live .swiper-button-prev",
            },
            speed: 1000,
        });
    }

    function stickyDetector() {
        const stickyElements = document.querySelectorAll('.sticky');

        for (const el of stickyElements) {
            el.insertAdjacentHTML('beforebegin', "<div class='sticky-anchor clearfix'></div>");
        }

        var observer = new IntersectionObserver(function(entries) {
            const stickyEl = document.querySelector(".sticky");
            if (entries[0].intersectionRatio === 0) {
                stickyEl.classList.add("sticky--active");
            } else if (entries[0].intersectionRatio === 1) {
                stickyEl.classList.remove("sticky--active");
            }
        }, {
            threshold: [0, 1]
        });
        observer.observe(document.querySelector(".sticky-anchor"));

    }
    $(function() {
        backToTop();;
        onCLick();
        handleToggleClasses();
        swiper();
        stickyDetector();
    });
})(jQuery);