import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './moneyService.js';



function clearFields() {
  $('#inputAmount').val('');  //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//
}

function getElements(response) {
  if(response) {
    let newOuput = response.conversion_result;
    let baseCode = $('USD').text();
    let amount = $("#inputAmount").val();
    // let xRate = response.converstion_rate;
    let target1 = $('#otherPlace option:selected').text();
    $('#outputAmount').val(newOuput);  
    $('#baseCode').text(baseCode);
    $('#target1input').text(target1);
    $('#inputAmountText').text(amount);
    }  else {
    $('#showError').text("error: please enter valid USD amount");
    }
  }

// async function makeAPICall (targets, amount) {
//   const response = await Exchange.getExchange(targets,amount);
//   getElements(response);
// }


$(document).ready(function() {
  $('#getExchange').submit(function() {
    let amount = $('#inputAmount').val();
    let baseCode = USD;
    let target1 = $('#otherPlace option:selected').val(); 
    if (amount > 0) {
      Exchange.getExchange(baseCode, target1, amount)
      .then (function(response) {
        getElements(response);
        $('#inputAmountText').show();
        $('target1input').show();
      });
    } else {
      $('#outputAmount').val('');
    }
  clearFields();
  });
});
    
//     promise.then(function(response) {
//       const output = JSON.parse(response);
//       clearFields();
//       output.forEach(function(targets) {
//         const newT = document.createElement('MXN');
//         let amount = "";
//         targets.forEach(function(amount) {
//           amount += amount;
//         })
//       newT.innerText = amount;
//       $('#exchangeText').append(newT);
//     })
//   })
// })
// });