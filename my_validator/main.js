const inputs = {
	username: document.querySelector('#nick-input'),
	email: document.querySelector('#email-input'),
	password: document.querySelector('#password-input1'),
	password2: document.querySelector('#password-input2'),
};
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.text-danger');
	errorMsg.classList.add('form-text--show');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.text-danger');
	errorMsg.classList.remove('form-text--show');
};

class ClearFunctions {
	static loop() {
		for (const el in inputs) {
			inputs[el].value = '';
			clearError(inputs[el]);
		}
	}

	static clearForm(e) {
		e.preventDefault();
		ClearFunctions.loop();
	}

	static hidePopup() {
		ClearFunctions.loop();
		popup.classList.remove('popup--show');
	}
}

const checkLenght = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} składa się z min. ${min} znaków.`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła do siebie nie pasują');
	}
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny');
	}
};

clearBtn.addEventListener('click', ClearFunctions.clearForm);
submitBtn.addEventListener('click', e => {
	e.preventDefault();

	for (const el in inputs) {
		if (inputs[el].value === '') {
			showError(inputs[el], inputs[el].placeholder);
		} else {
			clearError(inputs[el]);
		}
	}

	checkLenght(inputs.username, 4);
	checkLenght(inputs.password, 8);
	checkPassword(inputs.password, inputs.password2);
	checkMail(inputs.email);

	//error chcecking
	const allInputs = document.querySelectorAll('.form-text');
	let errorCount = 0;
	allInputs.forEach(el => {
		if (el.classList.contains('form-text--show')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('popup--show');
	}
});

closeBtn.addEventListener('click', ClearFunctions.hidePopup);
