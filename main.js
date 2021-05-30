function readTextFile(file) {
	const rawFile = new XMLHttpRequest();
	rawFile.open('GET', file, false);
	rawFile.onreadystatechange = () => {
		document.querySelector('#aboutMe').textContent = rawFile.responseText;
	};
	rawFile.send(null);
}

readTextFile('aboutMe.txt');
