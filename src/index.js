import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/IMG';
import './css/styles.css';
import Exchange from './moneyService.js';

function clearFields() {
  $('#amount').val(" "); //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//


function getElements(response,target_code, conversion_result) {
  const exchange = JSON.parse(response);
  if (response.ok) {
    console.log(exchange);
    $('.showExchange').text(`The conversion in  ${target_code} is: ${conversion_result} .`);
  } else {
    $('.showError').text(`error: please enter valid USD amount`);
  }
}


$(document).ready(function() {
  $('#getExchange').submit(function(event) {
    event.preventDefault();
    let conversion_result = $(amount).val());
    let target_code = $(target_code).val();
    let exchange = Exchange.getExchange(target_code,conversion_result);
    clearFields();
      then(function(result) {
      getElements(result);
    });
  });
});