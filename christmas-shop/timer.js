let timerId;

function timer() {
    const days = document.querySelector('.CTA__countdown-days');
    const hours = document.querySelector('.CTA__countdown-hours');
    const minutes = document.querySelector('.CTA__countdown-minutes');
    const seconds = document.querySelector('.CTA__countdown-seconds');
    
    const now = new Date();
    let newYear = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1));
    console.log();

    const diff = newYear - now

    if (diff <= 0) {
            clearTimeout(timerId)
            return;
    }

    const daysUTC = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursUTC = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUTC = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsUTC = Math.floor((diff % (1000 * 60)) / 1000);
        
    days.innerHTML = daysUTC;
    hours.innerHTML = hoursUTC;
    minutes.innerHTML = minutesUTC;
    seconds.innerHTML = secondsUTC;

    timerId = setTimeout(timer, 1000);
}

timer();