
$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
         scrollTop: $(href).offset().top - 85
    }, {
        duration: 600,
        easing: "linear" 
    });
    return false;
});
