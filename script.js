window.addEventListener('load', () =>{
fetch("https://handlers.education.launchcode.org/static/astronauts.json") 
.then(function(response){
     response.json().then(function(json){
        let astronauts = json;
        const container = document.getElementById('container');
    for(i = 0; i < astronauts.length; i++ ){
     let divStuff= `<div class="astronaut">
     <div class="bio">
        <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
        <ul>
            <li>Hours in space:${astronauts[i].hoursInSpace}</li>
            <li>Active: ${astronauts[i].active}</li>
            <li>Skills: ${astronauts[i].skills}</li>
         </ul>
    </div>
     <img class="avatar" src=${astronauts[i].picture}/>
    </div>`
    container.innerHTML += divStuff;

     }
    })
})
})

