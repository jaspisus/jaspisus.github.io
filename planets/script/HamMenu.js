import { Planet } from './Planet.js';
import { planetStats, planetStatsTemplate } from './main.js';

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
		const planet = new Planet(
			e.target.dataset.planetName,
			e.target.innerText,
			planetStats,
			planetStatsTemplate
		);
		planet.getPlanetInfo();
	}

	hide() {
		this.list.classList.remove('active');
	}
}
