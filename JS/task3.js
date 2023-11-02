var body = document.createElement('body')
var main = document.createElement('main')
main.className = 'mainClass check item'
var div = document.createElement('div')
div.id = 'myDiv'
var p = document.createElement('p')

var text = document.createTextNode('First paragraph')
p.appendChild(text)

div.appendChild(p)
main.appendChild(div)
body.appendChild(main)
document.body = body
