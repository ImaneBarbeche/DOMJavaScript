let convert = document.getElementById("convert"); 

const secondsInMinute = 60; 
const minutesInHour = 60; 
const hoursInDay = 24; 
const daysInYear = 365; 

let resultSeconds = document.getElementById("resultSeconds");
let resultMinutes = document.getElementById("resultMinutes");
let resultHours = document.getElementById("resultHours");
let resultDays = document.getElementById("resultDays");

convert.addEventListener("click", () => { 
let numberOfYears = document.getElementById("numberOfYears").value; 

let numberOfDays = numberOfYears * daysInYear;
let numberOfHours = numberOfDays * hoursInDay;
let numberOfMinutes = numberOfHours * minutesInHour;
let numberOfSeconds = numberOfMinutes * secondsInMinute;

resultSeconds.innerHTML = numberOfSeconds + " seconds";
resultMinutes.innerHTML = numberOfMinutes + " minutes";
resultHours.innerHTML = numberOfHours + " hours";
resultDays.innerHTML = numberOfDays + " days";

}); 

