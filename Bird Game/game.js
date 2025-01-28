
const gameArea = document.getElementById('gameArea');
const bird = document.getElementById('bird');
const gun = document.getElementById('gun');
const killed = document.getElementById('killed');
const scoreElement = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOverScreen');
const restartButton = document.getElementById('restartButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');


let birdX = gameArea.offsetWidth / 2;
let birdY = gameArea.offsetHeight / 2;
let speedX = 10;
let speedY = 5.5;
let score = 0;
let gameOverFlag = false;


function moveBird() {
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;

    birdX += speedX;
    birdY += speedY;

    if (birdX < 0 || birdX > gameAreaWidth - bird.offsetWidth) speedX = -speedX;
    if (birdY < 0 || birdY > gameAreaHeight - bird.offsetHeight) speedY = -speedY;

    bird.style.left = `${birdX}px`;
    bird.style.top = `${birdY}px`;
}


function moveGun(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gun.style.left = `${mouseX - gun.offsetWidth / 2}px`;
    gun.style.top = `${mouseY - gun.offsetHeight / 2}px`;
}

bird.onclick = () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    bird.style.display = 'none';
    killed.style.left = bird.style.left;
    killed.style.top = bird.style.top;
    killed.style.display = 'block';

    setTimeout(() => {
        bird.style.display = 'block';
        killed.style.display = 'none';
    }, 500);
};


function showGameOver() {
    gameOverFlag = true;
    gameOverScreen.style.display = 'block';
}


restartButton.addEventListener('click', () => {
    gameOverScreen.style.display = 'none';
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    bird.style.display = 'block';
    gameOverFlag = false;
});


fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        gameArea.requestFullscreen();
    }
});

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    setInterval(moveBird, 16);
    setTimeout(() => {
        if (!gameOverFlag) showGameOver();
    }, 5000);
});



gameArea.addEventListener('mousemove', moveGun);
