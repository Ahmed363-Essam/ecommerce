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



let ahmed = Array.from(document.querySelectorAll(".fa-shopping-cart"));

let img = Array.from(document.querySelectorAll(".noura img"));

let noura = Array.from(document.querySelectorAll(".noura .h3 .p2"));

let h3 = Array.from(document.querySelectorAll(".lead5"))

let malak1 = document.querySelector(".malak1")

for(let i=0;i<ahmed.length;++i)
{
    ahmed[i].addEventListener("click",function(ahmed)
    {
        let x1 = img[i].getAttribute("src");

        console.log(x1)

        let x2 = noura[i].textContent;
        let x3 = h3[i].textContent;
        
        let malak = document.createElement("div");
        malak.setAttribute("class","malak4");
        malak1.appendChild(malak);
        /////////////////////////////////

        let container = document.createElement("div");
        container.setAttribute("class","container")
        malak.appendChild(container);
        //////////////////////////////////
        let tamer = document.createElement("div");
        tamer.setAttribute("class","tamer")
        container.appendChild(tamer);
        ////////////////////////////
        let img1 = document.createElement("div");
        img1.setAttribute("class","img")
        tamer.appendChild(img1);
        ////////////////////////////
        let src1 = document.createElement("img");
        src1.setAttribute("src",x1);
        img1.appendChild(src1);
        //////////////////////////
        let left = document.createElement("div");
        left.setAttribute("class","left5");
        tamer.appendChild(left);
        ////////////////////////////////

        let h2 = document.createElement("h2");
        h2.setAttribute("class","h1");
        left.appendChild(h2);
        ///////////////////////////
        let text1 = document.createTextNode(x3);
        h2.appendChild(text1);
        /////////////////////
        let ul = document.createElement("ul");
        ul.setAttribute("class","list-unstyled");
        left.appendChild(ul);
        /////////////////////////
        let li1 = document.createElement("li");
        ul.appendChild(li1);

        let i1 = document.createElement("i");
        i1.classList.add("fa","fa-star");
        i1.setAttribute("aria-hidden","true");
        li1.appendChild(i1);

        ///////////////////////////////////////////
        let li2 = document.createElement("li");
        ul.appendChild(li2);

        let i2 = document.createElement("i");
        i2.classList.add("fa","fa-star-half-o");
        i2.setAttribute("aria-hidden","true");
        li2.appendChild(i2);
        ////////////////////////////////////////////

        let calc = document.createElement("div");
        calc.setAttribute("class","calc");
        left.appendChild(calc);
        ///////////////////////////////////////
        let span1 = document.createElement("span");
        span1.setAttribute("class","minus");
        calc.appendChild(span1);
        ///////////////////////////////////
        let i3 = document.createElement("i");
        i3.classList.add("fa","fa-minus");
        i3.setAttribute("aria-hidden","true");
        span1.appendChild(i3);
        //////////////////////////
        let p5 = document.createElement("p");
        p5.setAttribute("class","asr1");
        calc.appendChild(p5);
        /////////////////
        p5.textContent=1;
        ////////////////////////
        let span10 = document.createElement("span");
        span10.setAttribute("class","plus");
        calc.appendChild(span10);
        ///////////////////////////////////
        let i4 = document.createElement("i");
        i4.classList.add("fa","fa-plus");
        i4.setAttribute("aria-hidden","true");
        calc.appendChild(i4);
        //////////////////////////

        let p10 = document.createElement("p");
        p10.setAttribute("class","price");
        left.appendChild(p10);
        /////////////////////////////
        let txt10 = document.createTextNode("price :");
        p10.appendChild(txt10);
        /////////////////////////////////////
        let span100 = document.createElement("span");
        span100.setAttribute("class","price1");
        p10.appendChild(span100);
        /////////////////////////////////
        let text10 = document.createTextNode(x2);
        span100.appendChild(text10)
        /////////////////////////////

        let p110 = document.createElement("p");
        p110.setAttribute("class","price");
        left.appendChild(p110);
        /////////////////////////////
        let txt101 = document.createTextNode("price :");
        p110.appendChild(txt101);
        /////////////////////////////////////
        let span101 = document.createElement("span");
        span101.setAttribute("class","price1");
        p110.appendChild(span101);
        /////////////////////////////////
        let text101 = document.createTextNode("20");
        span101.appendChild(text101)
        ////////////////////////////

        let p404 = document.createElement("p");
        p404.setAttribute("class","delete");
        left.appendChild(p404);
        //////////////////////////////////
        let i9 = document.createElement("i");
        i9.classList.add("fa","fa-trash-o");
        i9.setAttribute("aria-hidden","true");
        p404.appendChild(i9);
        //////////////////////////////////////
        let p500 = document.createElement("p");
        p500.setAttribute("class","total");
        left.appendChild(p500);
        /////////////////////////////////////


        ///////////////////////////////////////////////////
        
        let tamer10 = Array.from(document.querySelectorAll(".tamer"));

        console.log(tamer10.length);

        let p4040 = document.querySelector(".navbar .nav-item .lead")
        p4040.textContent = tamer10.length;


    })
};



$(".fa-cart-arrow-down").on("click",function(e)
{
    e.preventDefault();
    
    $(".malak1").fadeIn();
});

$(".malak1 .close").on("click",function()
{
    $(".malak1").fadeOut()
});


let remove = document.querySelector(".delete");

function delete1()
{
    document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("fa-trash-o"))
    {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})

}

delete1();

let price4 = parseInt(document.querySelector(".asr1").textContent);

let price7 = parseInt(document.querySelector(".price1").textContent);

let price8 = parseInt(document.querySelector(".price4").textContent);

document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("fa-minus"))
    {
        price4=price4-1;
        
        $(".asr1").text(price4);

        let x ;

        x = price7 * price4;
        $(".price4").text(x);
    }
});

document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("fa-plus"))
    {
        price4=price4+1;
        
        $(".asr1").text(price4);

        let x ;

        x = price7 * price4;
        $(".price4").text(x);
    }
});


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

$(window).on("load",function()
{
    $(".load").fadeOut(4000)
})


$(document).ready(function(){
    $('.venobox').venobox(); 
});

$(document).ready(function(){
    $('.venobox1').venobox(); 
});
//new WOW().init();


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