
export default function stories() {
	const aboutStories = new Swiper('.stories__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.stories-pagination',
			clickable: true,
		},
		breakpoints: {
			630: {
				slidesPerView: 2,
				centeredSlides: true,
			},
			991: {
				slidesPerView: 3,
			},
		},
	})
}
