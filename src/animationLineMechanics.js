function animationLineMechanics(pastState, presentState){
    let animationLine = document.querySelector('.animationLine');
    let introPostion = '7.65vw';
    let menuPostion = '19.3vw';
    let aboutPostion = '31.3vw';

    if(pastState === 'introDiv'){
        if(presentState === 'menuDiv'){
            animationLine.animate([
                { left: introPostion},
                { left: menuPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        } else if(presentState === 'aboutDiv'){
            animationLine.animate([
                { left: introPostion},
                { left: aboutPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        }
    } else if(pastState === 'menuDiv'){
        if(presentState === 'introDiv'){
            animationLine.animate([
                { left: menuPostion},
                { left: introPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        } else if(presentState === 'aboutDiv'){
            animationLine.animate([
                { left: menuPostion},
                { left: aboutPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        }
    } else if(pastState === 'aboutDiv'){
        if(presentState === 'menuDiv'){
            animationLine.animate([
                { left: aboutPostion},
                { left: menuPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        } else if(presentState === 'introDiv'){
            animationLine.animate([
                { left: aboutPostion},
                { left: introPostion}
              ], {
                duration: 200,
                fill: "forwards"
            })
        }
    }
}

export default animationLineMechanics;