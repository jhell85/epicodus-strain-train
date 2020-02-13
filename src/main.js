import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StrainService } from './strain-service';

let selectedArray = [];
function showStrains(array, race, flavor) {
  // console.log(array);
  for (let i=0; i<array.length; i++) {
    if (array[i].race == race && array[i].flavor == flavor) {
      selectedArray.push(" " + array[i].name);
    } 
  }
  // console.log(selectedArray);
  
  $("#output").text(selectedArray);
}


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    selectedArray = [];
    let currentRace = $("#selectrace").val();
    let currentFlav = $("#selectflavor option:selected").text();
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrain(currentFlav);
      if(response.length === 0) {
        $("#output").text("This is not the weed you're looking for.")
      } else 
        showStrains(response, currentRace, currentFlav); 
    })();
  });
});