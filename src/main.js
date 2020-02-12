import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Farm } from './person';
import { StrainService } from './strain-service';

$(document).ready(function() {
  $("#flavorlist").submit(function() {
    event.preventDefault();
    let currentFlav = $("#selectflavor option:selected").text();
    console.log(currentFlav);
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrainbyFlavor(currentFlav);
      console.log(response);
    })();
  });
});