import insertHeader from './header';
import navBar from './navbar';
import insertIntro from './intro';

let contentDiv = document.querySelector('.content');

document.body.style.backgroundImage = 'url(../src/assets/spikes.png)';

insertHeader(contentDiv);
navBar(contentDiv);
insertIntro(contentDiv);


let introBtn = document.querySelector('.introBtn');
let menuBtn = document.querySelector('.menuBtn');
let aboutBtn = document.querySelector('.aboutBtn');

introBtn.addEventListener('click', () => {

});

menuBtn.addEventListener('click', () => {

});

aboutBtn.addEventListener('click', () => {

});