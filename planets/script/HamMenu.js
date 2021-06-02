import { Planet } from './Planet.js';

export class HamMenu {
	constructor(btn, list) {
		this.btn = btn;
		this.list = list;
	}

	handleClick() {
		this.list.classList.toggle('active');
	}

	choosePlanet(e) {
		this.hide();
		const planet = new Planet(e.target.dataset.planetName, e.target.innerText);
		planet.renderStats();
	}

	hide() {
		this.list.classList.remove('active');
	}
}
