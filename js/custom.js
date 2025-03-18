
$(document).ready(function () {
  const $toggleButton = $('.toggle');
  const $sidebarNav = $('nav');

  $toggleButton.on('click', function () {
    $sidebarNav.toggleClass('open');
    $toggleButton.toggleClass('open');
  });
});





// 


$('.product-linup-slider').owlCarousel({
  loop:true,
  center:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1.5
      },
      1000:{
          items:2.5
      }
  }
});



// 

$('.Testimonial-Slider').owlCarousel({
  loop:true,
  center:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1.5,
      },
      1000:{
          items:2.1
      }
  }
});






