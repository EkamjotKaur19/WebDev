const reviews = [
    {
        id:"1",
        name: "Susan Smith",
        job:"Web Developer",
        img:"OIP (2).jpg",
        text:" A vel, necessitatibus perferendis recusandae error iure, debitis molestias architecto earum, neque aliquam saepe id cum iste quidem sapiente! Quas, rem natus dolorum quisquam nulla minus earum architecto ducimus quos iste cumque autem deserunt debitis sequi, dolor unde rerum labore. Provident, unde",
    },

    {
        id:"2",
        name: "Olivia Jones",
        job:"ML Engineer",
        img:"OIP (1).jpg",
        text:"Pariatur adipisci error necessitatibus consequatur mollitia delectus voluptates et, beatae debitis tenetur reiciendis unde tempore velit architecto suscipit, nisi officiis expedita accusamus vitae. Eum, assumenda fuga, quas corporis magni esse, consequuntur itaque aperiam voluptatibus .",
    },

    {
        id:"3",
        name: "Sara",
        job:"UX Designer",
        img:"OIP.jpg",
        text:" A vel, necessitatibus perferendis recusandae error iure, debitis molestias architecto earum, neque aliquam saepe id cum iste quidem sapiente! Quas, rem natus dolorum quisquam nulla minus earum architecto ducimus quos iste cumque autem deserunt debitis sequi, dolor unde rerum labore. Provident, unde",
    }
    

]

const img = document.getElementsByTagName('img')[0];
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem=0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
});

function showPerson(person){
    const item = reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
