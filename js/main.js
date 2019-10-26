
// ------------menu-----------------
$(document).ready(function(){
    $(".menu-icono").click(function(){
        $(".menu-icono").toggleClass("active")
    })
    $(".menu-icono").click(function(){
        $(".menu-principal").toggleClass("active")
    })    
})
// ---------------banner--------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0){
        $('header').addClass('scrolled');
    }
    else{
        $('header').removeClass('scrolled');
    }
})
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0){
        $('.cielo').addClass('scrolled');
    }
    else{
        $('.cielo').removeClass('scrolled');
    }
})

// CONTACT US

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.sidebar-contact').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
})
// ------------- animacion de las secciones al hacer scroll----------------

AOS.init({
    offset: 200,
    duration: 2000,
});
// ---------- boton scrollTop-------------
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.boton-top').fadeIn();
        }else{
            $('.boton-top').fadeOut();
        }
    });
    // ----- smooth scrolling to top---
        $('.boton-top').click(function(){
            $('html,body').animate({scrollTop: 0}, 500)
        })
});
// ----------------- Loader ---------------------

var Loader;
function loadNow(opacity){
    if(opacity <= 0){
        displayContect();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.05)
        }, 100);
    }
}
function displayContect(){
    loader.style.display = 'none';
    document.getElementById('contenido-completo').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function(){
    loader = document.getElementById('loader');
    loadNow(1);
})