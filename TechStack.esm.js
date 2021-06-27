export class TechStack {
	constructor({ node, key }) {
		this.node = node;
		this.key = key;
		this.renderText();
	}

	renderText() {
		fetch('/data.json')
			.then(res => res.json())
			.then(res => {
				const list = res[this.key];
				list.forEach(element => {
					const listItem = document.createElement('li');
					listItem.innerHTML = element;
					this.node.append(listItem);
				});
			});
	}
}
