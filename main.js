let button1      = document.querySelector('#button1')
let button2      = document.querySelector('#button2')
let button3      = document.querySelector('#button3')
let button4      = document.querySelector('#button4')
let name         = document.querySelector('#name')
let height       = document.querySelector('#height')
let mass         = document.querySelector('#mass')
let birth_year   = document.querySelector('#birth_year')
let hair_color   = document.querySelector('#hair_color')
let skin_color   = document.querySelector('#skin_color')
let eye_color    = document.querySelector('#eye_color')
let gender       = document.querySelector('#gender')

// let model                  = document.querySelector('#model')
// let manufacturer           = document.querySelector('#manufacturer')
// let max_atmosphering_speed = document.querySelector('#max_atmosphering_speed')
// let length                 = document.querySelector('#length')
// let crew                   = document.querySelector('#crew')
// let passengers             = document.querySelector('#passengers')
// let cargo_capacity                 = document.querySelector('#cargo_capacity')
// let consumables                   = document.querySelector('#consumables')
// let vehicle_class             = document.querySelector('#vehicle_class')

function getInfo1() {
    axios.get('https://swapi.dev/api/people/1/').then(function(response) {
        updateInfo(response.data)
    })
}

function getInfo2() {
    axios.get('https://swapi.dev/api/people/2/').then(function(response) {
        updateInfo(response.data)
    })
}

function getInfo3() {
    axios.get('https://swapi.dev/api/people/3/').then(function(response) {
        updateInfo(response.data)
    })
}

function getInfo4() {
    axios.get('https://swapi.dev/api/people/4/').then(function(response) {
        updateInfo(response.data)
    })
}

// function getInfo11() {
//     axios.get('https://swapi.dev/api/vehicles/14/').then(function(response) {
//         updateInfo2(response.data)
//     })
// }

function updateInfo(data)
{
    name.innerText       = 'Name: ' + data.name
    height.innerText     = 'Height: ' + data.height
    mass.innerText       = 'Mass: ' + data.mass
    birth_year.innerText = 'Birth year: ' + data.birth_year
    hair_color.innerText = 'Hair color: ' + data.hair_color
    skin_color.innerText = 'Skin color : ' + data.skin_color
    eye_color.innerText  = 'Eye color : ' + data.eye_color
    gender.innerText     = 'Gender : ' + data.gender
}

// function updateInfo2(data)
// {
//     model.innerText                  = 'Model: ' + data.model
//     manufacturer.innerText           = 'Manufacturer: ' + data.manufacturer
//     max_atmosphering_speed.innerText = 'Max speed: ' + data.max_atmosphering_speed
//     length.innerText                 = 'Length: ' + data.length
//     crew.innerText                   = 'Crew: ' + data.crew
//     passengers.innerText             = 'Passengers: ' + data.passengers
//     cargo_capacity.innerText         = 'Cargo capacity: ' + data.cargo_capacity
//     consumables.innerText            = 'Consumables: ' + data.consumables
//     vehicle_class.innerText          = 'Vehicle_class: ' + data.vehicle_class
// }

button1.addEventListener('click', getInfo1)
button2.addEventListener('click', getInfo2)
button3.addEventListener('click', getInfo3)
button4.addEventListener('click', getInfo4)
// button1.addEventListener('click', getInfo11)