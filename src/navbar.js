function insertNavBar(contentDiv) {
    let navBar = document.createElement('div');
    let intro = document.createElement('button');
    let menu = document.createElement('button');
    let about = document.createElement('button');
    let line = document.createElement('div');
    let animationLine = document.createElement('div');

    navBar.style.display = 'flex';
    navBar.style.flexDirection = 'row';
    navBar.style.flexWrap = 'wrap';
    navBar.style.gap = '3vw';
    navBar.style.justifyContent = 'center';
    navBar.style.position = 'relative';
    navBar.style.top = '4.5vw';
    navBar.style.backgroundColor = 'white';
    navBar.style.width = '80vw';
    navBar.style.left = '50%';
    navBar.style.transform = 'translateX(-50%)';
    navBar.style.zIndex = '1';
    navBar.style.boxShadow = '0px 0px 3px 1px rgba(0, 0, 0, .2)';

    intro.classList.add('introBtn');
    intro.innerHTML = 'Intro';
    intro.style.fontFamily = 'Playfair Display';
    intro.style.fontSize = '3vw';
    intro.style.border = 'none';
    intro.style.backgroundColor = 'white';
    intro.style.color = 'rgb(207, 154, 41)';
    intro.addEventListener("mouseover", () => intro.style.color = 'rgb(125, 35, 60)');
    intro.addEventListener("mouseout", () => intro.style.color = 'rgb(207, 154, 41)');
    intro.style.position = 'relative';
    intro.style.top = '1.5vw';

    menu.classList.add('menuBtn');
    menu.innerHTML = 'Menu';
    menu.style.fontFamily = 'Playfair Display';
    menu.style.fontSize = '3vw';
    menu.style.border = 'none';
    menu.style.backgroundColor = 'white';
    menu.style.color = 'rgb(207, 154, 41)';
    menu.addEventListener("mouseover", () => menu.style.color = 'rgb(125, 35, 60)');
    menu.addEventListener("mouseout", () => menu.style.color = 'rgb(207, 154, 41)');
    menu.style.position = 'relative';
    menu.style.top = '1.5vw';

    about.classList.add('aboutBtn');
    about.innerHTML = 'About';
    about.style.fontFamily = 'Playfair Display';
    about.style.fontSize = '3vw';
    about.style.border = 'none';
    about.style.backgroundColor = 'white';
    about.style.color = 'rgb(207, 154, 41)';
    about.addEventListener("mouseover", () => about.style.color = 'rgb(125, 35, 60)');
    about.addEventListener("mouseout", () => about.style.color = 'rgb(207, 154, 41)');
    about.style.position = 'relative';
    about.style.top = '1.5vw';

    line.style.width = '50vw';
    line.style.height = '0.2vw';
    line.style.backgroundColor = 'white';

    animationLine.style.width = '10vw';
    animationLine.style.height = '1.5px';
    animationLine.style.backgroundColor = 'rgb(125, 35, 60)';
    animationLine.classList.add('animationLine');
    animationLine.style.position = 'relative';
    animationLine.style.bottom = '1.5vw';
    animationLine.style.left = '7.65vw';
    
    line.appendChild(animationLine);
    navBar.appendChild(intro);
    navBar.appendChild(menu);
    navBar.appendChild(about);
    navBar.appendChild(line);
    contentDiv.appendChild(navBar);
}

export default insertNavBar;