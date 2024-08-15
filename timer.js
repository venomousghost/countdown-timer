const daysContainer = document.querySelector(`.days span`)
const hoursContainer = document.querySelector(`.hours span`)
const minutesContainer = document.querySelector(`.minutes span`)
const secondsContainer = document.querySelector(`.seconds span`)

let end = new Date("Dec 31, 2023").getTime()
const timer = setInterval(() => {
    let start = new Date().getTime()
    let diffDate = end - start
    let days = Math.floor(diffDate / 1000 / 60 / 60 / 24)
    daysContainer.innerHTML = days >= 10 ? days : `0${days}`
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / 1000 / 60 / 60)
    hoursContainer.innerHTML = hours >= 10 ? hours : `0${hours}`
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / 1000 / 60)
    minutesContainer.innerHTML = minutes >= 10 ? minutes : `0${minutes}`
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000)
    secondsContainer.innerHTML = seconds >= 10 ? seconds : `0${seconds}`
    if (diffDate <= 0) {
        daysContainer.innerHTML = `00`
        hoursContainer.innerHTML = `00`
        minutesContainer.innerHTML = `00`
        secondsContainer.innerHTML = `00`
        clearInterval(timer)
    }
}, 1000)