$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 600){$('.cabecalho').addClass('active');}
        if ($(window).scrollTop() > 600){$('.cabecalho').css('top','0px');}
        if ($(window).scrollTop() < 600 && $(window).scrollTop() > 401){$('.cabecalho').css('top','-100px');}
        if ($(window).scrollTop() < 500){$('.cabecalho').removeClass('active');}
        if ($(window).scrollTop() < 400){$('.cabecalho').css('top','0px');}
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
            return false;
        }
    }
});
});