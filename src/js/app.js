import * as flsFunctions from './modules/webp-supports.js'
import ibg from './modules/ibg.js'
import header from './modules/header.js'
import footer from './modules/footer.js'
import spollers from './modules/spollers.js'
import ourClients from './modules/our-clients.js'
import mainSlider from './modules/main-slider.js'
import reviews from './modules/reviews.js'
import howwork from './modules/howwork.js'
import timeline from './modules/timeline.js'
import stories from './modules/stories.js'

flsFunctions.isWebp()
ibg()
header()
footer()

try {
	spollers()
} catch (error) {
	console.log()
}
try {
	ourClients()
} catch (error) {
	console.log()
}
try {
	mainSlider()
} catch (error) {
	console.log()
}
try {
	reviews()
} catch (error) {
	console.log()
}
try {
	howwork()
} catch (error) {
	console.log()
}
try {
	timeline()
} catch (error) {
	console.log()
}
try {
	stories()
} catch (error) {
	console.log()
}
