const items = document.querySelectorAll('#list li')

const firstItem = items[0].innerText
const lastItem = items[items.length - 1].innerText
const secondItem = items[1].innerText
const fourthItem = items[3].innerText
const thirdItem = items[2].innerText

const modalContent = `
     ${firstItem},
     ${lastItem},
     ${secondItem},
     ${fourthItem},
     ${thirdItem}
`

const modal = document.getElementById('modal')
const modalContentElement = document.getElementById('modalContent')
modalContentElement.textContent = modalContent

modal.style.display = 'block'
