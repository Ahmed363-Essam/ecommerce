$('.sponsor .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
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


$(".department .left li").each(function()
{
    $(this).on("click",function()
    {

        remove();

        $(this).addClass("active");
        let x = $(this).attr("data-choose");

        $("#"+x).siblings().fadeOut(300,function()
        {
            $(this).removeClass("active");
        });

        $("#"+x).fadeIn(300,function()
        {
            $(this).addClass("active")
        })

        
    })
});

let y = Array.from(document.querySelectorAll(".department .left li"))

function remove()
{
    y.forEach(function(y)
    {
        y.classList.remove("active");
    })
}

let y1 = $("nav.navbar").innerHeight();

$("body").css("padding-top",y1);
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

$(window).on("load",function()
{
    $(".load").fadeOut(4000)
});


$(document).ready(function(){
    $('.venobox').venobox(); 
  });

  new WOW().init();
