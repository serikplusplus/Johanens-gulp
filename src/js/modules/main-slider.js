export default function mainSlider() {
	window.addEventListener('DOMContentLoaded', () => {
		const widthSlider = document.querySelector(
			'.main-section__slider',
		).clientWidth
		const slider = document.querySelector(
			'.main-section__slider .swiper-wrapper',
		)
		const slides = document.querySelectorAll('.main-section__slide')

		let array = Array.prototype.concat.call(...slides)

		const cof = Math.floor(widthSlider / slides[0].clientWidth)

		let t = []
		for (let index = 0; index < cof; index++) {
			t = []
			for (let index = 0; index < array.length; index++) {
				t[index] = array[index].cloneNode(true)
			}

			array = array.concat(t)
		}

		slider.innerHTML = ''
		for (let index = 0; index < array.length; index++) {
			slider.append(array[index])
		}

		setTimeout(() => {
			const indexMain = new Swiper('.main-section__slider', {
				loop: true,
				spaceBetween: 30,
				slidesPerView: 'auto',
				speed: 500,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
			})
		}, 150)
	})
}
