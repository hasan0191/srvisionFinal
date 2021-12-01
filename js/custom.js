
$(document).ready(function(){

var slider = tns({
 container: '.tns-ecommerce',
    items: 1,
    autoplayTimeout: 3000,
    axis: "vertical",
    speed: 1500,
    nav: false,
    autoplayDirection: "backward",
    autoplay: true
    });

var slider = tns({
    container: '.tns-testimonial',
    items: 1,
    autoplayTimeout: 3000,
    speed: 1500,
    mouseDrag: true,
    autoplay: true
  });

  var slider = tns({
    container: '.tns-brand',
    items: 3,
    responsive:{
    			"0": {
			      "items": 1
			    },
			    "340": {
			      "items": 2
			    },
			    "500": {
			      "items": 3
			    }
			  },
    autoplayTimeout: 2000,
    speed: 800,
    gutter: 10,
    startIndex: 3,
    mouseDrag: true,
    nav: false,
    autoplay: true
  });

  var slider = tns({
    container: '.tns-client',
    items: 3,
    responsive:{
    			"0": {
			      "items": 1
			    },
			    "340": {
			      "items": 2
			    },
			    "500": {
			      "items": 3
			    }
			  },
    autoplayTimeout: 2500,
    speed: 1500,
    gutter: 10,
    mouseDrag: true,
    nav: false,
    autoplay: true
  });


//Active menu area
$('.navbar-nav li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
  

  //Top arrow area

$('.top').click(function(){
    $('html, body').animate({
      scrollTop:0
    },1000);
});


$('.top').hide();

$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();

    if(ourWindow<500){
        $('.top').fadeOut();
    }else{
      $('.top').fadeIn();
    }

    //menu fixed
    if (ourWindow>100) {
      $('body').addClass('fixed');
    }else{
      $('body').removeClass('fixed');
    }
});

// section target from menu
$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault();

    var target = this.hash;
    
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 500);

});


}); //document.ready end






