const header = document.querySelector('h1')
header.style.backgroundColor = 'lightgreen'

const paragraphs = document.querySelectorAll('#myDiv p')

paragraphs[0].style.fontWeight = 'bold'
paragraphs[1].style.color = 'red'
paragraphs[2].style.textDecoration = 'underline'
paragraphs[3].style.fontStyle = 'italic'

const listItem = document.querySelectorAll('#myList li')

listItem.forEach(item => {
	item.style.display = 'inline'
})

const span = document.querySelector('span')
span.style.visibility = 'hidden'
