$(document).ready(function() {
    $(".skroll-arrow__ln").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#application").offset().top
        }, 1e3)
    }), $(".eee").on("click", function(o) {
        return $("html,body").animate({
            scrollTop: 0
        }, "slow"), !1
    }), $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scroll-up").fadeIn() : $(".scroll-up").fadeOut()
    }), $(".application-form-phone").mask("+3 (8099)-99-99-999")
});


var clock;
        
        $(document).ready(function() {
            var clock;

            clock = $('.clock').FlipClock({
                clockFace: 'DailyCounter',
                autoStart: false,
                callbacks: {
                    stop: function() {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });
                    
            clock.setTime(220880);
            clock.setCountdown(true);
            clock.start();

        });