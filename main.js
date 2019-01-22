// var currentTime = new Date();

// var displayTime = document.querySelector("#date")    
// displayTime.textContent = currentTime

// function newTime() {
//     // console.log(newTime)
//     return (currentTime)  
// }
// newTime();

let display = document.getElementById("date");
display.innerHTML = Date();

let button = document.getElementById("timeBomb");
    button.addEventListener("click", ()=> {    
    display.innerHTML = new Date();
    });

        // button.setAttribute("class", "updateTime")

        // button.addEventListener("click", newTime)

        // displayTime.appendChild(button)

        // console.log(newTime)