// Toggle menu after login
$(document).ready(function () {
  const $toggleButton = $('.toggle');
  const $sidebarNav = $('nav');

  $toggleButton.on('click', function () {
    $sidebarNav.toggleClass('open');
    $toggleButton.toggleClass('open');
  });
});



/*
****************************************
****** ANIMATION SCRIPT START **********
****************************************
*/






// Lenis Setup

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



gsap.registerPlugin(ScrollTrigger);


// PRELOADER ANIAMTION

window.addEventListener('load', function() {
  document.querySelector('.preloader-logo img').classList.add('animate-logo');
  
  setTimeout(function() {
    document.querySelector('.preloader').classList.add('preloader-finish');
    document.body.style.overflow = 'auto'; // Enable scrolling
  }, 1200);
});


function cardOverlapping() {


  if (window.innerWidth > 768) {

  const cards = document.querySelectorAll(".card_overlay");

  // Make sure each subsequent card has a higher zIndex
  // so that the newest card appears in front.
  cards.forEach((card, i) => {
    card.style.zIndex = i + 1; 
  });

  // Create the main timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pinned-section",
      start: "top top",
      end: "+=" + (window.innerHeight * 3),
      scrub: 0.1,
      pin: true,
      markers: false,
    }
  });

  // Animate each card in sequence
  cards.forEach((card, i) => {
    // Label for synchronization
    tl.addLabel(`card${i}`);

    // Animate the current card from the bottom of the screen to the center
    tl.fromTo(
      card,
      { y: window.innerHeight, scale: 1 },
      { y: 0, scale: 1, duration: 1, ease: "linear" },
      `card${i}`
    );

    // Shift and scale down all previously shown cards behind the new one
    if (i > 0) {
      for (let j = 0; j < i; j++) {
        const depth = i - j;
        // Each older card is smaller and further up
        let scaleVal = 1 - 0.07 * depth;        
        let yVal     = -50 - 50 * (depth - 1);

        // Clamp minimum scale so they never get too tiny
        if (scaleVal < 0.4) scaleVal = 0.4;

        tl.to(cards[j], {
          scale: scaleVal,
          y: yVal,
          duration: 1,
          ease: "power1.out"
        }, `card${i}`);
      }
    }
  });

}

}

// Call the function
cardOverlapping();







// document.addEventListener("DOMContentLoaded", function () {


// function videoScaleAnimation() {
//   const videoSection = document.querySelector(".video_scale_animation-main");
//   if (videoSection) {
//     // First timeline to handle video playback on enter.
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: videoSection, 
//         start: "top top", 
//         end: "bottom bottom", 
//         scrub: 0.2, 
//         markers: false,
//         onEnter: function () {
//           const video = document.getElementById('myVideo');
//           if (video) {
//             video.muted = true;
//             if (!video.hasAttribute('autoplay')) {
//               video.setAttribute('autoplay', 'true');
//             }
//             video.play();
//           }
//         },
//       }
//     });
    
//     // Second timeline for the scaling animation (only for wider screens).
//     if (window.innerWidth > 768) {
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: videoSection, 
//           start: "top top", 
//           end: "+=" + (window.innerHeight * 2), 
//           scrub: 0.2, 
//           markers: false,
//           pin: true,
//         }
//       })
//       .from(".video_scale_animation .has_video_scale", {
//         scale: 0.7,
//         borderRadius: "20px",
//       })
//       .to(".video_scale_animation .has_video_scale", {
//         scale: 1, 
//         borderRadius: "0px",
//       });
//     }
//   }
// }
// videoScaleAnimation();  

// });


document.addEventListener("DOMContentLoaded", function () {


// change border radius on scroll for individual sections
function changeBorderRadius() {
  if (window.innerWidth > 991) {
    const sections = document.querySelectorAll(".radius-top"); // sections to change border radius

    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section, // Each section triggers its own animation
          start: "top 100%", // Trigger when the top of the section is in view
          end: "top 50%", // End when the top of the section reaches 50% of the viewport
          scrub: 0.1, // Smooth scroll animation
          markers: false, // Debugging: enable markers (set to false when not needed)
        },
        borderRadius: "60px 60px 0 0", // Apply the border radius change
      });
    });
  }
}

// Run on load and resize to handle viewport changes
changeBorderRadius();
window.addEventListener("resize", changeBorderRadius);


function scalingImageEffect() {
  const images = document.querySelectorAll('.scaling_image-img');

  if (!images.length) {
    console.warn('No elements found with class .scaling_image-img');
    return;
  }

  images.forEach((image) => {
    gsap.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.5,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 70%', 
          end: 'bottom 30%',
          scrub: 0.3,
          markers: false,
          invalidateOnRefresh: true,
        }
      }
    );
  });
}

function scalingImageEffectd() {
  const elem = document.querySelectorAll('.enlarge__inView');

  if (!elem.length) {
    console.warn('No elements found with class .enlarge__inView');
    return;
  }


  if(window.innerWidth > 991) {

  elem.forEach((elements) => {
    gsap.fromTo(
      elements,
      { scale: 0.6 },
      {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements,
          start: 'top 75%', 
          end: 'bottom 30%',
          scrub: false,
          markers: false,
        }
      }
    );
  });
}
}





 



  scalingImageEffect();
  scalingImageEffectd();
});





document.addEventListener("DOMContentLoaded", function () {

  
document.querySelectorAll(".moving_boxContainer").forEach((section, index) => {
  const leftBox = section.querySelector(".left");
  const rightBox = section.querySelector(".right");

  if (leftBox && rightBox) {

    // Initially move left & right boxes behind the center one
    gsap.set(leftBox, { xPercent: 80 });
    gsap.set(rightBox, { xPercent: -80 });

    // Check screen width and apply animations only if width is greater than 768px
    if (window.innerWidth > 991) {

      // Animate left box into place
      gsap.to(leftBox, {
        xPercent: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reset", // Reset when scrolling up
          markers: false,
          id: `left-box-${index}`,
          invalidateOnRefresh: true
        }
      });

      // Animate right box into place
      gsap.to(rightBox, {
        xPercent: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reset",
          markers: false, // Remove debugging markers when done
          id: `right-box-${index}`,
          invalidateOnRefresh: true
        }
      });

    } else {
      // If screen width is less than or equal to 768px, disable the ScrollTriggers
      gsap.set(leftBox, { xPercent: 0 });  // Reset position of leftBox
      gsap.set(rightBox, { xPercent: 0 }); // Reset position of rightBox
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers for responsiveness
    }

  } else {
    console.warn(`Section ${index} is missing left or right box.`);
  }
});
  

  function textAnimation() {
     
      const sections = document.querySelectorAll(".mask__containerArea, .meet-product-linup-heading, .automated-section-heading, .just-five-client-heading, .active-income-heading, .access-all-video-heading, .testimonial-slider-haeading, .automated-side-box");


      if (window.innerWidth > 991) {

        sections.forEach((section) => {
          
            const splitTypes = section.querySelectorAll(".mask_elementText, h2, p, h5, h3");

            splitTypes.forEach((charElement) => {
              
                const splitText = new SplitType(charElement, { types: "chars" });

              
                gsap.from(splitText.chars, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "50% 70%",
                        scrub: true,
                        markers: false,
                      
                    },
                    opacity: 0.3,
                    duration: 1,
                    stagger: 0.3,
                    ease: "linear",
                });
            });
        });
      }

  }

  textAnimation();
});






function velocitySlider() {
  const sliders = document.querySelectorAll(".siteVelocity__slider");
  let baseSpeed = .5; // initial speed
  let scrollSpeedFactor = 5; // scroll speed

  sliders.forEach(slider => {
      let direction = parseInt(slider.dataset.direction, 10) || 1;
      let images = Array.from(slider.children);
      let position = 0;
      let speed = baseSpeed;
      const imgWidth = images[0].offsetWidth + 20;
      const totalWidth = imgWidth * images.length;

      
      while (slider.offsetWidth < window.innerWidth * 2) {
          images.forEach(img => {
              let clone = img.cloneNode(true);
              slider.appendChild(clone);
          });
      }

      function animate() {
          position += speed * direction;

        
          if (position >= totalWidth) {
              position -= totalWidth;
          } else if (position <= -totalWidth) {
              position += totalWidth;
          }

          gsap.set(slider, { x: -position });

          
          speed = Math.max(baseSpeed, speed * 0.95);

          requestAnimationFrame(animate);
      }

      function handleScroll(event) {
          let delta = event.deltaY || -event.wheelDelta;
          speed = baseSpeed + Math.min(Math.abs(delta), scrollSpeedFactor); 
          ScrollTrigger.refresh();
      }

      window.addEventListener("wheel", handleScroll);
      animate();
  });
}

velocitySlider();


function videoAutoplayPause() {
  const video = document.getElementById('myVideo');
  if (!video) return;

  ScrollTrigger.create({
    trigger: ".video_scale_animation-main", 
    start: "top top",  
    end: "+=" + (window.innerHeight * 2),
    scrub: 0.2, 
    markers: false,  
    onEnter: function () {
      video.muted = true; // Ensure the video is muted
      if (!video.hasAttribute('autoplay')) {
        video.setAttribute('autoplay', 'true');
      }
      video.play();  
    },
    onLeave: function () {
      video.pause();  
    },
    onEnterBack: function () {
      video.muted = true; // Ensure the video is muted
      if (!video.hasAttribute('autoplay')) {
        video.setAttribute('autoplay', 'true');
      }
      video.play();  
    },
    onLeaveBack: function () {
      video.pause();  
    }
    
  });
}

videoAutoplayPause();






















// Play video on enter and pause on leave
gsap.timeline({
  scrollTrigger: {
    trigger: ".video_scale_animation-main",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.2,
    markers: false,
    onEnter: function () {
      const video = document.getElementById("myVideo");
      if (video && !video.hasAttribute("autoplay")) {
        video.setAttribute("autoplay", "true");
      }
      video.play();
    },
    onLeave: function () {
      const video = document.getElementById("myVideo");
      if (video) {
        video.pause(); // Pause video when leaving
      }
    },
  },
});

// Run this only on desktop view
if (window.innerWidth > 991) {
  let videoScaleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".video_scale_animation-main",
      start: "top top",
      end: "+=" + window.innerHeight,
      scrub: 0.2,
      markers: false,
      pin: true,
      // pinSpacing: true, // Keep spacing intact
      onEnter: function () {
        const video = document.getElementById("myVideo");
        if (video && !video.hasAttribute("autoplay")) {
          video.setAttribute("autoplay", "true");
        }
        video.play();
      },
      onLeave: function () {
        const video = document.getElementById("myVideo");
        if (video) {
          video.pause(); // Pause the video when leaving
        }
      },
      // onComplete: function () {
      //   // Refresh ScrollTrigger to avoid animation conflict
      //   setTimeout(() => {
      //     ScrollTrigger.refresh();
      //   }, 500);
      // },
    },
  });

  videoScaleTimeline
    .from(".video_scale_animation .has_video_scale", {
      scale: 0.7,
      borderRadius: "20px",
    })
    .to(".video_scale_animation .has_video_scale", {
      scale: 1,
      borderRadius: "0px",
    });
}

// Refresh all ScrollTriggers to ensure no overlap
// setTimeout(() => {
//   ScrollTrigger.refresh();
// }, 500);









//  Footer animation js
document.addEventListener('DOMContentLoaded', () => {






  function siteAnimationFn() {
    if (window.innerWidth > 0) {
      gsap.utils.toArray(".board-slid").forEach((block) => {
        gsap.fromTo(
          block,
          {
            y: "25%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            stagger: 0.1,
            ease: "linear",
            duration: 0.1,
            scrollTrigger: {
              markers: false,
              trigger: block,
              start: "top 65%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      });
    }
  }
  
  siteAnimationFn();










  if (!gsap || !gsap.registerPlugin) {
    console.error('GSAP or ScrollTrigger plugin not found!')
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  const footerMenuItems = document.querySelectorAll(
    '.fade-top '
  )

  if (!footerMenuItems.length) {
    // console.warn('No menu items found in the footer.')
    return
  }

  gsap.fromTo(
    footerMenuItems,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: 'linear',
      scrollTrigger: {
        trigger: '.fade-top-parent',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    }
  )
});




  

/*
****************************************
********* ANIMATION SCRIPT END *********
****************************************
*/



var carousel = document.querySelector('.carousel');
var flkty = new Flickity('.carousel', {
  cellAlign: 'left',
  contain: true,
  initialIndex: 0
});