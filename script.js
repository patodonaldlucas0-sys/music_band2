const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

document.querySelectorAll('.site-nav a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.setAttribute('aria-label', 'Abrir menú');
	});
});

const filterButtons = document.querySelectorAll('.filter-button');
const resourceCards = document.querySelectorAll('.resource-card');

filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const selectedFilter = button.dataset.filter;
		filterButtons.forEach((item) => item.classList.toggle('active', item === button));
		resourceCards.forEach((card) => {
			const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
			card.hidden = !shouldShow;
		});
	});
});

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
