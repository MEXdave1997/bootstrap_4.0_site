function main() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop: target.offset().top-60
			}, 1000);
		}
	});
	$('.navbar-nav li a').on('click', function(e){
		$ ('.navbar-nav li').removeClass('active');

		var $parent = $(this).parent();
		if (!$parent.hasClass('active')) {
			$parent.addClass('active');
		}

		e.preventDefault();
	});
}

$(document).ready(main);