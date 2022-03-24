$(document).ready(function () {
	$(".account-overlay, .account-signup,.account-login").click(
		toggleAccountContainer
	);
	$(".signup-btn, .login-btn").click(toggleAccountForms);
});

// Account Section Start
const toggleAccountContainer = (e) => {
	$(".account-container").fadeToggle("slow");
	toggleAccountForms()
};

const toggleAccountForms = (e) => {
	$(".signup-container, .overlay-right").toggleClass("show-account");
	$(".overlay-left").toggleClass("overlay-left-inactive");
	$(".login-container").toggleClass("overlay-right-inactive");
};

// Account Section End

// featured section slider
let slider = () => {
	$(".next").click(function () {
		let currentSlide = $(".slide.active");
		let nextSlide = currentSlide.next();

		currentSlide.fadeOut(400).removeClass("active");
		nextSlide.fadeIn(400).addClass("active");

		if (nextSlide.length == 0) {
			$(".slide").first().fadeIn(300).addClass("active");
		}
	});

	$(".prev").click(function () {
		console.log("prev btn pressed");
		let currentSlide = $(".slide.active");
		let prevSlide = currentSlide.prev();

		currentSlide.fadeOut(300).removeClass("active");
		prevSlide.fadeIn(300).addClass("active");

		if (prevSlide.length == 0) {
			$(".slide").last().fadeIn(300).addClass("active");
		}
	});
};

// start of booktour contact form

const isvalidEmail = (email) => {
	let emFilter =
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return emFilter.test(String(email).toLocaleLowerCase());
};
const isvalidPhone = (phone) => {
	let phFilter = /[0-9 -()+]+$/;
	return phFilter.test(String(phone).toLocaleLowerCase());
};
let form = document.querySelector(".main-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let locationInput = document.querySelector("#location");
let messageInput = document.querySelector("#message");
let thanks = document.querySelector(".thanks");

let inputs = [nameInput, emailInput, phoneInput, locationInput, messageInput]; //put the inputs gotten from the DOM in an array===helps in calling adding eventlisteners to each element.

let isFormValid = false;

const resetElm = (elm) => {
	// elm.classList.add("invalid");
	elm.nextElementSibling.classList.add("please");
};
const inValidateElm = (elm) => {
	elm.nextElementSibling.classList.remove("please");
};
//validating inputs
let validateInputs = () => {
	isFormValid = true;

	resetElm(nameInput);
	resetElm(emailInput);
	resetElm(phoneInput);
	resetElm(locationInput);
	resetElm(messageInput);

	if (!nameInput.value) {
		inValidateElm(nameInput);
		isFormValid = false;
	}
	if (!isvalidEmail(emailInput.value)) {
		inValidateElm(emailInput);
		isFormValid = false;
	}
	if (!isvalidPhone(phoneInput.value)) {
		inValidateElm(phoneInput);
		isFormValid = false;
	}
	if (!locationInput.value) {
		inValidateElm(locationInput);
		isFormValid = false;
	}
	if (!messageInput.value || messageInput <= 10) {
		inValidateElm(messageInput);
		isFormValid = false;
	}
};
form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInputs();
	if (isFormValid) {
		form.remove();
		thanks.classList.remove("thanks");
	}
});

inputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		validateInputs();
	});
});

// end of booktour contact form
