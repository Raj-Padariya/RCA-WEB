/*
****************************************
****** ANIMATION SCRIPT START **********
****************************************
*/



gsap.registerPlugin(ScrollTrigger);



// Lenis Setup

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);





// function cardOverlaping() {



//     const cards = document.querySelectorAll(".card_overlay");

//     cards.forEach((card, i) => {
//       card.style.zIndex = i + 1;
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".pinned-section",
//         start: "top top",
//         end: "+=" + (window.innerHeight * 3),
//         scrub: true,
//         pin: true,
//       }
//     });


//     cards.forEach((card, i) => {
//       tl.addLabel(`card${i}`);

      
//       tl.fromTo(card,
//         { y: 100, opacity: 0, scale: 1 },
//         { y: 0, opacity: 1, scale: 1, duration: 1, ease: "linear" },
//         `card${i}`
//       );

      
//       if (i > 0) {
//         for (let j = 0; j < i; j++) {
          
//           const depth = i - j; 
          
//           let scaleVal   = 1 - 0.07 * depth;        
//           let yVal       = -50 - 30 * (depth - 1);  
//           let opacityVal = 1   - 0.1 * depth;       

//           if (scaleVal < 0.4) scaleVal = 0.4;
//           if (opacityVal < 0.3) opacityVal = 0.3;

//           tl.to(cards[j], {
//             scale: scaleVal,
//             y: yVal,
//             opacity: opacityVal,
//             duration: 1,
//             ease: "power1.out"
//           }, `card${i}`);
//         }
//       }
//     });
// }
// cardOverlaping();

function cardOverlapping() {
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

// Call the function
cardOverlapping();





// gsap.registerPlugin(ScrollTrigger);





function videoScaleAnimation() {
  const videoSection = document.querySelector(".video_scale_animation-main");
  if (videoSection) {
    // First timeline to handle video playback on enter.
    gsap.timeline({
      scrollTrigger: {
        trigger: videoSection, 
        start: "top top", 
        end: "bottom bottom", 
        scrub: 0.2, 
        markers: false,
        onEnter: function () {
          const video = document.getElementById('myVideo');
          if (video) {
            video.muted = true;
            if (!video.hasAttribute('autoplay')) {
              video.setAttribute('autoplay', 'true');
            }
            video.play();
          }
        },
      }
    });
    
    // Second timeline for the scaling animation (only for wider screens).
    if (window.innerWidth > 768) {
      gsap.timeline({
        scrollTrigger: {
          trigger: videoSection, 
          start: "top top", 
          end: "+=" + (window.innerHeight * 2), 
          scrub: 0.2, 
          markers: false,
          pin: true,
        }
      })
      .from(".video_scale_animation .has_video_scale", {
        scale: 0.7,
        borderRadius: "20px",
      })
      .to(".video_scale_animation .has_video_scale", {
        scale: 1, 
        borderRadius: "0px",
      });
    }
  }

  // Refresh all ScrollTriggers after setup.
  ScrollTrigger.refresh();

}
videoScaleAnimation();  

// Prallex Image



document.addEventListener("DOMContentLoaded", function () {



  document.querySelectorAll(".moving_boxContainer").forEach((section, index) => {
    const leftBox = section.querySelector(".left");
    const rightBox = section.querySelector(".right");

    if (leftBox && rightBox) {
        console.log(`Setting up animation for section ${index}`); // Debugging

        // Initially move left & right boxes behind the center one
        gsap.set(leftBox, { xPercent: 80,   });
        gsap.set(rightBox, { xPercent: -80,  });

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
                markers: false, // Remove debugging markers when done
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
        console.warn(`Section ${index} is missing left or right box.`);
    }
});






















  function textAnimation() {
     
      const sections = document.querySelectorAll(".mask__containerArea, .meet-product-linup-heading, .automated-section-heading, .just-five-client-heading, .active-income-heading, .access-all-video-heading, .testimonial-slider-haeading, .automated-side-box");

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

  // Ensure the DOM is ready before running the animation
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


// change border radius on scrollh this will work for indivuila section

function changeBorderRadius() {
  const section = document.querySelectorAll(".radius-top"); // section where you want to change border radius

  section.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "10% 100%",
        end: "10% 50%",
        scrub: 0.1,
        markers: false, 
      },
      borderRadius: "60px 60px 0 0",
    });
  }
  );
}

changeBorderRadius();


function scalingImageEffect() {
  const images = document.querySelectorAll('.scaling_image-img ');

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
          start: 'top bottom', 
          end: 'bottom top',   
          scrub: true,                 
        }
      }
    );
  });
}

scalingImageEffect();

function scalingImageEffectd() {
  const elem = document.querySelectorAll('.enlarge__inView ');

  if (!elem.length) {
    console.warn('No elements found with class .enlarge__inView');
    return;
  }

  elem.forEach((elements) => {
    gsap.fromTo(
      elements,
      { scale: 0.6, }, 
      {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements,
          start: 'top bottom', 
          end: 'bottom top',   
          scrub: false,                 
        }
      }
    );
  });
}

scalingImageEffectd();




function siteAnimationFn() {
    if (window.innerWidth > 768) {
  
      gsap.utils.toArray(".board-slid").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: "25%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            stagger: 1,
            ease: "linear",
            duration: 0.3,
            scrollTrigger: {
              markers: false,  
              trigger: element, // Trigger for each individual element
              start: "top 65%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }
  
siteAnimationFn();
  






//  Footer animation js
document.addEventListener('DOMContentLoaded', () => {
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
})



















  

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




