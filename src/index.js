import insertHeader from './header';
import insertNavBar from './navbar';
import insertIntro from './intro';
import insertMenu from './menu';
import insertAbout from './about';
import animationLineMechanics from './animationLineMechanics';

let contentDiv = document.querySelector('.content');

insertHeader(contentDiv);
insertNavBar(contentDiv);

let currentContent = insertIntro(contentDiv);

let pastState;
let presentState;

let introBtn = document.querySelector('.introBtn');
let menuBtn = document.querySelector('.menuBtn');
let aboutBtn = document.querySelector('.aboutBtn');

introBtn.addEventListener('click', () => {
    pastState = currentContent.className;
    contentDiv.removeChild(currentContent);
    currentContent = insertIntro(contentDiv);
    presentState = currentContent.className;
    animationLineMechanics(pastState, presentState);
});

menuBtn.addEventListener('click', () => {
    pastState = currentContent.className;
    contentDiv.removeChild(currentContent);
    currentContent = insertMenu(contentDiv);
    presentState = currentContent.className;
    animationLineMechanics(pastState, presentState);
});

aboutBtn.addEventListener('click', () => {
    pastState = currentContent.className;
    contentDiv.removeChild(currentContent);
    currentContent = insertAbout(contentDiv);
    presentState = currentContent.className;
    animationLineMechanics(pastState, presentState);
});