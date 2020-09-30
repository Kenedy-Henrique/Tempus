function makeNavBar(contentDiv) {
    let navBar = document.createElement('div');
    let intro = document.createElement('button');
    let menu = document.createElement('button');
    let about = document.createElement('button');

    navBar.style.display = 'flex';
    navBar.style.gap = '3vw';
    navBar.style.justifyContent = 'center';
    navBar.style.position = 'relative';
    navBar.style.top = '1vw';
    navBar.style.backgroundColor = 'white';
    navBar.style.width = '80vw';
    navBar.style.left = '50%';
    navBar.style.transform = 'translateX(-50%)';

    intro.classList.add('introBtn');
    intro.innerHTML = 'Intro';
    intro.style.fontFamily = 'Quicksand';
    intro.style.fontSize = '3vw';
    intro.style.border = 'none';
    intro.style.backgroundColor = 'white';
    intro.style.color = 'rgb(207, 154, 41)';
    intro.addEventListener("mouseover", () => intro.style.color = 'rgb(125, 35, 60)');
    intro.addEventListener("mouseout", () => intro.style.color = 'rgb(207, 154, 41)');

    menu.classList.add('menuBtn');
    menu.innerHTML = 'Menu';
    menu.style.fontFamily = 'Quicksand';
    menu.style.fontSize = '3vw';
    menu.style.border = 'none';
    menu.style.backgroundColor = 'white';
    menu.style.color = 'rgb(207, 154, 41)';
    menu.addEventListener("mouseover", () => menu.style.color = 'rgb(125, 35, 60)');
    menu.addEventListener("mouseout", () => menu.style.color = 'rgb(207, 154, 41)');

    about.classList.add('aboutBtn');
    about.innerHTML = 'About';
    about.style.fontFamily = 'Quicksand';
    about.style.fontSize = '3vw';
    about.style.border = 'none';
    about.style.backgroundColor = 'white';
    about.style.color = 'rgb(207, 154, 41)';
    about.addEventListener("mouseover", () => about.style.color = 'rgb(125, 35, 60)');
    about.addEventListener("mouseout", () => about.style.color = 'rgb(207, 154, 41)');
    
    navBar.appendChild(intro);
    navBar.appendChild(menu);
    navBar.appendChild(about);
    contentDiv.appendChild(navBar);
}

export default makeNavBar;