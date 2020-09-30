function navBar(contentDiv) {
    let introDiv = document.createElement('div');
    let intro = document.createElement('button');
    let menu = document.createElement('button');
    let about = document.createElement('button');

    introDiv.style.display = 'flex';
    introDiv.style.gap = '3vw';
    introDiv.style.justifyContent = 'center';

    intro.innerHTML = 'Intro';
    intro.style.fontFamily = 'Quicksand';
    intro.style.fontSize = '3vw';
    intro.style.border = 'none';
    intro.style.backgroundColor = 'white';
    intro.style.color = 'rgb(207, 154, 41)';
    intro.addEventListener("mouseover", () => intro.style.color = 'rgb(125, 35, 60)');
    intro.addEventListener("mouseout", () => intro.style.color = 'rgb(207, 154, 41)');

    menu.innerHTML = 'Menu';
    menu.style.fontFamily = 'Quicksand';
    menu.style.fontSize = '3vw';
    menu.style.border = 'none';
    menu.style.backgroundColor = 'white';
    menu.style.color = 'rgb(207, 154, 41)';
    menu.addEventListener("mouseover", () => menu.style.color = 'rgb(125, 35, 60)');
    menu.addEventListener("mouseout", () => menu.style.color = 'rgb(207, 154, 41)');

    about.innerHTML = 'About';
    about.style.fontFamily = 'Quicksand';
    about.style.fontSize = '3vw';
    about.style.border = 'none';
    about.style.backgroundColor = 'white';
    about.style.color = 'rgb(207, 154, 41)';
    about.addEventListener("mouseover", () => about.style.color = 'rgb(125, 35, 60)');
    about.addEventListener("mouseout", () => about.style.color = 'rgb(207, 154, 41)');
    
    introDiv.appendChild(intro);
    introDiv.appendChild(menu);
    introDiv.appendChild(about);
    contentDiv.appendChild(introDiv);
}

export default navBar;