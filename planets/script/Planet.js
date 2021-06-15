export class Planet {
	constructor(name, displayName, planetStats, planetStatsTemplate) {
		this.name = name;
		this.displayName = displayName;
		this.planetStats = planetStats;
		this.planetStatsTemplate = planetStatsTemplate;
	}

	renderStats(wikiInfo) {
		this.planetStats.innerHTML = this.planetStatsTemplate.innerHTML;
		this.planetStats.querySelector('h2').innerHTML = this.displayName;

		this.planetStats
			.querySelector('img')
			.setAttribute('src', `./images/${this.name}.webp`);

		this.planetStats.querySelector('p').innerHTML =
			wikiInfo.slice(0, 400) +
			'...' +
			`<a href="https://pl.wikipedia.org/wiki/${this.displayName}" target="_blank">Wikipedia</a>`;
	}

	getPlanetInfo() {
		const url = `https://pl.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=true&explaintext=true&titles=${this.displayName}`;

		fetch(url)
			.then(res => res.json())
			.then(res => {
				const result = new Object(res.query.pages);
				for (let i in result) {
					this.renderStats(result[i].extract);
				}
			})
			.catch(err => {
				throw new Error(err);
			});
	}
}
