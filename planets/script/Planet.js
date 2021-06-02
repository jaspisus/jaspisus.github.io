export class Planet {
	constructor(name, displayName) {
		this.name = name;
		this.displayName = displayName;
	}

	renderStats() {
		const planetStats = document.querySelector('.planets__stats');
		planetStats.innerHTML = '<h2></h2>';
		planetStats.querySelector('h2').innerHTML = this.displayName;
		const image = document.createElement('img');
		image.setAttribute('src', `./images/${this.name}.webp`);
		planetStats.appendChild(image);
	}
}
