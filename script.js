const gunBtn= document.getElementById('gun');
const waterBtn= document.getElementById('water');
const snakeBtn= document.getElementById('snake');
const playerImg= document.getElementById('my');
const cpuImg= document.getElementById('cpu');
const resultText= document.getElementById('result');

const imageArr= ["res/gun.jpeg","res/water.png","res/snake.png"];
const winnerArr= [2,0,1];

gunBtn.addEventListener('click',changeToGun);
waterBtn.addEventListener('click',changeToWater);
snakeBtn.addEventListener('click',changeToSnake);

let interval,x=0;
const start = () => {
    interval = setInterval(() => {
        buttonEnable();
        const index = Math.floor(Math.random() * imageArr.length);
        const image = (`<img src="${imageArr[index]}">`);
    cpuImg.innerHTML=image;
    }, 100);
};

if(x==0){
    start();
    x++;
}

const stop = () => {
    clearInterval(interval);
};

function buttonDisable(){
    gunBtn.disabled= true;
    waterBtn.disabled= true;
    snakeBtn.disabled= true;
}

function buttonEnable(){
    gunBtn.disabled= false;
    waterBtn.disabled= false;
    snakeBtn.disabled= false;
}

function changeToSnake(){
    playerImg.innerHTML=`<img src="${imageArr[2]}">`;
    handleRest(2);
}

function changeToWater(){
    playerImg.innerHTML=`<img src="${imageArr[1]}">`;
    handleRest(1);
}

function changeToGun(){
    playerImg.innerHTML=`<img src="${imageArr[0]}">`;
    handleRest(0);
}

function handleRest(id){
    stop();
    buttonDisable();
    setTimeout(start,3000);

    let cpu= Math.floor(Math.random() * imageArr.length);

    cpuImg.innerHTML=`<img src="${imageArr[cpu]}">`;

    if(winnerArr[id]==cpu){
        resultText.innerHTML="<h2>Winner</h2>";
    }
    else if(id==cpu){
        resultText.innerHTML="<h2>Tied</h2>";
    }
    else{
        resultText.innerHTML="<h2>Loser</h2>";
    }
}

