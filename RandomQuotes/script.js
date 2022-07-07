const button = document.querySelector('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const sound = document.getElementById('sound');
const copy = document.getElementById('copy');
const twitter = document.getElementById('twitter');

function randomQuote(){
    button.classList.add("loading");
    button.innerText = "Loading......";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quote.innerText = result.content;
        var str1 = "-";
        author.innerText = str1.concat(result.author);
        button.innerText = "Next";
        button.classList.remove('loading');
    })
};

sound.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});


copy.addEventListener('click', () => {
    navigator.clipboard.writeText(quote.innerText);
});

twitter.addEventListener('click', () => {
    let twitterURL = `htpps://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(twitterURL, "_blank");
});



button.addEventListener('click',randomQuote);