'use strict';
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}
	else{
		$('nav').removeClass('black');
	}
})

// console.info('Yeah!! Milligram is amazing.');

new TypeIt('#homeTopTypeItElement', {
		loop: true,
		speed: 100,
		startDelay: 900
	})
	.type('Nayi')
	.pause(1000)
	.delete()
	.type('Judge')
	.pause(1000)
	.go();

	