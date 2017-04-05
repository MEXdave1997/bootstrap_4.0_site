function main() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	// $('.nav-item').on('click', function() {
	// 	$(this).toggleClass('active');
	// });
}

$(document).ready(main);