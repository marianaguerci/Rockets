"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (thrusters) {
        this.thrusters.push(thrusters);
    };
    Rocket.prototype.speedUp = function (thrusters) {
        for (var _i = 0, thrusters_1 = thrusters; _i < thrusters_1.length; _i++) {
            var item = thrusters_1[_i];
            if (item.currentPower < item.maxPower) {
                item.currentPower += 10;
            }
        }
    }; // aumenta la velocidad de 10 en 10 hasta su máximo
    Rocket.prototype.speedDown = function (thrusters) {
        for (var _i = 0, thrusters_2 = thrusters; _i < thrusters_2.length; _i++) {
            var item = thrusters_2[_i];
            if (item.currentPower > 0) {
                item.currentPower -= 10;
            }
        }
    }; //reduce la velocidad de 10 en 10 hasta el mínimo = 0
    Rocket.prototype.currentSpeed = function () {
        var total = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            total = total + this.thrusters[i].currentPower;
        }
        return total;
    }; //velocidad actual, es la suma de todas las potencias actuales de sus propulsores  
    Rocket.prototype.displayInfo = function (place, object) {
        place.innerHTML = "<b>" + object.code + "</b><br>Boosters max power:<br>" + object.getPower() + ".<br><br>Speed: " + object.currentSpeed();
    }; //muestra info del cohete por pantalla
    Rocket.prototype.hideInfo = function (place) {
        place.innerHTML = "";
    }; //esconde info del cohete
    Rocket.prototype.getPower = function () {
        var power;
        var powerArray = [];
        for (var i = 0; i < this.thrusters.length; i++) {
            power = this.thrusters[i].maxPower;
            powerArray.push(power);
        }
        return powerArray.join(", ");
    }; //retorna la potencia de cada uno de los propulsores para mostrar en displayInfo
    return Rocket;
}());
