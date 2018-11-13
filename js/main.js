// const TypeWriter = function(textElement, words, wait = 3000) {
// 	this.textElement = textElement;
// 	this.words = words;
// 	this.txt = '';
// 	this.wordIndex = 0;
// 	this.wait = parseInt(wait, 10);
// 	this.type();
// 	this.isDeleting = false;
// };
// TypeWriter.prototype.type = function() {
// 	// Getting the current word
// 	const current = this.wordIndex % this.words.length;
// 	//The current word
// 	const fullTxt = this.words[current];
// 	//Check if deleting
// 	if (this.isDeleting) {
// 		// Remove char
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		// Add char
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}
// 	this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// 	//Initial Type Speed.
// 	let typeSpeed = 300;

// 	if (this.isDeleting) {
// 		typeSpeed /= 2;
// 	}
// 	//If word is complete
// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		//Stop and wait
// 		typeSpeed = this.wait;
// 		//Set isDeleting to true.
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		// Stop deleting
// 		this.isDeleting = false;
// 		//Next word.
// 		this.wordIndex++;
// 		// Set typeSpeed back
// 		typeSpeed = 300;
// 	}

// 	//Typing Interval
// 	setTimeout(() => this.type(), typeSpeed);
// };
//Initialize
document.addEventListener('DOMContentLoaded', init);

class TypeWriter {
	constructor(textElement, words, wait = 3000) {
		this.textElement = textElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}
	type() {
		// Getting the current word
		const current = this.wordIndex % this.words.length;
		//The current word
		const fullTxt = this.words[current];
		//Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		//Initial Type Speed.
		let typeSpeed = 300;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}
		//If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			//Stop and wait
			typeSpeed = this.wait;
			//Set isDeleting to true.
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			// Stop deleting
			this.isDeleting = false;
			//Next word.
			this.wordIndex++;
			// Set typeSpeed back
			typeSpeed = 300;
		}

		//Typing Interval
		setTimeout(() => this.type(), typeSpeed);
	}
}
//Init Function
function init() {
	const textElement = document.querySelector('.text-type');
	const words = JSON.parse(textElement.getAttribute('data-words'));
	const wait = textElement.getAttribute('data-wait');
	//Init TypeWriter
	new TypeWriter(textElement, words, wait);
}

$(function() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop()) {
			$('nav').addClass('stick');
		} else {
			$('nav').removeClass('stick');
		}
	});
});
