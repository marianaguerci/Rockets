class Rocket {
    code:string;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string){
        this.code = code;
    }

    addThruster(thrusters:Thruster):void {
        this.thrusters.push(thrusters);
    } //agrega los propulsores al array  

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
    } // aumenta la velocidad de 10 en 10 hasta su máximo
    
    speedDown(thrusters:Thruster[], code: string)  {
        for(var item of thrusters) {
            if (item.currentPower > 0) {
                item.currentPower -= 10;
    
                let speedLines: any = document.getElementById("speedLines"+code);
                speedLines.removeChild(speedLines.lastChild); // remove speed lines from graphic
            }
        }
    } //reduce la velocidad de 10 en 10 hasta el mínimo = 0

    currentSpeed()  {
        var total:number = 0;
        for (var i=0; i<this.thrusters.length; i++) {
            total = total + this.thrusters[i].currentPower;  
        }
        return total;
    } //velocidad actual, es la suma de todas las potencias actuales de sus propulsores  

/* OLD UI METHOD
    displayInfo(place:any, object: any){
        place.innerHTML = `<b>${object.code}</b><br>Boosters max power:<br>${object.getPower()}.<br><br>Speed: ${object.currentSpeed()}`;
    } //muestra info del cohete por pantalla

*/

//NEW UI METHOD
    displayInfo(object: any, code: any, boosters: any, speed: any) {
        code.innerHTML = `${object.code}`;
        boosters.innerHTML = `${object.getPower()}`;
        speed.innerHTML = `${object.currentSpeed()}`;
    }

    getPower() {
        let power: number;
        let powerArray:number[] = []; 
    
        for (var i=0; i<this.thrusters.length; i++) {
    
            power = this.thrusters[i].maxPower; 
            powerArray.push(power);
        }
        return powerArray.join(", ");
    } //retorna la potencia de cada uno de los propulsores para mostrar en displayInfo
}