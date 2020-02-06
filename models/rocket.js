"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (thrusters) {
        this.thrusters.push(thrusters);
    }; // add thrusters to array
    Rocket.prototype.speedUp = function (thrusters, code) {
        for (var _i = 0, thrusters_1 = thrusters; _i < thrusters_1.length; _i++) {
            var item = thrusters_1[_i];
            if (item.currentPower < item.maxPower) {
                item.currentPower += 10;
                var speedLines = document.getElementById("speedLines" + code);
                var line = document.createElement('div');
                line.innerHTML = "\n                <i class=\"fas fa-square\"></i>\n                ";
                speedLines.appendChild(line).classList.add("d-inline"); // add speed lines to graphic     
            }
        }
    }; // speeds up from 10 to 10 to its max power
    Rocket.prototype.speedDown = function (thrusters, code) {
        for (var _i = 0, thrusters_2 = thrusters; _i < thrusters_2.length; _i++) {
            var item = thrusters_2[_i];
            if (item.currentPower > 0) {
                item.currentPower -= 10;
                var speedLines = document.getElementById("speedLines" + code);
                speedLines.removeChild(speedLines.lastChild); // remove speed lines from graphic
            }
        }
    }; // speeds down from 10 to 10 to its min power = 0
    Rocket.prototype.currentSpeed = function () {
        var total = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            total = total + this.thrusters[i].currentPower;
        }
        return total;
    }; // current speed, is the sum of all the current powers of its thrusters
    /* OLD UI METHOD
        displayInfo(place:any, object: any){
            place.innerHTML = `<b>${object.code}</b><br>Boosters max power:<br>${object.getPower()}.<br><br>Speed: ${object.currentSpeed()}`;
        } // shows rocket info
    
    */
    //NEW UI METHOD
    Rocket.prototype.displayInfo = function (object, code, boosters, speed) {
        code.innerHTML = "" + object.code;
        boosters.innerHTML = "" + object.getPower();
        speed.innerHTML = "" + object.currentSpeed();
    }; // shows rocket info (rocket name/code, thruster power and current speed)
    Rocket.prototype.getPower = function () {
        var power;
        var powerArray = [];
        for (var i = 0; i < this.thrusters.length; i++) {
            power = this.thrusters[i].maxPower;
            powerArray.push(power);
        }
        return powerArray.join(", ");
    }; // returns each thruster power (to display on screen at displayInfo())
    return Rocket;
}());
