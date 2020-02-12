import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StrainService } from './strain-service';

// function showStrains(array, xrace, xflavor) {
//   for (let i=0; i<array.length; i++) {
//       console.log(array[i]);
//       console.log(xflavor);

//       console.log(xrace);
    
//   }
// }

// function objToArray(obj) {
//   return (obj);
// }



$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    // let currentRace = $("#selectrace").val();
    // let currentFlav = $("#selectflavor option:selected").text();
    (async () => {
      let strainService = new StrainService();
      const response = await strainService.getStrain();
      console.log(typeof(response));
      console.log(response);
      console.log(objToArray(response));
      // let dataArray = [];
      // let keyNames = Object.keys(response);
      // for(let i = 0; i < keyNames.length; i++) {
      //   dataArray.push(response[keyNames[i]]);
      // }
      // console.log(dataArray);

      showStrains(response, currentRace, currentFlav);
         
    })();
  });
});