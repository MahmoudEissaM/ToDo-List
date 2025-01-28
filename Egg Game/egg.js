
let eggX = Math.random() * (gameArea.offsetWidth - egg.offsetWidth);
let eggY = -egg.offsetHeight;
let eggSpeed = 6;


let basketX = gameArea.offsetWidth / 2 - basket.offsetWidth / 2;
basket.style.left = `${basketX}px`;


function moveEgg() {
    eggY += eggSpeed;

    if (eggY + egg.offsetHeight >= gameArea.offsetHeight - basket.offsetHeight &&
        eggX + egg.offsetWidth > basketX && eggX < basketX + basket.offsetWidth) {

        egg.style.display = 'none';
        gameover.style.display = 'none';
        resetEgg();
    }


    if (eggY + egg.offsetHeight >= gameArea.offsetHeight) {

        egg.style.display = 'none';
        gameover.style.left = `${eggX}px`;
        gameover.style.top = `${eggY}px`;
        gameover.style.display = 'block';


        setTimeout(() => {
            resetEgg();
            gameover.style.display = 'none';
        }, 2000);
    }


    egg.style.left = `${eggX}px`;
    egg.style.top = `${eggY}px`;
}


function resetEgg() {
    egg.style.display = 'block';
    eggX = Math.random() * (gameArea.offsetWidth - egg.offsetWidth);
    eggY = -egg.offsetHeight;
    egg.style.left = `${eggX}px`;
    egg.style.top = `${eggY}px`;
}


gameArea.addEventListener('mousemove', (event) => {
    basketX = event.clientX - basket.offsetWidth / 2;
    basket.style.left = `${basketX}px`;
});


setInterval(moveEgg, 16); 
