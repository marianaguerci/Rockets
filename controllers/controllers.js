"use strict";
var rocket;
var rockets = [];
function createRocket(code) {
    rocket = new Rocket(code);
    rockets.push(rocket);
    console.log(rockets);
}
//ROCKET 1
function createRocket1() {
    createRocket("32WESSDS");
    rocket.addThruster(new Thruster(10));
    rocket.addThruster(new Thruster(30));
    rocket.addThruster(new Thruster(80));
    var button = document.getElementById("button1");
    var rocketDisplay = document.getElementById("rocketDisplay1");
    var rocketButtons = document.getElementById("rocketButtons1");
    var showAllRockets = document.getElementById("showAllRockets");
    displayElements(button, rocketDisplay, rocketButtons);
    if (rockets.length > 1) {
        showAllRockets.classList.remove("d-none");
    }
}
//ROCKET 2
function createRocket2() {
    createRocket("LDSFJA32");
    rocket.addThruster(new Thruster(30));
    rocket.addThruster(new Thruster(40));
    rocket.addThruster(new Thruster(50));
    rocket.addThruster(new Thruster(50));
    rocket.addThruster(new Thruster(30));
    rocket.addThruster(new Thruster(10));
    var button = document.getElementById("button2");
    var rocketDisplay = document.getElementById("rocketDisplay2");
    var rocketButtons = document.getElementById("rocketButtons2");
    var showAllRockets = document.getElementById("showAllRockets");
    displayElements(button, rocketDisplay, rocketButtons);
    if (rockets.length > 1) {
        showAllRockets.classList.remove("d-none");
    }
}
//muestra por pantalla cada cohete creado y los controles
function displayElements(hideElement, showElement, showControls) {
    hideElement.classList.add("d-none");
    showElement.classList.remove("d-none");
    showControls.classList.remove("d-none");
}
// muestra la info del cohete 1
function displayInfo1() {
    var rocketInfo1 = document.getElementById("rocketInfo1");
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == "32WESSDS") {
            console.log(rockets[i].code);
            rocket.displayInfo(rocketInfo1, rockets[i]);
        }
    }
}
// muestra la info del cohete 2
function displayInfo2() {
    var rocketInfo2 = document.getElementById("rocketInfo2");
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == "LDSFJA32") {
            console.log(rockets[i].code);
            rocket.displayInfo(rocketInfo2, rockets[i]);
        }
    }
}
//muestra la info de todos los cohetes
function displayInfoAll() {
    var rocketInfo;
    for (var i = 0; i < rockets.length; i++) {
        rocketInfo = document.getElementById("rocketInfo" + (i + 1));
        rockets[i].displayInfo(rocketInfo, rockets[i]);
    }
}
//esconde la info de todos los cohetes
function hideInfoAll() {
    var rocketInfo;
    for (var i = 0; i < rockets.length; i++) {
        rocketInfo = document.getElementById("rocketInfo" + (i + 1));
        rockets[i].hideInfo(rocketInfo);
    }
}
//acelera cohete 1
function speedUpRocket1() {
    var speedInfo = document.getElementById("rocketInfo1");
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var item = rockets_1[_i];
        if (item.code == "32WESSDS") {
            item.speedUp(item.thrusters);
            item.displayInfo(speedInfo, item);
        }
    }
}
//acelera cohete 2
function speedUpRocket2() {
    var speedInfo = document.getElementById("rocketInfo2");
    for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
        var item = rockets_2[_i];
        if (item.code == "LDSFJA32") {
            item.speedUp(item.thrusters);
            item.displayInfo(speedInfo, item);
        }
    }
}
//frena cohete 1
function speedDownRocket1() {
    var speedInfo = document.getElementById("rocketInfo1");
    for (var _i = 0, rockets_3 = rockets; _i < rockets_3.length; _i++) {
        var item = rockets_3[_i];
        if (item.code == "32WESSDS") {
            item.speedDown(item.thrusters);
            item.displayInfo(speedInfo, item);
        }
    }
}
//frena cohete 2
function speedDownRocket2() {
    var speedInfo = document.getElementById("rocketInfo2");
    for (var _i = 0, rockets_4 = rockets; _i < rockets_4.length; _i++) {
        var item = rockets_4[_i];
        if (item.code == "LDSFJA32") {
            item.speedDown(item.thrusters);
            item.displayInfo(speedInfo, item);
        }
    }
}
