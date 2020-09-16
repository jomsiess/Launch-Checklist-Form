// Write your JavaScript code here!
window.addEventListener("load", function() {
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event) {
   event.preventDefault(); 
     let pilotNameInput = document.querySelector("input[name=pilotName]"); 
     let copilotNameInput = document.querySelector("input[name=copilotName]"); 
     let fuelLevelInput = document.querySelector("input[name=fuelLevel]"); 
     let cargoMassInput = document.querySelector("input[name=cargoMass]"); 
     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput === "") {
         alert("All fields are required!")  
     } 
     if (isNaN(fuelLevelInput.value)) { 
         alert("Please enter a number for fuel level input.")
     }
     if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) { 
        alert("Please do not enter a number for pilot and co-pilot name.")
     }
     if (isNaN(cargoMassInput.value)) { 
        alert("Please enter a number for cargo mass input.")
     }
     let pilotStatus = document.getElementById("pilotStatus") 
     pilotStatus.innerHTML = `${pilotNameInput.value} is ready`

     let copilotNameStatus = document.getElementById("copilotStatus")
     copilotNameStatus.innerHTML = `${copilotNameInput.value} is ready`

     let faultyItems = document.getElementById("faultyItems")
     if (fuelLevelInput.value < 10000) { 
        faultyItems.style.visibility = "visible"
        fuelStatus.innerHTML = 'Fuel level not high enough for launch'
        launchStatus.innerHTML = 'Shuttle not ready for Launch'
        launchStatusCheck.style.backgroundColor = 'red'
     } else if (cargoMassInput.value > 10000) {
        faultyItems.style.visibility = "visible"
        cargoStatus.innerHTML = 'Too much mass for shuttle to take off!'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatusCheck.style.backgroundColor = 'red'
     } else {
        faultyItems.style.visibility = "hidden"
        launchStatus.innerHTML = 'Shuttle ready to launch'
        launchStatusCheck.style.backgroundColor = 'green'
   }
 });
});

// //This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() { 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
      response.json().then(function(json){ 
         let planetString = ""; 
         let missionDestinationDiv = document.getElementById("missionTarget"); 
         for (let i = 0; i < 6; i++) {
            planetString = 
            `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[i].name}</li>
               <li>Diameter: ${json[i].diameter}</li>
               <li>Star: ${json[i].star}</li>
               <li>Distance from Earth: ${json[i].distance}</li>
               <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">`; 
         }; 
         missionDestinationDiv.innerHTML = planetString; 
      }); 
   });
}); 

/* <h2>Mission Destination</h2>
<ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */