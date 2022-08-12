export default function pageBg() {
	window.addEventListener('DOMContentLoaded', () => {
		const wrapper = document.querySelector('.page-bg')
		const imgs = document.querySelectorAll('.page-bg__img')

		let array = Array.prototype.concat.call(...imgs)

		let downPosition = 503

		const cof = 20

		let t = []
		for (let index = 0; index < cof - array.length; index++) {
			t[index] = array[index].cloneNode(true)
		}

		array = array.concat(t)

		wrapper.innerHTML = ''

		let numberInWrapper = 2

		array[0].style.top = `${downPosition}px`
		wrapper.append(array[0])
		downPosition += array[0].offsetHeight

		for (let index = 1; index < cof; index++) {
			if (numberInWrapper === 1) {
				downPosition += 505
				array[index].style.top = `${downPosition}px`
				wrapper.append(array[index])
			}
			if (numberInWrapper === 2) {
				array[index].style.top = `${downPosition}px`
				wrapper.append(array[index])
			}
			if (numberInWrapper === 3) {
				downPosition += 525
				array[index].style.top = `${downPosition}px`
				wrapper.append(array[index])
			}
			if (numberInWrapper === 4) {
				downPosition += 236
				array[index].style.top = `${downPosition}px`
				wrapper.append(array[index])
			}
			if (numberInWrapper === 5) {
				downPosition += 196
				array[index].style.top = `${downPosition}px`
				wrapper.append(array[index])

				numberInWrapper = 0
			}
			downPosition += array[index].offsetHeight
			numberInWrapper++
		}
	})
}
