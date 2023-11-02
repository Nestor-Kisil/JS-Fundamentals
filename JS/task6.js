const colorElements = document.querySelectorAll('.color')
const shoeElements = document.querySelectorAll('.shoe')
const priceDisplay = document.getElementById('outprice')

function changeImageAndCalculatePrice() {
	let total = 0
	colorElements.forEach(function (element) {
		if (element.classList.contains('active')) {
			total += parseFloat(element.getAttribute('data-price'))
		}
	})

	shoeElements.forEach(function (shoe) {
		const color = shoe.getAttribute('color')

		if (shoe.getAttribute('color') === color) {
			shoe.classList.remove('show')
		}
	})

	const selectedColor = this.getAttribute('color')
	shoeElements.forEach(function (shoe) {
		const color = shoe.getAttribute('color')

		if (color === selectedColor) {
			shoe.classList.add('show')
		}
	})

	priceDisplay.textContent = total.toFixed(2)
}

colorElements.forEach(function (element) {
	element.addEventListener('click', function () {
		colorElements.forEach(function (el) {
			el.classList.remove('active')
		})
		element.classList.add('active')
		changeImageAndCalculatePrice.call(element)
	})
})
