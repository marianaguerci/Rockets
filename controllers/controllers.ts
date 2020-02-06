var rockets: Rocket[] = [];

// creates Rocket instances
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

// creates thrusters for each rocket
function createThrusters(thrusterList:number[], rocket:Rocket) {
    for (var i=0; i<thrusterList.length; i++) {
        let newThruster = new Thruster(thrusterList[i]);
        rocket.addThruster(newThruster);
        } 
}

// shows each rocket and their speed controllers, once created
function displayElements(code:string) {
    for (var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let button:any = document.getElementById("button"+code);
            let rocketDisplay:any = document.getElementById("rocketDisplay"+code);
        
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
function displayRocketInfo(code:string) {
    for (var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code){

            let rocketInfo: any = document.getElementById("footer"+code);
            rocketInfo.classList.remove("d-none");
            let button: any = document.getElementById("speedButton"+code);
            button.classList.add("d-none");

            let rocketCode: any = document.getElementById("rocketCode"+code);
            let rocketBoosters: any = document.getElementById("rocketBoosters"+code);
            let rocketSpeed: any = document.getElementById("rocketSpeed"+code);

            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    }  
}

// ACCELERATES each rocket
function speedUpRocket(code: string) {

    for(var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let rocketCode: any = document.getElementById("rocketCode"+code);
            let rocketBoosters: any = document.getElementById("rocketBoosters"+code);
            let rocketSpeed: any = document.getElementById("rocketSpeed"+code);

            rockets[i].speedUp(rockets[i].thrusters, code);
            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    }   
}

// BRAKES each rocket
function speedDownRocket(code: string) {
    for(var i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
            let rocketCode: any = document.getElementById("rocketCode"+code);
            let rocketBoosters: any = document.getElementById("rocketBoosters"+code);
            let rocketSpeed: any = document.getElementById("rocketSpeed"+code);

            rockets[i].speedDown(rockets[i].thrusters, code);
            rockets[i].displayInfo(rockets[i], rocketCode, rocketBoosters, rocketSpeed);
        }
    } 
}

// DELETES instance of Rocket when 'X' is clicked
function deleteRocket(code: string) {

    for(let i=0; i<rockets.length; i++) {
        if (rockets[i].code == code) {
        
            let rocketCard: any = document.getElementById("rocketDisplay"+code);
            rocketCard.classList.add("d-none");

            let speedLinesBox: any = document.getElementById("speedLines"+code);
            speedLinesBox.innerHTML = "";  // delete speedlines

            //delete rocket instance
            rockets.splice(i, 1);
            console.log(rockets);

            // deleted message
            let message: any = document.getElementById("deletedMessage"+code);
            message.classList.remove('d-none');
            let createButton: any = document.getElementById("button"+code);
            setTimeout(function() {
                message.classList.add('d-none'); // delete message
                createButton.classList.remove("d-none"); // show creation button again
            }, 1500);
            
            let rocketInfo: any = document.getElementById("footer"+code);
            rocketInfo.classList.add("d-none");
            let button: any = document.getElementById("speedButton"+code);
            button.classList.remove("d-none");
        } 
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