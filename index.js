const pageBackground = document.getElementById('pageBackground')
pageBackground.style.backgroundColor = '#C0C0C0'

const mainHeading = document.getElementById('mainHeading')
mainHeading.style.color = 'green'


const headings = document.querySelectorAll('h3')
headings.forEach(heading => {
    heading.style.textTransform = "uppercase"
});

const vegetableList = document.getElementById('vegetableList')
const newText = document.createElement('li')
newText.textContent = 'Carrot'
vegetableList.appendChild(newText)
