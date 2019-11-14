"use strict";
var rockets = [];
//Crea los cohetes 
function createRocket(code) {
    var rocket = new Rocket(code);
    if (code == "32WESSDS") {
        var thrusterList = [10, 30, 80];
        createThrusters(thrusterList, rocket);
    }
    else if (code == "LDSFJA32") {
        var thrusterList = [30, 40, 50, 50, 30, 10];
        createThrusters(thrusterList, rocket);
    }
    console.log(rockets);
    rockets.push(rocket);
    displayElements(code);
}
//crea los propulsores a cada cohete
function createThrusters(thrusterList, rocket) {
    for (var i = 0; i < thrusterList.length; i++) {
        var newThruster = new Thruster(thrusterList[i]);
        rocket.addThruster(newThruster);
    }
}
//muestra por pantalla cada cohete, una vez creado, y los controles
function displayElements(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var button = document.getElementById("button" + code);
            var rocketDisplay = document.getElementById("rocketDisplay" + code);
            var rocketButtons = document.getElementById("rocketButtons" + code);
            button.classList.add("d-none");
            rocketDisplay.classList.remove("d-none");
            rocketButtons.classList.remove("d-none");
        }
    }
    var showAllRockets = document.getElementById("showAllRockets");
    if (rockets.length > 1) {
        showAllRockets.classList.remove("d-none");
    }
}
// muestra la info de cada cohete
function displayRocketInfo(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var rocketInfo = document.getElementById("rocketInfo" + code);
            rockets[i].displayInfo(rocketInfo, rockets[i]);
        }
    }
}
//muestra la info de todos los cohetes
function displayInfoAll() {
    for (var i = 0; i < rockets.length; i++) {
        displayRocketInfo(rockets[i].code);
    }
}
//esconde la info de todos los cohetes
function hideInfoAll() {
    for (var i = 0; i < rockets.length; i++) {
        var code = rockets[i].code;
        var rocketInfo = document.getElementById("rocketInfo" + code);
        rocketInfo.innerHTML = "";
    }
}
//ACELERA cada cohete
function speedUpRocket(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var speedInfo = document.getElementById("rocketInfo" + code);
            rockets[i].speedUp(rockets[i].thrusters);
            rockets[i].displayInfo(speedInfo, rockets[i]);
        }
    }
}
//FRENA cada cohete
function speedDownRocket(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var speedInfo = document.getElementById("rocketInfo" + code);
            rockets[i].speedDown(rockets[i].thrusters);
            rockets[i].displayInfo(speedInfo, rockets[i]);
        }
    }
}
