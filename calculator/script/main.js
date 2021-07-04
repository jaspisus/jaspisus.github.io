const buttonsBox = document.querySelector('.calc__buttons__input');
const display = document.querySelector('.calc__display');
const equalBtn = document.querySelector('#equals-btn');
const resetBtn = document.querySelector('#reset-btn');

const countingOperators = ['DEL', '+', '-', '*', '/', '.'];

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

renderButtons();

const userInputs = [0];

let freshCalculation = true;

const renderDisplay = (value = false) => {
	if (userInputs.length > 15) return;
	if (value) {
		userInputs.push(value);
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
	if (freshCalculation) {
		userInputs.pop();
	}

	const clickedBtn = e.target.dataset.value;

	if (clickedBtn && clickedBtn != 'DEL') {
		renderDisplay(clickedBtn);
	} else {
		backspace();
	}

	freshCalculation = false;
};

const showResult = () => {
	const result = eval(userInputs.join(''));
	display.innerHTML = result.toString().slice(0, 16);
	userInputs.length = 0;
	userInputs[0] = 0;
};

buttonsBox.addEventListener('click', captureValue);

equalBtn.addEventListener('click', showResult);

resetBtn.addEventListener('click', resetCalculation);
