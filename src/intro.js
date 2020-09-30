function insertIntro(contentDiv){
    let introDiv = document.createElement('div');
    introDiv.classList.add('introDiv');
    let introDivText = document.createElement('p');

    introDiv.style.position = 'relative';
    introDiv.style.top = '1vw';
    introDiv.style.backgroundColor = 'white';
    introDiv.style.width = '80vw';
    introDiv.style.height = '150vw';
    introDiv.style.left = '50%';
    introDiv.style.transform = 'translateX(-50%)';

    introDivText.style.fontFamily = 'Quicksand';
    introDivText.style.fontSize = '2vw';
    introDivText.style.padding = '2vw';
    introDivText.style.textAlign = 'center';
    introDivText.innerHTML = 'The better place if you are looking for the best of the best wine.';

    introDiv.appendChild(introDivText);
    contentDiv.appendChild(introDiv);
}

export default insertIntro;