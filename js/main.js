$(document).ready(function(){
	bigText = $('.text-slider').slick({
	slidesToScroll: 1,
	arrows: false,
	pauseOnHover: false

	});
	$('.image-slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		pauseOnHover: false,
		onBeforeChange: afterChange
	});
});



function afterChange(x,y){
	bigText.slickGoTo(y);
}

//not a super fan of this implementation. Should have scoped down big text and separated responsibility a bit more.
//perhaps onload, instantiate both (all three) of the sliders.  