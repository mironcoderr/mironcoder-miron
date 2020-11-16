

// FOR RESPONSIVE DROPDOWN MENU
$(function () {
    $(".navbar-dropdown a").click(function() {
        $(this).next().toggle();
        if($('.dropdown-list:visible').length > 1) {
            $('.dropdown-list:visible').hide();
            $(this).next().show();
        }
    }); 
});


// FOR DROPDOWN INDICATOR ROTATE
$(".dropdown-indicator").on('click', function(){
    $(".dropdown-indicator").removeClass('active');
    $(this).addClass('active');
})


// FOR RESPONSIVE SLIDE NAVBAR
$(".navbar-toggle").on('click', function(){
    $(".navbar-slide").addClass('active');
    $(".body").addClass('active');
    $(".navbar-cross").on('click', function(){
        $(".navbar-slide").removeClass('active');
        $(".body").removeClass('active');
    })
})


// FOR CURRENT PAGE ACTIVE NAVBAR
$(document).ready(function() {
    var url = window.location.href;
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substr(url.lastIndexOf("/") + 1);

    if(url == ''){
        url = 'index.html';
    }

    $('.navbar-item').each(function(){
        var href = $(this).find('a').attr('href');

        if(url == href){
            $(this).addClass('active');
        }
    });
});


// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 150){
        $(".navbar-part").addClass("navbar-fixed");
    }else{
        $(".navbar-part").removeClass("navbar-fixed");
    }
});


// FOR TOGGLE SWITCH DARK & LIGHT THEME
const btn = document.querySelector(".gear-btn");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "assets/source/css/light-theme.css") {
    theme.href = "assets/source/css/dark-theme.css";
  } else {
    theme.href = "assets/source/css/light-theme.css";
  }
});


// FOR BACK2TOP BUTTON
$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll > 1000){
        $(".back2top-btn").show();
    }else{
        $(".back2top-btn").hide();
    }
});


// FOR RESUME CATEGORY ACTIVE BUTTON
$(".cate-btn").on("click", function(){
    $(".cate-btn").removeClass("active");
    $(this).addClass("active");
});


// FOR RESUME CATEGORY ACTIVE CONTENT
function filter(active) {
    hide = document.getElementsByClassName('cate-active');
    for (i = 0; i < hide.length; i++) {
      hide[i].style.display = 'none';
    }
  
    let show = document.getElementsByClassName(active);
    for (i = 0; i < hide.length; i++) {
      show[i].style.display = 'block';
    }
}

// FOR FAQ SECTION ACCORDION
jQuery(document).ready(function($){
    var panels = $(".faq-ans").hide();
    panels.first().show();
    
     $(".faq-que").click(function(){
         var $this = $(this);
         panels.slideUp();
         $this.next().slideDown();
    });
});


// FOR PORTFOLIO CATEGORY ACTIVE MENU
$(".menu").on("click", function(){
    $(".menu").removeClass("active");
    $(this).addClass("active");
});
  

// FOR PORTFOLIO PAGINATION
$(".page-link").on("click", function(){
    $(".page-link").removeClass("active");
    $(this).addClass("active");
});
  












