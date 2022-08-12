export default function reviews() {
	const indexReviews = new Swiper('.reviews__slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.reviews-pagination',
			clickable: true,
		},
		speed: 500,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	})
}
