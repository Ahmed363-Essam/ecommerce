let x = Array.from(document.querySelectorAll("nav.navbar .navbar-nav.list1 li a"));

x.forEach(function(x)
{

    x.onclick=function()
    {
        remove();
        x.classList.add("active")
    }
})

function remove()
{
    x.forEach(function(x)
    {
        x.classList.remove("active")
    })
}

/////// add active to links /////////////

//////// dynamic height ///////////




let y = $("nav.navbar").innerHeight();

$("body").css("padding-top",y)

let w = $(window).innerHeight();
let header = $(".header").innerHeight(w);

let carousel = $(".carousel-inner").innerHeight(w);

$(window).on("resize",function()
{
    let w = $(window).innerHeight();
    let header = $(".header").innerHeight(w);
    let carousel = $(".carousel-inner").innerHeight(w);

});
//////// end dynamic height ///////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    lazyLoad:true,
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
            loop:true,
    
        }
    }
});

//////////////////////////////



$(window).on("scroll",function()
{
    let x4 = $(this).scrollTop();
    let x5 = $(".stat").innerHeight();
    let x3 = $(".stat").offset().top;
    let x6 = $(this).innerHeight();

    if(x4>(x3+x5)-x6)
    {
        $('.timer').countTo();
        $('.timer1').countTo();
        $('.timer2').countTo();
        $('.timer3').countTo();
    }
})
/////////////////////////////


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


new WOW().init();
