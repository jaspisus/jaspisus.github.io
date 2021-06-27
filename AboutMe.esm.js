export class AboutMe {
	constructor({ node, key }) {
		this.node = node;
		this.key = key;
		this.renderText();
	}

	renderText() {
		fetch('/data.json')
			.then(res => res.json())
			.then(res => (this.node.innerHTML = res[this.key]));
	}
}
