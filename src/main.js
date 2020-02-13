import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StrainService } from './strain-service';

function showStrains(array, race, flavor) {
  for (let i=0; i<array.length; i++) {
    if (array[i].race == race && array[i].flavor == flavor) {
      $("#strainOut").append(`<li class="strainlist" value="`+array[i].name+`">` + array[i].name + `</li>`);
    } 
  }
}


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let currentRace = $("#selectrace").val();
    let currentFlav = $("#selectflavor option:selected").text();
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrain(currentFlav);
      if(response.length === 0) {
        $("#output").text("This is not the weed you're looking for.");
      } else 
      showStrains(response, currentRace, currentFlav); 
    })();
  });
  $("ul#strainOut").on("click", "li", function() {
    let currentStrain = $(this).attr("value");
    (async () => {
      let strainService = new StrainService();
      const responseFinal = await strainService.getInfo(currentStrain);
      if(responseFinal.length === 0) {
        $("#output").text("This is not the weed you're looking for.");
      } else 
      console.log(responseFinal); 
    })();
  });
});