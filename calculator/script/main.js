const buttonsBox = document.querySelector('.calc__buttons__input');
const display = document.querySelector('.calc__display');
const equalBtn = document.querySelector('#equals-btn');
const resetBtn = document.querySelector('#reset-btn');

const countingOperators = ['DEL', '+', '-', '*', '/', '.'];

const userInputs = [0];

let freshCalculation = true;
let isLastDigitAnOperator = false;

const renderButtons = () => {
	for (let i = 0; i < 10; i++) {
		const digitButton = document.createElement('button');
		digitButton.dataset.value = i;
		digitButton.classList.add('input-btn');
		digitButton.innerHTML = i;
		buttonsBox.append(digitButton);
	}

	countingOperators.forEach(operator => {
		const digitButton = document.createElement('button');
		digitButton.dataset.value = operator;
		digitButton.classList.add('input-btn');
		digitButton.innerHTML = operator;
		buttonsBox.append(digitButton);
	});
};

const renderDisplay = (value = false) => {
	if (userInputs.length > 15) return;

	if (!isLastDigitAnOperator) {
		if (value) {
			userInputs.push(value);
		}
	}

	display.innerHTML = userInputs.join('');
};

const resetCalculation = () => {
	freshCalculation = true;
	userInputs.length = 0;
	renderDisplay('0');
};

const backspace = () => {
	if (userInputs.length == 1 || userInputs.length == 0) {
		resetCalculation();
		userInputs.pop();
	} else {
		userInputs.pop();
		renderDisplay();
	}
};

const captureValue = e => {
	const clickedBtn = e.target.dataset.value;

	if (freshCalculation && !countingOperators.includes(clickedBtn)) {
		userInputs.pop();
	}

	if (clickedBtn && clickedBtn != 'DEL') {
		if (countingOperators.includes(clickedBtn)) {
			renderDisplay(clickedBtn);
			isLastDigitAnOperator = true;
		} else {
			isLastDigitAnOperator = false;
			renderDisplay(clickedBtn);
		}
	}

	if (clickedBtn == 'DEL') {
		isLastDigitAnOperator = false;
		backspace();
	}

	freshCalculation = false;
};

const showResult = () => {
	if (freshCalculation) return;

	let result;
	try {
		result = eval(userInputs.join(''));
		if (result != 'Infinity') {
			display.innerHTML = result.toString().slice(0, 16);
		} else {
			display.innerHTML = 'ERROR';
		}
	} catch {
		display.innerHTML = 'ERROR';
	}

	userInputs.length = 0;
	userInputs[0] = 0;
	freshCalculation = true;
};

renderButtons();

buttonsBox.addEventListener('click', captureValue);

equalBtn.addEventListener('click', showResult);

resetBtn.addEventListener('click', resetCalculation);
