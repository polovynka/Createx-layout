const header = document.querySelector('.header');
const toTopBlock = document.querySelector('.to-top');


toTopBlock.addEventListener('click', () => {

	header.scrollIntoView({
		behavior: 'smooth'
	});
});


window.addEventListener('scroll', () => {
	const currentPosition = window.scrollY;
	const viewPortSize = window.innerHeight;

	if (currentPosition >= viewPortSize) {
		toTopBlock.classList.add('to-top--active');
	} else {
		toTopBlock.classList.remove('to-top--active');
	};
});

