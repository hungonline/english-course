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


    $(function() {
        backToTop();;
        onCLick();
        swiper();
    });
})(jQuery);