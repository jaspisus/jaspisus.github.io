const buttonsBox = document.querySelector('.calc__buttons__input');
const display = document.querySelector('.calc__display');
const equalBtn = document.querySelector('#equals-btn');

const renderButtons = () => {
	for (let i = 0; i < 10; i++) {
		const digitButton = document.createElement('button');
		digitButton.dataset.value = i;
		digitButton.classList.add('input-btn');
		digitButton.innerHTML = i;
		buttonsBox.append(digitButton);
	}

	const countingOperators = ['DEL', '+', '-', '*', '/', '.'];

	countingOperators.forEach(operator => {
		const digitButton = document.createElement('button');
		digitButton.dataset.value = operator;
		digitButton.classList.add('input-btn');
		digitButton.innerHTML = operator;
		buttonsBox.append(digitButton);
	});
};

renderButtons();

const userInputs = [];

const renderDisplay = value => {
	userInputs.push(value);
	display.innerHTML = userInputs.join('');
};

const captureValue = e => {
	renderDisplay(e.target.dataset.value);
};

const showResult = () => {
	const result = eval(userInputs.join(''));
	display.innerHTML = result.toFixed(10);
};

buttonsBox.addEventListener('click', captureValue);

equalBtn.addEventListener('click', showResult);
