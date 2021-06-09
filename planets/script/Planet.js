import { WikiAPI } from './WikiAPI.js';

export class Planet extends WikiAPI {
	constructor(name, displayName) {
		super(displayName);
		this.name = name;
	}

	renderStats() {
		const planetStats = document.querySelector('.planets__stats');
		planetStats.innerHTML = '<h2></h2>';
		planetStats.querySelector('h2').innerHTML = this.displayName;

		const image = document.createElement('img');
		image.setAttribute('src', `./images/${this.name}.webp`);
		planetStats.appendChild(image);

		const wikiAPI = new WikiAPI(this.displayName);
		const description = wikiAPI.getPlanetInfo();

		const p = document.createElement('p');
		planetStats.appendChild(p);
		p.innerHTML = description;
	}
}
