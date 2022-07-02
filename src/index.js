import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './moneyService.js';

function clearFields() {
  $('#amount').text('');  //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//
}

function getElements(response) {
  const exchange = JSON.parse(response);
    console.log(exchange);
    $('.showExchange').text(`The conversion in: ${exchange.target_code} is: ${exchange.conversion_result} .`);
    $('.showError').text(`error: please enter valid USD amount`);
  }

async function makeAPICall (exchangeTo, currencyAmount) {
  const response = await Exchange.getExchange(exchangeTo,currencyAmount);
  getElements(response);
}

$(document).ready(function() {
  $('#getExchange').click(function(event) {
    event.preventDefault();
    clearFields();
    let currencyAmount = $('#amount').val();
    let exchangeTo = $('#otherPlace').val();
    makeAPICall(exchangeTo,currencyAmount); 
  });
});