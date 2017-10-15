$('document').ready(function() {
	initialize();
});

$(window).resize(function() {
	initialize();
});

// initialized DOM elements based on viewport dimensions
function initialize() {
	// main logo and headline
	$('#main-logo-container, #main-headline').addClass('show');
	
	var viewportWidth = $(window).outerWidth();
	var viewportHeight = $(window).outerHeight();
	var navbarHeight = $('nav').outerHeight();	
	
	var viewportRatio = viewportHeight/viewportWidth;
		
	// sets main section height to viewport height minus navbar height
	$('#main-home').css('height' , viewportHeight + 'px');
	
	// sets section min-height to viewport height minus navbar height
	$('#section2').css('min-height' , viewportHeight + 'px');
	
	var mainHomeWidth = $('#main-home').outerWidth();
	var mainHomeHeight = $('#main-home').outerHeight();
	var mainRatio = mainHomeHeight/mainHomeWidth;
	
	var sectionTwoWidth = $('#section2').outerWidth();
	var sectionTwoHeight = $('#section2').outerHeight();
	var sectionTwoRatio = sectionTwoHeight/sectionTwoWidth;
	
	// flash the scroll arrow
	setTimeout(function() {
		setInterval(function(){
			$('#scroll-arrow').toggleClass('flash');
		}, 1000);
	}, 1500);
	
	// main-video-bg
	//$('#main-video-bg').css('top', 'calc(50% + ' + navbarHeight + 'px');
	if (mainRatio < .5625) {
		$('#main-video-bg').css({'width' : mainHomeWidth + 'px', 'height' : 'auto'});
	} else {
		$('#main-video-bg').css({'width' : 'auto', 'height' : mainHomeHeight + 'px'});
	}
	
	// simulates css 'cover' for chalkboard-bg
	if (sectionTwoRatio < .72) {
		$('.chalkboard-bg').css({'width' : '100%', 'height' : 'auto'});
	} else {
		$('.chalkboard-bg').css({'width' : 'auto', 'height' : '100%'});
	}
	
	// special cards
	var cardHeight = 0;
	var cardFooterHeight = $('.card-footer').outerHeight();
	$('.special-card').each(function() {
		if ($(this).find('.card-content').outerHeight() > cardHeight) {				
			cardHeight = $(this).find('.card-content').outerHeight();
			$('.special-card').css('height', cardHeight + cardFooterHeight + 'px');
		}
	});
	
	// card flip animation
	$('.special-card').hover(function(){
		$(this).addClass('applyflip');
	},function(){
		$(this).removeClass('applyflip');
	});
	
}
	