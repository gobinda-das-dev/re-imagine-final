
import gsap from "gsap";

function menuAnimation() {
    let count = 1;
    const duration = 0.4;
    const defaultHeight = document.querySelector(
        ".home-section > div"
    ).clientHeight;
    const homeSection = document.querySelector(".home-section");
    const lines = gsap.utils.toArray(".lines .line");
    const toggler = document.querySelector(".lines");
    const h = lines[0].clientHeight;
    gsap.set(".nav-sec", { y: 50, opacity: 0 });

    homeSection.addEventListener("click", () => {
        if (count) {
            count--;
            gsap.to(".lines", { gap: 0, duration });
            gsap.to(lines[1], { opacity: 0, duration });
            gsap.to(lines[0], { width: "100%", y: h, rotate: 45, duration });
            gsap.to(lines[2], { width: "100%", y: -h, rotate: -45, duration });
            gsap.to(".home-section", { height: defaultHeight });
            gsap.to(".nav-sec", { y: 0, opacity: 1, stagger: 0.1 });
        } else {
            count++;
            gsap.to(".lines", { gap: 4, duration });
            gsap.to(lines[1], { opacity: 1, duration });
            gsap.to(lines[0], { width: "50%", y: 0, rotate: 0, duration });
            gsap.to(lines[2], { width: "50%", y: 0, rotate: 0, duration });
            gsap.to(".home-section", { height: 56 });
            gsap.to(".nav-sec", { y: 50, opacity: 0, stagger: 0.1 });
        }
    });
}

// Export the function for reuse
export default menuAnimation;