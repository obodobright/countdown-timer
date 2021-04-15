'use strict'

//Get the date of dateline inmilliseconds

const countDown = new Date('April 30 2021 17:00:00').getTime()

//updatethe coundown every one seconds.

let counts = setInterval(function() {
    // Add Today's date
    const today = new Date().getTime()

    // check the difference between  countdown date and today date, add to a vairiable
    let dateDiff = countDown - today

    // calculate the time calculation for each of month, day, seconds and minutes

    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hour = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minute = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    const second = Math.floor(dateDiff % (1000 * 60) / 1000)

    const days = document.getElementById('day'),
        hours = document.getElementById('hour'),
        minutes = document.getElementById('minute'),
        seconds = document.getElementById('seconds'),
        expired = document.getElementById('expired'),
        timer = document.getElementById('timer')

    days.textContent = day;
    hours.textContent = hour
    minutes.textContent = minute;
    seconds.textContent = second
    days.textContent + hours.textContent + minutes.textContent + seconds.textContent
        // timer.innerHTML = day + ' d ' + hour + ' h ' + minute + ' m ' + second + ' s '



    if (countDown < 0) {
        clearInterval(counts)
        timer
            .innerHTML = "COUNTDOWN EXPIRED"
    }

}, 1000)

localStorage.setItem('timer', counts)