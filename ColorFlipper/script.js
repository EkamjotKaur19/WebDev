const colors=["green", "red", "blue", "black", "white", "pink" , "brown", "crimson", "cyan", "darkgreen", "coral", "chocolate", "fuschia", "deeppink", "dodgerblue", "gold", "purple", "peru", "plum", "cadetblue", "blurywool", "hotpink", "indianred", "indigo", "lime", "maroon", "midnightblue"]

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
