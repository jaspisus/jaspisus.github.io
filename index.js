import { AboutMe } from './AboutMe.esm.js';
import { TechStack } from './TechStack.esm.js';

new AboutMe({
	node: document.querySelector('#aboutMe'),
	key: 'aboutMe',
});

new TechStack({
	node: document.querySelector('#techStack'),
	key: 'techStack',
});