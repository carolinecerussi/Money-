import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeService';



$(document).ready(function() {

$('#getAmount').click(function() {
let targetCode = $('#targetCodes').val();
let amount = $('#inputAmount').val();
$('#targetCodes').val("");
let promise = ExchangeService.getExchange(targetCode,amount);
promise.then(function(response) {
  const response = JSON.parse(response);
  $('.showExchangeOutput').text(`The exchange in ${targetCode} is ${response.conversion_result.val()}`);
});
})
});






// // function clearFields() {
// //   $('#inputAmount').val('');  //going to be amount in usd input//
// //   $('#otherPlace').val(" "); //going to be conversion place code//
// // }

// function getElements(response) {
//   if(response) {
//     let endAmount = response.conversion_result;
//     let baseCode = USD;
//     let targetCode = $('#otherPlace option:selected').text();
//     $('#').val(endAmount);  

// // async function makeAPICall (targets, amount) {
// //   const response = await Exchange.getExchange(targets,amount);
// //   getElements(response);
// // }


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