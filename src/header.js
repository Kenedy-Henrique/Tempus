function insertHeader(contentDiv){
    let header = document.createElement('header');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'center';
    contentDiv.appendChild(header);

    let logoImage = document.createElement('img');
    logoImage.src = '../src/assets/tempus-wine-editado.png';
    logoImage.style.width = '8vw';
    logoImage.style.height = '8vw';
    header.appendChild(logoImage);

    let mainPElement = document.createElement('p');
    mainPElement.innerHTML = 'Your best choice from';
    mainPElement.style.display = 'flex';
    mainPElement.style.fontFamily = 'Playfair Display';
    mainPElement.style.fontSize = '2.4vw';
    mainPElement.style.color = 'rgb(207, 154, 41)';
    header.appendChild(mainPElement);

    let now = document.createElement('div');
    now.innerHTML = 'now';
    now.style.paddingLeft = '5px';
    now.style.paddingRight = '5px';
	now.style.fontFamily = 'Playfair Display';
	now.style.fontSize = '2.4vw';
    now.style.color = 'rgb(125, 35, 60)';
    mainPElement.appendChild(now);

    let on = document.createElement('p');
    on.innerHTML = 'on';
    mainPElement.appendChild(on);
}

export default insertHeader;