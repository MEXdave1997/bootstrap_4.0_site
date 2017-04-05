function main() {
	$('#About').on('click', function() {
		$('html,body').animate({
			scrollTop:$('#About').offset().top
		}, 1500);
	});
	$('.nav-item').on('click', function() {
		$(this).toggleClass('active');
	});
}

$(document).ready(main);