const inputFields = document.querySelectorAll('.arr')

const submitButton = document.querySelector('.btn')

const outBlock = document.querySelector('.out')

submitButton.addEventListener('click', function (event) {
	event.preventDefault()

	let output = ''

	inputFields.forEach(function (input) {
		const label = input.getAttribute('data-form')
		const value = input.value

		output += `${label}: ${value}<br>`
	})

	outBlock.innerHTML = output
})
