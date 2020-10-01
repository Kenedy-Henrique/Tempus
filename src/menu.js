function insertMenu(contentDiv){
    let menu = document.createElement('div');
    menu.style.position = 'relative';
    menu.style.display = 'flex';
    menu.style.flexWrap = 'wrap';
    menu.style.justifyContent = 'center';
    menu.style.gap = '4vw';
    menu.style.top = '4.5vw';
    menu.style.backgroundColor = 'white';
    menu.style.width = '80vw';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';

    let products = [
        {
            name: `Cabernet Sauvignon 2015`,
            price: `$928.85`,
            imageLocation: `../src/assets/0.png`},
        {
            name: `La Tâche Grand Cru 2000`,
            price: `$8399.50`,
            imageLocation: `../src/assets/1.png`
        },
        {
            name: `Case Basse Sangiovese Toscana 2006`,
            price: `$800`,
            imageLocation: `../src/assets/2.png`
        },
        {
            name: `Sauternes 2001`,
            price: `$1091`,
            imageLocation: `../src/assets/3.png`
        },
        {
            name: `Very Old Single Harvest Port 1968`,
            price: `$312.78`,
            imageLocation: `../src/assets/4.png`
        },
        {
            name: `Grands-Échezeaux Grand Cru 2011`,
            price: `$3850`,
            imageLocation: `../src/assets/5.png`
        },
        {
            name: `Red 2014`,
            price: `$431.03`,
            imageLocation: `../src/assets/6.png`
        },
        {
            name: `Toscana 2005`,
            price: `$1455.65`,
            imageLocation: `../src/assets/7.png`
        },
        {
            name: `Pêra-Manca Tinto 2005`,
            price: `$599.10`,
            imageLocation: `../src/assets/8.png`
        },
        {
            name: `Pomerol 2005`,
            price: `$6001`,
            imageLocation: `../src/assets/9.png`
        },
    ];

    for(let i=0; i<=9; i++){
        let product = document.createElement('div');
        let image = document.createElement('img');
        let namePTag = document.createElement('p');
        let pricePTag = document.createElement('p');

        product.style.width = '15vw';
        product.style.height = '15vw';
        product.style.position = 'relative';
        product.style.top = '3vw';
        product.style.borderRadius = '10px';
        product.addEventListener("mouseover", () => product.style.backgroundColor = /*'2px solid rgb(125, 35, 60)'*/`rgba(207, 154, 41, 0.349)`);
        product.addEventListener("mouseout", () => product.style.backgroundColor = 'white');

        image.src = products[i].imageLocation;
        image.style.position = 'relative';
        image.style.left = '1vw';
        image.style.top = '2vw';

        namePTag.innerHTML = products[i].name;
        namePTag.style.position = 'absolute';
        namePTag.style.top = '3vw';
        namePTag.style.left = '5.5vw';
        namePTag.style.fontFamily = 'Quicksand';

        pricePTag.innerHTML = products[i].price;
        pricePTag.style.position = 'absolute';
        pricePTag.style.top = '7vw';
        pricePTag.style.left = '5.5vw';
        pricePTag.style.fontFamily = 'Quicksand';

        product.appendChild(image);
        product.appendChild(namePTag);
        product.appendChild(pricePTag);
        products[i] = product;
        menu.appendChild(products[i]);
    }

    contentDiv.appendChild(menu);

    return menu;
}

export default insertMenu;