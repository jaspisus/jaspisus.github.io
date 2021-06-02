export class HamMenu {
	constructor(btn, list) {
		this.btn = btn;
		this.list = list;
	}

	handleClick() {
		this.list.classList.toggle('active');
	}

	choosePlanet(e) {
		console.log(e.target);
		this.hide();
	}

	hide() {
		this.list.classList.remove('active');
	}
}
