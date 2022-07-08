const colors=["#cd4c35", "#d93d36", "#e8250c", "#dd7500", "#003893", "#26ff4e", "#0cc981", "#f1af86", "#df8896", "#f1af86", "#013b10", "#0224ff", "#ca887a", "#ffd201", "#f1f2f4", "#df8896", "#dfc7de", "#e72525", "#e9d2c9", "#154954", "#235126"]

const btn = document.getElementsByClassName("button")[0];
const color = document.querySelector('.color');
const bg = document.getElementsByClassName("cont")[0];

function getRandom(){
    return Math.floor(Math.random()*colors.length);
};

btn.addEventListener('click', function(){
    const randomNumber = getRandom();
    color.textContent=colors[randomNumber];
    bg.style.backgroundColor=colors[randomNumber];
});
