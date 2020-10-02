function insertAbout(contentDiv){
    let aboutDiv = document.createElement('div');
    let aboutText = document.createElement('p');

    aboutDiv.classList.add('aboutDiv');
    aboutDiv.style.position = 'relative';
    aboutDiv.style.top = '4.5vw';
    aboutDiv.style.backgroundColor = 'white';
    aboutDiv.style.width = '80vw';
    aboutDiv.style.left = '50%';
    aboutDiv.style.transform = 'translateX(-50%)';

    aboutText.style.fontFamily = 'Playfair Display';
    aboutText.style.position = 'relative';
    aboutText.style.top = '4vw';
    aboutText.style.fontSize = '1.5vw';
    aboutText.style.color = 'rgba(0, 0, 0, .7)';
    aboutText.style.textAlign = 'center';
    aboutText.innerHTML = 'Find us at:<br><br>Adress: XXXXXXXX<br><br>Phone: XXXXX-XXXXX<br><br>';

    aboutDiv.appendChild(aboutText);
    contentDiv.appendChild(aboutDiv);

    return aboutDiv;
}

export default insertAbout;