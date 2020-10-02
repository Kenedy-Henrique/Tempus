function insertIntro(contentDiv){
    let introDiv = document.createElement('div');
    let wineBottlesImage = document.createElement('img');
    let text = document.createElement('p');

    introDiv.classList.add('introDiv');
    introDiv.style.position = 'relative';
    introDiv.style.top = '4.5vw';
    introDiv.style.backgroundColor = 'white';
    introDiv.style.width = '80vw';
    introDiv.style.left = '50%';
    introDiv.style.transform = 'translateX(-50%)';

    wineBottlesImage.src = '../src/assets/wine-bottles_burned.png';
    wineBottlesImage.style.height = '50vw';
    wineBottlesImage.style.width = 'auto';

    text.style.fontFamily = 'Playfair Display';
    text.style.fontSize = '2vw';
    text.style.padding = '2vw';
    text.style.position = 'absolute';
    text.style.top = '10vw';
    text.style.left = '30vw';
    text.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';
    text.style.color = 'rgba(0, 0, 0, .7)';
    text.innerHTML = 'The best place if you are looking for the best of the best wine.<br><br>With more than 10 years serving our clients with the best product, we are sure to serve you as well.<br><br>Join that story with us.';


    introDiv.appendChild(wineBottlesImage);
    introDiv.appendChild(text);
    contentDiv.appendChild(introDiv);

    return introDiv;
}

export default insertIntro;