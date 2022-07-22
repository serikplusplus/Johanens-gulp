export default function footer() {
	window.addEventListener('DOMContentLoaded', () => {
		const foote = document.querySelector('.main-footer')
		const content = document.querySelector('.main-footer__content-wrapper')
		function setHight() {
			foote.style.top = `calc(98% - ${content.clientHeight}px`
			foote.style.height = `calc(644px + (1017 - 644) * ((100vw - 320px) / (1920 - 320)) + ${content.clientHeight}px)`
			document.querySelector('main').style.paddingBottom = `${
				content.clientHeight + 150
			}px`
		}
		setHight()
		window.addEventListener('resize', () => {
			setHight()
		})
	})
}
