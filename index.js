const pageBackground = document.getElementById('pageBackground');
pageBackground.style.backgroundColor = '#C0C0C0';

const img_container = document.getElementById('img_container');
const img = document.createElement('img');
img.src = 'images/greenKiosk.jpg';
img.style.borderRadius = '5vh';
img.style.width = '90%';    
img.style.display = 'block';
img.style.margin = '0 auto 5vh auto'; 
img_container.appendChild(img);

const mainHeading = document.getElementById('mainHeading');
mainHeading.style.color = 'green';
mainHeading.style.textAlign = 'center';
mainHeading.style.marginBottom = '10vh';
mainHeading.style.marginTop = '10vh';
mainHeading.style.fontSize = '8vh';

const description = document.getElementById('description');
description.style.textAlign = 'center';
description.style.marginBottom = '10vh';
description.style.fontSize = '6vh';

const headings = document.querySelectorAll('h3');
headings.forEach(heading => {
  heading.style.textTransform = "uppercase";
  heading.style.textAlign = 'center';
  heading.style.marginBottom = '3vh'; 
});

const vegetableList = document.getElementById('vegetableList');
vegetableList.style.display = 'flex';
vegetableList.style.justifyContent = 'space-around';


const carrotItem = document.createElement('li');
carrotItem.classList.add('vegetable-item-container');
carrotItem.style.display = 'flex';
carrotItem.style.flexDirection = 'column';
carrotItem.style.alignItems = 'center';
carrotItem.style.width = '180px'; 

const carrotImg = document.createElement('img');
carrotImg.src = './images/carrots.jpg';
carrotImg.alt = 'Carrot';
carrotImg.style.width = '100%';
carrotImg.style.borderRadius = '1rem';
carrotImg.style.marginBottom = '0.5rem';
carrotImg.style.maxHeight = '180px'; 

const carrotText = document.createElement('span');
carrotText.textContent = 'Carrot';

carrotItem.appendChild(carrotImg);
carrotItem.appendChild(carrotText);
vegetableList.appendChild(carrotItem);

const fruitList = document.getElementById('fruitList');
fruitList.style.display = 'flex';
fruitList.style.justifyContent = 'space-around';