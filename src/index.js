import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeService';

function getElements(response, USD,targetAmount, targetCode) {
  const jsonResponse = JSON.parse(response);
  console.log(typeof jsonResponse);
  if (jsonResponse.conversion_result){
    targetAmount = JSON.parse(jsonResponse.conversion_result);
    console.log(targetAmount);
    // console.log(jsonResponse.conversion_result)
    const conversion = (USD/jsonResponse.conversion_rate.USD).toFixed(4);
    targetCode = (jsonResponse.target_code);
    $('#showExchangeOutput').text(`With ${USD} USD, your exchange is ${targetAmount} ${targetCode}`);
  } else {
    $('#errorOutput').text(`error! Please enter valid amount`);
  }

}

// {"result":"success","documentation":"https://www.exchangerate-api.com/docs","terms_of_use":"https://www.exchangerate-api.com/terms","time_last_update_unix":1657497602,"time_last_update_utc":"Mon, 11 Jul 2022 00:00:02 +0000","time_next_update_unix":1657584002,"time_next_update_utc":"Tue, 12 Jul 2022 00:00:02 +0000","base_code":"USD","target_code":"JPY","conversion_rate":136.2615,"conversion_result":3134.0145}


async function makeAPICall (targetCode, USD) {
  const response = await ExchangeService.getExchange(targetCode,USD);
  getElements(response, USD, targetCode);
}



$(document).ready(function() {
  $('#getChange').submit(function(event) {
  event.preventDefault();
  let USD = parseFloat($('#inputAmount').val());
  console.log(USD);
  let targetCode = $('#targetCodes option:selected').val();
  console.log(targetCode);
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