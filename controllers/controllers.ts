var rockets: Rocket[] = [];

//Crea los cohetes 
function createRocket(code:string) {
    let rocket = new Rocket(code);

    if (code == "32WESSDS") {
        let thrusterList:number[] = [10,30,80];
        createThrusters(thrusterList,rocket)

    } else if (code == "LDSFJA32") {
        let thrusterList:number[] = [30,40,50,50,30,10];
        createThrusters(thrusterList,rocket)
    }
    console.log(rockets); 
    rockets.push(rocket);
    displayElements(code);
}

//crea los propulsores a cada cohete
function createThrusters(thrusterList:number[], rocket:Rocket) {
    for (var i=0; i<thrusterList.length; i++) {
        let newThruster = new Thruster(thrusterList[i]);
        rocket.addThruster(newThruster);
        } 
}

//muestra por pantalla cada cohete, una vez creado, y los controles
function displayElements(code:string) {
    for (var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let button:any = document.getElementById("button"+code);
            let rocketDisplay:any = document.getElementById("rocketDisplay"+code);
            let rocketButtons:any = document.getElementById("rocketButtons"+code);
        
            button.classList.add("d-none");
            rocketDisplay.classList.remove("d-none");
            rocketButtons.classList.remove("d-none");
        }
    }
        
    let showAllRockets:any = document.getElementById("showAllRockets");
    if(rockets.length > 1) {
        showAllRockets.classList.remove("d-none");
    }
}

// muestra la info de cada cohete
function displayRocketInfo(code:string) {
    for (var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code){
            let rocketInfo: any = document.getElementById("rocketInfo"+code);
            rockets[i].displayInfo(rocketInfo, rockets[i]);
        }
    }  
}

//muestra la info de todos los cohetes
function displayInfoAll() {
    for(var i=0; i<rockets.length; i++) {    
        displayRocketInfo(rockets[i].code);
    }
}

//esconde la info de todos los cohetes
function hideInfoAll() {
    for(var i=0; i<rockets.length; i++) {
        let code = rockets[i].code;
        let rocketInfo:any = document.getElementById("rocketInfo"+code);
        rocketInfo.innerHTML = "";
    }
}

//ACELERA cada cohete
function speedUpRocket(code: string) {

    for(var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let speedInfo: any = document.getElementById("rocketInfo"+code);
            rockets[i].speedUp(rockets[i].thrusters);
            rockets[i].displayInfo(speedInfo,rockets[i]);
        }
    }   
}

//FRENA cada cohete
function speedDownRocket(code: string) {
    for(var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let speedInfo: any = document.getElementById("rocketInfo"+code);
            rockets[i].speedDown(rockets[i].thrusters);
            rockets[i].displayInfo(speedInfo,rockets[i]);
        }
    } 
}
