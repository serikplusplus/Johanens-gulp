export default function header() {
	const langBtn = document.querySelector('.btn-lang')
	const langMenu = document.querySelector('.lang-list')
	const megaTrigger = document.querySelectorAll('.main-nav__link--collapce')
	const burger = document.querySelector('.burger-btn')
	const mobileMenu = document.querySelector('.mobile-menu')

	langBtn.addEventListener('click', e => {
		e.preventDefault()
		langMenu.classList.toggle('show')
	})

	burger.addEventListener('click', e => {
		e.preventDefault()
		mobileMenu.classList.toggle('show')
		burger.classList.toggle('open')
	})

	megaTrigger.forEach(element => {
		element.addEventListener('click', e => {
			e.preventDefault()
			e.path[0].nextElementSibling.classList.toggle('open')
		})
	})
}
