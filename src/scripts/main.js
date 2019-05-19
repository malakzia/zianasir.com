'use strict';

// console.info('Yeah!! Milligram is amazing.');

new TypeIt('#homeTopTypeItElement', {
		loop: true,
		speed: 100,
		startDelay: 900
	})
	.type('Doctor')
	.pause(1000)
	.delete()
	.type('Judge')
	.pause(1000)
	.go();
