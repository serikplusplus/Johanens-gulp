export default function ourClients() {
	window.addEventListener('DOMContentLoaded', () => {
		const slider = document.querySelector('.our-clients__slider-wrapper')
		const slides = document.querySelectorAll('.our-clients__slide')

		let array = Array.prototype.concat.call(...slides)

		const cof = Math.floor(6 / slides.length)

		let t = []
		for (let index = 0; index < cof; index++) {
			t = []
			for (let indexz = 0; indexz < array.length; indexz++) {
				t[index] = array[index].cloneNode(true)
			}

			array = array.concat(t)
		}

		slider.innerHTML = ''
		for (let index = 0; index < array.length; index++) {
			slider.append(array[index])
		}

		setTimeout(() => {
			const sli = new Swiper('.running-line', {
				loop: true,
				speed: 5000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				slidesPerView: 'auto',
			})
		}, 150)
	})
}
