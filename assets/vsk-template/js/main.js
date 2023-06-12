/**
 * Esquema de colores
 */

class StackColorScheme {
	localStorageKey = 'StackColorScheme';
	currentScheme;
	systemPreferScheme;

	constructor(toggleEl) {
		this.systemPreferScheme = 'dark';
		this.bindMatchMedia();
		this.currentScheme = this.getSavedScheme();

		this.dispatchEvent(document.documentElement.dataset.scheme);

		if (toggleEl) this.bindClick(toggleEl);

		if (document.body.style.transition == '')
			document.body.style.setProperty(
				'transition',
				'background-color .3s ease'
			);
	}

	saveScheme() {
		localStorage.setItem(this.localStorageKey, this.currentScheme);
	}

	bindClick(toggleEl) {
		toggleEl.addEventListener('click', (e) => {
			if (this.isDark()) {
				/// Disable dark mode
				this.currentScheme = 'light';
			} else {
				this.currentScheme = 'dark';
			}

			this.setBodyClass();

			if (this.currentScheme == this.systemPreferScheme) {
				/// Set to auto
				this.currentScheme = 'auto';
			}

			this.saveScheme();
		});
	}

	isDark() {
		return (
			this.currentScheme == 'dark' ||
			(this.currentScheme == 'auto' && this.systemPreferScheme == 'dark')
		);
	}

	dispatchEvent(detail) {
		const event = new CustomEvent('onColorSchemeChange', {
			detail,
		});
		window.dispatchEvent(event);
	}

	setBodyClass() {
		if (this.isDark()) {
			document.documentElement.dataset.scheme = 'dark';
		} else {
			document.documentElement.dataset.scheme = 'light';
		}

		this.dispatchEvent(document.documentElement.dataset.scheme);
	}

	getSavedScheme() {
		const savedScheme = localStorage.getItem(this.localStorageKey);

		if (
			savedScheme == 'light' ||
			savedScheme == 'dark' ||
			savedScheme == 'auto'
		)
			return savedScheme;
		else return 'auto';
	}

	bindMatchMedia() {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				if (e.matches) {
					this.systemPreferScheme = 'dark';
				} else {
					this.systemPreferScheme = 'light';
				}
				this.setBodyClass();
			});
	}
}

/**
 * On Scroll section
 */

async function setNavBarOnScroll() {
	const headerNavbar = document.querySelector('.navbar-area');
	const sticky = headerNavbar?.offsetTop;
	if (window.scrollY > sticky) {
		headerNavbar?.classList.add('sticky');
	} else {
		headerNavbar?.classList.remove('sticky');
	}
}

/**
 * Scroll to element
 */

function easeInOutQuad(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
}

export function scrollTo(element, to = 0, duration = 1000) {
	const start = element.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;
	const animateScroll = () => {
		currentTime += increment;
		const val = easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

/**
 * Filtros de búsqueda
 */

const testimonial = document.querySelector('.testimonial-active');
if (testimonial !== null) {
	tns({
		container: '.testimonial-active',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		mouseDrag: true,
		gutter: 0,
		nav: false,
		controlsText: [
			'<i class="fa fa-arrow-left"></i>',
			'<i class="fa fa-arrow-right"></i>',
		],
	});
}

/**
 * Main
 */
const Stack = {
	init: () => {
		/**
		 * Add copy button to code block
		 */
		const highlights = document.querySelectorAll(
			'.article-content div.highlight'
		);
		const copyText = `Copiar`,
			copiedText = `Copiado!`;

		highlights.forEach((highlight) => {
			const copyButton = document.createElement('button');
			copyButton.innerHTML = copyText;
			copyButton.classList.add('copyCodeButton');
			highlight.appendChild(copyButton);

			const codeBlock = highlight.querySelector('code[data-lang]');
			if (!codeBlock) return;

			copyButton.addEventListener('click', () => {
				navigator.clipboard
					.writeText(codeBlock.textContent)
					.then(() => {
						copyButton.textContent = copiedText;

						setTimeout(() => {
							copyButton.textContent = copyText;
						}, 1000);
					})
					.catch((err) => {
						alert(err);
					});
			});
		});

		new StackColorScheme(document.getElementById('dark-mode-toggle'));

		// Add navbar toggler EventListener
		const navbarToggler = document.querySelector('.navbar-toggler');
		navbarToggler?.addEventListener('click', function () {
			navbarToggler?.classList.toggle('active');
		});

		// Init WoW.js
		new WOW().init();

		// Init counterUp.js
		const cu = new counterUp({
			start: 0,
			duration: 2000,
			intvalues: true,
			interval: 100,
		});
		cu.start();

		// Add Scroll to Top
		const scrollTop = document.querySelector('.scroll-top');
		scrollTop.onclick = function () {
			scrollTo(document.documentElement);
		};
	},
};

/**
 * Set Window
 */

window.addEventListener('load', () => {
	setTimeout(function () {
		Stack.init();
	}, 0);
});

window.Stack = Stack;
window.onscroll = function () {
	setNavBarOnScroll();
};
