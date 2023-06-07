function getTime () {
    let date = new Date()
    document.querySelector('.digital').innerHTML =  `${numberZero(date.getHours())}:${numberZero(date.getMinutes())}:${numberZero(date.getSeconds())}`
}

function numberZero (number) {
    return number < 10 ? `0${number}` : number
}


function setup () {
    document.querySelectorAll('.p').forEach ((item)=> {
        item.style.transform = 'rotate(270deg)'
    })
}

setup()
function seg () {
    let seconds = document.querySelector ('.p.p_s')
    seconds.style.transform = 'rotate(270deg)'
    seconds.style.transform += `rotate(${new Date().getSeconds() * 6}deg) `
}
setInterval (seg, 1000)
seg()

function min () {
    let minutes = document.querySelector ('.p.p_m')
    minutes.style.transform = 'rotate(270deg)'
    minutes.style.transform += `rotate(${new Date().getMinutes() * 6}deg)`
}
setInterval (min, 1000)
min()

function hour () {
    let hours = document.querySelector ('.p.p_h')
    hours.style.transform = 'rotate(270deg)'
    hours.style.transform += `rotate(${new Date().getHours() * 30}deg)`
    hours.style.transform += `rotate(${new Date().getMinutes() * 0.5}deg)`
}


setInterval (hour, 1000)
hour()


setInterval (getTime, 1000)
getTime()