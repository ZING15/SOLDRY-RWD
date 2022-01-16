//*Share*//
/*search bar show*/
let icon=document.querySelector(".icon");
let search=document.querySelector(".search");
icon.onclick=function(){
    search.classList.toggle("active");
}
/*inoput clear*/
let clear=document.getElementById("clear");
function clearInput(){
    let mysearch=document.getElementById("mysearchRwd");
    mysearch.value='';
}
clear.addEventListener("click",clearInput,false);

/*加入收藏*/
let heart=document.querySelector('.heart');
$(document).ready(function(){
    $('.heart').click(function(e){
        if(e.target.classList== "heart"){
            $(this).attr({
                src:'IMG/icon_heart_hover.png',
            }).addClass('remove');
        }else if(e.target.classList== "heart remove"){
            $(this).attr({
                src:'IMG/icon_heart_whiteline.png',
            }).removeClass('remove');
        }
    });
});

/*AOS js*/
AOS.init();

//*Home*//
/*ad carousel*/
$(document).ready(function(){
    $('.ad.owl-carousel').owlCarousel({
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


//*Brief*//
/*filter*/
let filter=document.querySelector(".filter h2");
let form=document.querySelector("form");
$('.filter h2').click(function(){
    $('form').toggleClass("none");
});


//*Detail*//
/*show large*/
function showLarge(e){
    document.getElementById("large").src=e.target.src;
}
function begin(){
    let smalls=	document.querySelectorAll(".productdetail .small img ");
    for(let i=0;i<smalls.length;i++){
        smalls[i].onclick=showLarge
        }
    }
window.addEventListener("load", begin, false);
/*small carousel*/
$(document).ready(function(){
$('.small.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    dotsEach:true,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        768:{
            items:5
        },
        1400:{
            items:4
        }
    }
})
});
/*recomand carousel*/
$(document).ready(function(){
$('.recomand .owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        1400:{
            items:5
        }
    }
})
});

//* Map*//
/*show card*/
$(document).ready(function(){
    $('.landmarkIcon').click(function(){
        let name= $(this).attr('id');
        $(`.${name}.cardContent`).stop(true).slideToggle(500,'linear');
    });
});

//*ARTICLE*//
/*filter*/
$(document).ready(function(){
    $('.filter h2').click(function(){
        $('.articlelist').stop().slideToggle(500);
    });
});

//*CHATBOX*//
/*dealprice*/
$(document).ready(function(){
    $('.dealprice button').click(function(){
        let price=$('.dealprice form input').val();
        $('.send textarea').append('我希望的價錢是 $'+price);
    });
/*textarea enter*/
    $('textarea').keypress(function(event){
        let keycode = (event.keyCode,event.keyCode,event.which);
        if(keycode == '13'){
            let local=$(".user.local").last().clone();
            $(".dialogue").append(local).find(".txt p").last().text($("textarea").val());
            $("textarea").val('');
        }
      });
});