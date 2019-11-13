class Rocket {
    code:string;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string){
        this.code = code;
    }

    addThruster(thrusters:Thruster):void {
        this.thrusters.push(thrusters);
    }

    speedUp(thrusters:Thruster[]) {
        for(var item of thrusters) {
            if (item.currentPower < item.maxPower) {
            item.currentPower += 10;
            }
        }
    } // aumenta la velocidad de 10 en 10 hasta su máximo
    
    speedDown(thrusters:Thruster[])  {
        for(var item of thrusters) {
            if (item.currentPower > 0) {
                item.currentPower -= 10;
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

    displayInfo(place:any, object: any){
        place.innerHTML = `<b>${object.code}</b><br>Boosters max power:<br>${object.getPower()}.<br><br>Speed: ${object.currentSpeed()}`;
    } //muestra info del cohete por pantalla

    hideInfo(place:any){
        place.innerHTML = "";
    } //esconde info del cohete

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