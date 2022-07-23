
const deadLine = '2022-10-14 21:00:00'

const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor(total / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(total / (1000 * 60) % 60)
    const seconds = Math.floor(total / (1000) % 60)

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    }
    console.log(`${days}-${hours}-${minutes}-${seconds}`);


}
let timer = null

let result = () => {
    let data = getTimeRemaining(deadLine)

    if (data.total <= 0) {
        clearInterval(timer)
        document.body.innerHTML = `<h2> Happy new Day</h2>`
    }

    document.querySelector('.timer__total').innerHTML = deadLine
    document.querySelector('.timer__days').innerHTML = data.days + `  <p>DAYS</p>`
    document.querySelector('.timer__hours').innerHTML = data.hours + `  <p>Hours</p>`
    document.querySelector('.timer__minutes').innerHTML = data.minutes + ` <p>MinutES</p> `
    document.querySelector('.timer__seconds').innerHTML = data.seconds + `  <p>SecONds</p>`


}
timer = setInterval(result, 1000)