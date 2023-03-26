const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const bullet = document.querySelector('.dots');

left.addEventListener('click', () => {
	n = (n - 1) % slides.length;
	carousel(n);

	// Désélectionne le point précédent
	const prevDot = bullet.querySelector('.dot_selected');
	if (prevDot) {
		prevDot.classList.remove('dot_selected');
	}

	// Sélectionne le point de la diapositive active
	const currentDot = bullet.querySelector(`[data-slide="${n}"]`);
	if (currentDot) {
		currentDot.classList.add('dot_selected');
	}
});

right.addEventListener('click', () => {
	n = (n + 1) % slides.length;
	carousel(n);

	const prevDot = bullet.querySelector('.dot_selected');
	if (prevDot) {
		prevDot.classList.remove('dot_selected');
	}

	const currentDot = bullet.querySelector(`[data-slide="${n}"]`);
	if (currentDot) {
		currentDot.classList.add('dot_selected');
	}



});

const createDot = () => {
	let dotElement = "";
	for (const slide of slides) {
		dotElement += `
		<div class='dot' data-slide='${slides.indexOf(slide)}'></div>
	  `;
	}

	bullet.innerHTML = dotElement;
}
createDot();
  

const carousel = (n) => {
	let createImg = '';
	const banner = document.querySelector('#banner');

	// Supprime les éléments HTML existants
	const currentImg = banner.querySelector('.banner-img');
	const currentTagLine = banner.querySelectorAll('.active')
	console.log(currentTagLine);
	if (currentImg) {
		currentImg.remove();
	}
	if (currentTagLine.length) {
		currentTagLine.forEach((tagLine) => {
			tagLine.classList.remove('active');
			tagLine.remove();
		});
	}

	createImg = `
	  <img src ="assets/images/slideshow/${slides[n].image}" alt="slide" class="banner-img active">
	  <p class="active">${slides[n].tagLine}</p>
	`;
	banner.insertAdjacentHTML('beforeend', createImg);
};

let n = 0;
carousel(n);
