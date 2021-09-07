$(window).on("load",function()
{
    $(".load").fadeOut(4000)
})

$(document).ready(function() {
	$('.mySelector').funnyText({
		speed: 700,
        
		borderColor: 'var(--second-color)',
		activeColor: 'black',
		color: 'white',
		fontSize: '49px',
		direction: 'both'
	});
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    lazyLoad:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
            loop:true
        },
        600:{
            items:3,
            
            loop:true
        },
        1000:{
            items:4,
            dots:true,
            loop:true
        }
    }
});

$(".noura  .item  .over1 li i.two").on("click",function()
{
	$(this).toggleClass("icon2")	
});

var mixer = mixitup('.malak');








document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("clear"))
    {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
})


$(window).on("scroll",function()
{
    //$(this).innerHeight()
    console.log($(this).scrollTop())
    if($(this).scrollTop() > $(this).innerHeight())
    {
        $(".up").fadeIn()
    }
    else
    {
        $(".up").fadeOut()
    }

})

$(".up").on("click",function()
{
    $("body , html").animate({
        scrollTop:0
    })
});






let width = $(window).innerWidth();

$(window).on("resize",function()
{
    width = $(window).innerWidth();
    if(width > 1520 +"px")
    {
        
            $('.mySelector').funnyText({
                fontSize: '40px',
            });
        console.log("width")
    }

})