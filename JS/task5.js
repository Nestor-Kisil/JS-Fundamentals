const circleElements = document.querySelectorAll('.circle')

circleElements.forEach(function (element) {
	const dataAnimValue = element.getAttribute('data-anim')
	if (dataAnimValue) {
		element.classList.add(dataAnimValue)
	}
})

circleElements.forEach(function (element) {
	const dataAnimValue = element.getAttribute('data-anim')
	console.log(element.classList)
})
