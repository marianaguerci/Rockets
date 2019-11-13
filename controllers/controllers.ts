var rocket: Rocket;
var rockets: Rocket[] = [];

function createRocket(code:string){
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

    let button = document.getElementById("button1");
    let rocketDisplay = document.getElementById("rocketDisplay1");
    let rocketButtons = document.getElementById("rocketButtons1");
    let showAllRockets:any = document.getElementById("showAllRockets");

    displayElements(button, rocketDisplay, rocketButtons);

    if(rockets.length > 1) {
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

    let button = document.getElementById("button2");
    let rocketDisplay = document.getElementById("rocketDisplay2");
    let rocketButtons = document.getElementById("rocketButtons2");
    let showAllRockets:any = document.getElementById("showAllRockets");

    displayElements(button, rocketDisplay, rocketButtons);

    if(rockets.length > 1) {
        showAllRockets.classList.remove("d-none");
    }
}

//muestra por pantalla cada cohete creado y los controles
function displayElements(hideElement: any, showElement: any, showControls: any) {
    hideElement.classList.add("d-none");
    showElement.classList.remove("d-none");
    showControls.classList.remove("d-none");
}
  
// muestra la info del cohete 1
function displayInfo1() {
    let rocketInfo1: any = document.getElementById("rocketInfo1");

    for (var i=0; i<rockets.length; i++){
        if(rockets[i].code == "32WESSDS") {
            console.log(rockets[i].code);
            rocket.displayInfo(rocketInfo1, rockets[i]);
        }
    }
}

// muestra la info del cohete 2
function displayInfo2() {
    let rocketInfo2: any = document.getElementById("rocketInfo2");

    for (var i=0; i<rockets.length; i++){
        if(rockets[i].code == "LDSFJA32") {
            console.log(rockets[i].code);
            rocket.displayInfo(rocketInfo2, rockets[i]);
        }
    }
}

//muestra la info de todos los cohetes
function displayInfoAll() {
    let rocketInfo: any;
    for(var i=0; i<rockets.length; i++) {
        rocketInfo = document.getElementById("rocketInfo"+(i+1));
        rockets[i].displayInfo(rocketInfo, rockets[i]);
    }
}

//esconde la info de todos los cohetes
function hideInfoAll() {
    let rocketInfo: any;
    for(var i=0; i<rockets.length; i++) {
        rocketInfo = document.getElementById("rocketInfo"+(i+1));
        rockets[i].hideInfo(rocketInfo);
    }
}

//acelera cohete 1
function speedUpRocket1() {
    
    let speedInfo: any = document.getElementById("rocketInfo1");

    for(var item of rockets){

        if (item.code == "32WESSDS") {
            item.speedUp(item.thrusters);
            item.displayInfo(speedInfo, item);
        }     
    }      
}

//acelera cohete 2
function speedUpRocket2() {
    let speedInfo: any = document.getElementById("rocketInfo2");

    for(var item of rockets){

        if (item.code == "LDSFJA32") {
            item.speedUp(item.thrusters);
            item.displayInfo(speedInfo, item);
        }     
    }      
}

//frena cohete 1
function speedDownRocket1() {
    let speedInfo: any = document.getElementById("rocketInfo1");

    for(var item of rockets){

        if (item.code == "32WESSDS") {
            item.speedDown(item.thrusters);
            item.displayInfo(speedInfo, item);
        }     
    } 
}

//frena cohete 2
function speedDownRocket2() {
    let speedInfo: any = document.getElementById("rocketInfo2");

    for(var item of rockets){

        if (item.code == "LDSFJA32") {
            item.speedDown(item.thrusters);
            item.displayInfo(speedInfo, item);
        }     
    } 
}




   
