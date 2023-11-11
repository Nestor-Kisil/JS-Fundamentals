document.addEventListener('DOMContentLoaded', function () {
	const body = document.body
	const main = document.createElement('main')
	const div = document.createElement('div')
	const p = document.createElement('p')
	main.className = 'mainClass check item'
	div.id = 'myDiv'
	p.textContent = 'First paragraph'
	div.appendChild(p)
	main.appendChild(div)
	body.appendChild(main)
})
