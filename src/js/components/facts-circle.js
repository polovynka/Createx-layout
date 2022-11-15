const circle = document.querySelectorAll('svg[data-value] .circle');

// Calc value of strokeDashoffset

function calcStrokeDashoffset() {
	circle.forEach((element) => {
		let length = element.getTotalLength();

		let value = parseInt(element.parentNode.getAttribute('data-value'));

		let to = length * ((100 - value) / 100);

		element.style.strokeDashoffset = Math.max(0, to);
	});
};

// Observer
const circleList = document.querySelector('.facts__list');

if (circleList) {
	const observer = new IntersectionObserver(entries => {

		entries.forEach(entry => {

			if (entry.isIntersecting) {

				calcStrokeDashoffset();

			}

		});

	});

	observer.observe(circleList);
}
