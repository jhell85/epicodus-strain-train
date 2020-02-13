import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StrainService } from './strain-service';

const selectedArray = [];
function showStrains(array, race, flavor) {
  for (let i=0; i<array.length; i++) {
    if (array[i].race == race && array[i].flavor == flavor) {
      selectedArray.push(array[i].name + ", ");
    } 
  }
  console.log(selectedArray);
}


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let currentRace = $("#selectrace").val();
    let currentFlav = $("#selectflavor option:selected").text();
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrain(currentFlav);
      showStrains(response, currentRace, currentFlav); 
    })();
  });
});