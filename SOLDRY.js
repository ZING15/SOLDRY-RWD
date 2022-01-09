//HOME//
let icon=document.querySelector(".icon");
let search=document.querySelector(".search");
icon.onclick=function(){
    search.classList.toggle("active");
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dotsEach:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1400:{
                items:1
            }
        }
    })
});

AOS.init();

//BELIEF//
let icon=document.querySelector(".icon");
let search=document.querySelector(".search");
icon.onclick=function(){
    search.classList.toggle("active");
}

let filter=document.querySelector(".filter h2");
let form=document.querySelector("form");
filter.onclick=function(){
    form.classList.toggle("active");
    form.classList.toggle("none");
}