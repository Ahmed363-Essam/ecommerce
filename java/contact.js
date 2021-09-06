let y3 = $("nav.navbar").innerHeight();

$("body").css("padding-top",y3);

$(document).ready(function() {
	$('.mySelector').funnyText({
		speed: 700,
		borderColor: 'var(--second-color)',
		activeColor: 'black',
		color: 'white',
		fontSize: '85px',
		direction: 'both'
	});
});


$(window).on("load",function()
{
    $(".load").fadeOut(4000)
})

new WOW().init();
