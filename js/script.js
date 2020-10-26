$(document).ready(function (){
    $('.works__zoom, .works__link').on('focus', function(e){
        $(this).parents('.works__item').addClass('works__item--active')
    });
    $('.works__btns button, .works__btns a').on('blur', function(e){
        $(this).parents('.works__item').removeClass('works__item--active')
    });
    function moveProgress(node, nodeLine, tooltip, animationDuration = 1500){
        const progressElement = $(node);
        progressElement.each(function(value, item){
            $(item).find(nodeLine).animate({
                width: item.dataset.percent + '%'
            }, animationDuration);
            $(item).find(tooltip).animate({
                left: item.dataset.percent + '%'
            }, animationDuration);
        })
    }
    let animate = true
    $(window).scroll(function(){

        if($('.skills').offset().top <=   $(window).scrollTop() + 150){
            if(animate){
                moveProgress('.progress__desc', '.progress__line', '.progress__tooltip')
                $('.progress__tooltip').css('display', 'block')
            }
            animate = false;
        }

    })

    $('.carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:[],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            980:{
                items:5
            }
        }
    })
    


})