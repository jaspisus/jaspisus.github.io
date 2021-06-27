export class AboutMe {
	constructor({ paragraph, data }) {
		this.paragraph = paragraph;
		this.data = data;
		this.renderText();
	}

	renderText() {
		fetch('/data.json')
			.then(res => res.json())
			.then(res => (this.paragraph.innerHTML = res[this.data]));
	}
}