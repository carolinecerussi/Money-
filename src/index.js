import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeService';

function getElements(response, USD, targetCode) {
  if (response.conversion_rates){
    const conversion = (USD/ response.conversion_rates.USD).toFixed(4);
    $('.showExchangeOutput').text(`With ${USD} USD, your exchange is ${conversion} ${targetCode}`);
  } else {
    $('#errorOutput').text(`error! Please enter valid amount`);
  }

}



async function makeAPICall (targetCode, USD) {
  const response = await ExchangeService.getExchange(targetCode,USD);
  getElements(response, USD, targetCode);
}




$(document).ready(function() {
  $('#getAmount').submit(function(event) {
  event.preventDefault();
  let USD = parseFloat($('#inputAmount').val());
  let targetCode = $('#targetCodes option:selected').val();
  makeAPICall(targetCode, USD);
  $('.showExchangeOutput').show();
  })
})







// $(document).ready(function() {


//   $('#getChange').click( async function() {
//     const currencies = ["USD", "CAD", "HKD", "JPY", "MXN", ""];
    
    
//     let targetCode = $('#targetCode').val();
//     let amount = parseInt($('#inputAmount').val());
//     let baseCode = USD;
//     let target1 = $('#otherPlace option:selected').val(); 
//     if (amount > 0) {
//       Exchange.getExchange(baseCode, target1, amount)
//       .then (function(response) {
//         getElements(response);
//         $('#inputAmountText').show();
//         $('target1input').show();
//       });
//     } else {
//       $('#outputAmount').val('');
//     }
//   });
// });
    
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