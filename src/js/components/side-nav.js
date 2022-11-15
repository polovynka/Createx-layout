const toggle = document.querySelector('.side-nav__toggle');
const navBar = document.querySelector('.side-nav__nav');

toggle.addEventListener('click', (evt) => {
	evt.stopPropagation();
	toggle.classList.toggle('open');
	navBar.classList.toggle('open');

});

// Close side-bar when click on another element
document.addEventListener('click', (evt) => {
	const target = evt.target;

	const itsMenu = target == navBar || navBar.contains(target);
	const itsBtnMenu = target == toggle;
	const menuIsOpen = navBar.classList.contains('open');

	if (!itsMenu && !itsBtnMenu && menuIsOpen) {
		toggle.classList.toggle('open');
		navBar.classList.toggle('open');
	};
});
