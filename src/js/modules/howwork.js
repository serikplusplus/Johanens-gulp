export default function howwork() {
	const indexHowWork = new Swiper('.how-work__slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.how-work__btns',
			clickable: true,
			renderBullet(index, className) {
				return `<button class="${className}">Step ${index}</button>`
			},
		},
	})
}
