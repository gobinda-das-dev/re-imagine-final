import gsap from "gsap";


const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);
const C = (e) => document.createElement(e);
const GP = (e, p) => gsap.getProperty(e, p);



function marqueeAnimationFooter() {
	gsap.to(".circle-svg", {
		rotate: "360",
		transformOrigin: "50% 50%",
		duration: 4,
		ease: "none",
		repeat: -1,
	});

	const follow = $(".follow__parts");
	let currentScroll = 0;
	let isScrollingDown = true;

	let twin = gsap
		.to(".follow__parts", {
			xPercent: -100,
			repeat: -1,
			duration: 20,
			ease: "linear",
		})
		.totalProgress(0.5);

	gsap.set(follow, { xPercent: -50 });

	window.addEventListener("scroll", function () {
		if (this.window.scrollY > currentScroll) {
			isScrollingDown = true;
		} else {
			isScrollingDown = false;
		}

		setTimeout(() => {
			gsap.to(twin, {
				timeScale: isScrollingDown ? 1 : -1,
			});
		}, 300);

		currentScroll = window.scrollY;
	});

}


export default marqueeAnimationFooter;