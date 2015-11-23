$(function () {
	$(".button-collapse").sideNav();
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	$("section").css("height", h);
	var $header = $('header'),
		$logo = $('#logo'),
		$chevron = $('#chevron'),
		$scrollr = $('#4'),
		tl = new TimelineLite();
	tl.fromTo($logo, 1, {
		autoAlpha: 0,
		scale: 0
	}, {
		scale: 1,
		autoAlpha: 1,
		ease: Power2.easeOut
	}, '+=1').fromTo($header, 2, {
		top: '-200px',
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		top: '0',
		ease: Power4.easeOut
	}).fromTo($chevron, 2, {
		y: '300px',
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		y: '50px',
		ease: Circ.easeOut
	}, '-=2');
});