const form = document.getElementById('card-form');
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const logo = document.getElementById('logo').value;
  const image = document.getElementById('image').value;

  const card = document.createElement('div');
  card.classList.add('card');

  const logoImg = document.createElement('img');
  logoImg.classList.add('logo');
  logoImg.src = `logos/${logo}.png`;
  logoImg.style.position = 'absolute';
  logoImg.style.top = '10px';
  logoImg.style.left = '10px';

  const cardImg = document.createElement('img');
  cardImg.src = `images/${image}.png`;
  cardImg.style.width = '100%';
  cardImg.style.height = '150px';
  cardImg.style.objectFit = 'cover';
  cardImg.style.borderRadius = '10px 10px 0 0';

  const cardContent = document.createElement('div');
  cardContent.style.padding = '20px';
  cardContent.innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
  `;

  card.appendChild(cardImg);
  card.appendChild(logoImg);
  card.appendChild(cardContent);

  cardContainer.appendChild(card);
});
