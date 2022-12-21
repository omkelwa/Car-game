

let button = document.querySelector("button")
let stopButton = document.querySelector(".stop")
let carStart = document.querySelector(".car-start")
let carStop = document.querySelector(".car-stop")
button.addEventListener("click", start)
let audio = document.createElement("audio")
let audio1 = document.createElement("audio")

function start() {

    carStop.style.display = "none"
    carStart.style.display = "block"
    button.style.position = "fixed"

    audio.setAttribute("src", "car sound.mp3")

    // audio1.setAttribute("src", "sound1.mp3")
    audio.play()
    audio.loop = true
    // audio1.play()

}


stopButton.addEventListener("click", Stop)

function Stop() {

    carStart.style.display = "none"
    carStop.style.display = "block"
    // audio.setAttribute('src', "none")
    // audio1.setAttribute('src', "none")
    audio.pause()
    audio1.pause()


}

