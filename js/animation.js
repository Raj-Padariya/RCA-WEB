document.addEventListener("DOMContentLoaded", function () {
    // Select cursor and sliders
    const cursor = document.querySelector(".custom-drag-cursor");
    const sliders = document.querySelectorAll(".hasCustomCursor");
  
    // Track mouse across the whole page
    document.addEventListener("mousemove", (e) => {
      // Always show the cursor on movement
      cursor.style.opacity = "1";
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2, // Centered X
        y: e.clientY - cursor.offsetHeight / 2, // Centered Y
        duration: 0.1,
        ease: "power2.out",
      });
    });
  
    // Commented out to test visibility
    // window.addEventListener("mouseout", (e) => {
    //   if (!e.relatedTarget && !e.toElement) {
    //     cursor.style.opacity = "0";
    //   }
    // });
  
    // Add dragging effect when clicking anywhere
    document.addEventListener("mousedown", () => {
      cursor.classList.add("dragging");
    });
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("dragging");
    });
  
    // Optional: Special behavior for sliders
    sliders.forEach((slider) => {
      slider.addEventListener("mouseenter", () => {
        cursor.classList.add("slider-active");
      });
      slider.addEventListener("mouseleave", () => {
        cursor.classList.remove("slider-active");
      });
    });
  });
  
  
  
  

/*
*******************************
*******************************
THIS IS SITE ANIMATION JS FILE
MINIFYED VERSION V0.1
*******************************
*******************************
 */


const lenis=new Lenis;function cardOverlapping(){if(window.innerWidth>768){let e=document.querySelectorAll(".card_overlay");e.forEach((e,t)=>{e.style.zIndex=t+1});let t=gsap.timeline({scrollTrigger:{trigger:".pinned-section",start:"top top",end:"+="+3*window.innerHeight,scrub:.1,pin:!0,markers:!1}});e.forEach((r,o)=>{if(t.addLabel(`card${o}`),t.fromTo(r,{y:window.innerHeight,scale:1},{y:0,scale:1,duration:1,ease:"linear"},`card${o}`),o>0)for(let n=0;n<o;n++){let i=o-n,a=1-.07*i,l=-50-50*(i-1);a<.4&&(a=.4),t.to(e[n],{scale:a,y:l,duration:1,ease:"power1.out"},`card${o}`)}})}}function velocitySlider(){let e=document.querySelectorAll(".siteVelocity__slider");e.forEach(e=>{let t=parseInt(e.dataset.direction,10)||1,r=Array.from(e.children),o=0,n=.5,i=r[0].offsetWidth+20,a=i*r.length;for(;e.offsetWidth<2*window.innerWidth;)r.forEach(t=>{let r=t.cloneNode(!0);e.appendChild(r)});window.addEventListener("wheel",function e(t){n=.5+Math.min(Math.abs(t.deltaY||-t.wheelDelta),5),ScrollTrigger.refresh()}),function r(){(o+=n*t)>=a?o-=a:o<=-a&&(o+=a),gsap.set(e,{x:-o}),n=Math.max(.5,.95*n),requestAnimationFrame(r)}()})}function videoAutoplayPause(){let e=document.getElementById("myVideo");e&&ScrollTrigger.create({trigger:".video_scale_animation-main",start:"top top",end:"+="+2*window.innerHeight,scrub:.2,markers:!1,onEnter:function(){e.muted=!0,e.hasAttribute("autoplay")||e.setAttribute("autoplay","true"),e.play()},onLeave:function(){e.pause()},onEnterBack:function(){e.muted=!0,e.hasAttribute("autoplay")||e.setAttribute("autoplay","true"),e.play()},onLeaveBack:function(){e.pause()}})}lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(e=>{lenis.raf(1e3*e)}),gsap.ticker.lagSmoothing(0),gsap.registerPlugin(ScrollTrigger),window.addEventListener("load",function(){document.querySelector(".preloader-logo img").classList.add("animate-logo"),setTimeout(function(){document.querySelector(".preloader").classList.add("preloader-finish"),document.body.style.overflow="auto"},1200)}),cardOverlapping(),document.addEventListener("DOMContentLoaded",function(){function e(){if(window.innerWidth>991){let e=document.querySelectorAll(".radius-top");e.forEach(e=>{gsap.to(e,{scrollTrigger:{trigger:e,start:"top 100%",end:"top 50%",scrub:.1,markers:!1},borderRadius:"60px 60px 0 0"})})}}e(),window.addEventListener("resize",e),function e(){let t=document.querySelectorAll(".scaling_image-img");if(!t.length){console.warn("No elements found with class .scaling_image-img");return}t.forEach(e=>{gsap.fromTo(e,{scale:1},{scale:1.5,duration:1,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 70%",end:"bottom 30%",scrub:.3,markers:!1,invalidateOnRefresh:!0}})})}(),function e(){let t=document.querySelectorAll(".enlarge__inView");if(!t.length){console.warn("No elements found with class .enlarge__inView");return}window.innerWidth>991&&t.forEach(e=>{gsap.fromTo(e,{scale:.6},{scale:1,duration:1,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 75%",end:"bottom 30%",scrub:!1,markers:!1}})})}()}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".moving_boxContainer").forEach((e,t)=>{let r=e.querySelector(".left"),o=e.querySelector(".right");r&&o?(gsap.set(r,{xPercent:80}),gsap.set(o,{xPercent:-80}),window.innerWidth>991?(gsap.to(r,{xPercent:0,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 80%",end:"top 50%",scrub:!0,toggleActions:"play none none reset",markers:!1,id:`left-box-${t}`,invalidateOnRefresh:!0}}),gsap.to(o,{xPercent:0,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 80%",end:"top 50%",scrub:!0,toggleActions:"play none none reset",markers:!1,id:`right-box-${t}`,invalidateOnRefresh:!0}})):(gsap.set(r,{xPercent:0}),gsap.set(o,{xPercent:0}),ScrollTrigger.getAll().forEach(e=>e.kill()))):console.warn(`Section ${t} is missing left or right box.`)}),!function e(){let t=document.querySelectorAll(".mask__containerArea, .meet-product-linup-heading, .automated-section-heading, .just-five-client-heading, .active-income-heading, .access-all-video-heading, .testimonial-slider-haeading, .automated-side-box");window.innerWidth>991&&t.forEach(e=>{let t=e.querySelectorAll(".mask_elementText, h2, p, h5, h3");t.forEach(t=>{let r=new SplitType(t,{types:"chars"});gsap.from(r.chars,{scrollTrigger:{trigger:e,start:"top bottom",end:"50% 70%",scrub:!0,markers:!1},opacity:.3,duration:1,stagger:.3,ease:"linear"})})})}()}),velocitySlider(),videoAutoplayPause(),gsap.timeline({scrollTrigger:{trigger:".video_scale_animation-main",start:"top top",end:"bottom bottom",scrub:.2,markers:!1,onEnter:function(){let e=document.getElementById("myVideo");e&&!e.hasAttribute("autoplay")&&e.setAttribute("autoplay","true"),e.play()},onLeave:function(){let e=document.getElementById("myVideo");e&&e.pause()}}}),window.innerWidth>991&&gsap.timeline({scrollTrigger:{trigger:".video_scale_animation-main",start:"top top",end:"+="+window.innerHeight,scrub:.2,markers:!1,pin:!0,onEnter:function(){let e=document.getElementById("myVideo");e&&!e.hasAttribute("autoplay")&&e.setAttribute("autoplay","true"),e.play()},onLeave:function(){let e=document.getElementById("myVideo");e&&e.pause()}}}).from(".video_scale_animation .has_video_scale",{scale:.7,borderRadius:"20px"}).to(".video_scale_animation .has_video_scale",{scale:1,borderRadius:"0px"}),document.addEventListener("DOMContentLoaded",()=>{function e(){window.innerWidth>0&&gsap.utils.toArray(".board-slid").forEach(e=>{gsap.fromTo(e,{y:"25%",opacity:0},{y:"0%",opacity:1,stagger:.1,ease:"linear",duration:.1,scrollTrigger:{markers:!1,trigger:e,start:"top 65%",end:"bottom 30%",scrub:!0}})})}if(e(),!gsap||!gsap.registerPlugin){console.error("GSAP or ScrollTrigger plugin not found!");return}gsap.registerPlugin(ScrollTrigger);let t=document.querySelectorAll(".fade-top ");t.length&&gsap.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.3,stagger:.1,ease:"linear",scrollTrigger:{trigger:".fade-top-parent",start:"top 80%",end:"top 50%",toggleActions:"play none none reverse"}})});

