import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function ThreeDPinAnimation() {
   gsap.to('.pin-section .desc', {
      color: '#ffffff',
      stagger: 0.5,
      scrollTrigger: {
         // markers: true, 
         scroller: 'body',
         pin: '.pin-model',
         start: 'top 30%',
         end: 'top -92%',
         scrub: true
      }
   })

   gsap.to('.pin-section .desc', {
      color: '',
      stagger: 0.5,
      scrollTrigger: {
         scroller: 'body',
         start: 'top 20%',
         end: 'top -82%',
         scrub: true
      }
   })
}






export default ThreeDPinAnimation;