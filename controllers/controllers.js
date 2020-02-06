"use strict";
var rockets = [];
// creates Rocket instances
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
// creates thrusters for each rocket
function createThrusters(thrusterList, rocket) {
    for (var i = 0; i < thrusterList.length; i++) {
        var newThruster = new Thruster(thrusterList[i]);
        rocket.addThruster(newThruster);
    }
}
// shows each rocket and their speed controllers, once created
function displayElements(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var button = document.getElementById("button" + code);
            var rocketDisplay = document.getElementById("rocketDisplay" + code);
            button.classList.add("d-none");
            rocketDisplay.classList.remove("d-none");
        }
    }
    /*
   let showAllRockets:any = document.getElementById("showAllRockets");
   if(rockets.length > 1) {
       showAllRockets.classList.remove("d-none");
   } */
}
// shows each rocket speed and thrusters info when 'show speed' button is clicked
function displayRocketInfo(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var rocketInfo = document.getElementById("footer" + code);
            rocketInfo.classList.remove("d-none");
            var button = document.getElementById("speedButton" + code);
            button.classList.add("d-none");
            var rocketCode = document.getElementById("rocketCode" + code);
            var rocketBoosters = document.getElementById("rocketBoosters" + code);
            var rocketSpeed = document.getElementById("rocketSpeed" + code);
            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    }
}
// ACCELERATES each rocket
function speedUpRocket(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var rocketCode = document.getElementById("rocketCode" + code);
            var rocketBoosters = document.getElementById("rocketBoosters" + code);
            var rocketSpeed = document.getElementById("rocketSpeed" + code);
            rockets[i].speedUp(rockets[i].thrusters, code);
            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    }
}
// BRAKES each rocket
function speedDownRocket(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            var rocketCode = document.getElementById("rocketCode" + code);
            var rocketBoosters = document.getElementById("rocketBoosters" + code);
            var rocketSpeed = document.getElementById("rocketSpeed" + code);
            rockets[i].speedDown(rockets[i].thrusters, code);
            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    }
}
// DELETES instance of Rocket when 'X' is clicked
function deleteRocket(code) {
    var _loop_1 = function (i) {
        if (rockets[i].code == code) {
            var rocketCard = document.getElementById("rocketDisplay" + code);
            rocketCard.classList.add("d-none");
            var speedLinesBox = document.getElementById("speedLines" + code);
            speedLinesBox.innerHTML = ""; // delete speedlines
            //delete rocket instance
            rockets.splice(i, 1);
            console.log(rockets);
            // deleted message
            var message_1 = document.getElementById("deletedMessage" + code);
            message_1.classList.remove('d-none');
            var createButton_1 = document.getElementById("button" + code);
            setTimeout(function () {
                message_1.classList.add('d-none'); // delete message
                createButton_1.classList.remove("d-none"); // show creation button again
            }, 1500);
            var rocketInfo = document.getElementById("footer" + code);
            rocketInfo.classList.add("d-none");
            var button = document.getElementById("speedButton" + code);
            button.classList.remove("d-none");
        }
    };
    for (var i = 0; i < rockets.length; i++) {
        _loop_1(i);
    }
}
/*  OLD UI METHODS

//shows all rockets info
function displayInfoAll() {
    for(var i=0; i<rockets.length; i++) {
        displayRocketInfo(rockets[i].code);
    }
}

//hides all rockets info
function hideInfoAll() {
    for(var i=0; i<rockets.length; i++) {
        let code = rockets[i].code;
        let rocketInfo:any = document.getElementById("rocketInfo"+code);
        rocketInfo.innerHTML = "";
    }
}
*/ 
