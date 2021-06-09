export class WikiAPI {
	constructor(displayName) {
		this.displayName = displayName;
	}

	getPlanetInfo() {
		const url = `http://pl.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=true&explaintext=true&titles=${this.displayName}`;

		fetch(url)
			.then(res => res.json())
			.then(res => {
				const result = new Object(res.query.pages);
				for (let i in result) {
					return result[i].extract;
				}
			})
			.catch(err => {
				throw new Error(err);
			});
	}
}
