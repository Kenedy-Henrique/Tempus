import insertHeader from './header';
import makeNavBar from './navbar';
import insertIntro from './intro';
import insertMenu from './menu';

let contentDiv = document.querySelector('.content');

document.body.style.backgroundImage = 'url(../src/assets/spikes.png)';

insertHeader(contentDiv);
makeNavBar(contentDiv);

let currentContent = insertIntro(contentDiv);

let introBtn = document.querySelector('.introBtn');
let menuBtn = document.querySelector('.menuBtn');
let aboutBtn = document.querySelector('.aboutBtn');

introBtn.addEventListener('click', () => {
    contentDiv.removeChild(currentContent);
    currentContent = insertIntro(contentDiv);
    
});

menuBtn.addEventListener('click', () => {
    contentDiv.removeChild(currentContent);
    currentContent = insertMenu(contentDiv);
});

aboutBtn.addEventListener('click', () => {

});