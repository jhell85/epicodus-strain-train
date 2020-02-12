import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Farm } from './person';
import { StrainService } from './strain-service';

function showStrains(array) {
  for (let i=0; i<=array.length; i++) {
    $("#output").append(array[i].name + ", ");
  }
}


$(document).ready(function() {
  $("#flavorlist").submit(function() {
    event.preventDefault();
    let currentFlav = $("#selectflavor option:selected").text();
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrainbyFlavor(currentFlav);
      showStrains(response);
    })();
  });
});