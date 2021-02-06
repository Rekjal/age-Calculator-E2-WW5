import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/Calculator';


$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    $("#output").hide();
    var buttonObj = document.querySelector("button");
    buttonObj.textContent = "submitted";
    $("#toppingsDiv").hide();
    
    const userEnteredAge = parseInt($("#age").val());
    const userEnteredSex =$("input:radio[name=sex]:checked").val();
    const userEnteredRace = $("input:radio[name=race]:checked").val();
  
    const agePlanetBasedAdjust = {mercury: 0.24,venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86};
    const raceBasedLifeExpOnEarth = {caucasian: 65, asian: 70, africanAmerican: 65, latino: 4}; //assumed values based on Demographic
    const planets = ["mercury", "venus", "earth", "mars", "jupiter"];
    const calculator = new Calculator(userEnteredAge, userEnteredRace, userEnteredSex, planets);
    calculator.addAgeOnPlanets(agePlanetBasedAdjust, raceBasedLifeExpOnEarth);
    let response = calculator.agePerPlanet;
    console.log(response);
    $("#output").show();
    const raceNameCapitalized = userEnteredRace.charAt(0).toUpperCase() + userEnteredRace.slice(1);
    const sexCapitalized = userEnteredSex.charAt(0).toUpperCase() + userEnteredSex.slice(1);
    let yearsLeftSyntax = `<span class="greyColor">${userEnteredAge}</span> : <span class="greyColor">${sexCapitalized}</span> : <span class="greyColor">${raceNameCapitalized}</span>`;
    $("#ageSecRace").append(yearsLeftSyntax);
    $('#response').append("<p>" + response + "</p>");
  });

});