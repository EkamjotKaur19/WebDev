const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');




const birthDay = "19 Mar 2023";

function countDown(){
    const birthDayDate = new Date(birthDay);

    const currDate = new Date();

    const totalSeconds = (birthDayDate-currDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)% 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secsEl.innerHTML=seconds;
}

countDown();

setInterval(countDown,1000);