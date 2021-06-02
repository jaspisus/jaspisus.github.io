import { HamMenu } from './HamMenu.js';

const globeBtn = new HamMenu(
	document.querySelector('.planets__title button'),
	document.querySelector('.planets__title ul')
);

globeBtn.btn.addEventListener('click', globeBtn.handleClick.bind(globeBtn));
globeBtn.list.addEventListener('click', e => {
	globeBtn.choosePlanet(e);
});
