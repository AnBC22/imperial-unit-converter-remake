/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")
const inputEl = document.getElementById("input-number")

convertEl.addEventListener("click", function() {
    let number = inputEl.value
    
    if(number != '') {
        lengthEl.textContent = convertLength(number)
        volumeEl.textContent = convertVolume(number)
        massEl.textContent = convertMass(number)  
    }
})

function convertLength(value) {
    let feet = (value * 3.281).toFixed(3)
    let meters = (value / 3.281).toFixed(3)
    
    return `
        ${value} meters = ${feet} feet | ${value} feet = ${meters} meters
 `
}

function convertVolume(value) {
    let gallons = (value * 0.264).toFixed(3)
    let liters = (value / 0.264).toFixed(3)
    
    return `
        ${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters
 `
}

function convertMass(value) {
    let pounds = (value * 2.204).toFixed(3)
    let kilos = (value / 2.204).toFixed(3)
    
    return `
        ${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos
 `
}


