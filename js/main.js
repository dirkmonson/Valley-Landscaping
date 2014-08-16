$(document).ready(function(){
	$('.image-slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		pauseOnHover: false,
		onAfterChange: afterChange
	});
});



function afterChange(x,y){
	console.log(y);
	console.log("eat a dick");
	$('.text-slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		pauseOnHover: false
		
	});
}