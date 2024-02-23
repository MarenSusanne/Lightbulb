let lightbulb = document.getElementById("bulb")
let button = document.getElementById("switch")
let light = true

function switchLight(){
    (light == true) ? lightbulb.style.backgroundColor = 'yellow' : lightbulb.style.backgroundColor = 'grey';
    (light == true) ? button.innerHTML = 'On' : button.innerHTML = 'Off';
    light = !light
}