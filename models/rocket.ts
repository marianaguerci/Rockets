class Rocket {
    code:string;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string){
        this.code = code;
    }

    addThruster(thrusters:Thruster):void {
        this.thrusters.push(thrusters);
    } // add thrusters to array

    speedUp(thrusters:Thruster[], code: string) {
        for(var item of thrusters) {
            if (item.currentPower < item.maxPower) {
            item.currentPower += 10;
            
            let speedLines: any = document.getElementById("speedLines"+code);
            const line: any = document.createElement('div');
            line.innerHTML = `
            <i class="fas fa-square"></i>
            `
            speedLines.appendChild(line).classList.add("d-inline");  // add speed lines to graphic

            }
        }
    } // speeds up from 10 to 10 to its max power
    
    speedDown(thrusters:Thruster[], code: string)  {
        for(var item of thrusters) {
            if (item.currentPower > 0) {
                item.currentPower -= 10;
    
                let speedLines: any = document.getElementById("speedLines"+code);
                speedLines.removeChild(speedLines.lastChild); // remove speed lines from graphic
            }
        }
    } // speeds down from 10 to 10 to its min power = 0

    currentSpeed()  {
        var total:number = 0;
        for (var i=0; i<this.thrusters.length; i++) {
            total = total + this.thrusters[i].currentPower;  
        }
        return total;
    }  // current speed, is the sum of all the current powers of its thrusters

/* OLD UI METHOD
    displayInfo(place:any, object: any){
        place.innerHTML = `<b>${object.code}</b><br>Boosters max power:<br>${object.getPower()}.<br><br>Speed: ${object.currentSpeed()}`;
    } // shows rocket info

*/

//NEW UI METHOD
    displayInfo(object: any, code: any, boosters: any, speed: any) {
        code.innerHTML = `${object.code}`;
        boosters.innerHTML = `${object.getPower()}`;
        speed.innerHTML = `${object.currentSpeed()}`;
    } // shows rocket info (speed, thruster power and rocket name/code)

    getPower() {
        let power: number;
        let powerArray:number[] = []; 
    
        for (var i=0; i<this.thrusters.length; i++) {
    
            power = this.thrusters[i].maxPower; 
            powerArray.push(power);
        }
        return powerArray.join(", ");
    } // returns each thruster power (to display on screen at displayInfo())
}