import { ScrollTrigger } from "gsap/all";
import { homepage } from "./data.json";
import gsap from "gsap";

const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);
const C = (e) => document.createElement(e);
const GP = (e, p) => gsap.getProperty(e, p);




function faqAnimation() {
	
	const faqSection = $("section.faq");
	const faqContainer = $(".faq-container");

	const { faqData } = homepage;
	faqData.forEach((fa) => {
		faqContainer.innerHTML += `
			<div class="space-y-[0.6vw] flex-shrink-0 sm:w-[49.4%] w-full">
				${fa
				.map(
					(f) => `
								<div class="question w-full bg-black border-none rounded-lg px-8 pb-8 flex flex-col gap-4 overflow-hidden cursor-pointer border border-transparent">
									<div class="h-20 flex-shrink-0 flex justify-between items-center gap-4">
										<h5 class="text-lg font-medium font-neuehaas tracking-wider leading-none">${f.heading}</h5>
										<svg class="toggler" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<!-- Horizontal line -->
											<path class="horizontal-line" d="M11.5 6c0 .5523-.4477 1-1 1H1.5c-.5523 0-1-.4477-1-1s.4477-1 1-1h9c.5523 0 1 .4477 1 1z" fill="#F4F8FC"></path>
											<!-- Vertical line -->
											<path class="vertical-line" d="M6 11.5c-.5523 0-1-.4477-1-1V1.5c0-.5523.4477-1 1-1s1 .4477 1 1v9c0 .5523-.4477 1-1 1z" fill="#F4F8FC"></path>
										</svg>
									</div>
									<p class="opacity-50">${f.description}</p>
								</div>
								<hr>
						`
				)
				.join("")}
			</div>
		`;
	});

	const faqs = $$(".faq .question");
	const togglers = $$(".question .toggler path:last-child");
	faqs.forEach((faq, idx) => {
		const height = GP(faq, "height");
		gsap.set(faq, { height: 80 });

		faq.addEventListener("click", () => {
			if (GP(faq, "height") === 80) {
				// Forword Animation
				gsap.timeline({
					defaults: { ease: "power1.inOut", duration: 0.3 },
				})
					.to(faqs, { height: 80 }, "a")
					.to(togglers, { rotate: 0 }, "a")
					.to(faqs, { borderColor: "transparent" }, "a")
					.to(faq, { borderColor: "white" }, "a")
					.to(
						togglers[idx],
						{
							rotate: 90,
							transformOrigin: "center",
						},
						"a"
					)
					.to(faq, { height }, "a");
			} else {
				// Backword Animation
				gsap.timeline({
					defaults: { ease: "power1.inOut", duration: 0.3 },
				})
					.to(faqs, { height: 80 }, "a")
					.to(togglers, { rotate: 0 }, "a")
					.to(faqs, { borderColor: "transparent" }, "a");
			}
		});
	});
}


export default faqAnimation;